import * as fs from 'fs';
import { QuizQuestion } from '../src/types';

const biTopics = [
  'Everyday Life & Routines',
  'Actions & Right Now',
  'Food & Healthy Living',
  'Rules, Signs & Past Simple',
];

const biQuestions: QuizQuestion[] = [];
function addBI(t: number, q: number, sub: string, diff: 'Mudah' | 'Sederhana' | 'Sukar', quest: string, opt: any, ans: 'A' | 'B' | 'C' | 'D', exp: string, ls: string) {
  biQuestions.push({
    id: `bi3-t${t + 1}-${String(q).padStart(2, '0')}`,
    year: 3,
    subject: 'Bahasa Inggeris',
    topic: biTopics[t],
    subtopic: sub,
    difficulty: diff,
    question: quest,
    options: opt,
    correctAnswer: ans,
    explanation: exp,
    learningStandard: ls,
  });
}

// Topic 1: Everyday Life & Routines
addBI(0, 1, 'Telling Time (O\'clock)', 'Mudah', 'Look at the clock showing both hands pointing to 12. What time is it?', { A: 'It is twelve o\'clock.', B: 'It is half past twelve.', C: 'It is one o\'clock.', D: 'It is six o\'clock.' }, 'A', 'When the long hand and short hand are both at 12, it is twelve o\'clock.', '1.2.5 Understand the time');
addBI(0, 2, 'Telling Time (Half Past)', 'Mudah', 'The long hand points to 6 and the short hand points between 3 and 4. What time is it?', { A: 'It is half past three.', B: 'It is half past four.', C: 'It is three o\'clock.', D: 'It is six o\'clock.' }, 'A', 'When the minute hand points to 6, it is half past the hour: half past three.', '1.2.5 Understand the time');
addBI(0, 3, 'Daily Morning Routine', 'Mudah', 'Every morning before going to school, Daniel always _______ his teeth.', { A: 'brushes', B: 'brush', C: 'brushing', D: 'brushed' }, 'A', 'For singular third person (Daniel), we add -es to brush in present simple: brushes.', '2.1.2 Simple present routines');
addBI(0, 4, 'Daily Routine (Wake Up)', 'Mudah', 'What time do you usually _______ in the morning?', { A: 'wake up', B: 'wakes up', C: 'waking up', D: 'woke up' }, 'A', 'After "do you", we use the base form of the verb: "wake up".', '2.1.1 Daily activities');
addBI(0, 5, 'Adverbs of Frequency (Always)', 'Mudah', 'I _______ do my homework before dinner. I never forget it.', { A: 'always', B: 'never', C: 'sometimes', D: 'rarely' }, 'A', '"Always" means 100% of the time, fitting "never forget".', '2.1.5 Adverbs of frequency');
addBI(0, 6, 'Adverbs of Frequency (Never)', 'Mudah', 'Ali dislikes spicy food, so he _______ eats chili sauce.', { A: 'never', B: 'always', C: 'often', D: 'usually' }, 'A', '"Never" means not at any time.', '2.1.5 Adverbs of frequency');
addBI(0, 7, 'Adverbs of Frequency (Sometimes)', 'Sederhana', 'On weekends, Mei Ling _______ goes cycling with her father if it doesn\'t rain.', { A: 'sometimes', B: 'never', C: 'yesterday', D: 'tomorrow' }, 'A', '"Sometimes" describes an action done occasionally.', '2.1.5 Adverbs of frequency');
addBI(0, 8, 'Days of the Week', 'Mudah', 'Which day comes right after Tuesday?', { A: 'Wednesday', B: 'Monday', C: 'Thursday', D: 'Friday' }, 'A', 'The order of days: Monday, Tuesday, Wednesday...', '1.2.1 Days of the week');
addBI(0, 9, 'Present Simple (Have/Has)', 'Mudah', 'My brother _______ a soccer practice every Friday afternoon.', { A: 'has', B: 'have', C: 'having', D: 'had' }, 'A', 'Singular subject "My brother" takes "has".', '2.1.2 Have got / has');
addBI(0, 10, 'After School Activity', 'Mudah', 'After school, Sarah likes to _______ books in her bedroom.', { A: 'read', B: 'reads', C: 'reading', D: 'rode' }, 'A', 'After "likes to", we use the base form of the verb "read".', '2.1.1 Hobbies');
addBI(0, 11, 'Do vs Does in Questions', 'Sederhana', '_______ your sister ride her bicycle to school every day?', { A: 'Does', B: 'Do', C: 'Is', D: 'Are' }, 'A', 'Singular subject "your sister" requires auxiliary "Does".', '2.1.2 Question forms');
addBI(0, 12, 'Negative Present Simple', 'Sederhana', 'They _______ like watching scary movies on television.', { A: 'don\'t', B: 'doesn\'t', C: 'isn\'t', D: 'aren\'t' }, 'A', 'Plural subject "They" takes "don\'t" with base verbs.', '2.1.2 Negative forms');
addBI(0, 13, 'School Subjects (Art)', 'Mudah', 'In this subject, students draw, paint pictures and make crafts. What is it?', { A: 'Art', B: 'Science', C: 'Physical Education', D: 'Maths' }, 'A', 'Art is the subject where pupils paint and draw.', '1.2.1 School subjects');
addBI(0, 14, 'School Subjects (Science)', 'Mudah', 'We learn about animals, plants and the solar system in _______.', { A: 'Science', B: 'Music', C: 'English', D: 'History' }, 'A', 'Science covers living things and natural phenomena.', '1.2.1 School subjects');
addBI(0, 15, 'Reading Context KBAT', 'Sukar', 'Read the timetable: "Kamal has swimming on Monday at 4:00 p.m. and violin class on Thursday."\nHow many days a week does Kamal have swimming class?', { A: 'One day a week', B: 'Two days a week', C: 'Every day', D: 'At weekends' }, 'A', 'Kamal only has swimming on Monday, which is one day a week.', '3.2.2 Reading comprehension');

