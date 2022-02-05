import React from "react";
import { Link } from "react-router-dom";

const Page5 = () => {
    return (
        <div className="page w-full ">
            <div className="container mx-10 my-10">
                <h1 className="text-2xl font-semibold my-6">
                    Address - Lorem ipsum
                </h1>

                <div class="mb-6 ">
                    <label
                        for="large-input"
                        class="block mb-2 font-medium text-gray-900 dark:text-gray-300"
                    >
                        Change Address
                    </label>
                    <input
                        type="text"
                        id="large-input"
                        placeholder="Change Address"
                        class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <Link
                    to="/page4"
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Save Changes And Go Back
                </Link>
            </div>
        </div>
    );
};

export default Page5;
