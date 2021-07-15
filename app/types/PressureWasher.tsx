interface PressureWasherTypeImage {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      width: number;
      height: number;
      size: number;
      path: string | null;
      url: string;
    };
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  created_at: string;
  updated_at: string;
}

interface PressureWasherTypeFeatures {
  id: number;
  feature: string;
}
interface PressureWasherTypePros {
  id: number;
  advantage: string;
}
interface PressureWasherTypeCons {
  id: number;
  disadvantage: string;
}

interface PressureWasherTypeShopLink {
  id: number;
  linkName: string;
  url: string;
}

export default interface PressureWasherType {
  id: number;
  initialText: string;
  washerDescription: string;
  title: string;
  score: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  features: PressureWasherTypeFeatures[];
  pros: PressureWasherTypePros[];
  cons: PressureWasherTypeCons[];
  image: PressureWasherTypeImage;
  shopLinks: PressureWasherTypeShopLink[];
}
