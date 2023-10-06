import { useState } from "react";
import { restaurants } from "../../constants";
import Card from "./Card"

const filterData = (searchInput, hotels) => { // filtering the hotels
    const finalData = hotels.filter((each => each.name.includes(searchInput)))
    return finalData
}

const Body = () => {

    const [searchInput, setSearchInput] = useState();   //var,callback function
    const [hotels, setHotels] = useState(restaurants);  //var,callback function

    return (
        <>
            <div className="search-cont">
                <input type="text" className="search-bar" placeholder="Search" value={searchInput} onChange={(e) => {
                    setSearchInput(e.target.value)
                }} />

                <button className="btn" onClick={() => {
                    const data = filterData(searchInput, hotels) //filtered data according to user input
                    setHotels(data) //returned data
                }}>Search</button>

            </div>

            <div className="card-list">
                {hotels.map(each => {
                    return <Card {...each} key={each.id} />
                })}
            </div>
        </>

    )
}
export default Body;
