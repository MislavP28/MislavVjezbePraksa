import { Outlet } from "react-router-dom";
import "../../assets/CSS/app-wrapper.scss";
import { HeaderComponent } from "../Header/Header";
import { FooterComponent } from "../Footer/Footer";

function AppWrapper() {
    return (
        <>
            <div className='page-wrap'>
                <HeaderComponent />
                <div className='content-container'>
                    <div className="content-wrap">
                        <Outlet />
                    </div>
                </div>
                <FooterComponent />
            </div>
        </>
      )
}

export { AppWrapper };