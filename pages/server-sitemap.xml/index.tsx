import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";
import axios from "axios";
import voivodeships from "../../app/components/voivodeships/data/voivodeshipsData";
import City from "../../app/types/City";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // #review types should be more dynamicaly
  const types = ["myjniebezdotykowe", "autodetaling"];
  let fields: any[] = [];

  for (let i = 0; i < types.length; i++) {
    const type = types[i];
    for (let j = 0; j < voivodeships.length; j++) {
      const citiesResponse = await axios
        .get<City[]>(
          `${process.env.NEXT_PUBLIC_HOST}/car-washes/cities/${type}/${voivodeships[j].slug}?_limit=6000`
        )
        .then((response) => response.data);

      citiesResponse.map((city: City) => {
        const field = {
          loc: `https://rankingmyjni.pl/${type}/${voivodeships[j].slug}/${city.slug}`,
          lastmod: new Date().toISOString(),
          priority: "0.7",
        };

        fields.push(field);
      });
    }
  }

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default () => {};
