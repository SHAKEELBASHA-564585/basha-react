import React from 'react'
import ReactDOM from 'react-dom/client'

/**
            * Header-Logo(left),navitems(right)
            * Body
            *    -Restaurant List
            *       -Restaurant card
            *           -image,name,ratings,cuisines
            * Foooter-links,copyright
            */


//This is my Header section
const Header = () => {
    return (
        <div className='header'>
            <a href="/">
                <img src="https://th.bing.com/th/id/OIP._b6q0KzTrD7VrwPuS-gojgAAAA?pid=ImgDet&rs=1" alt="logo" className="logo" />
            </a>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Restaurants = [

    {
        name: "varalakshmi Tiffins",
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/8523266de1213e8ea57e5df4eedf747e',
        cuisines: ['South Indian', 'Tiffins'],
        rating: '4.2'
    },
    {
        name: "TajMahal-Abids",
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xtxi8kws7lmnwfardw0b',
        cuisines: ['Chinese', 'North Indian'],
        rating: '4.2'
    },
    {
        name: "Star Bucks Coffee",
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4df3497f1460dfd1ecd8125222f6d362',
        cuisines: ['Bevarages', 'Cafe'],
        rating: '4.2'
    },
    {
        name: "Haldiram's restaurant",
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c058b951bd917bf716630dff74648a5d',
        cuisines: ['Indian', 'Snacks'],
        rating: '4.2'
    },

    {
        name: "Millet Express",
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f89f83a650ad14380ffa50fccd9e2ac3',
        cuisines: ['Healthy Food', 'South Indian'],
        rating: '4.3'
    }
]
const Cards = (props) => {
    const { name, image, cuisines, rating } = props;
    return (
        <div className='card'>
            <img className='img' alt="img" src={image} />
            <h2>{name}</h2>
            <h3>{cuisines}</h3>
            <h4>{rating} Stars</h4>
        </div>

    )
}

//This is my Body section
const Body = () => {
    return (
        <div className="card-list">
            {Restaurants.map(each => {
                return <Cards {...each} />
            })}
        </div>
    )
}


//This is my Footer
const Footer = () => {
    return (
        <h1>This is my Footer</h1>
    )
}



//Submittion for all Components
const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)
