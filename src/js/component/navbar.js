
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const deleteFavorite = (e) => {
		actions.deleteFavorite(e.target.parentElement.firstChild.textContent);
	}
	return (
		<nav className="navbar sticky-top  navbar-light bg-light p-0">
			<Link to="/">
				<img src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-png-transparent.png" style={{ width: "6rem" }} className="navbar-brand mx-5 p-0" />
			</Link>
			<div className="dropdown mx-5">
				<button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					Favoritos <span className="btn border py-1">{store.favoriteArray.length}</span>
				</button>
				<ul className="dropdown-menu dropdown-menu-end">
					{store.favoriteArray.length > 0 ? store.favoriteArray.map((name) => {
						return (
							<li className="dropdown-item d-flex justify-content-between"><span>{name}</span><i className="bi bi-trash3" onClick={deleteFavorite}></i></li>
						)
					}) : <span className="dropdown-item">empty</span>}
				</ul>
			</div>
		</nav>
	);
};
