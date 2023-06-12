import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="slider/01.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="slider/02.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="slider/03.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="slider/04.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="slider/05.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;