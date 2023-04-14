import styled from "styled-components";


export const StyledImg = styled.img`
    background-color: hsl(259, 100%, 65%);
    border-radius: 50%;
    padding: 10px;
    width: 50px;

    &.clicked {
        background-color: hsl(0, 0%, 8%);
    }

    @media (min-width: 600px) {
        width: 70px;
    }

`