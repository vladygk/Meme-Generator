import "../styles/Header.scss";
import logo from "../assets/769px-Pokebola-pokeball-png-0.png";
import logo2 from "../assets/Great_Ball_Artwork.png";
export default function Header(){

    return <header>
        <img src={logo} alt="" />
        <h3>Pokemon Generator</h3>
        <img src={logo2} />
    </header>
}