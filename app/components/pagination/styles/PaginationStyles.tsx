import styled, { css } from "styled-components";

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

export {
  PaginationLink,
  PaginationNavItem,
  PaginationCurrentPage,
  PaginationNav,
};
