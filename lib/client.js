import { createClient } from "next-sanity"
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: "cx2tikai",
    dataset: "production",
    apiVersion:"2023-03-30",
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
