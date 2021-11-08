import Review from "./Review";

export interface CarWashTypes {
    autodetailing: { alias: string; id: number };
    touchless: { alias: string; id: number };
}

interface Owners {
    id: number,
    username: string,
    email: string,
    provider: string,
    confirmed: boolean,
    blocked: boolean,
    role: number,
    created_at: string,
    updated_at: string
}

export default interface CarWashType {
    id: number;
    name: string;
    published_at: string;
    created_at: string;
    updated_at: string;
    car_wash_type: {
        id: number;
        name: string;
        published_at: string;
        created_at: string;
        updated_at: string;
    };
    city: string;
    city_slug: string;
    email: string;
    full_address: string;
    image_from_maps: string;
    lat: number;
    lng: number;
    phone: string;
    plus_code: string;
    rating_maps: number;
    state: string;
    total_reviews_maps: number;
    voivodeship: string;
    voivodeship_slug: string;
    website: string;
    monday_open_hours: string;
    wednesday_open_hours: string;
    tuesday_open_hours: string;
    thursday_open_hours: string;
    friday_open_hours: string;
    saturday_open_hours: string;
    sunday_open_hours: string;
    promoted_frontpage: boolean | null;
    slug: string;
    comments: Review[];
    users_permissions_user: Owners[],
}
