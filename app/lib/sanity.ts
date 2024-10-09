import { create } from "domain"
import {createClient} from "next-sanity"


export const sanityClient =createClient({
    apiVersion:'2024-10-09',
    dataset:'production',
    projectId:'pnohc8sb',
    useCdn:false
})