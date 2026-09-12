import { QuizQuestion } from '../types';
import {
  PI_T4_TOPIC_1_QUESTIONS,
  PI_T4_TOPIC_2_QUESTIONS,
  PI_T4_TOPIC_3_QUESTIONS,
} from './pendidikanIslamTahun4_Topics1_3';
import {
  PI_T4_TOPIC_4_QUESTIONS,
  PI_T4_TOPIC_5_QUESTIONS,
} from './pendidikanIslamTahun4_Topics4_5';

export const PENDIDIKAN_ISLAM_TAHUN_4_QUESTIONS: QuizQuestion[] = [
  ...PI_T4_TOPIC_1_QUESTIONS,
  ...PI_T4_TOPIC_2_QUESTIONS,
  ...PI_T4_TOPIC_3_QUESTIONS,
  ...PI_T4_TOPIC_4_QUESTIONS,
  ...PI_T4_TOPIC_5_QUESTIONS,
];
