import React from "react";
import { Text } from "../styles/Text.style";

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