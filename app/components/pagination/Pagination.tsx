import { useRouter } from "next/dist/client/router";
import React, { SyntheticEvent } from "react";
import {
  PaginationLink,
  PaginationNavItem,
  PaginationCurrentPage,
  PaginationNav,
} from "./styles/PaginationStyles";

interface PaginationProps {
  page: number;
  count: number;
  limit: number;
  onPageChange: Function;
}

const Pagination = (props: PaginationProps) => {
  const { page, count, limit, onPageChange } = props;
  const currentPage = page < 1 ? 0 : page - 1;
  const isNextPage = limit * page >= count ? false : true;
  const router = useRouter();

  const getPathFromUrl = (url: string) => {
    return url.split(/[?#]/)[0];
  };

  const prevPage = (e: SyntheticEvent) => {
    e.preventDefault();
    if (page > 1) {
      onPageChange(page - 1);
      const path = getPathFromUrl(router.asPath);
      router.push({
        pathname: path,
        query: { ...router.query, page: +page - 1 },
      });
    }
  };

  const nextPage = (e: SyntheticEvent) => {
    e.preventDefault();
    if (isNextPage) {
      const path = getPathFromUrl(router.asPath);
      onPageChange(+page + 1);
      router.push({
        pathname: path,
        query: { ...router.query, page: +page + 1 },
      });
    }
  };

  return (
    <PaginationNav>
      <PaginationNavItem>
        <PaginationLink
          disable={currentPage < 1 ? true : false}
          onClick={prevPage}
        >
          {"<"}
        </PaginationLink>
      </PaginationNavItem>
      <PaginationNavItem>
        <PaginationCurrentPage>{page}</PaginationCurrentPage>
      </PaginationNavItem>
      <PaginationNavItem>
        <PaginationLink disable={isNextPage ? false : true} onClick={nextPage}>
          {">"}
        </PaginationLink>
      </PaginationNavItem>
    </PaginationNav>
  );
};

export default Pagination;
