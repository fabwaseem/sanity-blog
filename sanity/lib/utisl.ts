import { Category, Post } from "@/types";
import { client } from "./client";

interface FetchPostsOptions {
  filterCondition?: string;
  orderCondition?: string;
  limit?: number;
  offset?: number;
}

export const fetchPosts = async ({
  filterCondition = "",
  orderCondition = "",
  limit = 0,
  offset = 0,
}: FetchPostsOptions): Promise<Post[]> => {
  let query = '*[_type == "post"';
  if (filterCondition) query += ` ${filterCondition}`;
  query += "]";
  if (orderCondition) query += `|order(${orderCondition})`;
  if (limit !== undefined && limit > 0)
    query += `[${offset}...${offset + limit}]`;
  query += `{
    title, body, slug, mainImage, publishedAt, category->{title, slug, description}, author->{name, image, slug, bio}
  }`;
  return await client.fetch(query);
};

export const fetchPostBySlug = async (slug: string): Promise<Post> => {
  return await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,title, body, slug, mainImage, publishedAt, category->{title, slug, description}, author->{name, image, slug, bio}
    }`,
    { slug }
  );
};

export const fetchCategories = async (): Promise<Category[]> => {
  return await client.fetch('*[_type == "category"]{title, slug, description}');
};
