export interface AboutRequest {
  title: string;
  content: string;
}
export interface About extends AboutRequest {
  id: number;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}
