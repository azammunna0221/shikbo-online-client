
import { Helmet } from "react-helmet-async";
import Slider from "./Slider/Slider";
import Offer from "./Offer/Offer";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SO | Home</title>
            </Helmet>
            <Slider></Slider>
            <Offer></Offer>
            <p className=" font-extrabold text-amber-500">hello school</p>
        </div>
    );
};

export default Home;