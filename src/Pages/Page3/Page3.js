import React from "react";
import { Link } from "react-router-dom";

const page3 = () => {
    return (
        <div className="w-full ml-5">
            <div className="mb-10">
                <h3 className="underline text-blue-400 font-semibold my-6">
                    User Profile
                </h3>
                <div className="flex w-full my-4">
                    <span className="font-semibold ">Name:</span>
                    <h3 className="mx-2">Lorem ipsum</h3>
                </div>
                <div className="flex w-full my-4">
                    <span className="font-semibold ">Class:</span>
                    <h3 className="mx-2">12th</h3>
                </div>
                <div className="flex w-full my-4">
                    <span className="font-semibold ">ID:</span>
                    <h3 className="mx-2">m43mt3ntuio423</h3>
                </div>
                <div className="flex w-full my-4">
                    <span className="font-semibold ">School:</span>
                    <h3 className="mx-2">Lorem ipsum dolor sit amet.</h3>
                </div>
                <div className="flex w-full my-4">
                    <span className="font-semibold ">Age:</span>
                    <h3 className="mx-2">16</h3>
                </div>
            </div>

            <Link
                to="/page4"
                className=" mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                {" "}
                Edit User Profile{" "}
            </Link>
        </div>
    );
};

export default page3;
