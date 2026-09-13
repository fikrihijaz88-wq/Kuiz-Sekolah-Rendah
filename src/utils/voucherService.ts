import { CashVoucherTier, StudentVoucherClaim } from '../types';

export const CASH_VOUCHER_TIERS: CashVoucherTier[] = [
  {
    id: 'tier-rm5',
    title: 'Baucar Tunai Koperasi RM5',
    amountRM: 5,
    targetPoints: 100,
    category: 'Alat Tulis & Snek Koperasi',
    description: 'Baucar tunai RM5 untuk pembelian pensel, pemadam, pembaris atau makanan berkhasiat di koperasi sekolah.',
    sponsor: 'PIBG & Koperasi Sekolah Rendah KSSR',
    validityDays: 60,
    colorScheme: 'emerald',
  },
  {
    id: 'tier-rm10',
    title: 'Baucar Tunai Buku & Alat Tulis RM10',
    amountRM: 10,
    targetPoints: 250,
    category: 'Buku Latihan & Kelengkapan',
    description: 'Baucar tunai RM10 bagi pembelian buku nota latihan KSSR, pensel warna, atau fail projek murid.',
    sponsor: 'Tabung Bantuan & Galakan Murid Cemerlang',
    validityDays: 60,
    colorScheme: 'blue',
  },
  {
    id: 'tier-rm20',
    title: 'Baucar Tunai Murid Gemilang RM20',
    amountRM: 20,
    targetPoints: 500,
    category: 'Buku Ilmiah & Kelengkapan Sekolah',
    description: 'Baucar ganjaran tunai RM20 sempena pencapaian tinggi kuiz & KBAT untuk buku ilmiah atau kasut/pakaian sekolah.',
    sponsor: 'Jawatankuasa Kurikulum & Akademik Sekolah',
    validityDays: 90,
    colorScheme: 'purple',
  },
  {
    id: 'tier-rm50',
    title: 'Baucar Tunai Anugerah Tokoh Cilik RM50',
    amountRM: 50,
    targetPoints: 1000,
    category: 'Hadiah Utama Tokoh Akademik KSSR',
    description: 'Ganjaran baucar tunai tertinggi RM50 anugerah murid cemerlang paling gigih dan berdisiplin tinggi.',
    sponsor: 'Dana Khas Tokoh Murid Cemerlang & PIBG',
    validityDays: 120,
    colorScheme: 'amber',
  },
];

const VOUCHER_STORAGE_KEY = 'kssr_student_cash_voucher_claims_v1';

export function getStoredVoucherClaims(): StudentVoucherClaim[] {
  try {
    const raw = localStorage.getItem(VOUCHER_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.warn('Failed to parse voucher claims from localStorage', e);
    return [];
  }
}

export function saveStoredVoucherClaims(claims: StudentVoucherClaim[]): void {
  try {
    localStorage.setItem(VOUCHER_STORAGE_KEY, JSON.stringify(claims));
  } catch (e) {
    console.warn('Failed to save voucher claims to localStorage', e);
  }
}

export function getStudentClaims(studentId: string): StudentVoucherClaim[] {
  const all = getStoredVoucherClaims();
  return all.filter((c) => c.studentId === studentId);
}

/**
 * Generate a unique verification code format: KSSR-[RM]-[4 random chars]-[4 random digits]
 * Example: KSSR-RM10-7B3K-8492
 */
export function generateVoucherCode(amountRM: number): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let randStr = '';
  for (let i = 0; i < 4; i++) {
    randStr += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  const randDigits = Math.floor(1000 + Math.random() * 9000);
  return `KSSR-RM${amountRM}-${randStr}-${randDigits}`;
}

/**
 * Claim a voucher for a student if their score qualifies
 */
export function claimStudentVoucher(
  studentId: string,
  studentName: string,
  className: string,
  schoolName: string | undefined,
  tierId: string,
  currentScore: number
): { success: boolean; claim?: StudentVoucherClaim; message: string } {
  const tier = CASH_VOUCHER_TIERS.find((t) => t.id === tierId);
  if (!tier) {
    return { success: false, message: 'Kategori baucar tidak ditemui.' };
  }

  if (currentScore < tier.targetPoints) {
    return {
      success: false,
      message: `Mata anda (${currentScore}) belum mencukupi sasaran ${tier.targetPoints} mata untuk baucar ini.`,
    };
  }

  const existingClaims = getStoredVoucherClaims();
  const alreadyClaimed = existingClaims.find(
    (c) => c.studentId === studentId && c.voucherTierId === tierId
  );

  if (alreadyClaimed) {
    return {
      success: true,
      claim: alreadyClaimed,
      message: 'Baucar ini sudah pernah ditebus sebelum ini.',
    };
  }

  const newClaim: StudentVoucherClaim = {
    id: `claim_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    voucherTierId: tier.id,
    studentId,
    studentName,
    className,
    schoolName,
    code: generateVoucherCode(tier.amountRM),
    amountRM: tier.amountRM,
    unlockedAt: new Date().toISOString(),
    claimedAt: new Date().toISOString(),
    isRedeemed: false,
  };

  existingClaims.unshift(newClaim);
  saveStoredVoucherClaims(existingClaims);

  return {
    success: true,
    claim: newClaim,
    message: `Tahniah! Baucar Tunai RM${tier.amountRM} berjaya diperoleh.`,
  };
}

/**
 * Toggle or mark a voucher as redeemed at school cooperative / teacher
 */
export function setVoucherRedemptionStatus(claimId: string, isRedeemed: boolean): void {
  const claims = getStoredVoucherClaims();
  const index = claims.findIndex((c) => c.id === claimId);
  if (index !== -1) {
    claims[index].isRedeemed = isRedeemed;
    claims[index].redeemedAt = isRedeemed ? new Date().toISOString() : undefined;
    saveStoredVoucherClaims(claims);
  }
}

/**
 * Check if the student has any voucher ready to be claimed that hasn't been claimed yet
 */
export function getClaimableVouchersCount(studentId: string, currentScore: number): number {
  const claims = getStudentClaims(studentId);
  const claimedTierIds = new Set(claims.map((c) => c.voucherTierId));

  let count = 0;
  for (const tier of CASH_VOUCHER_TIERS) {
    if (currentScore >= tier.targetPoints && !claimedTierIds.has(tier.id)) {
      count++;
    }
  }
  return count;
}

/**
 * Get next target voucher tier information
 */
export function getNextTargetVoucher(currentScore: number): {
  nextTier: CashVoucherTier | null;
  pointsNeeded: number;
  progressPercent: number;
} {
  const nextTier = CASH_VOUCHER_TIERS.find((t) => currentScore < t.targetPoints);
  if (!nextTier) {
    return {
      nextTier: null,
      pointsNeeded: 0,
      progressPercent: 100,
    };
  }

  const prevTierPoints = CASH_VOUCHER_TIERS[CASH_VOUCHER_TIERS.indexOf(nextTier) - 1]?.targetPoints || 0;
  const range = nextTier.targetPoints - prevTierPoints;
  const currentInRange = Math.max(0, currentScore - prevTierPoints);
  const progressPercent = Math.min(100, Math.round((currentInRange / range) * 100));

  return {
    nextTier,
    pointsNeeded: nextTier.targetPoints - currentScore,
    progressPercent,
  };
}
