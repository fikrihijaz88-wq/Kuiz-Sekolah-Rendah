import { KSSR_TOPICS, INITIAL_KSSR_QUESTIONS } from '../src/data/kssrQuestions';

console.log('Total INITIAL_KSSR_QUESTIONS:', INITIAL_KSSR_QUESTIONS.length);

const summary: Record<number, Record<string, { topicName: string; count: number }[]>> = {};

for (let y = 1; y <= 6; y++) {
  summary[y] = {};
}

// Group all topics
for (const t of KSSR_TOPICS) {
  if (!summary[t.year][t.subject]) {
    summary[t.year][t.subject] = [];
  }
  const matching = INITIAL_KSSR_QUESTIONS.filter((q) => {
    if (q.year !== t.year || q.subject !== t.subject) return false;
    const qTop = q.topic.toLowerCase().trim();
    const tName = t.name.toLowerCase().trim();
    return qTop === tName || qTop.includes(tName) || tName.includes(qTop);
  });
  summary[t.year][t.subject].push({ topicName: t.name, count: matching.length });
}

for (let y = 1; y <= 6; y++) {
  console.log(`\n=================== TAHUN ${y} ===================`);
  for (const [subj, topics] of Object.entries(summary[y])) {
    const totalQ = topics.reduce((acc, cur) => acc + cur.count, 0);
    const minQ = Math.min(...topics.map((t) => t.count));
    const all15 = topics.every((t) => t.count >= 15);
    console.log(
      `  [${subj}] - ${topics.length} topics | Total Q: ${totalQ} | Min Q/topic: ${minQ} | All >= 15: ${all15}`
    );
    if (!all15) {
      topics.forEach((t) => {
        if (t.count < 15) {
          console.log(`     * "${t.topicName}": only ${t.count} questions`);
        }
      });
    }
  }
}
