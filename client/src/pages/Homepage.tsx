import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import IconButton from '@mui/material/IconButton'
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { Carousel } from 'react-bootstrap';

export default function Homepage() {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#5A9B85'
            },
            secondary: {
                main: '#FFFFFF'
            }
        }
    });

    const [startValue, setStartValue] = React.useState<Date | null>(
        new Date('2022-05-04T21:11:54'),
    );

    const [endValue, setEndValue] = React.useState<Date | null>(
        new Date('2022-05-04T21:11:54'),
    );

    const handleStartChange = (newValue: Date | null) => {
        setStartValue(newValue);
    };

    const handleEndChange = (newValue: Date | null) => {
        setEndValue(newValue);
    };

    return (
        <div>
            <div className="rectangle">
                <p className="trip-text">Plan Your Trip</p>
                <div className="date-bar">
                    <ThemeProvider theme={theme}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Start Date"
                                inputFormat="MM/dd/yyyy"
                                value={startValue}
                                onChange={handleStartChange}
                                renderInput={(params) => <TextField {...params} sx={{ width: 175, position: "absolute", top: 10, left: 20 }} />}
                            />
                            <DesktopDatePicker
                                label="End Date"
                                inputFormat="MM/dd/yyyy"
                                value={endValue}
                                onChange={handleEndChange}
                                renderInput={(params) => <TextField {...params} sx={{ width: 175, position: "absolute", top: 10, right: 20 }} />}
                            />
                        </LocalizationProvider>
                    </ThemeProvider>
                    <div className="division-bar" />
                </div>
                <Nav.Link as={Link} to="/trips">
                    <div className="search-button">
                        <ThemeProvider theme={theme}>
                            <IconButton color="secondary" aria-label="search" sx={{ width: 50, height: 50, right: 2, bottom: 2 }}>
                                <LocationSearchingOutlinedIcon />
                            </IconButton>
                        </ThemeProvider>
                    </div>
                </Nav.Link>
                <div className="compare-divider" />
                <Nav.Link as={Link} to="/venues">
                    <ThemeProvider theme={theme}>
                        <Button size="large" className="compare-button" variant="outlined">
                            <p className="compare-text">Compare Venues</p>
                        </Button>
                    </ThemeProvider>
                </Nav.Link>
                <br/>

                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../images/killington.jpeg')}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 style={{
                                backgroundColor: "#5A9B85",
                                opacity: "0.8",
                                marginBottom: 0,
                            }}>Killington </h3>
                            <p style={{
                                backgroundColor: "#5A9B85",
                                opacity: "0.8",
                                marginBottom: 10,
                            }}>The Northeast’s largest ski venue, located in central VT.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../images/stratton.jpeg')}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 style={{
                                backgroundColor: "#5A9B85",
                                opacity: "0.8",
                                marginBottom: 0,
                            }}>Stratton</h3>
                            <p style={{
                                backgroundColor: "#5A9B85",
                                opacity: "0.8",
                                marginBottom: 10,
                            }}>Located in southern VT, Stratton is a great ski area for beginners and advanced skiers.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../images/attitash.jpeg')}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 style={{
                                backgroundColor: "#5A9B85",
                                opacity: "0.8",
                                marginBottom: 0,
                            }}>Attitash</h3>
                            <p style={{
                                backgroundColor: "#5A9B85",
                                opacity: "0.8",
                                marginBottom: 10,
                            }}>It has an infamously slow chairlift to the top, but two peaks!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../images/sundayriver2.jpg')}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 style={{
                                backgroundColor: "#5A9B85",
                                opacity: "0.8",
                                marginBottom: 0,
                            }}>Sunday River</h3>
                            <p style={{
                                backgroundColor: "#5A9B85",
                                opacity: "0.8",
                                marginBottom: 10,
                            }}>Come ski at your Happy Place in Maine. Bring the White Heat!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../images/skibutternut.jpeg')}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 style={{
                                backgroundColor: "#5A9B85",
                                opacity: "0.8",
                                marginBottom: 0,
                            }}>Ski Butternut</h3>
                            <p style={{
                                backgroundColor: "#5A9B85",
                                opacity: "0.8",
                                marginBottom: 10,
                            }}>A great family ski area located on Warner Mountain in western MA.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src={require('../images/skisundown.jpeg')}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <div>
                            <h3 style={{
                                backgroundColor: "#5A9B85",
                                opacity: "0.8",
                                marginBottom: 0,
                            }}>Ski Sundown</h3>
                            <p style={{
                                backgroundColor: "#5A9B85",
                                opacity: "0.8",
                                marginBottom: 10,
                            }}>A great mountain for beginners located 30 minutes from Hartford, CT.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}
