import { NavBarContainer, NavBarLeft, NavBarRight, NavBarWrapper, Navigation, Logo, NavBarSignatureText } from "./NavBarElements";
import { NavLink } from "react-router-dom";
import ReactImage from '../../assets/images/react.png';


const NavBar = () => {
    return (
        <>
            <NavBarContainer>
                <NavBarWrapper>
                    <NavBarLeft>
                        <Logo src={ReactImage} type='images/png'/>
                        <Navigation>
                            <NavLink to="/" style={{ textDecoration: 'none', color: 'black', fontSize: '25px' }}>Home</NavLink> |{" "}
                            <NavLink to="/book" style={{ textDecoration: 'none', color: 'black', fontSize: '25px' }}>Booking</NavLink>
                        </Navigation>
                    </NavBarLeft>
                    <NavBarRight>
                        <NavBarSignatureText>Calendar with React by Ayoub Moutaouakil</NavBarSignatureText>
                    </NavBarRight>
                </NavBarWrapper>
            </NavBarContainer>
        </>
    );
};

export default NavBar;