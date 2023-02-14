import client from "../components/sanity";
import imageUrlBuilder from "@sanity/image-url";


const useSanityImage = () => {
const bilder = imageUrlBuilder(client);

const urlFor = (source) => {
return bilder.image(source);
}


return urlFor;

}

export default useSanityImage;