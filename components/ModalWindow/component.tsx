import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledArticle = styled.article`
    text-align: center;
    box-shadow: inset 0 0 0 1px rgba(160, 160, 160, 0.3);
    background: #ffffff;
    border-radius: 1rem;
`;

const StyledMessage = styled.p`
    padding: 0.5rem;
    margin-bottom: 0;
    font-size: 1.2rem;
`;

const StyledButton = styled.button`
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    background: #ffffff;
    border: 0;
    box-shadow: inset 0 0 0 1px rgba(160, 160, 160, 0.3);
    cursor: pointer;
    border-radius: 0.1rem;
`;

type Props = {
    message: string;
    action: () => void;
};

export const ModalWindow: React.FC<Props> = ({ message, action }) => {
    useEffect(() => {
        return () => {
            action();
        };
    }, []);

    const onClose = () => {
        action();
    };

    return (
        <StyledArticle>
            <StyledMessage>{message}</StyledMessage>
            <StyledButton onClick={onClose}>Close</StyledButton>
        </StyledArticle>
    );
};
