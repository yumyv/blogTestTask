import React, { useEffect } from 'react';
import Head from 'next/head';
import { connect, ConnectedProps } from 'react-redux';

import { fetchPosts, deleteMessagePosts } from '../store/actions/postsActions';
import { AppStateType } from '../store/store';
import { PostsList } from '../components/PostsList';
import { ModalWindow } from '../components/ModalWindow';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

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

const Home: React.FC<Props> = ({ posts, fetchPosts, message, deleteMessagePosts }) => {
    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main>
                {message && <ModalWindow message={message} action={deleteMessagePosts} />}
                <PostsList posts={posts} />
            </main>
            <Footer />
        </div>
    );
};

export default connector(Home);
