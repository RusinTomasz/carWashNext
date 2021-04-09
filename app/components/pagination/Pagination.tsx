import { useRouter } from "next/dist/client/router";
import React, { SyntheticEvent } from "react";
import styled, { css } from "styled-components";

interface PaginationProps {
  page: number;
  count: number;
  limit: number;
  onPageChange: Function;
}

interface PaginationLinkProps {
  disable?: boolean;
}

const paginationLinkCss = css`
  border: 1px solid #f4f4f4;
  border-radius: 3px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  padding: 1rem 2rem;
`;

const PaginationLink = styled.a<PaginationLinkProps>`
  ${paginationLinkCss}
  transition: all 0.2s;
  cursor: ${(props) => (props.disable ? "default" : "pointer")};
  opacity: ${(props) => (props.disable ? "0.3" : "1")};
  &:hover {
    background-color: #74a1ff;
    color: #fff;
  }
`;

const PaginationNavItem = styled.li`
  list-style: none;
  margin: 0 1rem;
`;

const PaginationCurrentPage = styled.span`
  ${paginationLinkCss}
  display: inline-block;
  background-color: #74a1ff;
  color: #fff;
`;

const PaginationNav = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

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
      router.push({ pathname: path, query: { page: +page - 1 } });
    }
  };

  const nextPage = (e: SyntheticEvent) => {
    e.preventDefault();
    if (isNextPage) {
      const path = getPathFromUrl(router.asPath);
      onPageChange(+page + 1);
      router.push({ pathname: path, query: { page: +page + 1 } });
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
