import { Platform } from 'react-native';

import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 20px;
`;

export const Text = styled.Text`
    font-size: ${(props) => {
        if (props.size) return props.size;
        else if (props.type === 'title') return '20';
        else if (props.type === 'subtitle') return '16';
        else if (props.type === 'paragraph') return '13';
        else return '13';
    }}px;
    ${(props) => {
        if (props.font === 'black') {
            return Platform.select({
                ios: css`
                    font-family: 'Roboto';
                    font-weight: '900';
                `,
                android: css`
                    font-family: 'Roboto-Black';
                `,
            });
        } else if (props.font === 'bold') {
            return Platform.select({
                ios: css`
                    font-family: 'Roboto';
                    font-weight: '700';
                `,
                android: css`
                    font-family: 'Roboto-Bold';
                `,
            });
        } else if (props.font === 'medium') {
            return Platform.select({
                ios: css`
                    font-family: 'Roboto';
                    font-weight: '500';
                `,
                android: css`
                    font-family: 'Roboto-Medium';
                `,
            });
        } else if (props.font === 'regular') {
            return Platform.select({
                ios: css`
                    font-family: 'Roboto';
                    font-weight: 'normal';
                `,
                android: css`
                    font-family: 'Roboto-Regular';
                `,
            });
        } else if (props.font === 'light') {
            return Platform.select({
                ios: css`
                    font-family: 'Roboto';
                    font-weight: '300';
                `,
                android: css`
                    font-family: 'Roboto-Light';
                `,
            });
        } else if (props.font === 'thin') {
            return Platform.select({
                ios: css`
                    font-family: 'Roboto';
                    font-weight: '100';
                `,
                android: css`
                    font-family: 'Roboto-Thin';
                `,
            });
        } else {
            return Platform.select({
                ios: css`
                    font-family: 'Roboto';
                    font-weight: 'normal';
                `,
                android: css`
                    font-family: 'Roboto-Regular';
                `,
            });
        }
    }};
`;
