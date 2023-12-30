import Footer from "./Footer/Footer";
import Heading from "./Header/Header";
import Main from "./Main/Main";
import Slider from "./Slider/Slider";
import Trademark from "./Trademark/Trademark";

function Container() {
    return (
        <div>
            <Heading />
            <Slider />
            <Main />
            <Trademark />
            <Footer />
        </div>

    )
}
export default Container