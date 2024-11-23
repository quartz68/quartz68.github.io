export interface Coursework {
  title: string;
  description?: string;
  website?: string;
  github?: string;
  tags?: Array<{ label: string }>;
  // thumbnail: string;
}
