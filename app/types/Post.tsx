interface Format {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: string;
  url: string;
}

interface ImageFormats {
  thumbnail: Format;
  large: Format;
  medium: Format;
  small: Format;
}

interface SingleImage {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  created_at: string;
  updated_at: string;
}

interface ProductComponent {
  __component: string;
  id: number;
  title: string;
  description: string;
  link: string;
  image: SingleImage[];
}

interface Post {
  id: number;
  body: string;
  title: string;
  slug: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  products: ProductComponent[];
  introImage: SingleImage;
}

export default Post;
