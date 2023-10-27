import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import { IMG_CDN_URL } from "../../constants";

const TYPE =
  "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

const RestaurantDetail = () => {
  const [dishes, setDishes] = useState([]);

  const params = useParams(); //we can get params form route
  const { id } = params; //get this id from console.log(params)
  // console.log(id);

  useEffect(() => {
    getRestaurantsInfo();
  }, []);

  async function getRestaurantsInfo() {
    const data = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data?.json();
    //console.log(json);
    const types =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    //console.log(types);

    setDishes(types);
  }
  return !dishes ? (
    <Shimmer />
  ) : (
    <div>
      {dishes.map((each) => {
        if (each?.card?.card["@type"]?.includes(".ItemCategory")) {
          return (
            <div key={each?.card?.card?.title}>
              <h1 className="heading">{each?.card?.card?.title}</h1>
              {each?.card?.card?.itemCards?.map((dish) => (
                <div className="flex-items">
                  <div>
                    <h2 className="paraa" key={dish?.card?.info?.id}>
                      {dish?.card?.info?.name}
                    </h2>
                    <p>{dish?.card?.info?.description}</p>
                  </div>
                  <img
                    className="image"
                    src={IMG_CDN_URL + dish?.card?.info?.imageId}
                  />
                </div>
              ))}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};
export default RestaurantDetail;
