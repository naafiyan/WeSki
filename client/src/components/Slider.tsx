import { Slider } from "@mui/material";
import React from "react";
type SliderProps = {marks?: { value: number; label: string; }[]};
export default function StyledSlider(props: SliderProps) {
    return (
        <Slider
            marks={props.marks}
            sx={{
                width: 450,
                color: "#5A9B85"
            }}
        >
        </Slider >
    );
}