import styled from 'styled-components';

export const WelcomeWrapper = styled.div`
    background: #fff;
    height: 100vh;
    max-height: 500px;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 0 1rem;
    margin-bottom: 2rem;

`;

export const WelcomeTitle = styled.h1`
    color: black;
    font-size: clamp(3rem, 5vw, 5rem);
    margin: 2rem;
`;

export const WelcomeText = styled.p`
    color: black;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
    margin: 3rem;
    max-width: 50%;
    position: static;

`;

export const WelcomeSection = styled.div`
    display: flex;
    flex-direction: row;
    position: static;
    margin: auto;
    width: 50%;
`;

export const WelcomeImg = styled.img`
    box-shadow: 8px 8px #B05E27;
    height: 300px;
    min-width: 300px;
    max=width: 100%;
    position: static;
`;

export const WelcomeButton = styled.button`
    font-size: 1.4rem;
    padding: 0.6rem 3rem;
    border: none;
    background: #ffc500;
    color: #000;
    transition: 0.2s ease-out;

    &:hover{
        color: #fff;
        background: #e31837;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`;