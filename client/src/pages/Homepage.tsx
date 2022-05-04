import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';

function Homepage() {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#5A9B85'
            },
            secondary: {
              main: '#5A9B85'
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

    return(
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
                        renderInput={(params) => <TextField {...params} sx={{width: 175, position: "absolute", top: 10, left: 20}}/>}
                        />
                        <DesktopDatePicker
                        label="End Date" 
                        inputFormat="MM/dd/yyyy" 
                        value={endValue} 
                        onChange={handleEndChange} 
                        renderInput={(params) => <TextField {...params} sx={{width: 175, position: "absolute", top: 10, right: 20}}/>}
                        />
                    </LocalizationProvider>
                </ThemeProvider>
                <div className="division-bar"></div>
            </div>
            <div className="search-button">
                <LocationSearchingOutlinedIcon className="search-icon"/>
            </div>
        </div>
        

    );
   
}

export default Homepage;
