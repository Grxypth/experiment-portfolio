import { PortableTextBlock } from '@portabletext/types';
export default interface simpleBlogCard{
    title: string;
    smallDescription: string;
    titleImage: { asset: { url: string } };
    currentSlug: string;
}  
export interface fullBlog {
    currentSlug: string;
    title: string;
    content: any;
    titleImage: { asset: { url: string } };
  }