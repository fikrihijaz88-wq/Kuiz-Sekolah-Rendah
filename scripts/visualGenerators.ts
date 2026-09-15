import * as fs from 'fs';
import * as path from 'path';

// --------------------------------------------------------------------------
// ADVANCED CHILD-FRIENDLY SVG GRAPHICS GENERATORS
// --------------------------------------------------------------------------

// 1. Colorful Pictograph (Piktograf)
export function createPictographSvg(
  title: string,
  categories: Array<{ name: string; icon: string; count: number }>,
  keyText: string
): string {
  const rowH = 34;
  const startY = 35;
  const startX = 90;
  const totalH = startY + categories.length * rowH + 30;

  let rowsSvg = '';
  categories.forEach((cat, idx) => {
    const y = startY + idx * rowH;
    rowsSvg += `
      <!-- Category Row -->
      <rect x="10" y="${y}" width="280" height="${rowH - 4}" rx="6" fill="${idx % 2 === 0 ? '#F8FAFC' : '#F1F5F9'}" stroke="#E2E8F0"/>
      <text x="20" y="${y + 20}" font-size="11" font-weight="bold" fill="#334155">${cat.name}</text>
      <line x1="${startX}" y1="${y}" x2="${startX}" y2="${y + rowH - 4}" stroke="#CBD5E1" stroke-width="1.5"/>
    `;
    // Render Icons
    for (let i = 0; i < cat.count; i++) {
      const ix = startX + 15 + i * 28;
      rowsSvg += `<text x="${ix}" y="${y + 21}" font-size="16" text-anchor="middle">${cat.icon}</text>`;
    }
  });

  return `<svg viewBox="0 0 300 ${totalH}" width="290" height="${totalH}" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="292" height="${totalH - 8}" rx="10" fill="#FFFFFF" stroke="#6366F1" stroke-width="2"/>
    <rect x="4" y="4" width="292" height="26" rx="8" fill="#EEF2FF"/>
    <text x="150" y="20" font-size="12" font-weight="bold" fill="#4338CA" text-anchor="middle">${title}</text>
    ${rowsSvg}
    <!-- Key / Petunjuk -->
    <rect x="10" y="${totalH - 24}" width="280" height="18" rx="4" fill="#FEF3C7" stroke="#FDE68A"/>
    <text x="150" y="${totalH - 11}" font-size="10" font-weight="bold" fill="#92400E" text-anchor="middle">🔑 Petunjuk: ${keyText}</text>
  </svg>`;
}

// 2. Base-10 Blocks / Dienes Blocks (Blok Asas 10)
export function createBase10BlocksSvg(hundreds: number, tens: number, ones: number, label?: string): string {
  let blocks = '';
  let curX = 15;

  // Hundreds (10x10 squares)
  for (let h = 0; h < hundreds; h++) {
    blocks += `
      <g transform="translate(${curX}, 20)">
        <rect x="0" y="0" width="55" height="55" rx="3" fill="#93C5FD" stroke="#1D4ED8" stroke-width="1.5"/>
        <line x1="18" y1="0" x2="18" y2="55" stroke="#1D4ED8" stroke-dasharray="2,2"/>
        <line x1="36" y1="0" x2="36" y2="55" stroke="#1D4ED8" stroke-dasharray="2,2"/>
        <line x1="0" y1="18" x2="55" y2="18" stroke="#1D4ED8" stroke-dasharray="2,2"/>
        <line x1="0" y1="36" x2="55" y2="36" stroke="#1D4ED8" stroke-dasharray="2,2"/>
        <text x="27" y="32" font-size="11" font-weight="bold" fill="#1E3A8A" text-anchor="middle">100</text>
      </g>
    `;
    curX += 62;
  }

  // Tens (rods)
  for (let t = 0; t < tens; t++) {
    blocks += `
      <g transform="translate(${curX}, 20)">
        <rect x="0" y="0" width="12" height="55" rx="2" fill="#86EFAC" stroke="#15803D" stroke-width="1.5"/>
        <line x1="0" y1="14" x2="12" y2="14" stroke="#15803D"/>
        <line x1="0" y1="28" x2="12" y2="28" stroke="#15803D"/>
        <line x1="0" y1="42" x2="12" y2="42" stroke="#15803D"/>
      </g>
    `;
    curX += 17;
  }
  curX += 8;

  // Ones (small cubes)
  for (let o = 0; o < ones; o++) {
    const ox = curX + (o % 3) * 14;
    const oy = 20 + Math.floor(o / 3) * 16;
    blocks += `
      <rect x="${ox}" y="${oy}" width="10" height="10" rx="2" fill="#FCA5A5" stroke="#B91C1C" stroke-width="1.5"/>
    `;
  }

  return `<svg viewBox="0 0 290 100" width="280" height="95" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="280" height="90" rx="8" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
    ${blocks}
    <text x="145" y="90" font-size="11" font-weight="bold" fill="#0F172A" text-anchor="middle">${label || 'Perwakilan Blok Asas 10'}</text>
  </svg>`;
}

