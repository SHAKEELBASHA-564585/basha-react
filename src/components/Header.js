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
export default Header