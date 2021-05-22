import axios from "axios";
import { getCarWashTypeIdByAlias } from "../utils/carWashTypes";
import slugify from "slugify";

const fetchSearchResults = async (
  searchUrl: string,
  countResultsUrl: string
) => {
  try {
    const results = await axios.get(searchUrl);
    const countResults = await axios.get(countResultsUrl);
    return {
      data: results.data,
      numberOfSearchResults: countResults.data,
      err: null,
    };
  } catch (err) {
    console.log(err);
    return {
      data: null,
      numberOfSearchResults: null,
      err: "Nie udało się pobrać wyników. Proszę spróbować ponownie.",
    };
  }
};

const generateApiSearchUrls = (
  queryQ: string,
  queryType: string,
  startCountingIndex: number,
  resultsLimit: number
) => {
  const querySlugify = slugify(queryQ).toLowerCase();
  const typeId = getCarWashTypeIdByAlias(queryType);

  const searchApiUrl = generateSearchApiUrl(
    queryQ,
    querySlugify,
    typeId,
    startCountingIndex,
    resultsLimit
  );
  const countResultsApiUrl = generateCountResultsApiUrl(
    queryQ,
    querySlugify,
    typeId
  );
  return { searchApiUrl, countResultsApiUrl };
};

const generateSearchApiUrl = (
  queryQ: string,
  querySlugify: string,
  typeId: number,
  startCountingIndex: number,
  resultsLimit: number
) => {
  return `${process.env.NEXT_PUBLIC_HOST}/car-washes?car_wash_type.id=${typeId}&_where[_or][0][name_contains]=${queryQ}&_where[_or][1][city_slug_contains]=${querySlugify}&_limit=${resultsLimit}&_start=${startCountingIndex}`;
};

const generateCountResultsApiUrl = (
  queryQ: string,
  querySlugify: string,
  typeId: number
) => {
  return `${process.env.NEXT_PUBLIC_HOST}/car-washes/count?car_wash_type.id=${typeId}&_where[_or][0][name_contains]=${queryQ}&_where[_or][1][city_slug_contains]=${querySlugify}`;
};

export { fetchSearchResults, generateApiSearchUrls };
