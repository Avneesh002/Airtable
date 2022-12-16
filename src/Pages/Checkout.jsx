
import BillingSection from '../Components/CheckoutComponent/BillingSection';
import ProfileNav from './../Components/profileNav';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import PaymentSuccess from '../Components/CheckoutComponent/PaymentSuccess';
export default function Checkout(){

const {timeVal} = useContext(AuthContext)
     return <>
        <ProfileNav />
        { timeVal ? <BillingSection /> : <PaymentSuccess />}
    </>
}