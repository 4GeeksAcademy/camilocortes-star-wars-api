import React, { useContext,useEffect,useState } from "react";
import { Context } from "../store/appContext";

export const DetailedCardPlanets = (props) => {
    const { store } = useContext(Context)
    const [src, setSrc] = useState("")

    useEffect(() => {
        if (props.params.id == 1){
            setSrc("https://starwars-visualguide.com/assets/img/placeholder.jpg")
        } else{
            setSrc(`https://starwars-visualguide.com/assets/img/planets/${props.params.id}.jpg`)
        }
}, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                <img src={src} style={{ width: "400px" }} />
                </div>
                <div className="col-6">
                    <h1>{store.infoDetail.name}</h1>
                    <p >In the beginning there was nothing, then, through spontaneous generation, enters three beings. A Father, a Son, and a Daughter. The Daughter was of the light, the Son was of the dark, and the Father was charged with keeping the balance between the two. These beings had the ability to create life, and thus the Star Wars universe began.</p>
                </div>
            </div>
            <hr />
            <div className="row ">
                <div className="col-2">
                    <h3>Name</h3>
                    <p>{store.infoDetail.name}</p>
                </div>
                <div className="col-2">
                    <h3>Climate</h3>
                    <p>{store.infoDetail.climate}</p>
                </div>
                <div className="col-2">
                    <h3>Diameter</h3>
                    <p>{store.infoDetail.diameter}</p>
                </div>
                <div className="col-2">
                    <h3>terrain</h3>
                    <p>{store.infoDetail.terrain}</p>
                </div>
                <div className="col-2">
                    <h3>population</h3>
                    <p>{store.infoDetail.population}</p>
                </div>
                <div className="col-2">
                    <h3>gravity</h3>
                    <p>{store.infoDetail.gravity}</p>
                </div>
            </div>
        </div>
    )
}