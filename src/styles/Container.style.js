import styled from "styled-components";

export const MainContainer = styled.div`
    background-color: hsl(0, 0%, 100%);
    padding: 30px 16px;
    margin-top: 4.5em;
    border-radius: 5%;
    border-bottom-right-radius: 30%;
    font-family: 'Poppins', sans-serif;

    @media (min-width: 600px) {
        margin-top: 0;
        max-width: 600px;
        padding: 40px;
    }
`