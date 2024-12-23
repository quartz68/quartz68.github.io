export interface Post {
  title: string;
  description?: string;
  date: Date;
  tags?: Array<{ label: string }>;
}
