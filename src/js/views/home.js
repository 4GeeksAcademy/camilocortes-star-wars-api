import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context)

	useEffect(() => {
		store.endPoints.map((endPoint) => { actions.getInfoCard(endPoint) })
	}, [])
	return (
		<div className="container mt-3">
			<div className="row d-flex justify-content-center">
				<h2>Personajes</h2>
				<div className="scrollmenu">
					{store.people.map((people) => {
						return (
							<Card name={people.properties.name} uid={people.uid} key={people.uid} url={people.properties.url} gender={`Gender: ${people.properties.gender}`}
								hair_color={`Hair Color: ${people.properties.hair_color}`}
								eye_color={`Eye Color: ${people.properties.eye_color}`}
							/>
						)

					})}</div>
			</div>
			<div className="row">
				<h2>Planetas</h2>
				<div className="scrollmenu">
					{store.planets.map((planet) => {
						return (
							<Card name={planet.properties.name} uid={planet.uid} key={planet.uid} url={planet.properties.url}
								population={`Population: ${planet.properties.population}`}
								terrain={`Terrain: ${planet.properties.terrain}`}
								climate={`Climate: ${planet.properties.climate}`} />
						)
					})}</div>
			</div>
			<div className="row">
				<h2>Naves</h2>
				<div className="scrollmenu">
					{store.starships.map((starship) => {
						return (
							<Card name={starship.properties.name} uid={starship.uid} key={starship.uid} url={starship.properties.url}
								passengers={`Passengers: ${starship.properties.passengers}`}
								model={`Model: ${starship.properties.model}`}
								cargo_capacity={`Cargo Capacity: ${starship.properties.cargo_capacity}`} />
						)
					})}</div>
			</div>
		</div>
	)
} 