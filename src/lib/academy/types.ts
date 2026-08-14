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
}

export const PASS_SCORE = 80;

export type { AcademyTrack as Track };