
import Footer from "../Components/Footer";
import GetStartedQuickly from "../Components/HomepageComponents.jsx/GetStartedQuickly";
import NoCredSection from "../Components/HomepageComponents.jsx/noCredSection";
import TrustedByTeams from "../Components/HomepageComponents.jsx/TrustedByTeams";
import Navbar from "../Components/Navbar";
import ConnectEverything from './../Components/HomepageComponents.jsx/Connecteverything';
import CreateSolution from './../Components/HomepageComponents.jsx/CreateSolution';
import UniteEverySection from './../Components/HomepageComponents.jsx/UniteEveryWork';


function Homepage(){

    return <>
    <Navbar />
    <ConnectEverything />
    <CreateSolution />
    <UniteEverySection />
    <GetStartedQuickly />
    <TrustedByTeams />
    <NoCredSection />
    <Footer />
    </>
}

export default Homepage;