import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.header`
    margin: 3rem 2rem;
    font-size: 1.2rem;
`;

const StyledList = styled.ul`
    list-style-type: none;
`;

const StyledItem = styled.li`
    display: inline-block;
`;

const StyledLink = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    border-right: solid 1px rgba(160, 160, 160, 0.3);
    padding: 1rem;
`;

export const Header: React.FC = () => (
    <StyledHeader>
        <StyledList>
            <StyledItem>
                <Link href="/">
                    <StyledLink>Home</StyledLink>
                </Link>
            </StyledItem>
            <StyledItem>
                <Link href="/posts/new">
                    <StyledLink>Create new post</StyledLink>
                </Link>
            </StyledItem>
        </StyledList>
    </StyledHeader>
);
