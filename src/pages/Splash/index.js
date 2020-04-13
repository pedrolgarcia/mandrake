import React from 'react';
import { View } from 'react-native';

import { Container, Text } from '@styles';

export default function Splash({ navigation }) {
    return (
        <Container>
            <Text type="subtitle" font="black">Olá</Text>
        </Container>
    );
}
