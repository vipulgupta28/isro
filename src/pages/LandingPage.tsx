import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import History from "../components/history/History";
import ISRONews from "../components/news";

const LandingPage:React.FC = () =>{
    return(
        <>
        <Navbar/>
        <Hero/>
        <History/>
        <ISRONews/>
        </>
    )
}
export default LandingPage;