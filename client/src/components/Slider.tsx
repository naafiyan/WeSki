import { Slider } from "@mui/material";
import React from "react";

export default function Header() {
    // const { user, loading } = props;

    return (
        <Slider
            step={10}
            valueLabelDisplay="auto"
            marks={true}
            sx={{
                width: 450,
                color: "teal"
            }}
        >
        </Slider >
    );
}