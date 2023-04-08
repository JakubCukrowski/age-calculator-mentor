import styled from "styled-components";

export const Section = styled.section`
  max-width: 100%;
  min-height: 100vh;
  background-color: hsl(0, 0%, 94%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 12px;

  @media (min-width: 600px) {
    align-items: center
  }
`