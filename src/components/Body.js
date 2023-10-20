import { useState, useEffect } from "react";
import { restaurants } from "../../constants";
import Card from "./Card"

const filterData = (hotels, searchInput) => {
    const filterData = hotels.filter((each) => each.info.name.includes(searchInput))
    return filterData

}


const Body = () => {
    const [searchInput, setSearchInput] = useState("");
    const [hotels, setHotels] = useState([]);
    console.log(hotels)

//if empty dependecy array can be seen in useEffect(CF),then it can be seen once after render
//dep arr[searchInput]=>once after initial render+every time after re-render when my searchInput changes

    useEffect(() => {    //API call
        getRestaurants();

    }, []) 
    
    async function getRestaurants(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json()

        setHotels(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

        
    }
    


    return (
        <>
              <div className="search-cont">
                <input type="text"
                    className="search-bar"
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e) => { setSearchInput(e.target.value) }}
                />
                <button className="btn" onClick={() => {
                    const data = filterData(hotels, searchInput);
                    setHotels(data)
                }} >Search</button>
            </div>

            <div className="card-list">
                {hotels.map((each) => {
                    return <Card {...each.info} key={each.info.id} />
                })}
            </div>
        </>

    )
}
export default Body;