// Topic 2: Actions & Right Now
addBI(1, 1, 'Present Continuous (is + verb-ing)', 'Mudah', 'Look at the playground! Aiman _______ a red kite in the sky.', { A: 'is flying', B: 'are flying', C: 'fly', D: 'flew' }, 'A', 'Singular subject "Aiman" takes "is flying" for actions happening now.', '2.1.3 Present continuous tense');
addBI(1, 2, 'Present Continuous Plural (are + verb-ing)', 'Mudah', 'The children _______ football on the grass field right now.', { A: 'are playing', B: 'is playing', C: 'plays', D: 'played' }, 'A', 'Plural subject "The children" takes "are playing".', '2.1.3 Present continuous tense');
addBI(1, 3, 'Spelling of -ing Form (run)', 'Mudah', 'What is the correct -ing spelling for the verb "run"?', { A: 'running', B: 'runing', C: 'runneing', D: 'runs' }, 'A', 'Short vowel + consonant doubles the final consonant: run -> running.', '4.3.2 Spelling rules');
addBI(1, 4, 'Spelling of -ing Form (swim)', 'Mudah', 'The correct spelling for "swim + ing" is:', { A: 'swimming', B: 'swiming', C: 'swimeing', D: 'swimms' }, 'A', 'Double the m for swim: swimming.', '4.3.2 Spelling rules');
addBI(1, 5, 'Spelling of -ing Form (make)', 'Sederhana', 'What is the -ing form of the verb "make"?', { A: 'making', B: 'makeing', C: 'makking', D: 'makes' }, 'A', 'Drop the silent -e before adding -ing: making.', '4.3.2 Spelling rules');
addBI(1, 6, 'Negative Present Continuous', 'Sederhana', 'Farah isn\'t reading a book. She _______ television.', { A: 'is watching', B: 'are watching', C: 'watch', D: 'watched' }, 'A', '"She is watching" describes what she is doing currently.', '2.1.3 Present continuous');
addBI(1, 7, 'Question Present Continuous', 'Sederhana', '"_______ they doing their English project together?" "Yes, they are."', { A: 'Are', B: 'Is', C: 'Do', D: 'Does' }, 'A', 'Plural subject "they" matches auxiliary "Are".', '2.1.3 Questions with be + ing');
addBI(1, 8, 'Subject-Verb Agreement (I am)', 'Mudah', 'Listen! I _______ a traditional Malay song.', { A: 'am singing', B: 'is singing', C: 'are singing', D: 'sings' }, 'A', 'The pronoun "I" always uses "am singing".', '2.1.3 Present continuous with I');
addBI(1, 9, 'Action Verbs in Sports', 'Mudah', 'In basketball, players _______ the ball into the hoop.', { A: 'throw', B: 'kick', C: 'hit with a bat', D: 'kick with feet' }, 'A', 'Basketball players throw or shoot the ball into the basket.', '1.2.2 Sports vocabulary');
addBI(1, 10, 'Sports: Gymnastics', 'Mudah', 'Hana is doing _______ in the indoor sports hall. She is very flexible.', { A: 'gymnastics', B: 'football', C: 'cycling', D: 'sailing' }, 'A', 'Gymnastics involves flexible acrobatic movements.', '1.2.2 Sports vocabulary');
addBI(1, 11, 'Can / Can\'t for Ability', 'Mudah', 'A dolphin is an amazing sea creature. It _______ swim very fast.', { A: 'can', B: 'can\'t', C: 'must', D: 'shouldn\'t' }, 'A', '"Can" expresses ability: dolphins can swim fast.', '2.1.4 Modal can for ability');
addBI(1, 12, 'Can\'t for Inability', 'Mudah', 'Penguins have wings, but they _______ fly in the sky.', { A: 'can\'t', B: 'can', C: 'must', D: 'are' }, 'A', 'Penguins cannot fly in the air; they swim.', '2.1.4 Modal can\'t');
addBI(1, 13, 'Action at the Moment', 'Mudah', 'Be quiet please! The baby _______ soundly in the crib.', { A: 'is sleeping', B: 'are sleeping', C: 'sleep', D: 'slept' }, 'A', '"The baby is sleeping" is happening right now.', '2.1.3 Present continuous');
addBI(1, 14, 'Short Answer Formation', 'Sederhana', '"Is Adam riding a horse?" "No, he _______."', { A: 'isn\'t', B: 'aren\'t', C: 'doesn\'t', D: 'don\'t' }, 'A', 'Short negative answer for singular: "No, he isn\'t".', '2.1.3 Short answers');
addBI(1, 15, 'Picture Context Analysis KBAT', 'Sukar', 'In the park, John is holding a racket and hitting a shuttlecock over a net. What sport is John playing?', { A: 'Badminton', B: 'Football', C: 'Swimming', D: 'Volleyball' }, 'A', 'A racket, shuttlecock, and net are the equipment used in badminton.', '3.2.2 Deduction and vocabulary');

