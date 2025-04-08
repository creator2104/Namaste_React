import React, { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2156354&lng=72.63694149999999&restaurantId=204627&catalog_qa=undefined&query=Shake&submitAction=ENTER"
    );
    const json = await data.json();
    setresInfo(json.data);
  };

  if(resInfo === null) return <Shimmer />

  const {itemcards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card

  console.log(itemcards);

  const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;
  return  (
    <div className="menu">
      <h1>{restaurantInfo?.name || "Restaurant Name Not Found"}</h1>
      <h3>{restaurantInfo?.cuisines?.join(", ") || "Cuisines not found"}</h3>
      <h3>{restaurantInfo?.costForTwoMessage || "Cost info not found"}</h3>
      <h3>{restaurantInfo?.avgRating}</h3>
      <h3>{restaurantInfo?.totalRatingsString}</h3>
      <h3>{restaurantInfo?.areaName}</h3>
      <h3>{restaurantInfo?.city}</h3>
      <h3>{restaurantInfo?.sla?.deliveryTime}</h3>
      <h3>{restaurantInfo?.veg ? "Pure Veg Restaurant" : "Serves Non-Veg"}</h3>
      <ul>
        <li>{itemcards}</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
