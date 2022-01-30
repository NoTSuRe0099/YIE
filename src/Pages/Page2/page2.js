import React from "react";

const page2 = () => {
    const data = [
        {
            total: 25,
            date: "30/01/2022",
            employees: false,
        },
        {
            total: 26,
            date: "30/01/2022",
            employees: false,
        },
        {
            total: 29,
            date: "30/01/2022",
            employees: false,
        },
        {
            total: 23,
            date: "30/01/2022",
            employees: false,
        },
    ];

    const row = data.map((data) => {
        return (
            <tr class="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data.total}
                </td>
                <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    {data.date}
                </td>
                <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400 flex items-center">
                    <span className="ml-1 underline text-blue-700 font-semibold cursor:pointer">
                        List
                    </span>
                </td>
            </tr>
        );
    });

    return (
        <div className="w-full px-12">
            <h1 className="text-center w-full font-semibold text-3xl my-5">
                Student Admin Dashboard
            </h1>

            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold ">Teacher's Attendance</h3>
                <span className=" border w-10 h-10 rounded-full text-2xl flex justify-center items-center cursor-pointer p-4">
                    <i class="bx bxs-user-plus text-blue-600 "></i>
                </span>
            </div>

            <div className="flex items-center my-4">
                <div className="mr-4">
                    <button
                        id="dropdownButton"
                        data-dropdown-toggle="dropdown"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                    >
                        Select Department
                        <svg
                            class="ml-2 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </button>

                    <div
                        id="dropdown"
                        class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                    >
                        <ul class="py-1" aria-labelledby="dropdownButton">
                            <li>
                                <span
                                    href="#"
                                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                    Dashboard
                                </span>
                            </li>
                            <li>
                                <span
                                    href="#"
                                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                    Settings
                                </span>
                            </li>
                            <li>
                                <span
                                    href="#"
                                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                    Earnings
                                </span>
                            </li>
                            <li>
                                <span
                                    href="#"
                                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                    Sign out
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="font-semibold">Today's Date - 30/01/2022</div>
            </div>

            <div className="flex items-center mt-4 mb-8">
                <h3 className="font-semibold">Select Date</h3>{" "}
                <input className="mx-2" type="date" name="" id="" />{" "}
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Apply
                </button>
            </div>

            <div className="flex  w-full items-center justify-between">
                <button
                    type="button"
                    class="py-1.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 flex items-center"
                >
                    Generate Attendance Sheet
                    <i class="bx bx-refresh text-lg ml-1"></i>
                </button>
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Back To Home Page
                </button>
            </div>

            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                        <div class="max-h-96 overflow-y-scroll shadow-md sm:rounded-lg">
                            <table class="min-w-full ">
                                <thead class="bg-gray-100 dark:bg-gray-700 sticky">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                        >
                                            Total Attendance
                                        </th>
                                        <th
                                            scope="col"
                                            class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                        >
                                            Date
                                        </th>
                                        <th
                                            scope="col"
                                            class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                        >
                                            List of Employees Attendance
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>{row}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page2;
