import { ProfileInterface } from '../../auth/types/profile.interface';

export interface ArticleInterface {
  body: string;
  createdAt: string;
  description: string;
  favourited: boolean;
  favouritesCount: number;
  slug: string;
  taglist: string[];
  title: string[];
  updatedAt: string;
  author: ProfileInterface;
}