// Topic 3: Food & Healthy Living
addBI(2, 1, 'Countable Nouns', 'Mudah', 'Which of the following is a countable noun that can be counted individually?', { A: 'Apples', B: 'Milk', C: 'Water', D: 'Rice' }, 'A', 'Apples can be counted (one apple, two apples).', '1.2.4 Countable and uncountable nouns');
addBI(2, 2, 'Uncountable Nouns', 'Mudah', 'Which of the following is an uncountable noun?', { A: 'Milk', B: 'Orange', C: 'Carrot', D: 'Egg' }, 'A', 'Milk is a liquid and is uncountable.', '1.2.4 Uncountable nouns');
addBI(2, 3, 'Usage of "Some" (Affirmative)', 'Mudah', 'There is _______ orange juice left in the glass pitcher.', { A: 'some', B: 'any', C: 'many', D: 'a' }, 'A', '"Some" is used in positive affirmative sentences with uncountable nouns.', '1.2.4 Some and any');
addBI(2, 4, 'Usage of "Any" (Negative)', 'Mudah', 'There aren\'t _______ biscuits in the plastic tin.', { A: 'any', B: 'some', C: 'much', D: 'a' }, 'A', '"Any" is used in negative sentences: "aren\'t any".', '1.2.4 Some and any');
addBI(2, 5, 'Usage of "Any" (Questions)', 'Mudah', 'Do you have _______ fresh strawberries in the fridge?', { A: 'any', B: 'some', C: 'much', D: 'an' }, 'A', '"Any" is commonly used in general questions.', '1.2.4 Some and any');
addBI(2, 6, 'Healthy Food Choices', 'Mudah', 'Which snack is the healthiest choice for recess?', { A: 'A bowl of fresh fruits', B: 'A bag of potato chips', C: 'A lollipop candy', D: 'A cup of fizzy soda' }, 'A', 'Fresh fruits provide vitamins and minerals for a healthy body.', '1.2.1 Healthy habits');
addBI(2, 7, 'Food Groups (Dairy)', 'Mudah', 'Cheese, butter, and yoghurt belong to which food group?', { A: 'Dairy products', B: 'Grains', C: 'Vegetables', D: 'Meat and poultry' }, 'A', 'Dairy products are foods made from milk.', '1.2.1 Food vocabulary');
addBI(2, 8, 'Meal of the Day (Breakfast)', 'Mudah', 'The meal we eat early in the morning before starting our day is called:', { A: 'Breakfast', B: 'Lunch', C: 'Dinner', D: 'Supper' }, 'A', 'Breakfast is the first meal of the day.', '1.2.1 Meals of the day');
addBI(2, 9, 'Cooking Verbs (Chop)', 'Sederhana', 'Mother uses a sharp knife to _______ the onions on a cutting board.', { A: 'chop', B: 'boil', C: 'pour', D: 'bake' }, 'A', '"Chop" means to cut into small pieces using a knife.', '1.2.3 Cooking verbs');
addBI(2, 10, 'Cooking Verbs (Pour)', 'Mudah', 'Please _______ some warm water into the glass.', { A: 'pour', B: 'slice', C: 'peel', D: 'fry' }, 'A', '"Pour" is used when transferring a liquid into a container.', '1.2.3 Cooking verbs');
addBI(2, 11, 'There is vs There are (Singular/Uncountable)', 'Sederhana', '_______ some cheese on the plate.', { A: 'There is', B: 'There are', C: 'There were', D: 'Are there' }, 'A', '"Cheese" is uncountable, so we use singular "There is".', '1.2.4 Quantifiers');
addBI(2, 12, 'There are (Plural Countable)', 'Mudah', '_______ five bananas in the basket.', { A: 'There are', B: 'There is', C: 'Is there', D: 'It is' }, 'A', 'Plural countable noun "five bananas" takes "There are".', '1.2.4 Quantifiers');
addBI(2, 13, 'Taste of Food (Sweet)', 'Mudah', 'Honey and ripe mangoes taste very _______.', { A: 'sweet', B: 'sour', C: 'salty', D: 'bitter' }, 'A', 'Honey and ripe mangoes have a sweet sugary taste.', '1.2.1 Taste adjectives');
addBI(2, 14, 'Vegetables (Carrots & Broccoli)', 'Mudah', 'Carrots, spinach, and broccoli are types of _______.', { A: 'vegetables', B: 'desserts', C: 'drinks', D: 'fruits' }, 'A', 'Carrots, spinach and broccoli are nutritious vegetables.', '1.2.1 Food categories');
addBI(2, 15, 'Nutritional Balance KBAT', 'Sukar', 'Why is drinking 8 glasses of plain water daily good for our health?', { A: 'It keeps our body hydrated and helps organs function well', B: 'It has lots of artificial sugar', C: 'It makes teeth turn yellow', D: 'It replaces having to eat food' }, 'A', 'Plain water hydrates the body and supports digestion and focus.', '2.1.1 Healthy lifestyle reasoning');

