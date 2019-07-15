import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div style={{height:50,width:"100%",backgroundColor: "gray",display:"flex",justifyContent: 'center',alignItems: 'center',}}>
                <div style={{height:30}}>
                    <Link to="/" style={{fontSize:20}}>Home</Link>
                    <Link style={{marginLeft:10,fontSize:20}}>Cart</Link>
                </div>
            </div>
        )
    }
}
