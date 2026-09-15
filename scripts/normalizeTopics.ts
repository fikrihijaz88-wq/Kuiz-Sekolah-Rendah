import * as fs from 'fs';

function normalizeBlocks(filePath: string, targetTopics: string[]) {
  const content = fs.readFileSync(filePath, 'utf8');
  const parts = content.split(/(\/\/\s*={5,}[\s\S]*?(?:TOPIK|UNIT)\s*\d+[\s\S]*?\/\/\s*={5,})/gi);
  if (parts.length >= targetTopics.length * 2) {
    let topicIdx = 0;
    for (let i = 1; i < parts.length; i += 2) {
      const topicName = targetTopics[topicIdx];
      topicIdx++;
      if (parts[i + 1]) {
        parts[i + 1] = parts[i + 1].replace(/topic:\s*(['"`])[^'"`]+\1/g, `topic: '${topicName}'`);
      }
    }
    fs.writeFileSync(filePath, parts.join(''), 'utf8');
    console.log(`Normalized ${filePath}`);
  } else {
    console.log(`Warning: Could not split ${filePath}, parts length = ${parts.length}`);
  }
}

normalizeBlocks('src/data/bahasaMelayuTahun1.ts', [
  'Huruf, Suku Kata & Sebutan',
  'Golongan Kata & Kata Nama Asas',
  'Kata Kerja & Kata Adjektif',
  'Kata Hubung & Kata Sendi Nama',
  'Membina Ayat & Tanda Baca',
]);

normalizeBlocks('src/data/englishTahun1.ts', [
  'Phonics & Alphabet',
  'Friends & Greetings',
  'At School & Classroom Objects',
  "Let's Play & Toys",
  'Pet Show & Animals',
]);
