
import { Helmet } from "react-helmet-async";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SO | Home</title>
            </Helmet>
            <Slider></Slider>
            <p className=" font-extrabold text-amber-500">hello school</p>
        </div>
    );
};

export default Home;