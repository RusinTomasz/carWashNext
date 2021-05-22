import { ParsedUrlQuery } from "querystring";

interface Query extends ParsedUrlQuery {
  type?: string;
  q?: string;
  page?: string;
}

export default Query;
