import { create } from "domain"
import {createClient} from "next-sanity"
import imageUrlBuilder from'@sanity/image-url'


export const sanityClient =createClient({
    apiVersion:'2024-10-09',
    dataset:'production',
    projectId:'pnohc8sb',
    useCdn:false
})
const builder = imageUrlBuilder(sanityClient)
export function urlFor(source :any){
    return builder.image(source)
}