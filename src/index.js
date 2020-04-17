import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';

import Routes from '@routes';

import store from '@store';

export default function App() {
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;

    return (
        <Provider store={store()}>
            <Routes />
        </Provider>
    );
}
