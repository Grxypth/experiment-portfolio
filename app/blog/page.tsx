import { sanityClient, urlFor } from '../lib/sanity';
import Link from 'next/link';
import Image from 'next/image';
import simpleBlogCard from '../lib/interface';
import { BlogCard, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './components/BlogCard';
import { BlogButton, buttonVariants } from './components/BlogButton';
export const revalidate = 30;

async function getData(): Promise<simpleBlogCard[]> {
  const query = `*[_type=='blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    "titleImage": titleImage.asset->url
  }`;
  const data = await sanityClient.fetch(query);
  return data;
}

export default async function Blog() {
  const data: simpleBlogCard[] = await getData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {data.map((post, idx) => (
        <BlogCard key={idx}>
          <Image 
            src={urlFor(post.titleImage).url()}
            alt="image"
            width={500}
            height={500}
            className="rounded-t-lg h-[200px] object-cover"
          />
          <CardContent className="mt-5>">
            <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
            <p className="line-clamp-3 text-sm mt-2 text-gray-600">{post.smallDescription}</p>
          <BlogButton asChild className="w-full mt-8">
            <Link href={`/blog/makaleler/${post.currentSlug}`}>
              Makaleyi Oku
            </Link>
          </BlogButton>
          </CardContent>
        </BlogCard>
      ))}
    </div>
  );
}
