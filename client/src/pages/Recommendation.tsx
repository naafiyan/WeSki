import Button from "@mui/material/Button";
import { Carousel } from "react-bootstrap";


function Recommendation() {
    return (
        <>
            <br/>
            <div className = "button">

                <Carousel>
                    <Carousel.Item>
                        <img
                            alt="First slide"
                            src={require('../images/download.jpg')}
                            width="300"
                            height="300"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            alt="Second slide"
                            src={require('../images/download.jpg')}
                            width="300"
                            height="300"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            alt="Third slide"
                            src={require('../images/download.jpg')}
                            width="300"
                            height="300"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            alt="First slide"
                            src={require('../images/download.jpg')}
                            width="300"
                            height="300"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            alt="First slide"
                            src={require('../images/download.jpg')}
                            width="300"
                            height="300"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default Recommendation;