// 3. Bright Clock
export function createClockSvg(hour: number, minute: number, label?: string): string {
  const minuteAngle = minute * 6;
  const hourAngle = (hour % 12) * 30 + minute * 0.5;
  const radH = ((hourAngle - 90) * Math.PI) / 180;
  const radM = ((minuteAngle - 90) * Math.PI) / 180;
  const hx = 100 + 40 * Math.cos(radH);
  const hy = 100 + 40 * Math.sin(radH);
  const mx = 100 + 60 * Math.cos(radM);
  const my = 100 + 60 * Math.sin(radM);

  let numbersSvg = '';
  for (let n = 1; n <= 12; n++) {
    const angle = ((n * 30 - 90) * Math.PI) / 180;
    const nx = 100 + 70 * Math.cos(angle);
    const ny = 100 + 70 * Math.sin(angle) + 4;
    numbersSvg += `<text x="${nx.toFixed(1)}" y="${ny.toFixed(1)}" font-size="12" font-family="sans-serif" font-weight="bold" fill="#1E293B" text-anchor="middle">${n}</text>`;
  }

  return `<svg viewBox="0 0 200 200" width="180" height="180" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="92" fill="#FEF3C7" stroke="#F59E0B" stroke-width="5"/>
    <circle cx="100" cy="100" r="82" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
    ${numbersSvg}
    <!-- Hour Hand (Blue) -->
    <line x1="100" y1="100" x2="${hx.toFixed(1)}" y2="${hy.toFixed(1)}" stroke="#2563EB" stroke-width="6" stroke-linecap="round"/>
    <!-- Minute Hand (Red) -->
    <line x1="100" y1="100" x2="${mx.toFixed(1)}" y2="${my.toFixed(1)}" stroke="#EF4444" stroke-width="4" stroke-linecap="round"/>
    <!-- Center Pin -->
    <circle cx="100" cy="100" r="6" fill="#1E293B"/>
    <circle cx="100" cy="100" r="3" fill="#FACC15"/>
    ${label ? `<text x="100" y="145" font-size="11" font-weight="bold" fill="#64748B" text-anchor="middle">${label}</text>` : ''}
  </svg>`;
}

