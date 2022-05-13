import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Carousel } from 'react-bootstrap';

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
    rec2: recommendation
    rec3: recommendation
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
        <DialogContent>
        <Carousel style={{
          width: 500,
          height: 300,
        }}>
          <Carousel.Item style={{
            width: 500,
            height: 300,
          }}>
            <DialogTitle style={{
              textAlign: "center",
            }}
            >{"Your top recommendation is "}  { props.rec.name}{"!"}</DialogTitle>
            <img
                className="d-block w-100"
                src={require('../images/killington.jpeg')}
                alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{
                backgroundColor: "white",
                opacity: "0.8",
              }}>
                <DialogContentText id="alert-dialog-slide-description" style={{
                  fontSize: 14,
                }}>
                  {props.rec.name} has a difficulty rated as { getDifficulty(props.rec.dificulty) }. This mountain
                  is located at the zipcode {props.rec.location}. There are also {props.rec.num_trails} trails open, { props.rec.num_lifts } lifts that are open, and { props.rec.vert_drop } feet of vertical drop. The temperature
                  at the mountain during your trip will be { props.rec.temperature } degrees fahrenheit. The ticket prices will be ${props.rec.price} each, and the weather conditions are { getWeather(props.rec.snow_quality)}.
                </DialogContentText>
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{
            width: 500,
            height: 300,
          }}>
            <DialogTitle
                style={{
                  textAlign: "center",
                }}
            >{"Your second recommendedation is "}  { props.rec2.name}{"!"}</DialogTitle>
            <img
                className="d-block w-100"
                src={require('../images/stratton.jpeg')}
                alt="Second slide"
            />

            <Carousel.Caption>
              <h3 style={{
                backgroundColor: "white",
                opacity: "0.8",
              }}>
                <DialogContentText id="alert-dialog-slide-description" style={{
                  fontSize: 14,
                }}>
                  {props.rec2.name} has a difficulty rated as { getDifficulty(props.rec2.dificulty) }. This mountain
                  is located at the zipcode {props.rec2.location}. There are also {props.rec2.num_trails} trails open, { props.rec2.num_lifts } lifts that are open, and { props.rec2.vert_drop } feet of vertical drop. The temperature
                  at the mountain during your trip will be { props.rec2.temperature } degrees fahrenheit. The ticket prices will be ${props.rec2.price} each, and the weather conditions are { getWeather(props.rec2.snow_quality)}.
                </DialogContentText>
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{
            width: 500,
            height: 300,
          }}>
            <DialogTitle
                style={{
                  textAlign: "center",
                }}>{"Your third recommendation is "}  { props.rec3.name}{"!"}</DialogTitle>
            <img
                className="d-block w-100"
                src={require('../images/attitash.jpeg')}
                alt="Third slide"
            />

            <Carousel.Caption>
              <h3 style={{
                backgroundColor: "white",
                opacity: "0.8",
              }}>
                <DialogContentText id="alert-dialog-slide-description" style={{
                  fontSize: 14,
                }}>
                  {props.rec3.name} has a difficulty rated as { getDifficulty(props.rec3.dificulty) }. This mountain
                  is located at the zipcode {props.rec3.location}. There are also {props.rec3.num_trails} trails open, { props.rec3.num_lifts } lifts that are open, and { props.rec3.vert_drop } feet of vertical drop. The temperature
                  at the mountain during your trip will be { props.rec3.temperature } degrees fahrenheit. The ticket prices will be ${props.rec3.price} each, and the weather conditions are { getWeather(props.rec3.snow_quality)}.
                </DialogContentText>
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
