import styled from "styled-components";

export const Button = styled.button`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

@media (min-width: 600px) {
    left: 95%;
}
`