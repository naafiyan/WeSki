import Button from "@mui/material/Button";
import { Box, FormControlLabel, FormGroup, Slider, Stack, Switch, TextField } from "@mui/material";
import Header from "../components/Header";
import Form from "react-bootstrap/Form"
import MySlider from "../components/Slider"
import Input from "@mui/material/Input"

function MountainPage() {
    return (
        <>
            {/* Center the content */}
            <div className = "flex-container">
            <div className = "flex-child-left">
            <FormGroup >
                <FormControlLabel control={<Switch defaultChecked />} label="Use suggestions?" labelPlacement="start"/>
            </FormGroup>
            <Form>
                <Form.Group controlId="form.Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="form.Email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="form.Textarea">
                    <Form.Label>My Location</Form.Label>
                    <Form.Control type="textarea" placeholder="Providence, RI" />
                </Form.Group>
            </Form>
                <br/>

                <TextField
                    name="startDate"
                    label="Start Date"
                    InputLabelProps={{ shrink: true, required: true, style: { fontWeight: 700, color:'#1E1E1E', fontFamily:"Roboto", fontSize:'18px'} }}
                    type="date"
                    InputProps={{ style: {border: "1px solid #C2C2C2", padding: 6, width:480, height:51} }}
                />
                <br/>
                <TextField
                    name="endDate"
                    label="End Date"
                    InputLabelProps={{ shrink: true, required: true, style: { fontWeight: 700, color:'#1E1E1E', fontFamily:'Roboto', fontSize:'18px'} }}
                    type="date"
                    InputProps={{ style: {border: "1px solid #C2C2C2", padding: 6, width:480, height:51} }}
                />
            </div>
            <br/>
            <div className = "flex-child-right" >


            Price
            <MySlider />
            Distance
            <MySlider />
            Conditions
            <MySlider />
            Difficuly Level
            <MySlider />
            </div>
            </div>
            <br/>
            <div className = "button">
            <Button variant = "contained" color="secondary" size={"large"}>
                Find a mountain
            </Button>
            </div>
        </>
    );
}

export default MountainPage;
