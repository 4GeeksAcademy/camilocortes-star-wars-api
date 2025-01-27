import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const DetailedCard = () => {
    const { store } = useContext(Context)

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src="https://www.pizzaraj.sk/wp-content/uploads/2016/03/800x600-ph-1.jpg" style={{ width: "600px" }} />
                </div>
                <div className="col-6">
                    <h1>{store.infoDetail.name}</h1>
                    <p >In the beginning there was nothing, then, through spontaneous generation, enters three beings. A Father, a Son, and a Daughter. The Daughter was of the light, the Son was of the dark, and the Father was charged with keeping the balance between the two. These beings had the ability to create life, and thus the Star Wars universe began.</p>
                </div>
            </div>
            <hr />
            <div className="row details">
                <div className="col-2">
                    <p>{store.infoDetail.name}</p>
                </div>
                <div className="col-2">
                    <h3>Birthday Year</h3>
                    {/* <p>{store.infoDetail}</p> */}
                </div>
                <div className="col-2">
                    <h3>Gender</h3>
                    <p>{store.infoDetail.gender}</p>
                </div>
                <div className="col-2">
                    <h3>Height</h3>
                    {/* <p>{store.infoDetail}</p> */}
                </div>
                <div className="col-2">
                    <h3>Skin Color</h3>
                    {/* <p>{store.infoDetail}</p> */}
                </div>
                <div className="col-2">
                    <h3>Eye Colors</h3>
                    <p>{store.infoDetail.eye_color}</p>
                </div>
            </div>
        </div>
    )
}