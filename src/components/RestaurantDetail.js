import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import { IMG_CDN_URL } from "../../constants";
import useDishes from "../utils/useDishes";

const TYPE =
  "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

const RestaurantDetail = () => {
  const params = useParams(); //we can get params form route And this is also a hook...
  const { id } = params; //get this id from console.log(params)
  // console.log(id);

  const dishes = useDishes(id); //coming from utils(useDishes) And this is a new created hook created by us...
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