// Topic 4: Rules, Signs & Past Simple
addBI(3, 1, 'Modal "Must" for Obligation', 'Mudah', 'In the school library, you _______ keep quiet and respect others.', { A: 'must', B: 'mustn\'t', C: 'can\'t', D: 'shouldn\'t' }, 'A', '"Must" expresses a strict rule or duty.', '2.1.4 Modals for rules');
addBI(3, 2, 'Modal "Mustn\'t" for Prohibition', 'Mudah', 'You _______ run near the slippery swimming pool. It is dangerous.', { A: 'mustn\'t', B: 'must', C: 'can', D: 'may' }, 'A', '"Mustn\'t" (must not) means you are not allowed to do it.', '2.1.4 Modals for rules');
addBI(3, 3, 'Classroom Rules', 'Mudah', 'Students _______ listen attentively when the teacher is explaining.', { A: 'must', B: 'mustn\'t', C: 'can\'t', D: 'never' }, 'A', 'Listening to the teacher is a mandatory classroom rule.', '2.1.4 Rules and regulations');
addBI(3, 4, 'Traffic Signs (Stop Sign)', 'Mudah', 'When drivers see a red octagonal STOP sign, they _______ stop their car.', { A: 'must', B: 'mustn\'t', C: 'can\'t', D: 'shouldn\'t' }, 'A', 'Drivers must come to a complete stop at a STOP sign.', '1.2.2 Environmental signs');
addBI(3, 5, 'No Littering Sign', 'Mudah', 'A sign showing a person throwing trash into a bin with a cross over the floor means:', { A: 'Do not throw rubbish on the ground', B: 'Do not wash hands', C: 'Do not ride bicycles', D: 'Do not run here' }, 'A', 'The "No Littering" sign forbids throwing trash anywhere except bins.', '1.2.2 Environmental signs');
addBI(3, 6, 'Past Simple of "Be" (Singular Was)', 'Mudah', 'Yesterday, Adam _______ absent from school because he had a fever.', { A: 'was', B: 'were', C: 'is', D: 'are' }, 'A', 'Singular subject "Adam" in the past takes "was".', '2.1.3 Past simple was/were');
addBI(3, 7, 'Past Simple of "Be" (Plural Were)', 'Mudah', 'We _______ at the National Zoo last Saturday morning.', { A: 'were', B: 'was', C: 'are', D: 'is' }, 'A', 'Plural pronoun "We" in the past takes "were".', '2.1.3 Past simple was/were');
addBI(3, 8, 'Negative Past Simple (Wasn\'t)', 'Sederhana', 'Lina _______ at home yesterday afternoon; she was at the clinic.', { A: 'wasn\'t', B: 'weren\'t', C: 'isn\'t', D: 'aren\'t' }, 'A', 'Singular negative in past: "wasn\'t".', '2.1.3 Past simple negative');
addBI(3, 9, 'Regular Past Verb (-ed)', 'Mudah', 'Last night, my family _______ an interesting documentary on TV.', { A: 'watched', B: 'watch', C: 'watching', D: 'watches' }, 'A', 'Add -ed for regular past tense verb: "watched".', '2.1.3 Past simple regular verbs');
addBI(3, 10, 'Regular Past Verb (played)', 'Mudah', 'The boys _______ badminton in the community hall two days ago.', { A: 'played', B: 'play', C: 'plays', D: 'playing' }, 'A', 'Past time marker "two days ago" requires past tense "played".', '2.1.3 Past simple regular verbs');
addBI(3, 11, 'Time Markers for Past Simple', 'Mudah', 'Which word signals that an action happened in the past?', { A: 'Yesterday', B: 'Now', C: 'Tomorrow', D: 'Every day' }, 'A', '"Yesterday" indicates past time.', '2.1.3 Time expressions');
addBI(3, 12, 'Question with Was/Were', 'Sederhana', '"_______ you at the cinema yesterday evening?" "Yes, I was."', { A: 'Were', B: 'Was', C: 'Did', D: 'Are' }, 'A', 'Pronoun "you" always pairs with "Were" in past questions.', '2.1.3 Past simple questions');
addBI(3, 13, 'Sign at the Hospital', 'Mudah', 'A sign showing a finger over the mouth with the word "SILENCE" means:', { A: 'You must be quiet', B: 'You must eat food', C: 'You must clap loudly', D: 'You must run fast' }, 'A', 'The silence sign reminds visitors to keep quiet in hospital wards.', '1.2.2 Public signs');
addBI(3, 14, 'Pedestrian Crossing Rule', 'Sederhana', 'You _______ look left and right before crossing the busy street.', { A: 'must', B: 'mustn\'t', C: 'shouldn\'t', D: 'can\'t' }, 'A', 'Looking both ways ensures road safety and is essential.', '2.1.4 Safety rules');
addBI(3, 15, 'Comprehension & Rule Evaluation KBAT', 'Sukar', 'A sign in the national park says: "DO NOT FEED THE MONKEYS". Why is this rule implemented?', { A: 'To protect visitors from monkey bites and prevent monkeys from eating unhealthy food', B: 'Because monkeys are not hungry', C: 'Because monkeys only eat ice cream', D: 'To encourage monkeys to play with trash' }, 'A', 'Feeding wild animals makes them aggressive and disrupts their natural diet.', '3.2.2 Inferring reasons behind rules');

fs.writeFileSync('src/data/englishTahun3.ts', `import { QuizQuestion } from '../types';\n\nexport const ENGLISH_TAHUN_3_QUESTIONS: QuizQuestion[] = ${JSON.stringify(biQuestions, null, 2)};\n`, 'utf8');
console.log(`Generated ${biQuestions.length} questions for English Tahun 3.`);
