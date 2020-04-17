import React from 'react';
import { Text, StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import Routes from '@routes';

import store from '@store';

import COLORS from '@styles/colors';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

export default function App() {

    return (
        <Provider store={store()}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
            <Routes />
        </Provider>
    );
}
