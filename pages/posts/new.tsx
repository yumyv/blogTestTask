import React from 'react';
import { Form, Field } from 'react-final-form';
import { addNewPost, deleteMessagePosts } from '../../store/actions/postsActions';
import { connect, ConnectedProps } from 'react-redux';
import { NewPostType } from '../../global/types';
import Link from 'next/link';
import styled from 'styled-components';

import { ModalWindow } from '../../components/ModalWindow';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AppStateType } from '../../store/store';

const StyledMain = styled.main`
    background: #f4f4f4;
    padding: 2rem 5rem;
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 1rem 2rem;
    margin-bottom: 2rem;
    display: block;
    border: 0;
    box-shadow: inset 0 0 0 1px rgba(160, 160, 160, 0.3);
    border-radius: 0.1rem;
    outline: 0;
    box-sizing: border-box;
`;

const StyledTextarea = styled.textarea`
    width: 100%;
    min-height: 15rem;
    padding: 1rem 2rem;
    margin-bottom: 2rem;
    display: block;
    border: 0;
    box-shadow: inset 0 0 0 1px rgba(160, 160, 160, 0.3);
    border-radius: 0.1rem;
    outline: 0;
    box-sizing: border-box;
`;

const StyledErrorMessage = styled.span`
    color: #e7746f;
    padding: 1rem 0;
`;

const StyledButton = styled.button`
    padding: 1rem 2rem;
    margin: 1rem 0;
    background: #ffffff;
    font-size: 1.2rem;
    border: 0;
    box-shadow: inset 0 0 0 1px rgba(160, 160, 160, 0.3);
    cursor: pointer;
    border-radius: 0.1rem;
`;

const StyledLink = styled.a`
    border-bottom: dotted 1px rgba(160, 160, 160, 0.65);
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    color: #2ebaae;
`;

const mapStateToProps = (state: AppStateType) => ({
    message: state.postsReducer.message,
});

const mapDispatchToProps = {
    addNewPost,
    deleteMessagePosts,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const NewPost: React.FC<Props> = ({ addNewPost, message, deleteMessagePosts }) => {
    const onSubmit = (values: NewPostType) => {
        const { title, body } = values;

        const newPost: NewPostType = {
            title,
            body,
        };

        addNewPost(newPost);
    };

    return (
        <div>
            <Header />
            <StyledMain>
                {message && <ModalWindow message={message} action={deleteMessagePosts} />}
                <Form
                    onSubmit={onSubmit}
                    validate={(values) => {
                        type ErrorsType = {
                            title?: string;
                            body?: string;
                        };
                        const errors: ErrorsType = {};

                        if (!values.title) errors.title = 'Title is empty!';
                        if (!values.body) errors.body = 'Body is empty!';

                        return errors;
                    }}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Field name="title">
                                {({ input, meta }) => {
                                    return (
                                        <div>
                                            <label>
                                                Title:
                                                <StyledInput {...input} type="text" placeholder="Enter the title" />
                                            </label>
                                            <div>
                                                {meta.error && meta.touched && (
                                                    <StyledErrorMessage>{meta.error}</StyledErrorMessage>
                                                )}
                                            </div>
                                        </div>
                                    );
                                }}
                            </Field>
                            <Field name="body">
                                {({ input, meta }) => {
                                    return (
                                        <div>
                                            <label>
                                                Body:
                                                <StyledTextarea {...input} name="body" placeholder="Enter the body" />
                                            </label>
                                            <div>
                                                {meta.error && meta.touched && (
                                                    <StyledErrorMessage>{meta.error}</StyledErrorMessage>
                                                )}
                                            </div>
                                        </div>
                                    );
                                }}
                            </Field>
                            <StyledButton type="submit">Create</StyledButton>
                        </form>
                    )}
                />
                <Link href="/">
                    <StyledLink>Go to home</StyledLink>
                </Link>
            </StyledMain>
            <Footer />
        </div>
    );
};

export default connector(NewPost);
