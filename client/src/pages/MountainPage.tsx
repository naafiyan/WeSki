import Button from "@mui/material/Button";
import { FormControlLabel, FormGroup, Switch, TextField, Typography } from "@mui/material";
import StyledSlider from "../components/Slider";

function MountainPage() {
    const priceMarks = [
        {
            value: 0,
            label: '$0',
        },
        {
            value: 25,
            label: '$75',
        },
        {
            value: 50,
            label: '$150',
        },
        {
            value: 75,
            label: '$225',
        },
        {
            value: 100,
            label: '$300',
        },
    ];
    const distanceMarks = [
        {
            value: 0,
            label: '0 miles',
        },
        {
            value: 20,
            label: '100 miles',
        },
        {
            value: 40,
            label: '200 miles',
        },
        {
            value: 60,
            label: '300 miles',
        },
        {
            value: 80,
            label: '400 miles',
        },
        {
            value: 100,
            label: '500 miles',
        },
    ];
    const interestMarks = [
        {
            value: 0,
            label: 'Irrelevant',
        },
        {
            value: 25,
            label: 'Meh',
        },
        {
            value: 50,
            label: 'Neutral',
        },
        {
            value: 75,
            label: 'Kinda',
        },
        {
            value: 100,
            label: 'Super',
        },
    ];
    const difficultyMarks = [
        {
            value: 0,
            label: 'Green',
        },
        {
            value: 33,
            label: 'Blue',
        },
        {
            value: 66,
            label: 'Black',
        },
        {
            value: 100,
            label: 'Double Black',
        }
    ];

    return (
        <>
            <div className = "flex-container">
                <div className = "flex-child-left">

                    <br/>
                    <FormGroup >
                        <FormControlLabel control={<Switch defaultChecked color="primary" style={{
                            color: "#5A9B85",
                        }}/>} label="Use suggestions?" labelPlacement="start"
                                          style={{
                                              color: "#OOOOO",
                                              padding: "18px 36px",
                                              fontSize: "18px",
                                              fontFamily: "Roboto"
                                          }}/>
                    </FormGroup>
                    <br/>
                    <TextField
                        name="name"
                        label="Name"
                        InputLabelProps={{ shrink: true, required: true, style: { fontWeight: 700, color:'#1E1E1E', fontFamily:'Roboto', fontSize:'18px'} }}
                        type="text"
                        placeholder="Enter name"
                        InputProps={{ style: {border: "1px solid #C2C2C2", padding: 6, width:480, height:51} }}
                    />
                    <br/>
                    <TextField
                        name="email"
                        label="Email"
                        InputLabelProps={{ shrink: true, required: true, style: { fontWeight: 700, color:'#1E1E1E', fontFamily:'Roboto', fontSize:'18px'} }}
                        type="name@example.com"
                        InputProps={{ style: {border: "1px solid #C2C2C2", padding: 6, width:480, height:51} }}
                    />
                    <br/>
                    <TextField
                        name="location"
                        label="Location"
                        InputLabelProps={{ shrink: true, required: true, style: { fontWeight: 700, color:'#1E1E1E', fontFamily:'Roboto', fontSize:'18px'} }}
                        type="Providence, RI"
                        InputProps={{ style: {border: "1px solid #C2C2C2", padding: 6, width:480, height:51} }}
                    />
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
                    <br/>
                    <br/>
                    <Typography style={{
                        color:'#1E1E1E',
                        fontSize: "16px",
                        fontFamily: "Roboto"
                    }}>
                        Preferred Lift Ticket Price
                    </Typography>
                    <StyledSlider marks={priceMarks}/>
                    <br/>
                    <Typography style={{
                        color:'#1E1E1E',
                        fontSize: "16px",
                        fontFamily: "Roboto"
                    }}>
                        Distance from Your Location
                    </Typography>
                    <StyledSlider marks={distanceMarks}/>
                    <br/>
                    <Typography style={{
                        color:'#1E1E1E',
                        fontSize: "16px",
                        fontFamily: "Roboto"
                    }}>
                        Weather Conditions
                    </Typography>
                    <StyledSlider marks={interestMarks}/>
                    <br/>
                    <Typography style={{
                        color:'#1E1E1E',
                        fontSize: "16px",
                        fontFamily: "Roboto"
                    }}>
                        Terrain Difficuly Level
                    </Typography>
                    <StyledSlider marks={difficultyMarks}/>
                    <br/>
                    <Typography style={{
                        color:'#1E1E1E',
                        fontSize: "16px",
                        fontFamily: "Roboto"
                    }}>
                        Number of Trails Open
                    </Typography>
                    <StyledSlider marks={interestMarks}/>
                    <br/>
                </div>
            </div>
            <br/>
            <div className = "button">
                <Button variant = "contained" size={"large"} style={{
                    borderRadius: 20,
                    backgroundColor: "#5A9B85",
                    padding: "18px 36px",
                    fontSize: "18px",
                    fontFamily: "Roboto"
                }}>
                    Find a mountain
                </Button>
            </div>
        </>
    );
}

export default MountainPage;
