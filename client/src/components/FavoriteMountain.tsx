import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

type FavMountainProps = {
  setFavMountain: (value: string) => void;
}
export default function FavoriteMountain(props: FavMountainProps) {

  const [areas, setAreas] = useState<resort[]>([]);

  type resort = {
    label: string
    ID: number
  }  

  async function setSkiAreas() {
    const res = await fetch("http://localhost:4567/areas", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const resJson = await res.json();
    const allAreas = resJson.areas;
    let avaliableSkiMountains: resort[] = []
    for(let i = 0; i < allAreas.length; i++) {
      let nextName = allAreas[i].name;
      let area: resort = {
        label: nextName,
        ID: i        
      }
      avaliableSkiMountains.push(area);
    }
    setAreas(avaliableSkiMountains);
    
  }

  setSkiAreas()

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={areas}
      sx={{ width: 475 }}
      onInputChange={(event, newInputValue) => {
        props.setFavMountain(newInputValue);
      }}
      renderInput={(params) => <TextField {...params} label="Favorite Ski Mountain" />}
    />
  );
}
