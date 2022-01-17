import logo from "../img/logo.png";

export default function Nav() {
    return (
        <nav>
            <img src={logo} alt="Travel Blog" className="nav-logo" />
            <span className="blog-name">my travel journal.</span>
        </nav>
    );
}
