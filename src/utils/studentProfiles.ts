import { StudentProfile, YearLevel } from '../types';

export interface AvatarOption {
  id: string;
  name: string;
  icon: string;
  bgGradient: string;
  borderColor: string;
  textColor: string;
}

export const AVATAR_OPTIONS: AvatarOption[] = [
  {
    id: 'lion',
    name: 'Singa Berani',
    icon: 'Crown',
    bgGradient: 'from-amber-400 to-orange-500',
    borderColor: 'border-amber-400',
    textColor: 'text-amber-950',
  },
  {
    id: 'rocket',
    name: 'Roket Angkasa',
    icon: 'Rocket',
    bgGradient: 'from-blue-400 to-indigo-600',
    borderColor: 'border-blue-400',
    textColor: 'text-blue-950',
  },
  {
    id: 'robot',
    name: 'Robot Pintar',
    icon: 'Bot',
    bgGradient: 'from-emerald-400 to-teal-600',
    borderColor: 'border-emerald-400',
    textColor: 'text-emerald-950',
  },
  {
    id: 'star',
    name: 'Bintang Terang',
    icon: 'Star',
    bgGradient: 'from-yellow-300 to-amber-500',
    borderColor: 'border-yellow-400',
    textColor: 'text-yellow-950',
  },
  {
    id: 'cat',
    name: 'Kucing Cerdik',
    icon: 'Cat',
    bgGradient: 'from-pink-400 to-rose-500',
    borderColor: 'border-rose-400',
    textColor: 'text-rose-950',
  },
  {
    id: 'owl',
    name: 'Burung Hantu Bijak',
    icon: 'GraduationCap',
    bgGradient: 'from-purple-400 to-violet-600',
    borderColor: 'border-purple-400',
    textColor: 'text-purple-950',
  },
  {
    id: 'zap',
    name: 'Kilat Tangkas',
    icon: 'Zap',
    bgGradient: 'from-cyan-400 to-blue-500',
    borderColor: 'border-cyan-400',
    textColor: 'text-cyan-950',
  },
  {
    id: 'trophy',
    name: 'Juara Gemilang',
    icon: 'Trophy',
    bgGradient: 'from-amber-300 to-yellow-500',
    borderColor: 'border-amber-400',
    textColor: 'text-amber-950',
  },
];

const PROFILES_STORAGE_KEY = 'kssr_student_profiles_list_v1';
const ACTIVE_PROFILE_KEY = 'kssr_active_student_profile_id_v1';

export function getStoredProfiles(): StudentProfile[] {
  try {
    const raw = localStorage.getItem(PROFILES_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.warn('Failed to read profiles from localStorage', e);
    return [];
  }
}

export function saveProfiles(profiles: StudentProfile[]): void {
  try {
    localStorage.setItem(PROFILES_STORAGE_KEY, JSON.stringify(profiles));
  } catch (e) {
    console.warn('Failed to save profiles to localStorage', e);
  }
}

export function getActiveProfileId(): string | null {
  try {
    return localStorage.getItem(ACTIVE_PROFILE_KEY) || null;
  } catch {
    return null;
  }
}

export function setActiveProfileId(id: string): void {
  try {
    localStorage.setItem(ACTIVE_PROFILE_KEY, id);
  } catch (e) {
    console.warn('Failed to set active profile ID', e);
  }
}

export function getActiveProfile(): StudentProfile | null {
  const profiles = getStoredProfiles();
  if (profiles.length === 0) return null;
  const activeId = getActiveProfileId();
  if (activeId) {
    const found = profiles.find((p) => p.id === activeId);
    if (found) return found;
  }
  // Fallback to first profile
  return profiles[0];
}

export function registerNewStudent(params: {
  name: string;
  className: string;
  year: YearLevel;
  avatarId: string;
  schoolName?: string;
}): StudentProfile {
  const newProfile: StudentProfile = {
    id: 'student_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    name: params.name.trim(),
    className: params.className.trim(),
    year: params.year,
    avatarId: params.avatarId || 'lion',
    schoolName: params.schoolName?.trim() || undefined,
    createdAt: new Date().toISOString(),
  };

  const existing = getStoredProfiles();
  const updated = [newProfile, ...existing];
  saveProfiles(updated);
  setActiveProfileId(newProfile.id);

  return newProfile;
}

export function updateStudentProfile(
  id: string,
  updates: Partial<Omit<StudentProfile, 'id' | 'createdAt'>>
): StudentProfile | null {
  const existing = getStoredProfiles();
  const index = existing.findIndex((p) => p.id === id);
  if (index === -1) return null;

  const updatedProfile: StudentProfile = {
    ...existing[index],
    ...updates,
    name: updates.name ? updates.name.trim() : existing[index].name,
    className: updates.className ? updates.className.trim() : existing[index].className,
  };

  existing[index] = updatedProfile;
  saveProfiles(existing);

  return updatedProfile;
}

export function deleteStudentProfile(id: string): void {
  const existing = getStoredProfiles();
  const filtered = existing.filter((p) => p.id !== id);
  saveProfiles(filtered);

  const activeId = getActiveProfileId();
  if (activeId === id) {
    if (filtered.length > 0) {
      setActiveProfileId(filtered[0].id);
    } else {
      localStorage.removeItem(ACTIVE_PROFILE_KEY);
    }
  }
}

export function getAvatarOption(avatarId: string): AvatarOption {
  const found = AVATAR_OPTIONS.find((a) => a.id === avatarId);
  return found || AVATAR_OPTIONS[0];
}
