import sanityClient from "@sanity/client";
import  imageUrlBuilder  from "@sanity/image-url";

const client = sanityClient({
    projectId:"jz3m0dlt",
    dataset:"production",
    useCdn:true,
    apiVersion:"1",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source)=>builder.image(source);

export default client;

// sanity cors add http://localhost:3000