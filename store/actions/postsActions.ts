import * as types from '../types';
import { Messages, URLs } from '../../global/constants';
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';

import { NewPostType, PostType } from '../../global/types';
import { AppStateType } from '../store';

type SetMessagePostsType = {
    type: typeof types.SET_MESSAGE_POSTS;
    payload: string;
};

const setMessagePosts = (payload: string): SetMessagePostsType => ({
    type: types.SET_MESSAGE_POSTS,
    payload,
});

type DeleteMessagePostsType = {
    type: typeof types.DELETE_MESSAGE_POSTS;
};

export const deleteMessagePosts = (): DeleteMessagePostsType => ({
    type: types.DELETE_MESSAGE_POSTS,
});

type GetPostsType = {
    type: typeof types.GET_POSTS;
    payload: Array<PostType>;
};

const getPosts = (payload: Array<PostType>): GetPostsType => ({
    type: types.GET_POSTS,
    payload,
});

type AddPostType = {
    type: typeof types.ADD_POST;
    payload: PostType;
};

const addPost = (payload: PostType): AddPostType => ({
    type: types.ADD_POST,
    payload,
});

export type PostActionTypes = SetMessagePostsType | DeleteMessagePostsType | GetPostsType | AddPostType;

export const fetchPosts = (): ThunkAction<Promise<void>, AppStateType, unknown, PostActionTypes> => async (
    dispatch,
) => {
    axios
        .get<Array<PostType>>(`${URLs.SERVER}${URLs.POSTS}`)
        .then(({ data }) => dispatch(getPosts(data)))
        .catch((error: Error) => dispatch(setMessagePosts(error.message)));
};

export const addNewPost = (
    post: NewPostType,
): ThunkAction<Promise<void>, AppStateType, unknown, PostActionTypes> => async (dispatch) => {
    axios
        .post<PostType>(`${URLs.SERVER}${URLs.POSTS}`, post)
        .then(({ data }) => {
            dispatch(addPost(data));
            dispatch(setMessagePosts(Messages.ADD_NEW_POST_SUCCESS));
        })
        .catch((error: Error) => dispatch(setMessagePosts(error.message)));
};
