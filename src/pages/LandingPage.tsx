import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import History from "../components/history/History";
import ISRONews from "../components/news";
import Footer from "../components/Footer/Footer";

const LandingPage:React.FC = () =>{
    return(
        <>
        <Navbar/>
        <Hero/>
        <History/>
        <ISRONews/>
        <Footer/>
        </>
    )
}
export default LandingPage;