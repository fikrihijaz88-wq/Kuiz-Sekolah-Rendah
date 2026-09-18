import React, { useState, useEffect } from 'react';
import {
  X,
  Gift,
  CheckCircle2,
  Lock,
  Sparkles,
  Printer,
  Copy,
  Check,
  Building2,
  Calendar,
  AlertCircle,
  ExternalLink,
  Award,
  ChevronRight,
  ShoppingBag,
} from 'lucide-react';
import { CashVoucherTier, StudentVoucherClaim, StudentProfile } from '../types';
import {
  CASH_VOUCHER_TIERS,
  getStudentClaims,
  claimStudentVoucher,
  setVoucherRedemptionStatus,
  getNextTargetVoucher,
} from '../utils/voucherService';
import { speakText } from '../utils/speech';
import { playCelebrationSfx } from '../utils/soundEffects';

interface CashVoucherModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeProfile: StudentProfile | null;
  currentScore: number;
  soundEnabled?: boolean;
  onGoToQuiz?: () => void;
}

export const CashVoucherModal: React.FC<CashVoucherModalProps> = ({
  isOpen,
  onClose,
  activeProfile,
  currentScore,
  soundEnabled = false,
  onGoToQuiz,
}) => {
  const [claims, setClaims] = useState<StudentVoucherClaim[]>([]);
  const [selectedClaimToView, setSelectedClaimToView] = useState<StudentVoucherClaim | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'tiers' | 'claimed'>('tiers');

  const studentId = activeProfile?.id || 'active_guest_student';
  const studentName = activeProfile?.name || 'Murid Pintar KSSR';
  const className = activeProfile?.className || 'Kelas Gemilang';
  const schoolName = activeProfile?.schoolName || 'Sekolah Rendah KSSR Semakan';

  // Load claims on open or profile change
  const reloadClaims = () => {
    const studentClaims = getStudentClaims(studentId);
    setClaims(studentClaims);
  };

  useEffect(() => {
    if (isOpen) {
      reloadClaims();
      setSelectedClaimToView(null);
    }
  }, [isOpen, studentId]);

  if (!isOpen) return null;

  const handleClaim = (tierId: string) => {
    const result = claimStudentVoucher(
      studentId,
      studentName,
      className,
      schoolName,
      tierId,
      currentScore
    );

    if (result.success && result.claim) {
      reloadClaims();
      setSelectedClaimToView(result.claim);
      if (soundEnabled) {
        playCelebrationSfx();
        speakText(
          `Tahniah ${studentName}! Anda berjaya memperoleh baucar tunai bernilai RM${result.claim.amountRM}.`,
          'ms'
        );
      }
    }
  };

  const handleToggleRedeemed = (claimId: string, currentStatus: boolean) => {
    setVoucherRedemptionStatus(claimId, !currentStatus);
    reloadClaims();
    if (selectedClaimToView && selectedClaimToView.id === claimId) {
      setSelectedClaimToView((prev) => (prev ? { ...prev, isRedeemed: !currentStatus } : null));
    }
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const handlePrintVoucher = () => {
    window.print();
  };

  const { nextTier, pointsNeeded, progressPercent } = getNextTargetVoucher(currentScore);

  return (
    <div
      id="cash-voucher-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white p-5 sm:p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-2xl shadow-md shrink-0">
              🎟️
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-xs font-bold mb-1">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>Ganjaran Murid KSSR Semakan</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                Penebusan Baucar Tunai Murid
              </h3>
              <p className="text-emerald-100 text-xs sm:text-sm">
                Tebus baucar tunai sebenar dari RM5 hingga RM50 apabila mencapai sasaran mata kuiz!
              </p>
            </div>
          </div>

          {/* Student current score banner */}
          <div className="mt-4 bg-black/20 rounded-2xl p-3 sm:p-4 border border-white/15 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="text-left">
                <div className="text-[11px] text-emerald-200 font-semibold">Profil Murid:</div>
                <div className="font-extrabold text-sm text-white">
                  {studentName} ({className})
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/10 px-4 py-1.5 rounded-xl">
              <div>
                <span className="text-[10px] text-emerald-200 block uppercase font-bold">Mata Anda</span>
                <span className="text-lg sm:text-xl font-black text-amber-300">{currentScore} pts</span>
              </div>
              <div className="h-6 w-px bg-white/20" />
              <div>
                <span className="text-[10px] text-emerald-200 block uppercase font-bold">Baucar Diperoleh</span>
                <span className="text-lg sm:text-xl font-black text-white">{claims.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-5 shrink-0">
          <button
            onClick={() => {
              setActiveTab('tiers');
              setSelectedClaimToView(null);
            }}
            className={`py-3 px-4 font-bold text-xs sm:text-sm border-b-2 transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'tiers' && !selectedClaimToView
                ? 'border-emerald-600 text-emerald-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Gift className="w-4 h-4" />
            <span>Sasaran & Peringkat Baucar</span>
          </button>
          <button
            onClick={() => setActiveTab('claimed')}
            className={`py-3 px-4 font-bold text-xs sm:text-sm border-b-2 transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'claimed' || selectedClaimToView
                ? 'border-emerald-600 text-emerald-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Baucar Saya ({claims.length})</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {/* VIEW: SLIP BAUCAR DETAIL IF SELECTED */}
          {selectedClaimToView ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setSelectedClaimToView(null)}
                  className="text-xs text-slate-600 hover:text-slate-900 font-bold flex items-center gap-1 cursor-pointer"
                >
                  ← Kembali ke Senarai Baucar
                </button>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrintVoucher}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition shadow-xs cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Cetak Baucar</span>
                  </button>
                </div>
              </div>

              {/* Printable Cash Voucher Slip */}
              <div
                id="printable-cash-voucher"
                className="relative bg-gradient-to-r from-amber-50 via-white to-amber-50 border-2 border-dashed border-amber-400 rounded-3xl p-6 sm:p-8 shadow-md overflow-hidden"
              >
                {/* Decorative cut marks */}
                <div className="absolute top-2 left-2 text-[10px] text-amber-700 font-mono">✂ POTONG DI SINI</div>
                <div className="absolute top-2 right-2 text-[10px] text-amber-700 font-mono">NO: {selectedClaimToView.code}</div>

                <div className="text-center pb-4 border-b-2 border-slate-200">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black uppercase tracking-wider mb-2">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>BAUCAR GANJARAN RASMI KSSR</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    BAUCAR TUNAI RM{selectedClaimToView.amountRM}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">
                    Program Galakan & Kecemerlangan Kuiz KSSR Semakan
                  </p>
                </div>

                <div className="py-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Penerima Baucar</span>
                    <span className="text-base font-black text-slate-900 block">{selectedClaimToView.studentName}</span>
                    <span className="text-slate-600 font-medium">
                      Kelas: {selectedClaimToView.className} • {selectedClaimToView.schoolName}
                    </span>
                  </div>

                  <div className="sm:text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Nilai Baucar</span>
                    <span className="text-2xl font-black text-emerald-600 block">
                      RM {selectedClaimToView.amountRM}.00
                    </span>
                    <span className="text-slate-500 text-[11px]">
                      Ditebus pada:{' '}
                      {new Date(selectedClaimToView.claimedAt || selectedClaimToView.unlockedAt).toLocaleDateString('ms-MY', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>

                {/* Voucher Code & Barcode display */}
                <div className="bg-slate-900 text-white rounded-2xl p-4 my-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Kod Pengesahan Unik</div>
                    <div className="font-mono text-lg sm:text-xl font-black tracking-widest text-amber-300">
                      {selectedClaimToView.code}
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopyCode(selectedClaimToView.code)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition cursor-pointer"
                  >
                    {copiedCode === selectedClaimToView.code ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-300">Disalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin Kod</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Redemption validation box & signature stamp */}
                <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
                  <div>
                    <div className="font-bold text-slate-700">Syarat Penebusan:</div>
                    <p className="text-[11px] leading-relaxed max-w-sm">
                      Serahkan cetakan atau tunjukkan kod baucar ini kepada Guru Penyelaras atau pihak Koperasi Sekolah untuk menerima barangan atau nilai tunai yang dinyatakan.
                    </p>
                  </div>

                  <div className="flex flex-col items-center sm:items-end w-full sm:w-auto">
                    <button
                      onClick={() => handleToggleRedeemed(selectedClaimToView.id, selectedClaimToView.isRedeemed)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                        selectedClaimToView.isRedeemed
                          ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                          : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>
                        {selectedClaimToView.isRedeemed ? 'Telah Ditebus di Koperasi' : 'Tanda Sudah Digunakan'}
                      </span>
                    </button>
                    {selectedClaimToView.isRedeemed && (
                      <span className="text-[10px] text-emerald-600 font-bold mt-1">
                        Selesai digunakan
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab === 'claimed' ? (
            /* VIEW: LIST OF CLAIMED VOUCHERS */
            <div className="space-y-4">
              {claims.length === 0 ? (
                <div className="text-center py-12 px-4 bg-slate-50 rounded-3xl border border-slate-200">
                  <div className="w-14 h-14 mx-auto rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-2xl mb-3">
                    🎟️
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base">Belum Ada Baucar Ditebus</h4>
                  <p className="text-xs text-slate-500 max-w-md mx-auto mt-1 mb-4">
                    Kumpulkan sekurang-kurangnya 100 mata daripada kuiz untuk memperoleh Baucar Tunai Koperasi RM5 yang pertama anda!
                  </p>
                  <button
                    onClick={() => setActiveTab('tiers')}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition cursor-pointer"
                  >
                    Semak Sasaran Peringkat Baucar
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {claims.map((claim) => (
                    <div
                      key={claim.id}
                      className={`p-4 rounded-3xl border-2 transition relative flex flex-col justify-between ${
                        claim.isRedeemed
                          ? 'bg-slate-50 border-slate-200 opacity-80'
                          : 'bg-gradient-to-br from-white to-emerald-50/50 border-emerald-300 shadow-xs hover:shadow-md'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider">
                            RM{claim.amountRM} TUNAI
                          </span>
                          <span
                            className={`text-[11px] font-bold ${
                              claim.isRedeemed ? 'text-slate-500' : 'text-emerald-700 font-extrabold'
                            }`}
                          >
                            {claim.isRedeemed ? '✅ Telah Digunakan' : '✨ Sah Digunakan'}
                          </span>
                        </div>

                        <h4 className="font-extrabold text-slate-900 text-base">
                          Baucar Tunai RM{claim.amountRM}
                        </h4>
                        <div className="font-mono text-xs text-slate-600 font-bold bg-white/90 px-2 py-1 rounded-lg border border-slate-200 mt-2 inline-block">
                          {claim.code}
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                        <button
                          onClick={() => setSelectedClaimToView(claim)}
                          className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 cursor-pointer"
                        >
                          <span>Buka Slip & Cetak</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleCopyCode(claim.code)}
                          className="text-[11px] text-slate-600 hover:text-slate-900 font-medium cursor-pointer"
                        >
                          {copiedCode === claim.code ? 'Disalin!' : 'Salin'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* VIEW: ALL VOUCHER TIERS WITH PROGRESS & CLAIM BUTTONS */
            <div className="space-y-4">
              {/* Next target banner */}
              {nextTier ? (
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] uppercase font-black text-amber-800 tracking-wider">
                      Sasaran Baucar Seterusnya
                    </div>
                    <div className="font-black text-slate-900 text-sm sm:text-base mt-0.5">
                      {nextTier.title} (RM{nextTier.amountRM})
                    </div>
                    <div className="text-xs text-slate-600 mt-0.5">
                      Perlukan lagi <span className="font-extrabold text-amber-700">+{pointsNeeded} mata</span> untuk membuka baucar ini.
                    </div>
                  </div>

                  <div className="w-full sm:w-48">
                    <div className="flex justify-between text-[11px] font-bold text-slate-600 mb-1">
                      <span>{currentScore} pts</span>
                      <span>{nextTier.targetPoints} pts</span>
                    </div>
                    <div className="w-full bg-amber-200/70 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-amber-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div className="text-xs text-emerald-900">
                    <span className="font-extrabold">Luar Biasa!</span> Anda telah melepasi semua sasaran mata tertinggi (1,000 mata) dan layak memperoleh kesemua baucar tunai!
                  </div>
                </div>
              )}

              {/* Tiers List */}
              <div className="space-y-3.5">
                {CASH_VOUCHER_TIERS.map((tier) => {
                  const isUnlocked = currentScore >= tier.targetPoints;
                  const existingClaim = claims.find((c) => c.voucherTierId === tier.id);
                  const isClaimed = !!existingClaim;
                  const pointsDiff = tier.targetPoints - currentScore;

                  return (
                    <div
                      key={tier.id}
                      className={`p-4 sm:p-5 rounded-3xl border-2 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                        isClaimed
                          ? 'bg-emerald-50/40 border-emerald-300'
                          : isUnlocked
                          ? 'bg-gradient-to-r from-amber-50 via-white to-emerald-50 border-amber-400 shadow-xs ring-2 ring-amber-400/20'
                          : 'bg-white border-slate-200 opacity-90'
                      }`}
                    >
                      {/* Left: Amount & Info */}
                      <div className="flex items-start sm:items-center gap-3.5">
                        <div
                          className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center font-black shrink-0 shadow-xs border ${
                            isUnlocked
                              ? 'bg-amber-400 text-slate-950 border-amber-300'
                              : 'bg-slate-100 text-slate-400 border-slate-200'
                          }`}
                        >
                          <span className="text-[10px] uppercase font-bold -mb-1">RM</span>
                          <span className="text-2xl">{tier.amountRM}</span>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-black text-slate-900 text-base">
                              {tier.title}
                            </h4>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                              Sasaran: {tier.targetPoints} Mata
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1 max-w-lg leading-relaxed">
                            {tier.description}
                          </p>
                          <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                            <Building2 className="w-3 h-3 text-slate-400" />
                            <span>Tajaan: {tier.sponsor}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Claim / Status button */}
                      <div className="w-full md:w-auto flex md:flex-col items-center md:items-end justify-between gap-2 shrink-0">
                        {isClaimed ? (
                          <div className="flex flex-col items-start md:items-end">
                            <button
                              onClick={() => setSelectedClaimToView(existingClaim)}
                              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-xs cursor-pointer flex items-center gap-1.5"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Lihat Slip Baucar</span>
                            </button>
                            <span className="text-[10px] text-emerald-700 font-bold mt-1">
                              Kod: {existingClaim.code}
                            </span>
                          </div>
                        ) : isUnlocked ? (
                          <div className="flex flex-col items-start md:items-end">
                            <button
                              onClick={() => handleClaim(tier.id)}
                              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm transition shadow-md cursor-pointer animate-pulse hover:scale-105 active:scale-95 flex items-center gap-1.5"
                            >
                              <Sparkles className="w-4 h-4" />
                              <span>Tebus Baucar RM{tier.amountRM}</span>
                            </button>
                            <span className="text-[10px] text-amber-700 font-extrabold mt-1">
                              ✨ Layak Ditebus Sekarang!
                            </span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-start md:items-end">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-500 text-xs font-bold">
                              <Lock className="w-3.5 h-3.5" />
                              <span>Kunci ({pointsDiff} mata lagi)</span>
                            </div>
                            <span className="text-[10px] text-slate-400 mt-1">
                              Mata Semasa: {currentScore} / {tier.targetPoints}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
          <div className="text-slate-500 flex items-center gap-1.5">
            <ShoppingBag className="w-4 h-4 text-emerald-600" />
            <span>Baucar sah untuk kegunaan barangan koperasi sekolah & galakan akademik.</span>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            {onGoToQuiz && (
              <button
                onClick={() => {
                  onClose();
                  onGoToQuiz();
                }}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold transition cursor-pointer"
              >
                Jawab Kuiz Untuk Tambah Mata
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold transition cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
