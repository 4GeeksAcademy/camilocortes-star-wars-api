import React, { useContext,useEffect,useState } from "react";
import { Context } from "../store/appContext";

export const DetailedCardStarships = (props) => {
    const { store } = useContext(Context)
    const [src, setSrc] = useState("")
    useEffect(() => {
        if (props.params.id == 2) {
            setSrc("https://starwars-visualguide.com/assets/img/placeholder.jpg")
        } else if (props.params.id == 3) {
            setSrc("https://starwars-visualguide.com/assets/img/placeholder.jpg")
        } else {
            setSrc(`https://starwars-visualguide.com/assets/img/planets/${props.params.id}.jpg`)
        }
    },[])
    

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
                    <h3>Pasanngers</h3>
                    <p>{store.infoDetail.passengers}</p>
                </div>
                <div className="col-2">
                    <h3>Length</h3>
                    <p>{store.infoDetail.length}</p>
                </div>
                <div className="col-2">
                    <h3>Cargo Capacity</h3>
                    <p>{store.infoDetail.cargo_capacity}</p>
                </div>
                <div className="col-2">
                    <h3>Cost In Creditis</h3>
                    <p>{store.infoDetail.cost_in_credits}</p>
                </div>
                <div className="col-2">
                    <h3>Manufacturer</h3>
                    <p>{store.infoDetail.manufacturer}</p>
                </div>
            </div>
        </div>
    )
}