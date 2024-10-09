import { sanityClient } from '../lib/sanity';
import Link from 'next/link';

interface BlogPost {
  title: string;
  smallDescription: string;
  currentSlug: string;
}

async function getData(): Promise<BlogPost[]> {
  const query = `*[_type=='blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current
  }`;
  const data: BlogPost[] = await sanityClient.fetch(query);
  return data;
}

export default async function Blog() {
  const data = await getData();

  console.log(data); // Log the fetched data

  return (
    <div>
      <h1>Blog</h1>
      <div className="blog-posts">
        {data.map((post) => (
          <div key={post.currentSlug} className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.smallDescription}</p>
            <Link href={`/blog/${post.currentSlug}`} className="text-blue-600 hover:underline">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
