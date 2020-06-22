import { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';

import globalStyles from '../global/styles';
import store from '../store/store';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Provider store={store}>
        <style jsx global>
            {globalStyles}
        </style>
        <Component {...pageProps} />
    </Provider>
);

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
