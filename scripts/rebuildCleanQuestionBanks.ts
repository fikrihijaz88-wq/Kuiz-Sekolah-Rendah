import * as fs from 'fs';
import * as path from 'path';
import { QuizQuestion, YearLevel } from '../src/types';
import {
  createPictographSvg,
  createBase10BlocksSvg,
  createClockSvg,
  createFractionCircleSvg,
  createFractionBarSvg,
  createNumberLineSvg,
  createCoordinateGridSvg,
  createMoneyVisualSvg,
  createPlantDiagramSvg,
  createLightRaySvg,
  createHumanLungsSvg,
  createCircuitSvg,
  createFoodChainSvg,
  createThermometerSvg,
  createBalanceScaleSvg,
  createGeometryShapeSvg,
  createBarChartSvg,
  createAbacusSvg,
} from './visualGenerators';

export function getVerifiedVisualQuestions(year: YearLevel, subject: 'Matematik' | 'Sains'): QuizQuestion[] {
  const list: QuizQuestion[] = [];

  if (subject === 'Matematik') {
    if (year === 1) {
      list.push(
        {
          id: `mat-t1-vis-01`,
          year: 1,
          subject: 'Matematik',
          topic: 'Nombor hingga 100',
          difficulty: 'Mudah',
          question: 'Berdasarkan rajah Blok Asas 10 di atas, berapakah nilai nombor yang diwakili?',
          options: {
            A: '24',
            B: '34',
            C: '43',
            D: '14'
          },
          correctAnswer: 'B',
          explanation: 'Terdapat 3 batang blok puluh (30) dan 4 blok sa (4). Jadi 30 + 4 = 34.',
          learningStandard: 'SP 1.2.1 Menamakan nombor bagi nilai yang diwakili blok asas.',
          diagram: {
            title: 'Rajah: Blok Asas 10 (Puluh dan Sa)',
            type: 'math_visual',
            svgContent: createBase10BlocksSvg(0, 3, 4, '3 Puluh dan 4 Sa = 34'),
            caption: 'Setiap batang mewakili 10 dan setiap kubus kecil mewakili 1.'
          }
        },
        {
          id: `mat-t1-vis-02`,
          year: 1,
          subject: 'Matematik',
          topic: 'Masa dan Waktu',
          difficulty: 'Mudah',
          question: 'Berdasarkan muka jam analog di atas, apakah waktu yang ditunjukkan?',
          options: {
            A: 'Pukul 3:00',
            B: 'Pukul 12:15',
            C: 'Pukul 9:00',
            D: 'Pukul 6:00'
          },
          correctAnswer: 'A',
          explanation: 'Jarum pendek (jam) menunjuk tepat ke angka 3 dan jarum panjang (minit) menunjuk tepat ke angka 12, menunjukkan pukul 3:00.',
          learningStandard: 'SP 5.2.1 Menyebut dan menulis waktu dalam jam.',
          diagram: {
            title: 'Rajah: Muka Jam Analogi',
            type: 'math_clock',
            svgContent: createClockSvg(3, 0, 'Pukul 3:00'),
            caption: 'Perhatikan kedudukan jarum jam (biru) dan jarum minit (merah).'
          }
        },
        {
          id: `mat-t1-vis-03`,
          year: 1,
          subject: 'Matematik',
          topic: 'Pecahan',
          difficulty: 'Mudah',
          question: 'Rujuk rajah pecahan bulatan di atas. Nyatakan pecahan kawasan yang berlorek warna biru.',
          options: {
            A: 'Satu perdua (1/2)',
            B: 'Satu perempat (1/4)',
            C: 'Tiga perempat (3/4)',
            D: 'Dua pertiga (2/3)'
          },
          correctAnswer: 'A',
          explanation: 'Bulatan dibahagi sama rata kepada 2 bahagian, dan 1 bahagian daripadanya berlorek, iaitu 1/2.',
          learningStandard: 'SP 3.1.1 Mengenal pasti satu perdua dan satu perempat.',
          diagram: {
            title: 'Rajah: Pecahan Bulatan Berlorek',
            type: 'math_fraction',
            svgContent: createFractionCircleSvg(1, 2, '#3B82F6', '1 daripada 2 bahagian berlorek'),
            caption: 'Pecahan menunjukkan sebahagian daripada satu keseluruhan yang sama besar.'
          }
        },
        {
          id: `mat-t1-vis-04`,
          year: 1,
          subject: 'Matematik',
          topic: 'Pecahan',
          difficulty: 'Mudah',
          question: 'Perhatikan rajah pecahan di atas. Apakah pecahan bagi bahagian yang diwarnakan kuning?',
          options: {
            A: 'Satu perempat (1/4)',
            B: 'Satu perdua (1/2)',
            C: 'Tiga perempat (3/4)',
            D: 'Empat perempat (4/4)'
          },
          correctAnswer: 'A',
          explanation: 'Bulatan dibahagi kepada 4 bahagian sama saiz dan 1 bahagian diwarnakan kuning, mewakili 1/4.',
          learningStandard: 'SP 3.1.1 Mengenal pasti satu perdua dan satu perempat.',
          diagram: {
            title: 'Rajah: Model Pecahan Satu Perempat',
            type: 'math_fraction',
            svgContent: createFractionCircleSvg(1, 4, '#FBBF24', '1 daripada 4 bahagian berlorek'),
            caption: 'Satu bahagian daripada empat bahagian keseluruhan.'
          }
        },
        {
          id: `mat-t1-vis-05`,
          year: 1,
          subject: 'Matematik',
          topic: 'Wang',
          difficulty: 'Mudah',
          question: 'Berdasarkan rajah wang kertas Malaysia di atas, berapakah jumlah nilai wang tersebut?',
          options: {
            A: 'RM 6',
            B: 'RM 7',
            C: 'RM 8',
            D: 'RM 9'
          },
          correctAnswer: 'C',
          explanation: '1 keping RM5 + 3 keping RM1 = RM 5 + RM 3 = RM 8.',
          learningStandard: 'SP 4.1.2 Menentukan nilai wang syiling dan wang kertas.',
          diagram: {
            title: 'Rajah: Gabungan Wang Kertas RM5 dan RM1',
            type: 'math_visual',
            svgContent: createMoneyVisualSvg([
              { value: 5, count: 1 },
              { value: 1, count: 3 }
            ], '1 x RM5 dan 3 x RM1 = RM8'),
            caption: 'Kira jumlah nilai keseluruhan wang kertas yang dipaparkan.'
          }
        },
        {
          id: `mat-t1-vis-06`,
          year: 1,
          subject: 'Matematik',
          topic: 'Pengurusan Data',
          difficulty: 'Mudah',
          question: 'Berdasarkan piktograf di atas, berapakah bilangan buah pisang yang digemari oleh murid?',
          options: {
            A: '2 biji',
            B: '3 biji',
            C: '4 biji',
            D: '5 biji'
          },
          correctAnswer: 'C',
          explanation: 'Terdapat 4 ikon pisang pada baris Pisang. Setiap ikon mewakili 1 biji buah, jadi jumlahnya 4 biji.',
          learningStandard: 'SP 8.2.1 Membaca dan mendapatkan maklumat daripada piktograf.',
          diagram: {
            title: 'Piktograf: Buah Kegemaran Murid',
            type: 'math_visual',
            svgContent: createPictographSvg(
              'Buah Kegemaran Kelas 1 Arif',
              [
                { name: 'Epal', icon: '🍎', count: 3 },
                { name: 'Pisang', icon: '🍌', count: 4 },
                { name: 'Oren', icon: '🍊', count: 2 }
              ],
              '1 ikon mewakili 1 biji buah'
            ),
            caption: 'Kira bilangan ikon pisang pada baris yang ditanya.'
          }
        }
      );
    } else if (year === 2) {
      list.push(
        {
          id: `mat-t2-vis-01`,
          year: 2,
          subject: 'Matematik',
          topic: 'Nombor hingga 1,000',
          difficulty: 'Mudah',
          question: 'Berdasarkan garis nombor membilang menaik lima-lima di atas, apakah nombor yang tertinggal pada petak [ ? ]?',
          options: {
            A: '118',
            B: '120',
            C: '125',
            D: '115'
          },
          correctAnswer: 'B',
          explanation: 'Pola nombor ini membilang menaik lima-lima (+5): 100, 105, 110, 115, 120, 125. Selepas 115 ialah 115 + 5 = 120.',
          learningStandard: 'SP 1.2.2 Menyusun dan melengkapkan pola nombor.',
          diagram: {
            title: 'Rajah: Garis Nombor Membilang Lima-lima',
            type: 'math_visual',
            svgContent: createNumberLineSvg(100, 5, 6, 4, '?'),
            caption: 'Pola nombor membilang menaik lima-lima secara berturutan.'
          }
        },
        {
          id: `mat-t2-vis-02`,
          year: 2,
          subject: 'Matematik',
          topic: 'Masa dan Waktu',
          difficulty: 'Mudah',
          question: 'Berdasarkan muka jam analog di atas, apakah waktu yang ditunjukkan?',
          options: {
            A: 'Pukul 4:15 (Empat suku)',
            B: 'Pukul 4:30 (Empat setengah)',
            C: 'Pukul 3:15',
            D: 'Pukul 4:45'
          },
          correctAnswer: 'A',
          explanation: 'Jarum jam berada selepas angka 4 dan jarum minit menunjuk tepat pada angka 3 (15 minit atau suku jam), menunjukkan pukul 4:15.',
          learningStandard: 'SP 5.1.2 Mengenal tanda senggatan minit dan suku jam.',
          diagram: {
            title: 'Rajah: Jam Analogi Suku Jam',
            type: 'math_clock',
            svgContent: createClockSvg(4, 15, 'Pukul 4:15'),
            caption: 'Jarum minit pada angka 3 bersamaan dengan 15 minit (satu suku jam).'
          }
        },
        {
          id: `mat-t2-vis-03`,
          year: 2,
          subject: 'Matematik',
          topic: 'Pecahan dan Perpuluhan',
          difficulty: 'Sederhana',
          question: 'Rujuk model pecahan bulatan di atas. Nyatakan pecahan bahagian berlorek berwarna ungu.',
          options: {
            A: '1/4',
            B: '2/4',
            C: '3/4 (Tiga perempat)',
            D: '4/4'
          },
          correctAnswer: 'C',
          explanation: 'Bulatan mempunyai 4 bahagian yang sama saiz dan 3 bahagian daripadanya berlorek ungu, iaitu 3/4.',
          learningStandard: 'SP 3.1.2 Menamakan pecahan wajar yang penyebutnya hingga 10.',
          diagram: {
            title: 'Rajah: Model Pecahan Tiga Perempat',
            type: 'math_fraction',
            svgContent: createFractionCircleSvg(3, 4, '#8B5CF6', '3 daripada 4 bahagian berlorek'),
            caption: 'Tiga bahagian diwarnakan daripada empat bahagian keseluruhan.'
          }
        },
        {
          id: `mat-t2-vis-04`,
          year: 2,
          subject: 'Matematik',
          topic: 'Wang hingga RM100',
          difficulty: 'Sederhana',
          question: 'Berdasarkan rajah wang kertas di atas, berapakah jumlah keseluruhan wang tersebut?',
          options: {
            A: 'RM 60',
            B: 'RM 70',
            C: 'RM 80',
            D: 'RM 100'
          },
          correctAnswer: 'B',
          explanation: '1 keping RM50 + 2 keping RM10 = RM 50 + RM 10 + RM 10 = RM 70.',
          learningStandard: 'SP 4.1.2 Menentukan nilai wang hingga RM100.',
          diagram: {
            title: 'Rajah: Gabungan Wang Kertas Malaysia',
            type: 'math_visual',
            svgContent: createMoneyVisualSvg([
              { value: 50, count: 1 },
              { value: 10, count: 2 }
            ], '1 x RM50 dan 2 x RM10 = RM70'),
            caption: 'Kira jumlah nilai wang kertas yang dipaparkan.'
          }
        },
        {
          id: `mat-t2-vis-05`,
          year: 2,
          subject: 'Matematik',
          topic: 'Pengurusan Data',
          difficulty: 'Mudah',
          question: 'Berdasarkan carta palang markah ujian di atas, subjek manakah yang memperoleh markah paling tinggi?',
          options: {
            A: 'Bahasa Melayu (70)',
            B: 'Bahasa Inggeris (60)',
            C: 'Matematik (80)',
            D: 'Sains (90)'
          },
          correctAnswer: 'D',
          explanation: 'Palang bagi subjek Sains adalah yang tertinggi iaitu 90 markah.',
          learningStandard: 'SP 8.1.1 Membaca maklumat daripada carta palang.',
          diagram: {
            title: 'Carta Palang: Markah Ujian Murid',
            type: 'math_visual',
            svgContent: createBarChartSvg(['BM', 'BI', 'Math', 'Sains'], [70, 60, 80, 90], 'Markah Ujian', 'Markah'),
            caption: 'Bandingkan ketinggian setiap palang subjek.'
          }
        },
        {
          id: `mat-t2-vis-06`,
          year: 2,
          subject: 'Matematik',
          topic: 'Nombor hingga 1,000',
          difficulty: 'Mudah',
          question: 'Berdasarkan rajah Blok Asas 10 di atas, apakah nombor 3-digit yang diwakili?',
          options: {
            A: '235',
            B: '325',
            C: '253',
            D: '532'
          },
          correctAnswer: 'A',
          explanation: '2 keping blok ratus (200) + 3 batang blok puluh (30) + 5 blok sa (5) = 235.',
          learningStandard: 'SP 1.1.2 Menentukan nilai nombor hingga 1000.',
          diagram: {
            title: 'Rajah: Blok Asas 10 (Ratus, Puluh dan Sa)',
            type: 'math_visual',
            svgContent: createBase10BlocksSvg(2, 3, 5, '2 Ratus, 3 Puluh dan 5 Sa = 235'),
            caption: '2 petak ratus (200), 3 batang puluh (30), dan 5 kubus sa (5).'
          }
        }
      );
    } else if (year === 3) {
      list.push(
        {
          id: `mat-t3-vis-01`,
          year: 3,
          subject: 'Matematik',
          topic: 'Nombor hingga 10,000',
          difficulty: 'Sederhana',
          question: 'Berdasarkan abakus 4-digit di atas, apakah nilai nombor yang diwakili?',
          options: {
            A: '3,524',
            B: '4,523',
            C: '3,024',
            D: '2,534'
          },
          correctAnswer: 'A',
          explanation: 'Nilai tempat pada abakus: Ribu = 3, Ratus = 5 (manik atas aktif), Puluh = 2, Sa = 4. Nilai nombor ialah 3,524.',
          learningStandard: 'SP 1.1.2 Menentukan nilai nombor pada abakus 4 digit.',
          diagram: {
            title: 'Rajah: Abakus 4 Digit',
            type: 'math_visual',
            svgContent: createAbacusSvg([3, 5, 2, 4], 'Abakus mewakili: 3,524'),
            caption: 'Manik atas bernilai 5 apabila digerakkan mendekati palang tengah.'
          }
        },
        {
          id: `mat-t3-vis-02`,
          year: 3,
          subject: 'Matematik',
          topic: 'Masa dan Waktu',
          difficulty: 'Sederhana',
          question: 'Berdasarkan muka jam analog di atas, apakah waktu yang ditunjukkan?',
          options: {
            A: 'Pukul 7:15',
            B: 'Pukul 7:45 (Lapan kurang suku)',
            C: 'Pukul 8:45',
            D: 'Pukul 7:30'
          },
          correctAnswer: 'B',
          explanation: 'Jarum jam menghampiri angka 8 dan jarum minit berada tepat pada angka 9 (45 minit), menunjukkan pukul 7:45.',
          learningStandard: 'SP 5.1.1 Menyatakan waktu dalam jam dan minit.',
          diagram: {
            title: 'Rajah: Jam Analogi (7:45)',
            type: 'math_clock',
            svgContent: createClockSvg(7, 45, 'Pukul 7:45'),
            caption: 'Jarum minit menunjuk ke angka 9 mewakili 45 minit.'
          }
        },
        {
          id: `mat-t3-vis-03`,
          year: 3,
          subject: 'Matematik',
          topic: 'Pecahan Wajar',
          difficulty: 'Sederhana',
          question: 'Berdasarkan jalur pecahan di atas, apakah pecahan kawasan yang diwarnakan hijau?',
          options: {
            A: '3/8',
            B: '4/8',
            C: '5/8',
            D: '6/8'
          },
          correctAnswer: 'C',
          explanation: 'Jalur pecahan dibahagikan kepada 8 bahagian sama besar dan 5 bahagian diwarnakan hijau, mewakili 5/8.',
          learningStandard: 'SP 3.1.3 Menyatakan pecahan wajar daripada gambar rajah.',
          diagram: {
            title: 'Rajah: Jalur Pecahan Lapan Bahagian',
            type: 'math_fraction',
            svgContent: createFractionBarSvg(5, 8, '#10B981', '5 daripada 8 petak berwarna'),
            caption: 'Kira bilangan petak hijau berbanding jumlah 8 petak.'
          }
        },
        {
          id: `mat-t3-vis-04`,
          year: 3,
          subject: 'Matematik',
          topic: 'Bentuk dan Ruang',
          difficulty: 'Sederhana',
          question: 'Rujuk rajah segi empat tepat di atas. Berapakah perimeter (jumlah ukur keliling sisi luar) bagi segi empat tepat tersebut?',
          options: {
            A: '15 cm',
            B: '25 cm',
            C: '30 cm',
            D: '50 cm'
          },
          correctAnswer: 'C',
          explanation: 'Perimeter = 2 × (Panjang + Lebar) = 2 × (10 cm + 5 cm) = 2 × 15 cm = 30 cm.',
          learningStandard: 'SP 6.3.1 Menentukan perimeter bentuk poligon asas.',
          diagram: {
            title: 'Rajah: Segi Empat Tepat Berdimensi',
            type: 'math_visual',
            svgContent: createGeometryShapeSvg('rectangle', { length: '10 cm', width: '5 cm' }),
            caption: 'Perimeter ialah hasil tambah kesemua 4 sisi luar: 10 + 5 + 10 + 5 = 30 cm.'
          }
        },
        {
          id: `mat-t3-vis-05`,
          year: 3,
          subject: 'Matematik',
          topic: 'Wang',
          difficulty: 'Sederhana',
          question: 'Berdasarkan rajah wang kertas di atas, berapakah jumlah keseluruhan wang tersebut?',
          options: {
            A: 'RM 150',
            B: 'RM 170',
            C: 'RM 180',
            D: 'RM 200'
          },
          correctAnswer: 'B',
          explanation: '1 keping RM100 + 1 keping RM50 + 1 keping RM20 = RM 100 + RM 50 + RM 20 = RM 170.',
          learningStandard: 'SP 4.1.1 Menggabungkan nilai wang hingga RM10,000.',
          diagram: {
            title: 'Rajah: Gabungan Wang Kertas RM100, RM50, RM20',
            type: 'math_visual',
            svgContent: createMoneyVisualSvg([
              { value: 100, count: 1 },
              { value: 50, count: 1 },
              { value: 20, count: 1 }
            ], '1x RM100 + 1x RM50 + 1x RM20 = RM170'),
            caption: 'Campurkan nilai setiap keping wang kertas.'
          }
        }
      );
    } else if (year === 4) {
      list.push(
        {
          id: `mat-t4-vis-01`,
          year: 4,
          subject: 'Matematik',
          topic: 'Koordinat',
          difficulty: 'KBAT (Aras Sederhana)',
          question: 'Berdasarkan satah Cartes di atas, apakah koordinat bagi titik A (Perpustakaan)?',
          options: {
            A: '(2, 4)',
            B: '(4, 2)',
            C: '(2, 0)',
            D: '(0, 4)'
          },
          correctAnswer: 'A',
          explanation: 'Koordinat dinyatakan dalam bentuk (x, y). Bergerak 2 unit ke kanan pada paksi mengufuk (x) dan 4 unit ke atas pada paksi mencancang (y), iaitu (2, 4).',
          learningStandard: 'SP 8.1.1 Menamakan koordinat titik pada sukuan pertama satah Cartes.',
          diagram: {
            title: 'Rajah: Satah Cartes Lokasi Tempat',
            type: 'math_visual',
            svgContent: createCoordinateGridSvg([
              { label: 'A (Perpustakaan)', x: 2, y: 4, color: '#2563EB' },
              { label: 'B (Klinik)', x: 5, y: 3, color: '#16A34A' }
            ]),
            caption: 'Baca nilai paksi-x dahulu, kemudian diikuti paksi-y: (x, y).'
          }
        },
        {
          id: `mat-t4-vis-02`,
          year: 4,
          subject: 'Matematik',
          topic: 'Ruang dan Geometri',
          difficulty: 'KBAT (Aras Sederhana)',
          question: 'Berdasarkan rajah segi tiga bersudut tegak di atas, hitung luas segi tiga tersebut menggunakan rumus: 1/2 × Tapak × Tinggi.',
          options: {
            A: '14 cm²',
            B: '24 cm²',
            C: '48 cm²',
            D: '36 cm²'
          },
          correctAnswer: 'B',
          explanation: 'Luas = 1/2 × 8 cm × 6 cm = 1/2 × 48 cm² = 24 cm².',
          learningStandard: 'SP 6.3.2 Menentukan luas segi tiga menggunakan rumus.',
          diagram: {
            title: 'Rajah: Segi Tiga Bersudut Tegak',
            type: 'math_visual',
            svgContent: createGeometryShapeSvg('triangle', { base: '8 cm', height: '6 cm' }),
            caption: 'Gunakan formula Luas = 1/2 × Tapak × Tinggi.'
          }
        },
        {
          id: `mat-t4-vis-03`,
          year: 4,
          subject: 'Matematik',
          topic: 'Isi Padu Bentuk 3D',
          difficulty: 'KBAT (Aras Sederhana)',
          question: 'Rujuk bongkah kuboid 3D di atas. Berapakah isi padu kuboid tersebut (Panjang × Lebar × Tinggi)?',
          options: {
            A: '48 cm³',
            B: '96 cm³',
            C: '32 cm³',
            D: '120 cm³'
          },
          correctAnswer: 'B',
          explanation: 'Isi Padu Kuboid = 8 cm (Panjang) × 3 cm (Lebar) × 4 cm (Tinggi) = 96 cm³.',
          learningStandard: 'SP 6.4.1 Menentukan isi padu kuboid.',
          diagram: {
            title: 'Rajah: Bongkah Kuboid 3D',
            type: 'math_visual',
            svgContent: createGeometryShapeSvg('cuboid', { length: '8 cm', width: '3 cm', height: '4 cm' }),
            caption: 'Isi padu = Panjang × Lebar × Tinggi = 8 × 3 × 4.'
          }
        },
        {
          id: `mat-t4-vis-04`,
          year: 4,
          subject: 'Matematik',
          topic: 'Pengurusan Data',
          difficulty: 'Sederhana',
          question: 'Rujuk jadual kutipan tin kitar semula di atas. Berapakah perbezaan bilangan tin yang dikutip antara Tahun 4 Amanah dan Tahun 4 Bestari?',
          options: {
            A: '50 tin',
            B: '60 tin',
            C: '70 tin',
            D: '40 tin'
          },
          correctAnswer: 'B',
          explanation: 'Perbezaan = 210 tin (4 Amanah) - 150 tin (4 Bestari) = 60 tin.',
          learningStandard: 'SP 8.2.1 Menyelesaikan masalah melibatkan data berjadual.',
          diagram: {
            title: 'Jadual Kutipan Tin Kitar Semula',
            type: 'table_data',
            data: {
              headers: ['Kelas', 'Bilangan Tin (Biji)'],
              rows: [
                ['4 Amanah', '210'],
                ['4 Bestari', '150'],
                ['4 Cemerlang', '180']
              ]
            },
            caption: 'Tolak bilangan tin 4 Bestari daripada 4 Amanah untuk mencari beza.'
          }
        }
      );
    } else if (year === 5) {
      list.push(
        {
          id: `mat-t5-vis-01`,
          year: 5,
          subject: 'Matematik',
          topic: 'Koordinat, Nisbah dan Kadaran',
          difficulty: 'KBAT (Aras Sederhana)',
          question: 'Berdasarkan satah Cartes di atas, berapakah jarak mengufuk dan jarak mencancang dari asalan (0,0) ke titik P?',
          options: {
            A: '4 unit mengufuk dan 5 unit mencancang',
            B: '5 unit mengufuk dan 4 unit mencancang',
            C: '3 unit mengufuk dan 4 unit mencancang',
            D: '4 unit mengufuk dan 4 unit mencancang'
          },
          correctAnswer: 'A',
          explanation: 'Titik P terletak pada koordinat (4, 5). Jarak mengufuk (paksi-x) = 4 unit, jarak mencancang (paksi-y) = 5 unit.',
          learningStandard: 'SP 7.1.1 Menentukan jarak mengufuk dan mencancang antara titik.',
          diagram: {
            title: 'Rajah: Satah Cartes Titik P',
            type: 'math_visual',
            svgContent: createCoordinateGridSvg([
              { label: 'P', x: 4, y: 5, color: '#E11D48' }
            ]),
            caption: 'Paksi-x mewakili jarak mengufuk dan paksi-y mewakili jarak mencancang.'
          }
        },
        {
          id: `mat-t5-vis-02`,
          year: 5,
          subject: 'Matematik',
          topic: 'Pengurusan Data',
          difficulty: 'Sederhana',
          question: 'Rujuk carta palang markah murid di atas. Berapakah jumlah keseluruhan markah yang diperoleh bagi ketiga-tiga subjek tersebut?',
          options: {
            A: '220 markah',
            B: '235 markah',
            C: '240 markah',
            D: '250 markah'
          },
          correctAnswer: 'C',
          explanation: 'Jumlah markah = 80 (BM) + 75 (BI) + 85 (Math) = 240 markah.',
          learningStandard: 'SP 8.1.1 Mentafsir data daripada carta palang.',
          diagram: {
            title: 'Carta Palang: Pencapaian Markah Murid',
            type: 'math_visual',
            svgContent: createBarChartSvg(['BM', 'BI', 'Math'], [80, 75, 85], 'Pencapaian Ujian', 'Markah'),
            caption: 'Campurkan nilai ketiga-tiga palang: 80 + 75 + 85.'
          }
        },
        {
          id: `mat-t5-vis-03`,
          year: 5,
          subject: 'Matematik',
          topic: 'Ruang dan Geometri',
          difficulty: 'Sederhana',
          question: 'Rujuk rajah segi empat tepat di atas (panjang 12 cm, lebar 7 cm). Berapakah perimeter bentuk tersebut?',
          options: {
            A: '19 cm',
            B: '38 cm',
            C: '84 cm',
            D: '42 cm'
          },
          correctAnswer: 'B',
          explanation: 'Perimeter = 2 × (12 cm + 7 cm) = 2 × 19 cm = 38 cm.',
          learningStandard: 'SP 6.3.1 Mengira perimeter bentuk poligon.',
          diagram: {
            title: 'Rajah: Segi Empat Tepat (12 cm x 7 cm)',
            type: 'math_visual',
            svgContent: createGeometryShapeSvg('rectangle', { length: '12 cm', width: '7 cm' }),
            caption: 'Perimeter ialah jumlah panjang keempat-empat sisi luar.'
          }
        }
      );
    } else if (year === 6) {
      list.push(
        {
          id: `mat-t6-vis-01`,
          year: 6,
          subject: 'Matematik',
          topic: 'Pengurusan Data dan Kebolehjadian',
          difficulty: 'KBAT (Aras Sederhana)',
          question: 'Berdasarkan carta palang jualan buku di atas, berapakah purata jualan buku sehari bagi tempoh 4 hari tersebut?',
          options: {
            A: '50 buah',
            B: '55 buah',
            C: '60 buah',
            D: '65 buah'
          },
          correctAnswer: 'C',
          explanation: 'Jumlah jualan = 50 + 70 + 40 + 80 = 240 buah. Purata = 240 ÷ 4 hari = 60 buah buku sehari.',
          learningStandard: 'SP 8.2.1 Menentukan purata (min) daripada carta palang.',
          diagram: {
            title: 'Carta Palang: Jualan Buku 4 Hari',
            type: 'math_visual',
            svgContent: createBarChartSvg(['Isn', 'Sel', 'Rab', 'Kha'], [50, 70, 40, 80], 'Jualan Buku', 'Buah'),
            caption: 'Purata = Jumlah Keseluruhan ÷ Bilangan Hari.'
          }
        },
        {
          id: `mat-t6-vis-02`,
          year: 6,
          subject: 'Matematik',
          topic: 'Ruang dan Geometri',
          difficulty: 'Sederhana',
          question: 'Berdasarkan rajah segi tiga bersudut tegak di atas (tapak = 10 cm, tinggi = 8 cm), apakah luas segi tiga tersebut?',
          options: {
            A: '18 cm²',
            B: '40 cm²',
            C: '80 cm²',
            D: '36 cm²'
          },
          correctAnswer: 'B',
          explanation: 'Luas = 1/2 × Tapak × Tinggi = 1/2 × 10 cm × 8 cm = 40 cm².',
          learningStandard: 'SP 6.2.1 Mengira luas bentuk poligon gabungan.',
          diagram: {
            title: 'Rajah: Geometri Segi Tiga Bersudut Tegak',
            type: 'math_visual',
            svgContent: createGeometryShapeSvg('triangle', { base: '10 cm', height: '8 cm' }),
            caption: 'Formula Luas: 1/2 × Tapak × Tinggi.'
          }
        },
        {
          id: `mat-t6-vis-03`,
          year: 6,
          subject: 'Matematik',
          topic: 'Ruang dan Geometri',
          difficulty: 'KBAT (Aras Sederhana)',
          question: 'Rujuk rajah bongkah kuboid 3D di atas (Panjang 10 cm, Lebar 5 cm, Tinggi 6 cm). Hitung isi padu kuboid tersebut dalam cm³.',
          options: {
            A: '150 cm³',
            B: '200 cm³',
            C: '300 cm³',
            D: '350 cm³'
          },
          correctAnswer: 'C',
          explanation: 'Isi Padu = 10 cm × 5 cm × 6 cm = 300 cm³.',
          learningStandard: 'SP 6.3.1 Mengira isi padu bentuk 3D gabungan.',
          diagram: {
            title: 'Rajah: Bongkah Kuboid 3D (10x5x6 cm)',
            type: 'math_visual',
            svgContent: createGeometryShapeSvg('cuboid', { length: '10 cm', width: '5 cm', height: '6 cm' }),
            caption: 'Isi Padu = Panjang × Lebar × Tinggi = 10 × 5 × 6.'
          }
        }
      );
    }
  } else {
    // SAINS
    if (year === 1) {
      list.push(
        {
          id: `sai-t1-vis-01`,
          year: 1,
          subject: 'Sains',
          topic: 'Benda Hidup dan Benda Bukan Hidup',
          difficulty: 'Mudah',
          question: 'Berdasarkan rajah tumbuhan di atas, apakah keperluan asas yang diserap oleh akar dari dalam tanah?',
          options: {
            A: 'Air',
            B: 'Cahaya matahari',
            C: 'Angin',
            D: 'Karbon dioksida'
          },
          correctAnswer: 'A',
          explanation: 'Akar tumbuhan berada di dalam tanah untuk menyerap air dan nutrien bagi tumbesaran pokok.',
          learningStandard: 'SP 3.2.1 Menyatakan keperluan asas tumbuhan untuk hidup.',
          diagram: {
            title: 'Rajah: Bahagian Tumbuhan & Akar',
            type: 'science_visual',
            svgContent: createPlantDiagramSvg('Bahagian Tumbuhan & Akar'),
            caption: 'Akar menyerap air di dalam tanah manakala daun menyerap cahaya matahari.'
          }
        },
        {
          id: `sai-t1-vis-02`,
          year: 1,
          subject: 'Sains',
          topic: 'Deria Manusia',
          difficulty: 'Mudah',
          question: 'Rujuk jadual deria manusia dan organ di atas. Organ manakah yang digunakan untuk deria sentuhan?',
          options: {
            A: 'Mata',
            B: 'Telinga',
            C: 'Kulit',
            D: 'Lidah'
          },
          correctAnswer: 'C',
          explanation: 'Kulit ialah organ deria sentuhan untuk merasa permukaan panas, sejuk, kasar, dan licin.',
          learningStandard: 'SP 4.1.1 Mengenal pasti bahagian tubuh manusia yang berkaitan dengan deria.',
          diagram: {
            title: 'Jadual Organ & Deria Manusia',
            type: 'table_data',
            data: {
              headers: ['Organ Deria', 'Fungsi Deria'],
              rows: [
                ['👁️ Mata', 'Deria Penglihatan'],
                ['👂 Telinga', 'Deria Pendengaran'],
                ['👃 Hidung', 'Deria Bau'],
                ['👅 Lidah', 'Deria Rasa'],
                ['✋ Kulit', 'Deria Sentuhan']
              ]
            },
            caption: 'Setiap organ tubuh mempunyai fungsi deria khusus.'
          }
        },
        {
          id: `sai-t1-vis-03`,
          year: 1,
          subject: 'Sains',
          topic: 'Benda Hidup dan Benda Bukan Hidup',
          difficulty: 'Mudah',
          question: 'Rujuk jadual pengelasan benda hidup dan bukan hidup di atas. Antara berikut, yang manakah merupakan ciri penting bagi Benda Hidup?',
          options: {
            A: 'Memerlukan makanan, air dan bernafas',
            B: 'Tidak membesar dan tidak bergerak',
            C: 'Dibuat daripada bahan plastik dan logam',
            D: 'Kekal saiznya selama-lamanya'
          },
          correctAnswer: 'A',
          explanation: 'Benda hidup (seperti kucing dan pokok) memerlukan makanan, air dan udara untuk terus hidup dan membesar.',
          learningStandard: 'SP 3.1.1 Membanding dan membezakan benda hidup dan benda bukan hidup.',
          diagram: {
            title: 'Jadual Benda Hidup & Benda Bukan Hidup',
            type: 'table_data',
            data: {
              headers: ['Kategori', 'Contoh', 'Keperluan Asas'],
              rows: [
                ['Benda Hidup', 'Kucing, Pokok Bunga, Burung', 'Perlu Makanan, Air & Udara'],
                ['Benda Bukan Hidup', 'Kereta, Batu, Kerusi', 'Tidak perlu makanan & tidak bernafas']
              ]
            },
            caption: 'Benda hidup menjalani proses tumbesaran dan memerlukan nutrien.'
          }
        }
      );
    } else if (year === 2) {
      list.push(
        {
          id: `sai-t2-vis-01`,
          year: 2,
          subject: 'Sains',
          topic: 'Elektrik',
          difficulty: 'Mudah',
          question: 'Perhatikan rajah litar elektrik di atas. Mengapakah mentol tersebut menyala dengan terang?',
          options: {
            A: 'Kerana suis ditutup dan membentuk litar lengkap',
            B: 'Kerana bateri dicabut',
            C: 'Kerana wayar penyambung terputus',
            D: 'Kerana tiada arus elektrik'
          },
          correctAnswer: 'A',
          explanation: 'Apabila suis ditutup, litar menjadi lengkap membolehkan arus elektrik mengalir dari sel kering ke mentol untuk menyalakannya.',
          learningStandard: 'SP 7.1.3 Membina litar elektrik lengkap dengan menggunakan komponen.',
          diagram: {
            title: 'Rajah: Litar Elektrik Lengkap',
            type: 'science_visual',
            svgContent: createCircuitSvg(true, false, 'Litar Bersiri Lengkap (Suis Tertutup)'),
            caption: 'Suis yang tertutup membolehkan arus elektrik mengalir tanpa terputus.'
          }
        },
        {
          id: `sai-t2-vis-02`,
          year: 2,
          subject: 'Sains',
          topic: 'Campuran',
          difficulty: 'Sederhana',
          question: 'Rujuk jadual eksperimen keterlarutan bahan di dalam air di atas. Bahan manakah yang TIDAK larut di dalam air?',
          options: {
            A: 'Pasir Sungai',
            B: 'Gula Pasir',
            C: 'Garam Halus',
            D: 'Serbuk Minuman'
          },
          correctAnswer: 'A',
          explanation: 'Pasir sungai tidak larut di dalam air dan akan mendap di dasar bikar.',
          learningStandard: 'SP 8.1.2 Mengenal pasti bahan yang boleh larut dan tidak boleh larut dalam air.',
          diagram: {
            title: 'Jadual Keterlarutan Bahan Dalam Air',
            type: 'table_data',
            data: {
              headers: ['Bahan', 'Pemerhatian di Dalam Air'],
              rows: [
                ['Gula Pasir', 'Larut sepenuhnya (Air manis)'],
                ['Garam Halus', 'Larut sepenuhnya (Air masin jernih)'],
                ['Pasir Sungai', 'Tidak larut (Mendap di dasar bikar)']
              ]
            },
            caption: 'Bahan larut akan bercampur sekata manakala bahan tidak larut akan mendap.'
          }
        },
        {
          id: `sai-t2-vis-03`,
          year: 2,
          subject: 'Sains',
          topic: 'Terang dan Gelap',
          difficulty: 'Mudah',
          question: 'Perhatikan neraca tuas di atas. Apakah kesimpulan tentang perbandingan jisim Objek X dan Objek Y?',
          options: {
            A: 'Objek X lebih berat daripada Objek Y',
            B: 'Objek Y lebih berat daripada Objek X',
            C: 'Objek X dan Y sama jisim',
            D: 'Objek X terapung di udara'
          },
          correctAnswer: 'A',
          explanation: 'Lengan neraca di sebelah Objek X condong ke bawah, membuktikan bahawa Objek X mempunyai jisim yang lebih berat.',
          learningStandard: 'SP 6.1.2 Mengukur dan membandingkan jisim menggunakan alat tidak piawai / neraca.',
          diagram: {
            title: 'Rajah: Neraca Tuas Perbandingan Jisim',
            type: 'science_visual',
            svgContent: createBalanceScaleSvg('Objek X', 'Objek Y', 'left-down'),
            caption: 'Sisi objek yang lebih berat akan condong ke bawah.'
          }
        }
      );
    } else if (year === 3) {
      list.push(
        {
          id: `sai-t3-vis-01`,
          year: 3,
          subject: 'Sains',
          topic: 'Haiwan (Tabiat Pemakanan)',
          difficulty: 'Mudah',
          question: 'Berdasarkan jadual pengelasan tabiat pemakanan haiwan di atas, kumpulan haiwan manakah yang dikelaskan sebagai Herbivor (makan tumbuhan sahaja)?',
          options: {
            A: 'Lembu, Arnab dan Kambing',
            B: 'Harimau, Singa dan Helang',
            C: 'Ayam, Monyet dan Beruang',
            D: 'Buaya, Ular dan Jerung'
          },
          correctAnswer: 'A',
          explanation: 'Lembu, arnab dan kambing hanya memakan rumput dan tumbuh-tumbuhan, menjadikannya tergolong dalam kumpulan Herbivor.',
          learningStandard: 'SP 3.1.2 Mengelaskan haiwan berdasarkan tabiat pemakanan.',
          diagram: {
            title: 'Jadual Tabiat Pemakanan Haiwan',
            type: 'table_data',
            data: {
              headers: ['Kumpulan', 'Jenis Makanan', 'Contoh Haiwan'],
              rows: [
                ['Herbivor', 'Tumbuhan sahaja', 'Lembu, Arnab, Kambing'],
                ['Karnivor', 'Haiwan lain (Daging)', 'Harimau, Singa, Helang'],
                ['Omnivor', 'Tumbuhan & Haiwan', 'Ayam, Monyet, Beruang']
              ]
            },
            caption: 'Herbivor = Makan tumbuhan, Karnivor = Makan daging, Omnivor = Makan kedua-duanya.'
          }
        },
        {
          id: `sai-t3-vis-02`,
          year: 3,
          subject: 'Sains',
          topic: 'Ketumpatan Objek',
          difficulty: 'Sederhana',
          question: 'Rujuk jadual eksperimen ketumpatan objek di dalam air di atas. Mengapakah guli kaca tenggelam manakala gabus kayu terapung?',
          options: {
            A: 'Guli kaca lebih tumpat daripada air, manakala gabus kayu kurang tumpat daripada air',
            B: 'Gabus kayu lebih berat daripada guli kaca',
            C: 'Air menolak guli kaca ke dasar',
            D: 'Guli menyerap cecair air'
          },
          correctAnswer: 'A',
          explanation: 'Objek yang lebih tumpat daripada air akan tenggelam ke dasar, manakala objek yang kurang tumpat daripada air akan terapung.',
          learningStandard: 'SP 7.1.1 Membuat kesimpulan tentang objek yang lebih tumpat atau kurang tumpat daripada air.',
          diagram: {
            title: 'Jadual Eksperimen Ketumpatan Bahan',
            type: 'table_data',
            data: {
              headers: ['Objek', 'Pemerhatian di Dalam Air', 'Sifat Ketumpatan'],
              rows: [
                ['Gabus Kayu', 'Terapung di permukaan air', 'Kurang tumpat daripada air'],
                ['Guli Kaca', 'Tenggelam ke dasar bikar', 'Lebih tumpat daripada air'],
                ['Minyak Masak', 'Terapung di atas lapisan air', 'Kurang tumpat daripada air']
              ]
            },
            caption: 'Ketumpatan menentukan sama ada sesuatu objek timbul atau tenggelam di dalam air.'
          }
        },
        {
          id: `sai-t3-vis-03`,
          year: 3,
          subject: 'Sains',
          topic: 'Asid dan Alkali',
          difficulty: 'Sederhana',
          question: 'Rujuk jadual ujian kertas litmus di atas. Bahan manakah yang bersifat asid dan menukarkan warna kertas litmus biru kepada merah?',
          options: {
            A: 'Jus Limau Nipis',
            B: 'Air Sabun Mandi',
            C: 'Air Garam',
            D: 'Air Suling'
          },
          correctAnswer: 'A',
          explanation: 'Bahan berasid (seperti jus limau nipis yang masam) menukarkan warna kertas litmus biru kepada merah.',
          learningStandard: 'SP 8.1.1 Menguji sifat kimia bahan menggunakan kertas litmus.',
          diagram: {
            title: 'Jadual Ujian Kertas Litmus Bahan Harian',
            type: 'table_data',
            data: {
              headers: ['Bahan Ujian', 'Perubahan Kertas Litmus', 'Sifat Kimia'],
              rows: [
                ['Jus Limau Nipis', 'Biru ➔ Merah', 'Berasid (Rasa masam)'],
                ['Air Sabun', 'Merah ➔ Biru', 'Beralkali (Rasa pahit/licin)'],
                ['Air Garam', 'Tiada perubahan warna', 'Neutral (Rasa masin)']
              ]
            },
            caption: 'Asid menukarkan litmus biru ke merah. Alkali menukarkan litmus merah ke biru.'
          }
        }
      );
    } else if (year === 4) {
      list.push(
        {
          id: `sai-t4-vis-01`,
          year: 4,
          subject: 'Sains',
          topic: 'Proses Hidup Manusia (Pernafasan)',
          difficulty: 'Sederhana',
          question: 'Berdasarkan rajah organ pernafasan manusia di atas, apakah laluan udara yang betul semasa proses menarik nafas?',
          options: {
            A: 'Hidung ➔ Trakea ➔ Peparu',
            B: 'Peparu ➔ Trakea ➔ Hidung',
            C: 'Mulut ➔ Perut ➔ Jantung',
            D: 'Hidung ➔ Jantung ➔ Peparu'
          },
          correctAnswer: 'A',
          explanation: 'Semasa menarik nafas, udara beroksigen masuk melalui hidung, menuruni saluran trakea, dan memasuki peparu.',
          learningStandard: 'SP 2.1.1 Mengenal pasti organ yang terlibat dalam proses pernafasan.',
          diagram: {
            title: 'Rajah: Organ Pernafasan Manusia',
            type: 'science_visual',
            svgContent: createHumanLungsSvg('Laluan Udara Semasa Bernafas'),
            caption: 'Perhatikan hidung, saluran trakea, peparu kiri/kanan dan diafragma.'
          }
        },
        {
          id: `sai-t4-vis-02`,
          year: 4,
          subject: 'Sains',
          topic: 'Fotosintesis',
          difficulty: 'Sederhana',
          question: 'Berdasarkan rajah fotosintesis di atas, apakah DUA hasil utama yang dihasilkan oleh tumbuhan hijau selepas proses fotosintesis?',
          options: {
            A: 'Glukosa (makanan) dan Gas Oksigen',
            B: 'Karbon dioksida dan Air',
            C: 'Cahaya matahari dan Tanah',
            D: 'Baja dan Racun'
          },
          correctAnswer: 'A',
          explanation: 'Hasil proses fotosintesis ialah glukosa (kanji untuk tumbuhan) dan gas oksigen yang dibebaskan ke udara.',
          learningStandard: 'SP 4.2.2 Menyatakan hasil fotosintesis melalui pemerhatian.',
          diagram: {
            title: 'Rajah: Proses Fotosintesis Tumbuhan',
            type: 'science_visual',
            svgContent: createPlantDiagramSvg('Keperluan & Hasil Fotosintesis'),
            caption: 'Keperluan: Cahaya + Karbon Dioksida + Air. Hasil: Oksigen + Glukosa.'
          }
        },
        {
          id: `sai-t4-vis-03`,
          year: 4,
          subject: 'Sains',
          topic: 'Sifat Cahaya',
          difficulty: 'Sederhana',
          question: 'Berdasarkan rajah pantulan cahaya pada cermin satah di atas, apakah hubungan antara Sudut Tuju (i) dan Sudut Pantulan (r)?',
          options: {
            A: 'Sudut Tuju (i) sentiasa SAMA dengan Sudut Pantulan (r)',
            B: 'Sudut Tuju sentiasa lebih besar daripada Sudut Pantulan',
            C: 'Sudut Pantulan sentiasa bernilai 90 darjah',
            D: 'Sudut Tuju tidak mempunyai hubungan dengan pantulan'
          },
          correctAnswer: 'A',
          explanation: 'Menurut hukum pantulan cahaya pada permukaan licin dan rata, sudut tuju (i) sentiasa sama dengan sudut pantulan (r).',
          learningStandard: 'SP 5.2.1 Menyatakan bahawa cahaya boleh dipantulkan.',
          diagram: {
            title: 'Rajah: Hukum Pantulan Cahaya',
            type: 'science_visual',
            svgContent: createLightRaySvg('reflection', 'Sinar Tuju (i) = Sinar Pantulan (r)'),
            caption: 'Cahaya memantul pada sudut yang sama dengan sudut datangnya.'
          }
        }
      );
    } else if (year === 5) {
      list.push(
        {
          id: `sai-t5-vis-01`,
          year: 5,
          subject: 'Sains',
          topic: 'Rantai Makanan dan Siratan Makanan',
          difficulty: 'Sederhana',
          question: 'Berdasarkan rajah rantai makanan di atas, apakah hidupan yang bertindak sebagai "Pengeluar"?',
          options: {
            A: 'Rumput (Tumbuhan hijau)',
            B: 'Belalang',
            C: 'Katak',
            D: 'Helang'
          },
          correctAnswer: 'A',
          explanation: 'Rumput ialah pengeluar kerana ia membuat makanannya sendiri melalui fotosintesis, menduduki aras pertama rantai makanan.',
          learningStandard: 'SP 3.1.2 Mengenal pasti pengeluar dan pengguna dalam rantai makanan.',
          diagram: {
            title: 'Rajah: Rantai Makanan Padang Rumput',
            type: 'science_visual',
            svgContent: createFoodChainSvg(['Rumput', 'Belalang', 'Katak', 'Ular', 'Helang'], 'Rantai Makanan Padang'),
            caption: 'Pengeluar sentiasa berada pada kedudukan pertama rantai makanan.'
          }
        },
        {
          id: `sai-t5-vis-02`,
          year: 5,
          subject: 'Sains',
          topic: 'Haba dan Suhu',
          difficulty: 'Sederhana',
          question: 'Rujuk bacaan termometer makmal di atas. Berapakah bacaan suhu cecair yang ditunjukkan oleh aras merkuri merah?',
          options: {
            A: '50°C',
            B: '75°C',
            C: '100°C',
            D: '25°C'
          },
          correctAnswer: 'B',
          explanation: 'Paras cecair merkuri merah berhenti tepat pada senggatan garis 75°C pada skala termometer.',
          learningStandard: 'SP 6.1.2 Mengukur suhu dengan menggunakan termometer dengan teknik yang betul.',
          diagram: {
            title: 'Rajah: Bacaan Termometer Makmal',
            type: 'science_visual',
            svgContent: createThermometerSvg(75, 100, 'Bacaan Suhu Cecair'),
            caption: 'Perhatikan paras ketinggian cecair merkuri merah pada skala suhu Celsius (°C).'
          }
        },
        {
          id: `sai-t5-vis-03`,
          year: 5,
          subject: 'Sains',
          topic: 'Jirim (Perubahan Keadaan Air)',
          difficulty: 'Sederhana',
          question: 'Rujuk jadual eksperimen pemanasan air di atas. Pada minit ke berapakah air mencapai takat didih 100°C?',
          options: {
            A: 'Minit ke-0',
            B: 'Minit ke-5',
            C: 'Minit ke-10',
            D: 'Minit ke-15'
          },
          correctAnswer: 'D',
          explanation: 'Berdasarkan jadual, pada minit ke-15 suhu air mencapai 100°C (takat didih) dan kekal malar pada minit ke-20.',
          learningStandard: 'SP 7.1.3 Menyatakan takat beku dan takat didih air.',
          diagram: {
            title: 'Jadual Pemanasan Air Hingga Mendidih',
            type: 'table_data',
            data: {
              headers: ['Masa Pemanasan (Minit)', 'Suhu Air (°C)', 'Pemerhatian'],
              rows: [
                ['0', '28°C', 'Suhu bilik'],
                ['5', '50°C', 'Air suam'],
                ['10', '75°C', 'Wap air mula terbebas'],
                ['15', '100°C', 'Air mendidih dengan buih'],
                ['20', '100°C', 'Suhu kekal malar (takat didih)']
              ]
            },
            caption: 'Takat didih air tulen ialah 100°C pada tekanan atmosfera standard.'
          }
        }
      );
    } else if (year === 6) {
      list.push(
        {
          id: `sai-t6-vis-01`,
          year: 6,
          subject: 'Sains',
          topic: 'Interaksi Antara Hidupan',
          difficulty: 'KBAT (Aras Sederhana)',
          question: 'Berdasarkan jadual interaksi simbiosis di atas, jenis interaksi manakah yang memberikan faedah kepada satu pihak manakala pihak satu lagi tidak rugi dan tidak untung (+ / 0)?',
          options: {
            A: 'Mutualisme',
            B: 'Komensalisme',
            C: 'Parasitisme',
            D: 'Persaingan Intraspesies'
          },
          correctAnswer: 'B',
          explanation: 'Komensalisme ialah interaksi yang memberi manfaat kepada satu pihak tanpa merugikan atau menguntungkan pihak lain (contoh: Ikan Remora dan Jerung).',
          learningStandard: 'SP 4.1.2 Memerihalkan jenis interaksi simbiosis antara haiwan.',
          diagram: {
            title: 'Jadual Jenis Simbiosis Hidupan',
            type: 'table_data',
            data: {
              headers: ['Jenis Simbiosis', 'Kesan Interaksi', 'Contoh Hidupan'],
              rows: [
                ['Mutualisme', 'Kedua-dua pihak untung (+ / +)', 'Burung Tiung dan Kerbau'],
                ['Komensalisme', 'Satu untung, satu neutral (+ / 0)', 'Ikan Remora dan Ikan Jerung'],
                ['Parasitisme', 'Satu untung, satu rugi (+ / -)', 'Kutu pada kucing / Cacing pita']
              ]
            },
            caption: 'Simbiosis menerangkan perhubungan rapat antara dua spesies berlainan.'
          }
        },
        {
          id: `sai-t6-vis-02`,
          year: 6,
          subject: 'Sains',
          topic: 'Gerhana Bulan dan Gerhana Matahari',
          difficulty: 'KBAT (Aras Sederhana)',
          question: 'Rujuk jadual perbandingan fenomena gerhana di atas. Apakah susunan kedudukan jasad samawi semasa berlakunya fenomena Gerhana Bulan?',
          options: {
            A: 'Matahari ➔ Bumi ➔ Bulan',
            B: 'Matahari ➔ Bulan ➔ Bumi',
            C: 'Bumi ➔ Matahari ➔ Bulan',
            D: 'Bulan ➔ Bumi ➔ Matahari'
          },
          correctAnswer: 'A',
          explanation: 'Gerhana Bulan berlaku apabila Bumi berada di antara Matahari dan Bulan dalam satu garis lurus, menyebabkan bayang-bayang Bumi menutupi Bulan pada fasa Bulan Purnama.',
          learningStandard: 'SP 9.1.1 Memerihalkan fenomena Gerhana Bulan.',
          diagram: {
            title: 'Jadual Perbandingan Fenomena Gerhana',
            type: 'table_data',
            data: {
              headers: ['Jenis Gerhana', 'Susunan Jasad Samawi', 'Fasa Bulan'],
              rows: [
                ['Gerhana Bulan', 'Matahari ➔ Bumi ➔ Bulan', 'Bulan Purnama'],
                ['Gerhana Matahari', 'Matahari ➔ Bulan ➔ Bumi', 'Anak Bulan']
              ]
            },
            caption: 'Gerhana berlaku disebabkan sifat cahaya yang bergerak lurus.'
          }
        },
        {
          id: `sai-t6-vis-03`,
          year: 6,
          subject: 'Sains',
          topic: 'Kelajuan',
          difficulty: 'Sederhana',
          question: 'Rujuk jadual pergerakan kenderaan di atas. Kenderaan manakah yang bergerak dengan kelajuan paling tinggi?',
          options: {
            A: 'Kereta A (80 km/j)',
            B: 'Kereta B (90 km/j)',
            C: 'Kereta C (100 km/j)',
            D: 'Kereta D (70 km/j)'
          },
          correctAnswer: 'C',
          explanation: 'Kereta C mempunyai kelajuan tertinggi iaitu 100 kilometer sejam (km/j).',
          learningStandard: 'SP 7.1.2 Mengenal pasti unit kelajuan dan membandingkan kelajuan objek.',
          diagram: {
            title: 'Jadual Data Kelajuan Kenderaan',
            type: 'table_data',
            data: {
              headers: ['Kenderaan', 'Kelajuan (km/j)', 'Jarak (1 Jam)'],
              rows: [
                ['Kereta A', '80 km/j', '80 km'],
                ['Kereta B', '90 km/j', '90 km'],
                ['Kereta C', '100 km/j', '100 km'],
                ['Kereta D', '70 km/j', '70 km']
              ]
            },
            caption: 'Semakin tinggi nilai kelajuan, semakin pantas kenderaan bergerak.'
          }
        }
      );
    }
  }

  return list;
}

