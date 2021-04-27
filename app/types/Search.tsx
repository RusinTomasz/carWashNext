import { ParsedUrlQuery } from "querystring";

interface Query extends ParsedUrlQuery {
  type?: string;
  q?: string;
}

export default Query;
