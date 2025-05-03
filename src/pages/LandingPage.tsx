import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import History from "../components/history/History";

const LandingPage:React.FC = () =>{
    return(
        <>
        <Navbar/>
        <Hero/>
        <History/>
        </>
    )
}
export default LandingPage;