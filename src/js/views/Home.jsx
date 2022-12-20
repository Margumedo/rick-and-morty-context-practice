import React, { useEffect, useState } from "react";

//Componentes
import Character from "../component/Character.jsx"


//create your first component
const Home = () => {

	//creo mis constastes
	const urlApi = 'https://rickandmortyapi.com/api/character'

	//creo mis hooks
	const [characters, setCharacters] = useState([])

	//creo funciones del fetch
	const getCharacters = async () => {

		try {
			let response = await fetch(urlApi);
			if (response.ok) {
				let data = await response.json();
				console.log(data)
				setCharacters(data.results);
			} else {
				console.log("Epa bro no funciono revisa!")
			}

		} catch (error) {
			console.log(`Explote manin con el error: ${error}`);
		}
	}

	useEffect(() => {
		getCharacters();
	}, [])

	return (
		<>
			<div className="container">
				<div className="row">
					{
						characters.map((character, index)=>{
							return(
								<Character key={`character-${character.id} `} {...character}/>
							);
						})
					}
				</div>
			</div>
		</>
	);
};

export default Home;
