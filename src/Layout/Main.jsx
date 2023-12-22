import { Outlet } from "react-router-dom";
import Header from "../Pages/SharedPage/Header";
import Footer from "../Pages/SharedPage/Footer";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;