import Button from "@mui/material/Button";
import { Box, FormControlLabel, FormGroup, Slider, Stack, Switch, TextField } from "@mui/material";
import Header from "../components/Header";
import Form from "react-bootstrap/Form"
import MySlider from "../components/Slider"
import Input from "@mui/material/Input"

function HomePage() {
    return (
        <TextField
                    name="startDate"
                    label="Start Date"
                    InputLabelProps={{ shrink: true, required: true, style: { fontWeight: 700, color:'#1E1E1E', fontFamily:"Roboto", fontSize:'18px'} }}
                    type="date"
                    InputProps={{ style: {border: "1px solid #C2C2C2", padding: 6, width:480, height:51} }}
                />
    );
}

export default HomePage;
