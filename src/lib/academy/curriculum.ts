import type { AcademyTrack } from "./types";
import { legalTrack } from "./tracks/legal";
import { teamTrack } from "./tracks/team";
import { fundraisingTrack } from "./tracks/fundraising";
import { financeTrack } from "./tracks/finance";
import { productTrack } from "./tracks/product";
import { gtmTrack } from "./tracks/gtm";
import { pitchingTrack } from "./tracks/pitching";
import { operationsTrack } from "./tracks/operations";

export { PASS_SCORE, EXAM_PASS_SCORE, QUIZ_COOLDOWN_MS, EXAM_COOLDOWN_MS } from "./types";
export type { AcademyTrack, Lesson, LessonSection, QuizQuestion } from "./types";

export const ACADEMY_TRACKS: AcademyTrack[] = [
  legalTrack,
  teamTrack,
  fundraisingTrack,
  financeTrack,
  productTrack,
  gtmTrack,
  pitchingTrack,
  operationsTrack,
];

export function getTrack(trackId: string): AcademyTrack | undefined {
  return ACADEMY_TRACKS.find((t) => t.id === trackId);
}

export const ACADEMY_STATS = {
  tracks: ACADEMY_TRACKS.length,
  lessons: ACADEMY_TRACKS.reduce((sum, t) => sum + t.lessons.length, 0),
  quizzes: ACADEMY_TRACKS.reduce((sum, t) => sum + t.quiz.length, 0),
};