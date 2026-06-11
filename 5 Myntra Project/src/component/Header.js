function Header() {
    return (
            <div className="heading">
                <img className="images" src="https://i.pinimg.com/1200x/05/71/89/057189610e860c8a86b4fef2b70d0947.jpg" alt="logo" height="80px" width="80px" />
                <div className="option">
                    <button className="but">MEN</button>
                    <button className="but">WOMEN</button>
                    <button className="but">KIDS</button>
                    <button className="but">HOME AND LIVING</button>
                    <button className="but">BEAUTY</button>
                    <button className="but">STUDIO</button>
                </div>
                <input className="searchbar" placeholder="Seacrh for Products brands and more"/>
                <div className="profile">
                    <button className="btn">PROFILE</button>
                    <button className="btn">WISHLIST</button>
                    <button className="btn">BAG</button>
                </div>
            </div>
    )
}

export default Header;