import React from 'react';
import styled from 'styled-components';

import { PostType } from '../../global/types';
import { PostCard } from './components/PostCard';

const StyledSection = styled.section`
    background: #f4f4f4;
    padding: 2rem 5rem;
    display: flex;
    flex-direction: column;
`;

type Props = {
    posts: Array<PostType>;
};

export const PostsList: React.FC<Props> = ({ posts }) => (
    <StyledSection>{posts && posts.map((post) => <PostCard post={post} key={post.id} />)}</StyledSection>
);
