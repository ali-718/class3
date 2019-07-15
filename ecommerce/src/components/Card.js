import React from 'react'

const Card = (props) => {
    return (
        <div className="card" style={{width:"18rem",marginTop:20}}>
            {/* {console.log(props)} */}
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 classNameName="card-title">{props.Name}</h5>
                <p classNameName="card-text">{props.Description}</p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    )
}

export default Card
