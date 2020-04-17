import React from 'react';

import { Page, Text } from '@styles';
import COLORS from '@styles/colors';

import { Container } from './styles';

export default function Splash() {    
    return (
        <Page>
            <Container>
                <Text type="title" color={COLORS.secondary} font="black">MANDRAKE</Text>
            </Container>
        </Page>
    );
}
