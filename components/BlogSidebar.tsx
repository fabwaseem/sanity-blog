import React from "react";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { fetchCategories, fetchPosts } from "@/sanity/lib/utisl";
import { Category, Post } from "@/types";
import { PortableText } from "next-sanity";

const BlogSidebar = async () => {
  const latestPosts: Post[] = await fetchPosts({
    orderCondition: "publishedAt desc",
    limit: 5,
  });
  const categories: Category[] = await fetchCategories();

  return (
    <div className="space-y-6 md:max-w-xs md:sticky top-10 h-fit">
      <div>
        <h3 className="text-sm font-bold">Recent</h3>
        <div className="mt-8 space-y-6">
          {latestPosts &&
            latestPosts.map((post, index) => (
              <Link href={`/blog/${post.slug.current}`} key={index}>
                <h3 className="text-primary text-sm font-semibold">
                  {post.title}
                </h3>
                <PortableText
                  // @ts-ignore
                  value={post.body.slice(1, 2)}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="line-clamp-2 text-xs my-2">{children}</p>
                      ),
                    },
                  }}
                />
                <p className="text-xs font-semibold text-black/70">
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(post.publishedAt))}
                </p>
              </Link>
            ))}
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="text-sm font-bold">Newsletter</h3>
        <p className="text-xs mt-2">
          Get all the latest content delivered to you a few times a month
        </p>
        <div className="mt-4 flex justify-center max-w-xl w-full mx-auto relative">
          <Input
            type="email"
            placeholder="Email address"
            className="w-full rounded-full mr-20 bg-transparent text-black placeholder:text-black/50 text-sm h-12"
          />
          <Button
            className="absolute right-0 top-1/2 -translate-y-1/2 h-full"
            size={"sm"}
          >
            Subscribe
          </Button>
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="text-sm font-bold">Categories</h3>
        <div>
          {categories &&
            categories.map((category, index) => (
              <Link
                key={index}
                // `/blog/category/${category.slug.current}`
                href={"#"}
                className="block text-xs font-bold text-black py-3 border-b last:border-none"
              >
                {category.title}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
