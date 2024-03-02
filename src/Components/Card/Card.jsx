/* eslint-disable no-empty */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { BsBook } from "@react-icons/all-files/bs/BsBook";



const Card = () => {
    const [courses, setCourses] = useState([])
    const [selectCourse, setSelectCourse] = useState([])
    const [totalCost, setTotalCost] = useState(0)
    const [totalDuration, setTotalDuration] = useState(0)
    const [creditHour, setCreditHour] = useState(0)
    useEffect(() => {
        fetch('./Data.json')
            .then((res) => res.json())
            .then((data) => setCourses(data))
    }, [])

    const handelSelectButton = (course) => {
        const isExist=selectCourse.find(item=>item.id == course.id)
        
        let count=parseInt(course.price)
        let c_duration = course.duration

        if(isExist){
          return  alert("AllReady Booked")
        }
        else
        {
            selectCourse.forEach((piece)=>{
                c_duration = c_duration + piece.duration
            })
            const totalRemaing = 20-c_duration;
            if(0>totalRemaing){
              return alert("You Could not take the course")
            }

            selectCourse.forEach((item)=>{
                
                count = count + parseInt(item.price);
                  
            })
            // const totalRemaing = 20-c_duration;
            // console.log(totalRemaing)
            // if(0>=totalRemaing){
            //     console.log("hello")
            // }
            setCreditHour(totalRemaing)
            setTotalDuration(c_duration)
            setTotalCost(count)
            setSelectCourse([...selectCourse, course])
        }
        
    }

    return (
        <div className="flex gap-10 mt-7">
            <div className="grid grid-cols-3 gap-4">
                {
                    courses.map((course) => (
                        <div className="card card-compact w-72 bg-base-100 shadow-xl">
                            <figure><img src={course.image_url} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{course.course_name}</h2>
                                <p>{course.description}</p>
                                <div className="flex justify-end">
                                    <p>$ Price: {course.price}</p>
                                    <BsBook/> <h3>Credit: {course.duration}hr </h3>
                                   
  
                                </div>
                                <div className="card-actions justify-center">
                                    <button onClick={() => handelSelectButton(course)} className=" py-1 rounded-lg px-20 bg-[#2F80ED] font-semibold text-white text-lg">Select</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Cart selectCourse={selectCourse} totalCost={totalCost} totalDuration={totalDuration} creditHour={creditHour}></Cart>
        </div>

    );
};

export default Card;