import "../../assets/CSS/header.scss";
import { NavButtonComponent } from "../../components/ButtonComponent/NavigationButtonComponent";
import Logo from "../../assets/Logo/Logo.avif"
import { LogoComponent } from "../../components/ButtonComponent/LogoComponent";

function HeaderComponent() {
    return (
        <div className='header'>
            <div className='banner'>
            <LogoComponent 
                    logo={Logo}
                    alt="Logo Image"
                    onClick={(e) => handleNavigation(e)}
                />
            </div>
            <div className='nav'>
            <NavButtonComponent
                    text="Home page"
                    icon="bi bi-house"
                    onClick={(e) => handleNavigation(e)}
                />

                <NavButtonComponent
                    text="About"
                    icon="bi bi-person-raised-hand"
                    onClick={() => showPageNotFoundError("This page currently does not exist.")}
                />

                <NavButtonComponent
                    text="Contacts"
                    icon="bi bi-chat-text"
                    onClick={() => showPageNotFoundError("This page currently does not exist.")}
                />

                <NavButtonComponent
                    text="Login"
                    icon="bi bi-door-open-fill"
                    onClick={() => showPageNotFoundError("This page currently does not exist.")}
                />
            </div>
        </div>
    )
}

export { HeaderComponent };