// 4. Fraction Pizza / Circle Slices
export function createFractionCircleSvg(numerator: number, denominator: number, color = '#3B82F6', label?: string): string {
  const cx = 100;
  const cy = 90;
  const r = 70;
  let paths = '';

  for (let i = 0; i < denominator; i++) {
    const startAngle = (i * 360) / denominator - 90;
    const endAngle = ((i + 1) * 360) / denominator - 90;
    const radS = (startAngle * Math.PI) / 180;
    const radE = (endAngle * Math.PI) / 180;
    const x1 = cx + r * Math.cos(radS);
    const y1 = cy + r * Math.sin(radS);
    const x2 = cx + r * Math.cos(radE);
    const y2 = cy + r * Math.sin(radE);
    const isShaded = i < numerator;
    const fill = isShaded ? color : '#FFFFFF';
    const stroke = '#1E293B';

    if (denominator === 1) {
      paths += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="3"/>`;
    } else {
      const largeArc = endAngle - startAngle > 180 ? 1 : 0;
      const d = `M ${cx} ${cy} L ${x1.toFixed(1)} ${y1.toFixed(1)} A ${r} ${r} 0 ${largeArc} 1 ${x2.toFixed(1)} ${y2.toFixed(1)} Z`;
      paths += `<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="2.5"/>`;
    }
  }

  return `<svg viewBox="0 0 200 190" width="180" height="170" xmlns="http://www.w3.org/2000/svg">
    <circle cx="${cx}" cy="${cy}" r="${r + 4}" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1"/>
    ${paths}
    <text x="100" y="180" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">${label || `${numerator}/${denominator} bahagian berwarna`}</text>
  </svg>`;
}

// 5. Fraction Strip / Bar
export function createFractionBarSvg(numerator: number, denominator: number, color = '#10B981', label?: string): string {
  const width = 240;
  const height = 40;
  const partW = width / denominator;
  let parts = '';

  for (let i = 0; i < denominator; i++) {
    const x = 10 + i * partW;
    const isShaded = i < numerator;
    const fill = isShaded ? color : '#FFFFFF';
    parts += `<rect x="${x}" y="15" width="${partW}" height="${height}" fill="${fill}" stroke="#1E293B" stroke-width="2"/>`;
  }

  return `<svg viewBox="0 0 260 85" width="250" height="80" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="13" width="${width + 4}" height="${height + 4}" rx="4" fill="#E2E8F0"/>
    ${parts}
    <text x="130" y="76" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">${label || `Jalur Pecahan: ${numerator}/${denominator}`}</text>
  </svg>`;
}

// 6. Number Line with Frog / Pattern Jumps
export function createNumberLineSvg(start: number, step: number, count: number, missingIndex?: number, missingLabel = '?'): string {
  const totalW = 320;
  const leftX = 30;
  const rightX = 290;
  const y = 45;
  const stepDist = (rightX - leftX) / (count - 1);
  let ticks = '';

  for (let i = 0; i < count; i++) {
    const tx = leftX + i * stepDist;
    const val = start + i * step;
    const isMissing = i === missingIndex;
    ticks += `<line x1="${tx}" y1="${y - 8}" x2="${tx}" y2="${y + 8}" stroke="#1E293B" stroke-width="2.5"/>`;
    if (isMissing) {
      ticks += `<rect x="${tx - 16}" y="${y + 12}" width="32" height="24" rx="5" fill="#FEF08A" stroke="#EAB308" stroke-width="2"/>`;
      ticks += `<text x="${tx}" y="${y + 28}" font-size="13" font-weight="bold" fill="#854D0E" text-anchor="middle">${missingLabel}</text>`;
    } else {
      ticks += `<text x="${tx}" y="${y + 26}" font-size="12" font-weight="bold" fill="#1E293B" text-anchor="middle">${val}</text>`;
    }

    if (i < count - 1) {
      const nxtX = leftX + (i + 1) * stepDist;
      const midX = (tx + nxtX) / 2;
      ticks += `<path d="M ${tx} ${y - 8} Q ${midX} ${y - 28} ${nxtX} ${y - 8}" fill="none" stroke="#2563EB" stroke-width="2" stroke-dasharray="4,2"/>`;
      ticks += `<polygon points="${nxtX},${y - 8} ${nxtX - 5},${y - 14} ${nxtX - 1},${y - 15}" fill="#2563EB"/>`;
      ticks += `<text x="${midX}" y="${y - 24}" font-size="10" font-weight="bold" fill="#2563EB" text-anchor="middle">+${step}</text>`;
    }
  }

  return `<svg viewBox="0 0 320 85" width="290" height="80" xmlns="http://www.w3.org/2000/svg">
    <line x1="${leftX - 12}" y1="${y}" x2="${rightX + 12}" y2="${y}" stroke="#1E293B" stroke-width="3"/>
    <polygon points="${leftX - 16},${y} ${leftX - 8},${y - 5} ${leftX - 8},${y + 5}" fill="#1E293B"/>
    <polygon points="${rightX + 16},${y} ${rightX + 8},${y - 5} ${rightX + 8},${y + 5}" fill="#1E293B"/>
    ${ticks}
  </svg>`;
}

// 7. Coordinate Grid with Landmarks
export function createCoordinateGridSvg(points: Array<{ label: string; x: number; y: number; icon?: string; color?: string }>): string {
  const ox = 40;
  const oy = 160;
  const step = 24;
  let grid = '';

  for (let i = 0; i <= 6; i++) {
    const gx = ox + i * step;
    const gy = oy - i * step;
    grid += `<line x1="${gx}" y1="${oy}" x2="${gx}" y2="${oy - 6 * step}" stroke="#E2E8F0" stroke-width="1.5"/>`;
    grid += `<line x1="${ox}" y1="${gy}" x2="${ox + 6 * step}" y2="${gy}" stroke="#E2E8F0" stroke-width="1.5"/>`;
    grid += `<text x="${gx}" y="${oy + 14}" font-size="10" font-weight="bold" fill="#64748B" text-anchor="middle">${i}</text>`;
    if (i > 0) {
      grid += `<text x="${ox - 10}" y="${gy + 4}" font-size="10" font-weight="bold" fill="#64748B" text-anchor="end">${i}</text>`;
    }
  }

  points.forEach((p) => {
    const px = ox + p.x * step;
    const py = oy - p.y * step;
    const col = p.color || '#EF4444';
    grid += `
      <circle cx="${px}" cy="${py}" r="6" fill="${col}" stroke="#FFFFFF" stroke-width="2"/>
      <rect x="${px + 6}" y="${py - 18}" width="48" height="18" rx="4" fill="#0F172A" opacity="0.88"/>
      <text x="${px + 30}" y="${py - 6}" font-size="10" font-weight="bold" fill="#FFFFFF" text-anchor="middle">${p.label}(${p.x},${p.y})</text>
    `;
  });

  return `<svg viewBox="0 0 240 195" width="220" height="180" xmlns="http://www.w3.org/2000/svg">
    <text x="120" y="14" font-size="11" font-weight="bold" fill="#1E293B" text-anchor="middle">Satah Cartes (Paksi Mengufuk & Mencancang)</text>
    <line x1="${ox}" y1="${oy}" x2="${ox + 6 * step + 15}" y2="${oy}" stroke="#334155" stroke-width="2.5"/>
    <line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - 6 * step - 15}" stroke="#334155" stroke-width="2.5"/>
    <polygon points="${ox + 6 * step + 18},${oy} ${ox + 6 * step + 10},${oy - 4} ${ox + 6 * step + 10},${oy + 4}" fill="#334155"/>
    <polygon points="${ox},${oy - 6 * step - 18} ${ox - 4},${oy - 6 * step - 10} ${ox + 4},${oy - 6 * step - 10}" fill="#334155"/>
    <text x="${ox + 6 * step + 12}" y="${oy + 14}" font-size="11" font-weight="bold" fill="#0F172A">x</text>
    <text x="${ox - 14}" y="${oy - 6 * step - 8}" font-size="11" font-weight="bold" fill="#0F172A">y</text>
    ${grid}
  </svg>`;
}

// 8. Malaysian Ringgit Cash & Coins Graphic
export function createMoneyVisualSvg(notes: Array<{ value: number; count: number }>, totalLabel?: string): string {
  let notesSvg = '';
  let curX = 15;
  const noteColors: Record<number, { bg: string; text: string; stroke: string }> = {
    1: { bg: '#93C5FD', text: '#1E3A8A', stroke: '#2563EB' },
    5: { bg: '#86EFAC', text: '#14532D', stroke: '#16A34A' },
    10: { bg: '#FCA5A5', text: '#7F1D1D', stroke: '#DC2626' },
    20: { bg: '#FDE047', text: '#713F12', stroke: '#CA8A04' },
    50: { bg: '#6EE7B7', text: '#064E3B', stroke: '#059669' },
    100: { bg: '#DDD6FE', text: '#4C1D95', stroke: '#7C3AED' }
  };

  notes.forEach((n) => {
    const col = noteColors[n.value] || { bg: '#E2E8F0', text: '#1E293B', stroke: '#64748B' };
    for (let c = 0; c < n.count; c++) {
      notesSvg += `
        <g transform="translate(${curX}, 20)">
          <rect x="0" y="0" width="56" height="34" rx="4" fill="${col.bg}" stroke="${col.stroke}" stroke-width="2"/>
          <circle cx="28" cy="17" r="9" fill="#FFFFFF" opacity="0.8"/>
          <text x="28" y="21" font-size="10" font-weight="bold" fill="${col.text}" text-anchor="middle">RM${n.value}</text>
        </g>
      `;
      curX += 60;
    }
  });

  return `<svg viewBox="0 0 ${Math.max(curX + 15, 260)} 85" width="260" height="85" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="${Math.max(curX + 5, 250)}" height="75" rx="8" fill="#F8FAFC" stroke="#CBD5E1"/>
    ${notesSvg}
    <text x="${Math.max((curX + 5) / 2, 130)}" y="72" font-size="11" font-weight="bold" fill="#0F172A" text-anchor="middle">${totalLabel || 'Wang Kertas Malaysia'}</text>
  </svg>`;
}

// 9. Science: Photosynthesis & Plant Parts Diagram
export function createPlantDiagramSvg(label?: string): string {
  return `<svg viewBox="0 0 240 200" width="220" height="190" xmlns="http://www.w3.org/2000/svg">
    <!-- Background / Soil -->
    <rect x="10" y="150" width="220" height="40" fill="#78350F" rx="4"/>
    <text x="120" y="175" font-size="10" font-weight="bold" fill="#FEF3C7" text-anchor="middle">Tanah & Akar (Menyerap Air)</text>
    <!-- Sun -->
    <circle cx="35" cy="35" r="16" fill="#FBBF24" stroke="#D97706" stroke-width="2"/>
    <line x1="35" y1="12" x2="35" y2="5" stroke="#F59E0B" stroke-width="2"/>
    <line x1="12" y1="35" x2="5" y2="35" stroke="#F59E0B" stroke-width="2"/>
    <line x1="52" y1="52" x2="60" y2="60" stroke="#F59E0B" stroke-width="2"/>
    <text x="35" y="65" font-size="9" font-weight="bold" fill="#B45309" text-anchor="middle">Cahaya Matahari</text>
    <!-- Stem -->
    <line x1="120" y1="150" x2="120" y2="60" stroke="#16A34A" stroke-width="5"/>
    <!-- Leaves -->
    <path d="M 120 110 Q 80 90 70 110 Q 95 125 120 110" fill="#22C55E" stroke="#15803D" stroke-width="2"/>
    <path d="M 120 90 Q 160 70 170 90 Q 145 105 120 90" fill="#22C55E" stroke="#15803D" stroke-width="2"/>
    <!-- Gas Inputs/Outputs -->
    <text x="65" y="85" font-size="9" font-weight="bold" fill="#2563EB">Karbon Dioksida ➔</text>
    <text x="135" y="55" font-size="9" font-weight="bold" fill="#16A34A">➔ Oksigen + Glukosa</text>
    <text x="120" y="20" font-size="11" font-weight="bold" fill="#0F172A" text-anchor="middle">${label || 'Proses Fotosintesis Tumbuhan'}</text>
  </svg>`;
}

// 10. Science: Reflection & Refraction of Light
export function createLightRaySvg(type: 'reflection' | 'refraction', label?: string): string {
  if (type === 'reflection') {
    return `<svg viewBox="0 0 240 160" width="220" height="150" xmlns="http://www.w3.org/2000/svg">
      <!-- Mirror Surface -->
      <line x1="20" y1="120" x2="220" y2="120" stroke="#334155" stroke-width="4"/>
      <rect x="20" y="122" width="200" height="12" fill="#94A3B8" opacity="0.4"/>
      <text x="120" y="148" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Cermin Satah (Permukaan Licin)</text>
      <!-- Normal Line -->
      <line x1="120" y1="30" x2="120" y2="120" stroke="#94A3B8" stroke-width="2" stroke-dasharray="3,3"/>
      <text x="125" y="45" font-size="9" font-weight="bold" fill="#64748B">Garis Normal</text>
      <!-- Incident Ray -->
      <line x1="45" y1="45" x2="120" y2="120" stroke="#EF4444" stroke-width="3"/>
      <polygon points="85,85 80,75 90,78" fill="#EF4444"/>
      <text x="40" y="40" font-size="9" font-weight="bold" fill="#DC2626">Sinar Tuju (i)</text>
      <!-- Reflected Ray -->
      <line x1="120" y1="120" x2="195" y2="45" stroke="#3B82F6" stroke-width="3"/>
      <polygon points="155,85 165,78 160,75" fill="#3B82F6"/>
      <text x="195" y="40" font-size="9" font-weight="bold" fill="#2563EB">Sinar Pantulan (r)</text>
      <text x="120" y="20" font-size="11" font-weight="bold" fill="#0F172A" text-anchor="middle">${label || 'Pantulan Cahaya (Sudut i = Sudut r)'}</text>
    </svg>`;
  }
  return '';
}

// 11. Science: Human Organ System (Pernafasan / Peparu)
export function createHumanLungsSvg(label?: string): string {
  return `<svg viewBox="0 0 220 180" width="200" height="170" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="210" height="170" rx="8" fill="#F8FAFC" stroke="#E2E8F0"/>
    <!-- Nose / Trachea -->
    <path d="M 110 25 L 110 70" stroke="#E11D48" stroke-width="6" stroke-linecap="round"/>
    <text x="110" y="20" font-size="9" font-weight="bold" fill="#9F1239" text-anchor="middle">Hidung / Trakea</text>
    <!-- Bronchus split -->
    <line x1="110" y1="70" x2="80" y2="95" stroke="#E11D48" stroke-width="4"/>
    <line x1="110" y1="70" x2="140" y2="95" stroke="#E11D48" stroke-width="4"/>
    <!-- Left Lung -->
    <ellipse cx="70" cy="115" rx="25" ry="35" fill="#FDA4AF" stroke="#E11D48" stroke-width="2"/>
    <text x="70" y="120" font-size="9" font-weight="bold" fill="#881337" text-anchor="middle">Peparu Kiri</text>
    <!-- Right Lung -->
    <ellipse cx="150" cy="115" rx="25" ry="35" fill="#FDA4AF" stroke="#E11D48" stroke-width="2"/>
    <text x="150" y="120" font-size="9" font-weight="bold" fill="#881337" text-anchor="middle">Peparu Kanan</text>
    <!-- Diaphragm -->
    <path d="M 40 155 Q 110 140 180 155" fill="none" stroke="#64748B" stroke-width="3"/>
    <text x="110" y="168" font-size="9" font-weight="bold" fill="#475569" text-anchor="middle">Diafragma</text>
    <text x="110" y="12" font-size="10" font-weight="bold" fill="#0F172A" text-anchor="middle">${label || 'Organ Pernafasan Manusia'}</text>
  </svg>`;
}

// 12. Science: Electric Circuit
export function createCircuitSvg(hasBulbOn: boolean, isParallel = false, label = 'Litar Elektrik'): string {
  return `<svg viewBox="0 0 260 160" width="240" height="150" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="250" height="150" rx="8" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1"/>
    <!-- Wire Loop -->
    <path d="M 40 40 L 220 40 L 220 120 L 40 120 Z" fill="none" stroke="#2563EB" stroke-width="4" stroke-linejoin="round"/>
    
    <!-- Battery -->
    <rect x="100" y="30" width="40" height="20" rx="3" fill="#F59E0B" stroke="#B45309" stroke-width="2"/>
    <rect x="140" y="35" width="5" height="10" fill="#94A3B8"/>
    <text x="120" y="44" font-size="10" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Bateri</text>
    
    <!-- Switch -->
    <circle cx="55" cy="80" r="4" fill="#EF4444"/>
    <circle cx="55" cy="100" r="4" fill="#EF4444"/>
    ${hasBulbOn 
      ? `<line x1="55" y1="80" x2="55" y2="100" stroke="#EF4444" stroke-width="3"/>`
      : `<line x1="55" y1="80" x2="40" y2="92" stroke="#EF4444" stroke-width="3"/>`
    }
    <text x="25" y="94" font-size="9" font-weight="bold" fill="#64748B" text-anchor="end">${hasBulbOn ? 'Suis Tertutup' : 'Suis Terbuka'}</text>

    <!-- Bulb -->
    <circle cx="220" cy="80" r="16" fill="${hasBulbOn ? '#FEF08A' : '#F1F5F9'}" stroke="#EAB308" stroke-width="2.5"/>
    <path d="M 215 75 Q 220 70 225 75 Q 220 85 215 75" fill="none" stroke="#CA8A04" stroke-width="1.5"/>
    ${hasBulbOn ? `
      <!-- Glow rays -->
      <line x1="220" y1="56" x2="220" y2="48" stroke="#F59E0B" stroke-width="2"/>
      <line x1="240" y1="68" x2="246" y2="62" stroke="#F59E0B" stroke-width="2"/>
      <line x1="240" y1="92" x2="246" y2="98" stroke="#F59E0B" stroke-width="2"/>
      <text x="220" y="112" font-size="9" font-weight="bold" fill="#16A34A" text-anchor="middle">Mentol Menyala ✨</text>
    ` : `
      <text x="220" y="112" font-size="9" font-weight="bold" fill="#DC2626" text-anchor="middle">Mentol Padam</text>
    `}
    <text x="130" y="145" font-size="11" font-weight="bold" fill="#1E293B" text-anchor="middle">${label}</text>
  </svg>`;
}

// 13. Science: Food Chain
export function createFoodChainSvg(steps: string[], label = 'Rantai Makanan'): string {
  const count = steps.length;
  const startX = 15;
  const boxW = 58;
  const gap = 16;
  let items = '';

  steps.forEach((step, idx) => {
    const x = startX + idx * (boxW + gap);
    items += `
      <rect x="${x}" y="30" width="${boxW}" height="36" rx="6" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>
      <text x="${x + boxW / 2}" y="52" font-size="10" font-weight="bold" fill="#14532D" text-anchor="middle">${step}</text>
    `;
    if (idx < count - 1) {
      const ax = x + boxW + 2;
      items += `
        <line x1="${ax}" y1="48" x2="${ax + 10}" y2="48" stroke="#15803D" stroke-width="2.5"/>
        <polygon points="${ax + 14},48 ${ax + 9},44 ${ax + 9},52" fill="#15803D"/>
      `;
    }
  });

  return `<svg viewBox="0 0 320 95" width="290" height="90" xmlns="http://www.w3.org/2000/svg">
    <text x="160" y="18" font-size="11" font-weight="bold" fill="#1E293B" text-anchor="middle">${label}</text>
    ${items}
    <text x="160" y="85" font-size="9" font-weight="bold" fill="#64748B" text-anchor="middle">Anak panah bermaksud 'dimakan oleh' (aliran tenaga)</text>
  </svg>`;
}

// 14. Science: Thermometer
export function createThermometerSvg(temp: number, max = 100, label = 'Termometer Makmal'): string {
  const barH = (temp / max) * 100;
  const mercuryY = 130 - barH;

  return `<svg viewBox="0 0 160 180" width="140" height="160" xmlns="http://www.w3.org/2000/svg">
    <rect x="72" y="25" width="16" height="110" rx="8" fill="#F1F5F9" stroke="#64748B" stroke-width="2"/>
    <rect x="76" y="${mercuryY}" width="8" height="${barH + 5}" fill="#EF4444"/>
    <circle cx="80" cy="140" r="15" fill="#EF4444" stroke="#64748B" stroke-width="2"/>
    <line x1="90" y1="30" x2="98" y2="30" stroke="#334155" stroke-width="1.5"/><text x="102" y="33" font-size="9" font-weight="bold" fill="#64748B">100°C</text>
    <line x1="90" y1="55" x2="96" y2="55" stroke="#334155" stroke-width="1.5"/><text x="102" y="58" font-size="9" font-weight="bold" fill="#64748B">75°C</text>
    <line x1="90" y1="80" x2="98" y2="80" stroke="#334155" stroke-width="1.5"/><text x="102" y="83" font-size="9" font-weight="bold" fill="#64748B">50°C</text>
    <line x1="90" y1="105" x2="96" y2="105" stroke="#334155" stroke-width="1.5"/><text x="102" y="108" font-size="9" font-weight="bold" fill="#64748B">25°C</text>
    <line x1="90" y1="130" x2="98" y2="130" stroke="#334155" stroke-width="1.5"/><text x="102" y="133" font-size="9" font-weight="bold" fill="#64748B">0°C</text>
    <text x="80" y="170" font-size="11" font-weight="bold" fill="#DC2626" text-anchor="middle">Bacaan: ${temp}°C</text>
  </svg>`;
}

// 15. Science: Balance Scale
export function createBalanceScaleSvg(leftLabel: string, rightLabel: string, tilt: 'balanced' | 'left-down' | 'right-down'): string {
  const leftY = tilt === 'balanced' ? 95 : tilt === 'left-down' ? 110 : 80;
  const rightY = tilt === 'balanced' ? 95 : tilt === 'left-down' ? 80 : 110;

  return `<svg viewBox="0 0 240 160" width="220" height="150" xmlns="http://www.w3.org/2000/svg">
    <polygon points="110,140 130,140 120,60" fill="#64748B"/>
    <rect x="80" y="140" width="80" height="10" rx="3" fill="#334155"/>
    <circle cx="120" cy="60" r="6" fill="#F59E0B"/>
    <line x1="40" y1="${leftY - 35}" x2="200" y2="${rightY - 35}" stroke="#475569" stroke-width="4" stroke-linecap="round"/>
    <line x1="40" y1="${leftY - 35}" x2="30" y2="${leftY}" stroke="#94A3B8" stroke-width="1.5"/>
    <line x1="40" y1="${leftY - 35}" x2="50" y2="${leftY}" stroke="#94A3B8" stroke-width="1.5"/>
    <ellipse cx="40" cy="${leftY}" rx="22" ry="6" fill="#CBD5E1" stroke="#475569" stroke-width="1.5"/>
    <rect x="28" y="${leftY - 18}" width="24" height="16" rx="3" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5"/>
    <text x="40" y="${leftY - 6}" font-size="8" font-weight="bold" fill="#FFFFFF" text-anchor="middle">${leftLabel}</text>
    <line x1="200" y1="${rightY - 35}" x2="190" y2="${rightY}" stroke="#94A3B8" stroke-width="1.5"/>
    <line x1="200" y1="${rightY - 35}" x2="210" y2="${rightY}" stroke="#94A3B8" stroke-width="1.5"/>
    <ellipse cx="200" cy="${rightY}" rx="22" ry="6" fill="#CBD5E1" stroke="#475569" stroke-width="1.5"/>
    <rect x="188" y="${rightY - 18}" width="24" height="16" rx="3" fill="#10B981" stroke="#047857" stroke-width="1.5"/>
    <text x="200" y="${rightY - 6}" font-size="8" font-weight="bold" fill="#FFFFFF" text-anchor="middle">${rightLabel}</text>
    <text x="120" y="22" font-size="11" font-weight="bold" fill="#1E293B" text-anchor="middle">Neraca Tuas (Perbandingan Jisim)</text>
  </svg>`;
}

// 16. Math: Geometry Shapes
export function createGeometryShapeSvg(shape: 'triangle' | 'rectangle' | 'cuboid', labels: Record<string, string>): string {
  if (shape === 'triangle') {
    return `<svg viewBox="0 0 220 150" width="200" height="140" xmlns="http://www.w3.org/2000/svg">
      <polygon points="30,120 180,120 180,30" fill="#E0F2FE" stroke="#0284C7" stroke-width="3"/>
      <rect x="160" y="100" width="20" height="20" fill="none" stroke="#0284C7" stroke-width="2"/>
      <text x="105" y="138" font-size="12" font-weight="bold" fill="#0369A1" text-anchor="middle">Tapak = ${labels.base || '8 cm'}</text>
      <text x="195" y="80" font-size="12" font-weight="bold" fill="#0369A1" text-anchor="start">Tinggi = ${labels.height || '6 cm'}</text>
    </svg>`;
  }
  if (shape === 'rectangle') {
    return `<svg viewBox="0 0 240 140" width="220" height="130" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="30" width="160" height="70" rx="4" fill="#FEF3C7" stroke="#D97706" stroke-width="3"/>
      <text x="110" y="20" font-size="12" font-weight="bold" fill="#92400E" text-anchor="middle">Panjang = ${labels.length || '10 cm'}</text>
      <text x="200" y="70" font-size="12" font-weight="bold" fill="#92400E" text-anchor="start">Lebar = ${labels.width || '5 cm'}</text>
    </svg>`;
  }
  if (shape === 'cuboid') {
    return `<svg viewBox="0 0 240 160" width="220" height="150" xmlns="http://www.w3.org/2000/svg">
      <polygon points="70,30 190,30 190,90 70,90" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="3,3"/>
      <polygon points="30,60 70,30 190,30 150,60" fill="#DDD6FE" stroke="#7C3AED" stroke-width="2"/>
      <polygon points="150,60 190,30 190,90 150,120" fill="#C4B5FD" stroke="#7C3AED" stroke-width="2"/>
      <polygon points="30,60 150,60 150,120 30,120" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2.5"/>
      <text x="90" y="140" font-size="11" font-weight="bold" fill="#5B21B6" text-anchor="middle">Panjang = ${labels.length || '8 cm'}</text>
      <text x="15" y="95" font-size="11" font-weight="bold" fill="#5B21B6" text-anchor="end">Tinggi = ${labels.height || '4 cm'}</text>
      <text x="185" y="50" font-size="11" font-weight="bold" fill="#5B21B6" text-anchor="start">Lebar = ${labels.width || '3 cm'}</text>
    </svg>`;
  }
  return '';
}

// 17. Math: Bar Chart
export function createBarChartSvg(labels: string[], values: number[], title: string, unit = ''): string {
  const maxVal = Math.max(...values, 10);
  const chartH = 110;
  const startX = 50;
  const startY = 135;
  const barW = 32;
  const gap = 20;
  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EC4899', '#8B5CF6'];

  let bars = '';
  labels.forEach((lbl, idx) => {
    const val = values[idx];
    const barH = (val / maxVal) * chartH;
    const bx = startX + idx * (barW + gap);
    const by = startY - barH;
    const color = colors[idx % colors.length];

    bars += `
      <rect x="${bx}" y="${by}" width="${barW}" height="${barH}" rx="4" fill="${color}" stroke="#1E293B" stroke-width="1.5"/>
      <text x="${bx + barW / 2}" y="${by - 6}" font-size="11" font-weight="bold" fill="${color}" text-anchor="middle">${val}</text>
      <text x="${bx + barW / 2}" y="${startY + 16}" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">${lbl}</text>
    `;
  });

  return `<svg viewBox="0 0 280 170" width="260" height="160" xmlns="http://www.w3.org/2000/svg">
    <text x="140" y="16" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">${title} ${unit ? `(${unit})` : ''}</text>
    <line x1="${startX - 10}" y1="25" x2="${startX - 10}" y2="${startY}" stroke="#94A3B8" stroke-width="2"/>
    <line x1="${startX - 10}" y1="${startY}" x2="265" y2="${startY}" stroke="#94A3B8" stroke-width="2"/>
    ${bars}
  </svg>`;
}

// 18. Math: Abacus 4 Digits
export function createAbacusSvg(digits: number[], label = 'Abakus 4 Digit'): string {
  const w = 240;
  const colCount = digits.length;
  const startX = 35;
  const colGap = (w - 70) / (colCount - 1);
  const beamY = 50;

  let rods = '';
  digits.forEach((val, idx) => {
    const rx = startX + idx * colGap;
    const upperActive = val >= 5;
    const lowerCount = val % 5;

    rods += `<line x1="${rx}" y1="20" x2="${rx}" y2="110" stroke="#94A3B8" stroke-width="3"/>`;
    const upperY = upperActive ? beamY - 14 : 26;
    rods += `<rect x="${rx - 12}" y="${upperY}" width="24" height="12" rx="3" fill="#D97706" stroke="#78350F" stroke-width="1.5"/>`;

    for (let b = 0; b < 4; b++) {
      const isUp = b < lowerCount;
      const by = isUp ? beamY + 4 + b * 11 : 72 + b * 10;
      rods += `<rect x="${rx - 12}" y="${by}" width="24" height="9" rx="2" fill="#2563EB" stroke="#1E3A8A" stroke-width="1.2"/>`;
    }
  });

  return `<svg viewBox="0 0 240 145" width="220" height="135" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="220" height="110" rx="8" fill="#F8FAFC" stroke="#78350F" stroke-width="6"/>
    <line x1="10" y1="${beamY}" x2="230" y2="${beamY}" stroke="#78350F" stroke-width="5"/>
    ${rods}
    <text x="120" y="138" font-size="11" font-weight="bold" fill="#1E293B" text-anchor="middle">${label}</text>
  </svg>`;
}

