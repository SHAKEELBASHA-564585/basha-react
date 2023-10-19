import { useState } from "react";
import { restaurants } from "../../constants";
import Card from "./Card"

const filterData = (hotels, searchInput) => {
    const filterData = hotels.filter((each) => each.name.includes(searchInput))
    return filterData

}

const Body = () => {
    const [searchInput, setSearchInput] = useState();
    const [hotels, setHotels] = useState(restaurants);


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
                {hotels.map(each => {
                    return <Card {...each} key={each.id} />
                })}
            </div>
        </>

    )
}
export default Body;
