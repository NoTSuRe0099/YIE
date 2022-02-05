import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Page1 from "./Pages/Page1/Page1";
import Page2 from "./Pages/Page2/page2";
import Page3 from "./Pages/Page3/Page3";
import Page4 from "./Pages/page4/Page4";
import Page5 from "./Pages/Page5/Page5";
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
                <Link className="text-blue underline" to="/page3">
                    {" "}
                    Page 3
                </Link>
                <Link className="text-blue underline" to="/page4">
                    {" "}
                    Page 4
                </Link>
                <Link className="text-blue underline" to="/page5">
                    {" "}
                    Page 5
                </Link>
            </div>

            {/*------------------- Routes -------------------*/}
            <Routes>
                <Route path="/page5" exact element={<Page5 />} />

                <Route path="/page4" exact element={<Page4 />} />

                <Route path="/page3" exact element={<Page3 />} />

                <Route path="/page2" exact element={<Page2 />} />
                <Route path="/" exact element={<Page1 />} />
            </Routes>
        </>
    );
};

export default App;
