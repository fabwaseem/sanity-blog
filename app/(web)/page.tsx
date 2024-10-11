import BlogSidebar from "@/components/BlogSidebar";
import { Icons } from "@/components/Icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { urlForImage } from "@/sanity/lib/image";
import { fetchPosts } from "@/sanity/lib/utisl";
import { Post } from "@/types";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 1;

const page = async () => {
  const featuredPosts: Post[] = await fetchPosts({
    filterCondition: " && featured == true",
  });

  const recommendedPosts: Post[] = await fetchPosts({
    filterCondition: " && recommendations == true",
    limit: 3,
  });

  const latestPosts: Post[] = await fetchPosts({
    orderCondition: "publishedAt desc",
    limit: 10,
  });

  const trendingPosts: Post[] = await fetchPosts({
    orderCondition: "viewCount desc",
    limit: 3,
  });

  return (
    <>
      <section className="section-paddings !pt-32">
        <div className="container">
          <Carousel className="w-full relative">
            <CarouselContent>
              {featuredPosts &&
                featuredPosts.map((post, index) => (
                  <CarouselItem key={index}>
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="relative min-h-72 rounded-lg overflow-hidden "
                    >
                      <Image
                        src={urlForImage(post.mainImage).toString()}
                        alt={post.title}
                        fill
                        className={"object-cover -z-10"}
                      />
                      <div className="absolute w-full h-full bg-black/35 -z-10"></div>
                      <div className="pt-56 pb-3 h-full pl-5 md:pl-10 ">
                        <div className="flex text-white gap-2 text-sm  items-center">
                          <p>
                            {new Intl.DateTimeFormat("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "2-digit",
                            }).format(new Date(post.publishedAt))}
                          </p>
                          <Icons.folder size={20} />
                          <p className="text-secondary font-bold">
                            {post.category?.title}
                          </p>
                        </div>
                        <h3 className="text-white font-bold max-w-md mt-2">
                          {post.title}
                        </h3>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <div className="absolute right-5 bottom-0 ">
              <CarouselPrevious className="static mr-4 bg-white text-black" />
              <CarouselNext className="static bg-white text-black" />
            </div>
          </Carousel>
        </div>
      </section>
      <section className="section-paddings ">
        <div className="container">
          <h3 className="text-black font-semibold">News & Posts</h3>
          <p className="max-w-sm mt-2 text-sm">
            All the aspects you cherish from the conference compressed into a
            single-day virtual event.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-10">
            <div className=" flex flex-col gap-10">
              {latestPosts &&
                latestPosts.map((post, index) => (
                  <Link
                    href={`/blog/${post.slug.current}`}
                    key={index}
                    className="flex gap-3 max-sm:flex-col"
                  >
                    <div className="pb-[80%] sm:pb-[25%] sm:w-72 w-full shrink-0 relative">
                      <Image
                        src={urlForImage(post.mainImage).toString()}
                        alt={post.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <div className="flex gap-2 text-xs  items-center font-semibold">
                        <Icons.folder size={16} className="text-primary" />
                        <p className="text-secondary ">
                          {post.category?.title}
                        </p>
                      </div>
                      <h3 className="text-primary mt-3 font-bold">
                        {post.title}
                      </h3>
                      <PortableText
                        // @ts-ignore
                        value={post.body.slice(1, 2)}
                        components={{
                          block: {
                            normal: ({ children }) => (
                              <p className="line-clamp-5 text-xs mt-3 font-popins">
                                {children}
                              </p>
                            ),
                          },
                        }}
                      />
                      <Separator className="my-4" />
                      <div className="flex gap-2 text-xs  items-center justify-between ">
                        <p className="font-semibold">
                          {new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                          }).format(new Date(post.publishedAt))}
                        </p>
                        <div className="flex items-center gap-2">
                          <Icons.message className="text-primary" size={16} />{" "}
                          <p>5 Comments</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            <BlogSidebar />
          </div>
        </div>
      </section>
      <section className="section-paddings ">
        <div className="container">
          <h3 className="text-black font-semibold">Recommended</h3>
          <p className="max-w-sm mt-2 text-sm">
            All the aspects you cherish from the conference compressed into a
            single-day virtual event.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-6">
            {recommendedPosts &&
              recommendedPosts.map((post, index) => (
                <Link href={`/blog/${post.slug.current}`} key={index}>
                  <div className="pb-[80%] w-full relative">
                    <Image
                      src={urlForImage(post.mainImage).toString()}
                      alt={post.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex mt-5 gap-2 text-xs  items-center font-semibold">
                    <p>
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      }).format(new Date(post.publishedAt))}
                    </p>
                    <Icons.folder size={16} className="text-primary" />
                    <p className="text-secondary ">{post.category?.title}</p>
                  </div>
                  <h3 className="text-primary mt-3 font-bold">{post.title}</h3>
                  <PortableText
                    // @ts-ignore
                    value={post.body.slice(1, 2)}
                    components={{
                      block: {
                        normal: ({ children }) => (
                          <p className="line-clamp-2 text-xs mt-3 font-popins">
                            {children}
                          </p>
                        ),
                      },
                    }}
                  />
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
