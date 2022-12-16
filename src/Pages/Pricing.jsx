import Navbar from "../Components/Navbar";
import LoggedInNav from './../Components/loggedInNav';
import {useContext} from "react"
import { AuthContext } from "../Context/AuthContext";
import SignUpToday from "../Components/PricingComponents/SignUpToday";
import PerfectPlan from "../Components/PricingComponents/PerfectPlanText";
import PricingCards from './../Components/PricingComponents/PricingCards';
import Faq from './../Components/PricingComponents/Faq';
import NavFooter from './../Components/navFooter';
import Footer from './../Components/Footer';
import AdditionalQuestion from "../Components/PricingComponents/AdditionalQuestion";

export default function Pricing(){

    const {isAuth} = useContext(AuthContext);

    return <>
        {isAuth ? <LoggedInNav /> : <Navbar />}
        <SignUpToday />
        <PerfectPlan />
        <PricingCards />
        <AdditionalQuestion />
        <Faq />
        <NavFooter />
        <Footer />
        </>
}
