import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../../constants";

const useDishes = (id) => {
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    getRestaurantsInfo();
  }, []);

  async function getRestaurantsInfo() {
    const data = await fetch(
      FETCH_MENU_URL + `${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data?.json();
    //console.log(json);
    const types =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    //console.log(types);

    setDishes(types);
  }
  return dishes;
};
export default useDishes;
