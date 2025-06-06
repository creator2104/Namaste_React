// custom hooks

import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

// single responsibility principle
const useRestaurantMenu = (resId) => {
    const [resInfo , setresInfo] = useState(null)
   useEffect(()=>{
    fetchData()
   },[])
   const fetchData = async () => {
    const data = await fetch (MENU_API + resId)
    const json = await data.json()
    setresInfo(json.data )
   }
  return resInfo;

}

export default useRestaurantMenu;