import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

/**
 * Type definition for the props of the component.
 */
type FavMountainProps = {
  favMountain: string;
  setFavMountain: (value: string) => void;
}

/**
 * The React functional component for the Favorite Mountain component.
 * @param props The props of the component.
 * @returns The rendered component.
 */
export default function FavoriteMountain(props: FavMountainProps) {

  // state variables for the areas
  const [areas, setAreas] = useState<resort[]>([]);

  /**
   * Type definition for the props of the component.
   */
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
    for (let i = 0; i < allAreas.length; i++) {
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
      renderInput={(params) => <TextField {...params} label={props.favMountain} />}
    />
  );
}
