export interface AboutRequest {
  title: string;
  content: string;
}
export interface About extends AboutRequest {
  id: string;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}
