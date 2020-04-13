import React from 'react';
import { Text } from 'react-native';

import Routes from '@routes';

export default function App() {
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;

    return <Routes />;
}
