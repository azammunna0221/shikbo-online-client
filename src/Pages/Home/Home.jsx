import { Helmet } from "react-helmet-async";
import Slider from "./Slider/Slider";
import Offer from "./Offer/Offer";
import { useLoaderData } from "react-router-dom";
import ShowClass from "./ShowClass";
import Pop_Ins from "./Components/Pop_Ins/Pop_Ins";


const Home = () => {
    const allClasses = useLoaderData();
    const showClasses = allClasses.slice(0,6);

    return (
        <div>
            <Helmet>
                <title>SO | Home</title>
            </Helmet>
            <Slider></Slider>
            <ShowClass course ={showClasses}></ShowClass>
            <Pop_Ins></Pop_Ins>
            <Offer></Offer>
            <p className=" font-extrabold text-amber-500">hello school {allClasses.length} </p>
        </div>
    );
};

export default Home;