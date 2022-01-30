import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Page1 from "./Pages/Page1/Page1";
import Page2 from "./Pages/Page2/page2";

const App = () => {
    return (
        <>
            {/*----------------- Sidebar -----------------*/}
            <div className=" w-2/12 h-screen bg-slate-400 flex flex-col items-center font-semibold">
                <span className="text-center text-lg font-semibold my-4">
                    Sidebar
                </span>
                <Link className="text-blue underline" to="/">
                    {" "}
                    Page 1
                </Link>
                <Link className="text-blue underline" to="/page2">
                    {" "}
                    Page 2
                </Link>
            </div>

            {/*------------------- Routes -------------------*/}
            <Routes>
                <Route path="/page2" element={<Page2 />} />
                <Route path="/" exact element={<Page1 />} />
            </Routes>
        </>
    );
};

export default App;
