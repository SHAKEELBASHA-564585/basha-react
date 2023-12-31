import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { restaurants } from "../../constants";
import Shimmer from "./Shimmer";
import Card from "./Card";
import { RESTAURANTS_LINK } from "../../constants";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  //if empty dependecy array can be seen in useEffect(CF),then it can be seen once after initial render
  //dep arr[searchInput]=>once after initial render+every time after re-render when my searchInput changes

  useEffect(() => {
    //API call
    getRestaurants();
    // const timerId = setInterval(() => {
    //   console.log("Basha");
    // }, 1000);
    console.log("useEffect");
    // return () => {
    //   clearInterval(timerId);
    //   console.log("useEffect return");
    // };
  }, []);

  console.log("render");

  async function getRestaurants() {
    const data = await fetch(RESTAURANTS_LINK);
    const json = await data.json();
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); //optional Chaining
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); //optional Chaining
  }

  //Conditional Rendering
  //if restaurants is empty then we should display shimmer UI
  //if restaurants has data then actual data should be loaded on UI

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>🔴 Offline, Please check your internet connection!!</h1>;
  }

  if (!allRestaurants) return null; //not rendered component(Early return)

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-cont">
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="btn"
          onClick={() => {
            const data = filterData(allRestaurants, searchInput);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      {filteredRestaurants.length === 0 ? (
        <h1>No Restaurants Matched Your Search</h1>
      ) : (
        <div className="card-list">
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <Card {...restaurant.info} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};
export default Body;
