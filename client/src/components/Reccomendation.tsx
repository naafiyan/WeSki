import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});
type InformationProps = {
    setShowing: React.Dispatch<React.SetStateAction<boolean>>
    rec: recommendation
    currentlyShowing: boolean
};
type recommendation = {
  name?: string
  dificulty?: number
  location?: string
  num_lifts?: number
  num_trails?: number
  price?: number
  snow_quality?: number
  temperature?: number
  vert_drop?: number
}
export default function Reccomendation(props: InformationProps) {

  const handleClose = () => {
    props.setShowing(false);
  };

  const getDifficulty = (rating: number | undefined): String => {
    if(rating) {
      if (rating < 0.20) {
          return "very easy"
      } else if (0.20 <= rating && rating < 0.45) {
        return "easy"
      } else if (0.45 <= rating && rating < 0.80) {
        return "medium"
      } else {
        return "hard"
      }
    } else {
      return "easy"
    }
  };
  const getWeather = (rating: number | undefined): String => {
    if(rating) {
      if (rating < 0.10) {
          return "very bad"
      } else if (0.10 <= rating && rating < 0.4) {
        return "alright"
      } else if (0.4 <= rating && rating < 0.80) {
        return "good"
      } else {
        return "great"
      }
    } else {
      return "easy"
    }
  };


  return (
    <div>
      <Dialog
        open={props.currentlyShowing}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"You were recommended "}  { props.rec.name}{"!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {props.rec.name} has a difficulty rated as { getDifficulty(props.rec.dificulty) }. This mountain
            is located at the zipcode {props.rec.location}. There are also {props.rec.num_trails} trails open, { props.rec.num_lifts } lifts that are open, and { props.rec.vert_drop } feet of vertical drop. The temperature
            at the mountain during your trip will be { props.rec.temperature } degrees fahrenheit. The ticket prices will be ${props.rec.price} each, and the weather conditions are { getWeather(props.rec.snow_quality)}.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
