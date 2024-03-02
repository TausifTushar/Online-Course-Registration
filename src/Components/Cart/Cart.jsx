/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const Cart = ({ selectCourse, totalCost, totalDuration, creditHour }) => {
    console.log(creditHour)
    return (

        <><div className="w-96">
            <h4 className="py-3 font-bold text-3xl text-[#2F80ED]">Credit Hour Remaining: {creditHour}</h4>
            <hr />
            <div className="py-3 font-bold">Course Name</div>
            {/* {selectCourse.map((course) => (
                    <>
                        <div>

                            <ol>
                                <li type="1">{course.course_name}</li>
                            </ol>
                        </div>
                    </>
                )) */}
            <ol>
                {selectCourse.map((course) => (
                    <>
                        <li type="1">{course.course_name}</li>
                    </>
                ))
                }
            </ol>

            <hr />
            < h4 className="py-3 font-bold" > Total Credit Hour: {totalDuration}</h4>
            <hr />
            <h4 className="py-3 font-bold">Total Price:{totalCost} USD</h4>
        </div>
        </>



    );
};

export default Cart;