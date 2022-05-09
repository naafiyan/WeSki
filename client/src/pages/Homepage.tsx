import { TextField } from "@mui/material";

function Homepage() {
    return(<TextField
    name="startDate"
    label="Start Date"
    InputLabelProps={{ shrink: true, required: true, style: { fontWeight: 700, color:'#1E1E1E', fontFamily:"Roboto", fontSize:'18px'} }}
    type="date"
    InputProps={{ style: {border: "1px solid #C2C2C2", padding: 6, width:480, height:51} }}
    />
    );
   
}

export default Homepage;
