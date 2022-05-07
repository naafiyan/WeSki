import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function FavoriteMountain() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={avaliableSkiMountains}
      sx={{ width: 475 }}
      renderInput={(params) => <TextField {...params} label="Favorite Ski Mountain" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const avaliableSkiMountains = [
  { label: 'Killington', ID: 1 },
  { label: 'Sugarloaf', ID: 2 },
  { label: 'Sugarbush', ID: 3 },
  { label: 'Smugglers Notch', ID: 4 },
  { label: 'Stowe', ID: 5 },
  { label: 'Sunday River', ID: 6 },
];
