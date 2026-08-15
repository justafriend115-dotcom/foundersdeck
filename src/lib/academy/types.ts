export interface LessonSection {
  heading: string;
  paragraphs: string[];
}

export interface Lesson {
  id: string;
  title: string;
  readMinutes: number;
  sections: LessonSection[];
  examples?: string[];
  actionItems: string[];
  keyPoints: string[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface AcademyTrack {
  id: string;
  title: string;
  tagline: string;
  icon: "scale" | "users" | "banknote" | "calculator" | "target" | "megaphone" | "mic" | "settings";
  estimatedHours: string;
  free: boolean;
  lessons: Lesson[];
  quiz: QuizQuestion[];
  exam: QuizQuestion[];
}

export const PASS_SCORE = 80;
export const EXAM_PASS_SCORE = 70;
export const QUIZ_COOLDOWN_MS = 5 * 60 * 60 * 1000; // 5 hours after a failed quiz
export const EXAM_COOLDOWN_MS = 24 * 60 * 60 * 1000; // 24 hours after a failed exam

export type { AcademyTrack as Track };