
import {Routes, Route} from "react-router-dom"
import Homepage from "../Pages/Homepage"
import SignIn from "../Pages/SignIn";
import Workplace from "../Pages/Workplace";
import SignUp from './../Pages/SignUpPage';
import Pricing from './../Pages/Pricing';

export default function AllRoutes(){

    return (
        <Routes>
            <Route path="/" element={<Homepage/>} ></Route>
            <Route path="/signup" element={<SignUp/>} ></Route>
            <Route path="/signin" element={<SignIn/>} ></Route>
            <Route path="/workplace" element={<Workplace/>} ></Route>
            <Route path="/pricing" element={<Pricing />} ></Route>


        </Routes>
    )

} 

