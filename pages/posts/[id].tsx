import React, { useEffect } from 'react';
import { AppStateType } from '../../store/store';
import { fetchPosts, deleteMessagePosts } from '../../store/actions/postsActions';
import { connect, ConnectedProps } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';

import { ModalWindow } from '../../components/ModalWindow';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

const StyledSection = styled.section`
    background: #f4f4f4;
    padding: 2rem 5rem;
`;

const StyledLink = styled.a`
    border-bottom: dotted 1px rgba(160, 160, 160, 0.65);
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    color: #2ebaae;
`;

const mapStateToProps = (state: AppStateType) => ({
    posts: state.postsReducer.posts,
    message: state.postsReducer.message,
});

const mapDispatchToProps = {
    fetchPosts,
    deleteMessagePosts,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const Post: React.FC<Props> = ({ posts, message, fetchPosts, deleteMessagePosts }) => {
    useEffect(() => {
        fetchPosts();
    }, []);

    const router = useRouter();
    const post = posts.find((post) => post.id === Number(router.query.id));

    return (
        <div>
            <Header />
            <StyledSection>
                {message && <ModalWindow message={message} action={deleteMessagePosts} />}
                <h1>{post && post.title}</h1>
                <p>{post && post.body}</p>
                <Link href="/">
                    <StyledLink>Go to home</StyledLink>
                </Link>
            </StyledSection>
            <Footer />
        </div>
    );
};

export default connector(Post);
