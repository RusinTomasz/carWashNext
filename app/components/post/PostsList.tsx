import React from "react";
import Image from "next/image";
import Link from "next/link";

//Types
import Post from "../../types/Post";

//Styles
import styled from "styled-components";
import { colors } from "../../styles/variables";
import FlexWrapper from "../../styles/shared/FlexWrapper";

interface PostsListProps {
  posts: Post[];
}

const PostItem = styled.div`
  margin: 80px 0;
`;

const PostContentWrapper = styled.div`
  width: calc(100% - 500px);
  padding-left: 120px;
`;

const PostLink = styled.a`
  &:hover {
    h2 {
      color: ${colors.orange};
    }
  }
`;

const PostTitle = styled.h2`
  transition: all 0.25s ease-out;
`;

const ImageWrapper = styled.div`
  width: 500px;
  height: 400px;
  position: relative;
`;

const PostsList = (props: PostsListProps) => {
  return (
    <div className="posts-list">
      {props.posts.map((post) => {
        return (
          <PostItem key={post.id}>
            <FlexWrapper alignItems="center">
              <ImageWrapper>
                <Image
                  src={`${process.env.NEXT_PUBLIC_HOST}${post.introImage.url}`}
                  alt={post.introImage.alternativeText}
                  width={500}
                  height={400}
                  objectFit="cover"
                  objectPosition="50% 0"
                />
              </ImageWrapper>
              <PostContentWrapper>
                <Link href={`/aktualnosci/${post.slug}`} passHref>
                  <PostLink>
                    <PostTitle>{post.title}</PostTitle>
                  </PostLink>
                </Link>
              </PostContentWrapper>
            </FlexWrapper>
          </PostItem>
        );
      })}
    </div>
  );
};

export default PostsList;
