import React, { useState } from 'react';
import { X, UserPlus, Users, Check, Edit2, Trash2, GraduationCap, School, Sparkles, ChevronRight } from 'lucide-react';
import { StudentProfile, YearLevel } from '../types';
import {
  AVATAR_OPTIONS,
  registerNewStudent,
  updateStudentProfile,
  deleteStudentProfile,
  setActiveProfileId,
} from '../utils/studentProfiles';
import { StudentAvatarIcon } from './StudentAvatarIcon';

interface StudentProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profiles: StudentProfile[];
  activeProfile: StudentProfile | null;
  onProfileChange: (profile: StudentProfile | null) => void;
  initialMode?: 'list' | 'register' | 'edit';
}

const CLASS_SUGGESTIONS = ['Amanah', 'Bestari', 'Cemerlang', 'Dedikasi', 'Ihsan', 'Maju', 'Pintar', 'Tekun'];

export const StudentProfileModal: React.FC<StudentProfileModalProps> = ({
  isOpen,
  onClose,
  profiles,
  activeProfile,
  onProfileChange,
  initialMode = 'list',
}) => {
  const [viewMode, setViewMode] = useState<'list' | 'register' | 'edit'>(
    profiles.length === 0 ? 'register' : initialMode
  );

  // Form states
  const [name, setName] = useState('');
  const [classNameVal, setClassNameVal] = useState('');
  const [yearVal, setYearVal] = useState<YearLevel>(activeProfile?.year || 2);
  const [avatarVal, setAvatarVal] = useState('lion');
  const [schoolVal, setSchoolVal] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  if (!isOpen) return null;

  const startRegister = () => {
    setName('');
    setClassNameVal('');
    setYearVal(2);
    setAvatarVal('lion');
    setSchoolVal('');
    setEditingId(null);
    setFormError(null);
    setViewMode('register');
  };

  const startEdit = (profile: StudentProfile) => {
    setName(profile.name);
    setClassNameVal(profile.className);
    setYearVal(profile.year);
    setAvatarVal(profile.avatarId);
    setSchoolVal(profile.schoolName || '');
    setEditingId(profile.id);
    setFormError(null);
    setViewMode('edit');
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setFormError('Sila masukkan nama murid.');
      return;
    }
    if (!classNameVal.trim()) {
      setFormError('Sila masukkan nama kelas murid (contoh: 2 Amanah).');
      return;
    }

    if (viewMode === 'edit' && editingId) {
      const updated = updateStudentProfile(editingId, {
        name,
        className: classNameVal,
        year: yearVal,
        avatarId: avatarVal,
        schoolName: schoolVal,
      });
      if (updated && activeProfile?.id === editingId) {
        onProfileChange(updated);
      }
    } else {
      const created = registerNewStudent({
        name,
        className: classNameVal,
        year: yearVal,
        avatarId: avatarVal,
        schoolName: schoolVal,
      });
      onProfileChange(created);
    }

    setFormError(null);
    setViewMode('list');
  };

  const handleSelectProfile = (profile: StudentProfile) => {
    setActiveProfileId(profile.id);
    onProfileChange(profile);
    onClose();
  };

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Adakah anda pasti ingin memadam profil murid ini?')) {
      deleteStudentProfile(id);
      if (activeProfile?.id === id) {
        const remaining = profiles.filter((p) => p.id !== id);
        onProfileChange(remaining[0] || null);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shadow-sm">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">
                {viewMode === 'register'
                  ? 'Daftar Murid Baharu'
                  : viewMode === 'edit'
                  ? 'Kemaskini Profil Murid'
                  : 'Pengurusan Profil Murid'}
              </h3>
              <p className="text-xs text-slate-300">
                {viewMode === 'list'
                  ? 'Pilih atau urus profil murid untuk rekod keputusan & lencana'
                  : 'Isi maklumat murid untuk sijil dan slip keputusan rasmi'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Bar (if in list mode or returning) */}
        <div className="flex border-b border-slate-100 bg-slate-50/80 px-5 pt-3">
          <button
            onClick={() => setViewMode('list')}
            className={`flex items-center gap-1.5 pb-2.5 px-3 text-xs font-bold border-b-2 transition cursor-pointer ${
              viewMode === 'list'
                ? 'border-indigo-600 text-indigo-900'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Senarai Murid ({profiles.length})</span>
          </button>
          <button
            onClick={startRegister}
            className={`flex items-center gap-1.5 pb-2.5 px-3 text-xs font-bold border-b-2 transition cursor-pointer ${
              viewMode === 'register'
                ? 'border-indigo-600 text-indigo-900'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <UserPlus className="w-4 h-4" />
            <span>+ Tambah Murid</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {viewMode === 'list' ? (
            <div>
              {profiles.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-3">
                    <UserPlus className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">
                    Belum Ada Murid Didaftarkan
                  </h4>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto mb-5">
                    Daftarkan nama murid sekarang untuk memaparkan nama pada kad skor, lencana dan slip keputusan!
                  </p>
                  <button
                    onClick={startRegister}
                    className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition shadow-sm cursor-pointer inline-flex items-center gap-2"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Daftar Murid Sekarang</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-2.5">
                  <p className="text-xs text-slate-500 font-medium mb-3">
                    Klik pada mana-mana murid untuk mengaktifkan sesi kuiz:
                  </p>
                  {profiles.map((profile) => {
                    const isActive = activeProfile?.id === profile.id;
                    return (
                      <div
                        key={profile.id}
                        onClick={() => handleSelectProfile(profile)}
                        className={`p-3.5 rounded-2xl border-2 transition cursor-pointer flex items-center justify-between gap-3 ${
                          isActive
                            ? 'border-indigo-600 bg-indigo-50/70 shadow-xs'
                            : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <StudentAvatarIcon avatarId={profile.avatarId} size="md" />
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-slate-900 text-sm truncate">
                                {profile.name}
                              </h4>
                              {isActive && (
                                <span className="inline-flex items-center gap-0.5 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-indigo-600 text-white">
                                  <Check className="w-2.5 h-2.5" /> Aktif
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-600 flex items-center gap-1.5 truncate mt-0.5">
                              <span className="font-semibold text-indigo-700">
                                Tahun {profile.year}
                              </span>
                              <span>•</span>
                              <span>Kelas {profile.className}</span>
                              {profile.schoolName && (
                                <>
                                  <span>•</span>
                                  <span className="text-slate-500 truncate">
                                    {profile.schoolName}
                                  </span>
                                </>
                              )}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              startEdit(profile);
                            }}
                            className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-white transition cursor-pointer"
                            title="Edit Profil"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => handleDelete(profile.id, e)}
                            className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-white transition cursor-pointer"
                            title="Padam Profil"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            /* Register / Edit Form */
            <form onSubmit={handleSave} className="space-y-4">
              {formError && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium">
                  {formError}
                </div>
              )}

              {/* Avatar Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Pilih Watak Avatar Murid
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {AVATAR_OPTIONS.map((opt) => {
                    const isSelected = avatarVal === opt.id;
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setAvatarVal(opt.id)}
                        className={`p-1.5 rounded-2xl flex flex-col items-center justify-center transition cursor-pointer border-2 ${
                          isSelected
                            ? 'border-indigo-600 ring-2 ring-indigo-500/30 bg-indigo-50/50'
                            : 'border-transparent hover:bg-slate-100'
                        }`}
                        title={opt.name}
                      >
                        <StudentAvatarIcon avatarId={opt.id} size="md" />
                        <span className="text-[10px] font-semibold text-slate-700 truncate w-full text-center mt-1">
                          {opt.name.split(' ')[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Nama Murid <span className="text-rose-500">*</span>
                </label>
                <input
                  id="input-student-name"
                  type="text"
                  placeholder="Contoh: Ahmad Danish bin Kamal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              {/* Year & Class in 2-column grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Year */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Tahun Persekolahan <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setYearVal(1)}
                      className={`py-2 px-1.5 rounded-xl border text-xs font-bold transition cursor-pointer text-center ${
                        yearVal === 1
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-500/20'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      T1
                    </button>
                    <button
                      type="button"
                      onClick={() => setYearVal(2)}
                      className={`py-2 px-1.5 rounded-xl border text-xs font-bold transition cursor-pointer text-center ${
                        yearVal === 2
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-500/20'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      T2
                    </button>
                    <button
                      type="button"
                      onClick={() => setYearVal(3)}
                      className={`py-2 px-1.5 rounded-xl border text-xs font-bold transition cursor-pointer text-center ${
                        yearVal === 3
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-500/20'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      T3
                    </button>
                    <button
                      type="button"
                      onClick={() => setYearVal(4)}
                      className={`py-2 px-1.5 rounded-xl border text-xs font-bold transition cursor-pointer text-center ${
                        yearVal === 4
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-500/20'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      T4
                    </button>
                    <button
                      type="button"
                      onClick={() => setYearVal(5)}
                      className={`py-2 px-1.5 rounded-xl border text-xs font-bold transition cursor-pointer text-center ${
                        yearVal === 5
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-500/20'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      T5
                    </button>
                    <button
                      type="button"
                      onClick={() => setYearVal(6)}
                      className={`py-2 px-1.5 rounded-xl border text-xs font-bold transition cursor-pointer text-center ${
                        yearVal === 6
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-500/20'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      T6
                    </button>
                  </div>
                </div>

                {/* Class */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Nama Kelas <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="input-student-class"
                    type="text"
                    placeholder="Contoh: 2 Amanah"
                    value={classNameVal}
                    onChange={(e) => setClassNameVal(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                  {/* Quick suggestion pills */}
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {CLASS_SUGGESTIONS.slice(0, 4).map((sugg) => (
                      <button
                        type="button"
                        key={sugg}
                        onClick={() => setClassNameVal(`${yearVal} ${sugg}`)}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 hover:bg-indigo-100 hover:text-indigo-800 text-slate-600 transition cursor-pointer"
                      >
                        +{sugg}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* School (Optional) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center justify-between">
                  <span>Nama Sekolah (Pilihan)</span>
                  <span className="text-[11px] font-normal text-slate-400">Untuk slip keputusan</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <School className="w-4 h-4" />
                  </div>
                  <input
                    id="input-student-school"
                    type="text"
                    placeholder="Contoh: SK Cyberjaya / SK Taman Melati"
                    value={schoolVal}
                    onChange={(e) => setSchoolVal(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2.5">
                {profiles.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setViewMode('list')}
                    className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition cursor-pointer"
                  >
                    Batal
                  </button>
                )}
                <button
                  type="submit"
                  id="btn-submit-student-profile"
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition shadow-sm cursor-pointer flex items-center gap-1.5"
                >
                  <Check className="w-4 h-4" />
                  <span>{viewMode === 'edit' ? 'Simpan Perubahan' : 'Daftarkan Murid'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer info */}
        <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Profil murid disimpan secara automatik dalam peranti ini.</span>
        </div>
      </div>
    </div>
  );
};
