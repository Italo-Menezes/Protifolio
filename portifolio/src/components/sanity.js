import { createClient } from "next-sanity";


const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,

});

export default client;
