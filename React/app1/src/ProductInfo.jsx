import "./card.css"

function ProductInfo(props){

    let {card}=props;

    return(
        <div className="col-3 mb-2 myborder container-product">
            <div>  
                <img className="img-fluid" src={`/images/${card.image}`} />
            </div>
            {card.discount>0 && (
                <div className="discount">{card.discount}%Discount</div>
            ) }
            <div>
                {card.name}
            </div>
            <div>
                Rs.{card.mrp}
            </div>
            <div className="p-1">
                {card.inStock ? (<button className="btn btn-primary">Add to Cart</button>):
                (<button className="btn btn-secondary">Not in Stock</button>)

            }
            </div>
        </div>
    )

}
export default ProductInfo;