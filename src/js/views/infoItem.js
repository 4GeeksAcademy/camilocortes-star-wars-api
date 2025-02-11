import React from "react";
import { DetailedCardPeople } from "../component/detailedCardPeople";
import { DetailedCardPlanets } from "../component/detailedCardPlanets";
import { DetailedCardStarships } from "../component/detailedCardStarship";
import { useLocation, useParams } from "react-router-dom";

export const InfoItem = () => {
    const params = useParams()
    const path = useLocation()
    if (path.pathname.includes("people")) {
        return <DetailedCardPeople params={params} />
    } else if (path.pathname.includes("planets")) {
        return <DetailedCardPlanets params={params} />
    } else if (path.pathname.includes("starships")) {
        return <DetailedCardStarships params={params} />
    }
}