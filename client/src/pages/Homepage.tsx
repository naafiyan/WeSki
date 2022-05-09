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
            </div>
            <div className="button">
                <Carousel>
                    <Carousel.Item>
                        {/* <img
                            alt="First slide"
                            src={require('../images/download.jpg')}
                            width="300"
                            height="300"
                        /> */}
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <img
                            alt="Second slide"
                            src={require('../images/download.jpg')}
                            width="300"
                            height="300"
                        /> */}
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <img
                            alt="Third slide"
                            src={require('../images/download.jpg')}
                            width="300"
                            height="300"
                        /> */}
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <img
                            alt="First slide"
                            src={require('../images/download.jpg')}
                            width="300"
                            height="300"
                        /> */}
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <img
                            alt="First slide"
                            src={require('../images/download.jpg')}
                            width="300"
                            height="300"
                        /> */}
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}
