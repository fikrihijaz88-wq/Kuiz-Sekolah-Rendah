import { QuizQuestion } from '../types';
import {
  PI_T2_TOPIC_1_QUESTIONS,
  PI_T2_TOPIC_2_QUESTIONS,
  PI_T2_TOPIC_3_QUESTIONS,
} from './pendidikanIslamTahun2_Topics1_3';
import {
  PI_T2_TOPIC_4_QUESTIONS,
  PI_T2_TOPIC_5_QUESTIONS,
} from './pendidikanIslamTahun2_Topics4_5';

export const PENDIDIKAN_ISLAM_TAHUN_2_QUESTIONS: QuizQuestion[] = [
  ...PI_T2_TOPIC_1_QUESTIONS,
  ...PI_T2_TOPIC_2_QUESTIONS,
  ...PI_T2_TOPIC_3_QUESTIONS,
  ...PI_T2_TOPIC_4_QUESTIONS,
  ...PI_T2_TOPIC_5_QUESTIONS,
];
