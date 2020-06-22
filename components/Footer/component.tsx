import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: #ffffff;
`;

const StyledParagraph = styled.p`
    text-align: center;
    margin: 5rem 2rem;
    font-size: 1.2rem;
`;

export const Footer: React.FC = () => (
    <StyledFooter>
        <StyledParagraph>&copy; Copyright 2020 </StyledParagraph>
    </StyledFooter>
);
