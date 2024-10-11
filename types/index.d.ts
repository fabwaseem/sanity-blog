import { Image, TypedObject } from "sanity";

export type Post = {
  title: string;
  slug: {
    current: string;
  };
  mainImage: Image;
  publishedAt: string;
  body: TypedObject | TypedObject[];
  featured: boolean;
  recommendations: boolean;
  viewCount: number;
  category: Category;
  author: Author;
};

export type Category = {
  title: string;
  slug: {
    current: string;
  };
  description: string;
};

export type Author = {
  name: string;
  image: string;
  slug: {
    current: string;
  };
  bio: TypedObject[];
};
