
import {Routes, Route} from "react-router-dom"
import Homepage from "../Pages/Homepage"
import SignIn from "../Pages/SignIn";
import Workplace from "../Pages/Workplace";
import SignUp from './../Pages/SignUpPage';
import Pricing from './../Pages/Pricing';
import Checkout from './../Pages/Checkout';
import BasePage from './../Pages/BasePage';
import SinglePage from './../Pages/SinglePageTable';

export default function AllRoutes(){

    return (
        <Routes>
            <Route path="/" element={<Homepage/>} ></Route>
            <Route path="/signup" element={<SignUp/>} ></Route>
            <Route path="/signin" element={<SignIn/>} ></Route>
            <Route path="/workplace" element={<Workplace/>} ></Route>
            <Route path="/pricing" element={<Pricing />} ></Route>
            <Route path="/checkout" element={<Checkout />} ></Route>
            <Route path="/workbase" element={<BasePage />} ></Route>
            <Route path="/base/:id" element={<SinglePage />} ></Route>


        </Routes>
    )

} 

