import { KSSR_TOPICS } from '../src/data/kssrQuestions';

const grouped: Record<string, { id: string; name: string }[]> = {};
for (const t of KSSR_TOPICS) {
  const k = `Tahun ${t.year} - ${t.subject}`;
  if (!grouped[k]) grouped[k] = [];
  grouped[k].push({ id: t.id, name: t.name });
}

for (const [k, v] of Object.entries(grouped)) {
  console.log(`${k} (${v.length} topics):`);
  v.forEach((t, i) => console.log(`   ${i + 1}. [${t.id}] "${t.name}"`));
}
