import React, { useEffect, useState } from "react";
import "../styles/Main.scss";
import Meme from "./Meme";
export default function Main() {
  const [pokemons, setPokemons] = useState();
  const [url, setUrl] = useState();
  const [name, setName] = useState();
  const[top,setTop] = useState("#");
  const[bottom,setBottom] = useState("#");
  const [altUrl,setAltUrl] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
      const data = await response.json();
      
      setPokemons(data.results);
      
      
    };
    fetchData();
  }, []);

  async function clickHandler(){
    
    const index = Math.floor(Math.random()*pokemons.length);
    const curName = pokemons[index].name;
    ;
    const capitalizeName = curName[0].toUpperCase() + curName.slice(1);
    setName(capitalizeName);
    const url = pokemons[index].url;
    const response = await fetch(url);
    const data = await response.json();
    const photoUrl = data.sprites["front_default"];
    const altPhotoUrl = data.sprites["front_shiny"];
    setAltUrl(altPhotoUrl);
    setUrl(photoUrl);
  }
  function changeHandlerTop(event){
    const newValue = event.target.value;
    setTop(newValue);

  }
  function changeHandlerBottom(event){
    const newValue = event.target.value;
    setBottom(newValue);

  }

  return (
    <>
      <main className="main">
        <div className="form">
          <input onChange={changeHandlerTop} type="text" className="inputs" placeholder="Nickname" maxLength={10}/>
          <input onChange={changeHandlerBottom} type="text" className="inputs" placeholder="Bottom text" maxLength={10}/>

          <button onClick={clickHandler} className="btn">
            Summon pokemon! 🌍
          </button>
        </div>
        {url&&<Meme url={url} name={name} top={top} bottom={bottom} altUrl ={altUrl}/>}
        
      </main>
    </>
  );
}
