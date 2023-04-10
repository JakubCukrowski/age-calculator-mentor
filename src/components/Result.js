import React from "react";
import styled from "styled-components";

const Text = styled.p`
    font-family: "Poppins", sans-serif;
    font-size: 58px;
    font-style: italic;
    font-weight: 800;
`

export const Result = ({results}) => {
    const spanColor = {
        color: "hsl(259, 100%, 65%)"
    }

    return (
        <div style={{marginTop: 70}}>
            <Text><span style={spanColor}>{results.years}</span> years</Text>
            <Text><span style={spanColor}>{results.months}</span> months</Text>
            <Text><span style={spanColor}>{results.days}</span> days</Text>
        </div>
    )
}