import logo from '../img/airbnb-logo.png';

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="logo" src={logo} alt="AirBnb Logo"/>
        </nav>
    );
}