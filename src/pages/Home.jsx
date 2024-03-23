import Hero from "../components/Hero";
import wave from '../assets/wave.svg'
const Home = () => {
    return ( 
        <div>
            <div className="h-[70px]">
            </div>
            <Hero></Hero> 
            <img className="w-full" src={wave} alt="" />
        </div>
    );
};

export default Home;