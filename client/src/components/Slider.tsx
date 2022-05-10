import { Slider } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
type SliderProps = {
    marks?: { value: number; label: string; }[];
    val: number;
    setVal: Dispatch<SetStateAction<number>>;
};
export default function StyledSlider(props: SliderProps) {

    const onChangeHandler = (e: Event, value: number | number[]) => {
        props.setVal(value as number / 100);
        console.log(value as number);
    }

    return (
        <Slider
            marks={props.marks}
            sx={{
                width: 450,
                color: "#5A9B85"
            }}
            onChange={(e, v) => onChangeHandler(e, v)}
            value={props.val * 100}
        >
        </Slider >
    );
}