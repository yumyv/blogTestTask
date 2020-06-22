import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { PostType } from '../../../../global/types';

const StyledArticle = styled.article`
    padding: 2rem 3rem;
    margin-bottom: 2rem;
    background: #ffffff;
    border: solid 1px rgba(160, 160, 160, 0.3);
`;

const StyledLink = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    color: #2ebaae;
`;

type Props = {
    post: PostType;
};

export const PostCard: React.FC<Props> = ({ post }) => (
    <StyledArticle>
        <Link href="/posts/[id]" as={`/posts/${post.id}`}>
            <StyledLink>{post.title}</StyledLink>
        </Link>
        <p>{post.body}</p>
    </StyledArticle>
);
