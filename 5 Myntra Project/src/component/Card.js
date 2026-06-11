function Card(props) {
    return (
            <div className="card">
                <img src="https://www.thewalkdeal.com/cdn/shop/products/Alone-NavyBlue.jpg?v=164075727" alt="Product Img" height="200px" width="200px" />
                <div style={{ textAlign: "center" }}>
                    <h2>{props.cloth}</h2>
                    <h1>{props.offer}</h1>
                    <h1>Rs. {props.price}</h1>
                    <h2>Shop Now</h2>
                </div>
            </div>
    )
}

export default Card;