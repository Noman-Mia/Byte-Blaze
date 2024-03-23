import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
        
            <div className="min-h-[calc(100vh-60px)]">
            <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;