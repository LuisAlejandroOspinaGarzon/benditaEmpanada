import styled from 'styled-components'

export const ContactWrapper = styled.div`
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

export const ContactTitle = styled.h1`
    color: black;
    font-size: clamp(3rem, 5vw, 5rem);
    margin: 2rem;
`;

export const ContactText = styled.p`
    color: black;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
    margin: 3rem;
    max-width: 50%;
    position: static;
`;

export const ContactSection = styled.div`
    display: flex;
    flex-direction: row;
    position: static;
    margin: auto;
    width: 50%;
    color: black;
    input[type=text], select{
        
        width: 100%;
        padding: 12px 20px;
        display: inline-block;
        boder: 1px solid #ccc;
        boder-radius; 4px;
        box-sizing; border-box;
    }
`;