import { fullBlog } from "@/app/lib/interface";
import { sanityClient, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import ptComponents from "../../components/PostBody";


export const revalidate = 30;

async function getData(slug: string) {
  const query = `*[_type == "blog" && slug.current == '${slug}' ] {
    "currentSlug": slug.current,
      title, 
      content,
      titleImage
  } [0]`;

  const data = await sanityClient.fetch(query);
  return data;
}

async function BlogArticle({ params }: { params: { slug: string } }) {
  const data: fullBlog = await getData(params.slug);
  return (
    <div className="mt-8">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
        <Link href={`/blog/`}>
        Ihsan Erdem - blog
        </Link>
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl ">
          {data.title}
        </span>
      </h1>
     <div className="flex justify-center mt-8">
        <Image
          src={urlFor(data.titleImage).url()}
          width={600}
          height={150}
          alt="Title Image"
          priority
          className="rounded-lg border"
        />
      </div>
      <div className="mt-16 pb-20 prose prose-blue prose-xl dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data.content}  components={ptComponents}/>
      </div>
    </div>
  );
}

export default BlogArticle;