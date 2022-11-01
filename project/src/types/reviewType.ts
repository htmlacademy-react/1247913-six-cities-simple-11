export type reviewType = {
  id: number;
  user: {
    id: number;
    name: string;
    avatarUrl: string;
  };
  rating: number;
  comment: string[];
  date: string;
}
