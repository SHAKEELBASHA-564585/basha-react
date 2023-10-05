/**
            * Header-Logo(left),navitems(right)
            * Body
            *    -Restaurant List
            *       -Restaurant card
            *           -image,name,ratings,cuisines
            * Foooter-links,copyright
            */

import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './src/components/Header'
import Body from './src/components/Body'
import Footer from "./src/components/Footer"

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
