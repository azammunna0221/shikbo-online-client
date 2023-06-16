import { Bounce, Fade, Flip, Slide } from "react-awesome-reveal";

const Offer = () => {
    return (
        <div>
            <h1 className=" font-sans font-extrabold text-5xl text-center my-14">Get Ready For Discounts</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="learn.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <Fade>
                            <Bounce><h1 className="text-5xl font-bold">Enroll Your Favorite Course!</h1></Bounce>
                            <Flip>
                                <p className="py-6">Are you ready to expand your knowledge and enhance your skills? Take advantage of our limited-time offer and enroll in our high-quality courses at a discounted price. Do not miss this opportunity to level up your expertise and achieve your learning goals..</p>
                            </Flip>
                            <Slide>
                            <button className="btn btn-primary">Get Started</button>
                            </Slide>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;