import { Outlet } from "react-router-dom"
import Footer from "../../Component/Footer/Footer";
import Heading from "../../Component/Header/Header";


const Layout = () => {
    return (
        <>
            <Heading />

            <Outlet />
            
            <Footer />

        </>
    )
}

export default Layout