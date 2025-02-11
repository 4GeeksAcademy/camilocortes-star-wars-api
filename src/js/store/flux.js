import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			endPoints: ["people", "planets", "starships"],
			infoDetail: [],
			favoriteArray: [],
			
		},
		actions: {
			getInfoCard: async (endPoint) => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};
				try {
					if (JSON.parse(localStorage.getItem([endPoint])) === null) {
						const response = await fetch(`https://www.swapi.tech/api/${endPoint}`, requestOptions);
						const result = await response.json();
						const detailedPeople = await Promise.all
							(
								result.results.map(async (personAllInfo) => {
									const detailResponse = await fetch(`${personAllInfo.url}`, requestOptions);
									const detailResult = await detailResponse.json();
									return detailResult.result;
								})
							)
						localStorage.setItem([endPoint], JSON.stringify(detailedPeople));
						setStore({ [endPoint]: detailedPeople })
					} else {
						setStore({ [endPoint]: JSON.parse(localStorage.getItem([endPoint])) })
					}
				} catch (error) {
					console.error(error);
				}
			},
			getDetails: async (endPoint) => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};
				try {
					const response = await fetch(`${endPoint}`, requestOptions);
					const result = await response.json();
					setStore({ infoDetail: result.result.properties });					
				} catch (error) {
					console.error(error);
				}
			},
			setFavoriteArray: (newFavorite) => {
				const store = getStore()
				setStore({ favoriteArray: store.favoriteArray.concat([newFavorite]) })
			},
			deleteFavorite: (name) => {
				const store = getStore()
				const newFavoriteArray = store.favoriteArray.filter((element) => {
					return name !== element
				});
				setStore({ favoriteArray: newFavoriteArray })
			},
			
		}
	}
}
export default getState;