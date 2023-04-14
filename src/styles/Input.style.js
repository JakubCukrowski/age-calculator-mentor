import styled from "styled-components";

export const StyledInput = styled.input`
    border: 0.25px solid hsl(0, 0%, 86%);
    border-radius: 0.3em;
    height: 46px;
    margin: 0.4em 0;
    padding-left: 0.8em;
    font-size: 18px;
    font-weight: 800;
    width: 80%;

    &.error {
        border: 0.25px solid tomato;
    }

    &:focus {
        border: 0.25px solid hsl(259, 100%, 65%);
    }
`