export async function rebuildAll() {
  const targets = [
    { file: path.resolve('./src/data/matematikTahun1.ts'), exportName: 'MATEMATIK_TAHUN_1_QUESTIONS', year: 1 as YearLevel, subject: 'Matematik' as const },
    { file: path.resolve('./src/data/sainsTahun1.ts'), exportName: 'SAINS_TAHUN_1_QUESTIONS', year: 1 as YearLevel, subject: 'Sains' as const },
    { file: path.resolve('./src/data/matematikTahun2.ts'), exportName: 'MATEMATIK_TAHUN_2_QUESTIONS', year: 2 as YearLevel, subject: 'Matematik' as const },
    { file: path.resolve('./src/data/sainsTahun2.ts'), exportName: 'SAINS_TAHUN_2_QUESTIONS', year: 2 as YearLevel, subject: 'Sains' as const },
    { file: path.resolve('./src/data/matematikTahun3.ts'), exportName: 'MATEMATIK_TAHUN_3_QUESTIONS', year: 3 as YearLevel, subject: 'Matematik' as const },
    { file: path.resolve('./src/data/sainsTahun3.ts'), exportName: 'SAINS_TAHUN_3_QUESTIONS', year: 3 as YearLevel, subject: 'Sains' as const },
    { file: path.resolve('./src/data/matematikTahun4Kbat.ts'), exportName: 'MATEMATIK_TAHUN_4_KBAT_QUESTIONS', year: 4 as YearLevel, subject: 'Matematik' as const },
    { file: path.resolve('./src/data/sainsTahun4.ts'), exportName: 'SAINS_TAHUN_4_QUESTIONS', year: 4 as YearLevel, subject: 'Sains' as const },
    { file: path.resolve('./src/data/matematikTahun5.ts'), exportName: 'MATEMATIK_TAHUN_5_QUESTIONS', year: 5 as YearLevel, subject: 'Matematik' as const },
    { file: path.resolve('./src/data/sainsTahun5.ts'), exportName: 'SAINS_TAHUN_5_QUESTIONS', year: 5 as YearLevel, subject: 'Sains' as const },
    { file: path.resolve('./src/data/matematikTahun6.ts'), exportName: 'MATEMATIK_TAHUN_6_QUESTIONS', year: 6 as YearLevel, subject: 'Matematik' as const },
    { file: path.resolve('./src/data/sainsTahun6.ts'), exportName: 'SAINS_TAHUN_6_QUESTIONS', year: 6 as YearLevel, subject: 'Sains' as const },
  ];

  for (const t of targets) {
    const mod = await import(t.file);
    const rawList: any[] = mod[t.exportName] || [];

    // Filter and sanitize standard questions:
    // IMPORTANT: Strip away any falsely attached `diagram` property from standard text questions!
    const cleanStandardQuestions: QuizQuestion[] = [];
    for (const q of rawList) {
      // Ignore any previously injected visual questions (we will re-inject verified ones)
      if (q.id && (q.id.includes('-vis-') || q.id.includes('_v_'))) {
        continue;
      }
      if (Array.isArray(q.options)) {
        continue;
      }

      let diff = q.difficulty;
      if (diff === 'Easy') diff = 'Mudah';
      if (diff === 'Medium') diff = 'Sederhana';
      if (diff === 'Hard') diff = 'Sukar';

      // Clean standard question: REMOVE unwanted/mismatched diagram
      const { diagram, ...rest } = q;
      cleanStandardQuestions.push({
        ...rest,
        difficulty: diff,
      });
    }

    const verifiedVisuals = getVerifiedVisualQuestions(t.year, t.subject);

    // Merge: Intersperse verified visuals nicely with standard questions
    const finalMerged: QuizQuestion[] = [];
    let vIdx = 0;
    for (let i = 0; i < cleanStandardQuestions.length; i++) {
      if (i % 5 === 0 && vIdx < verifiedVisuals.length) {
        finalMerged.push(verifiedVisuals[vIdx]);
        vIdx++;
      }
      finalMerged.push(cleanStandardQuestions[i]);
    }
    // Any remaining verified visuals
    while (vIdx < verifiedVisuals.length) {
      finalMerged.unshift(verifiedVisuals[vIdx]);
      vIdx++;
    }

    const fileContent = `import { QuizQuestion } from '../types';\n\nexport const ${t.exportName}: QuizQuestion[] = ${JSON.stringify(
      finalMerged,
      null,
      2
    )};\n`;

    fs.writeFileSync(t.file, fileContent, 'utf-8');
    console.log(`[Rebuilt] ${path.basename(t.file)}: ${finalMerged.length} total questions (${verifiedVisuals.length} verified visual questions, ${cleanStandardQuestions.length} standard questions without mismatch).`);
  }
}

rebuildAll();
