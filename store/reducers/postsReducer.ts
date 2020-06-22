import * as types from '../types';
import { PostType } from '../../global/types';
import { PostActionTypes } from '../actions/postsActions';

const initialState = {
    posts: [] as Array<PostType>,
    message: '',
};

type InitialStateType = typeof initialState;

export const postsReducer = (state = initialState, action: PostActionTypes): InitialStateType => {
    switch (action.type) {
        case types.GET_POSTS:
            return {
                ...state,
                posts: action.payload,
            };
        case types.ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        case types.SET_MESSAGE_POSTS:
            return {
                ...state,
                message: action.payload,
            };
        case types.DELETE_MESSAGE_POSTS:
            return {
                ...state,
                message: '',
            };

        default:
            return state;
    }
};
