import { useEffect, useState } from "react";
import SixIns from "./SixIns";

const Pop_Ins = () => {

    const [instructor, setInstructor] = useState([]);
    useEffect(()=> {
        fetch('https://summer-camp-school-server-xi-rose.vercel.app/instructors')
        .then(res => res.json())
        .then(data => setInstructor(data))
    },[])

    const popInstructor = instructor.slice(0,6);

    return (
        <div>
            <SixIns instructors = {popInstructor}></SixIns>
        </div>
    );
};

export default Pop_Ins;