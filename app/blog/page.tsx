import { sanityClient } from '../lib/sanity';
import Link from 'next/link';
import simpleBlogCard from '../lib/interface';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';

async function getData(): Promise<simpleBlogCard[]> {
  const query = `*[_type=='blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current
    titleImage
  }`;
  //const data: BlogPost[] = await sanityClient.fetch(query);
  const data = await sanityClient.fetch(query);
  return data;
}

export default async function Blog() {
  const data: simpleBlogCard[] = await getData();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 mt-5">
      {data.map((post,idx)=>(
<Card key={idx}>

</Card>
      ))}
      
    </div>
  );
}
