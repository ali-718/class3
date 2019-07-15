import React, { Component } from 'react'
import Header from '../components/Header';
import Card from '../components/Card';
import {connect} from 'react-redux';
import { userLogin,getValue } from './../actions/userLogin';


class Home extends Component {

    state={
        data:[
            {
                id:1,
                Name:"Samsung galaxy S7",
                description:"Lorem Ipsum generator and it is a good mobile"
            },
            {
                id:2,
                Name:"Samsung galaxy S8",
                description:"Lorem Ipsum generator and it is a good mobile"
            },
            {
                id:3,
                Name:"Oppo F9",
                description:"Lorem Ipsum generator and it is a good mobile"
            },
            {
                id:4,
                Name:"Iphone X",
                description:"Lorem Ipsum generator and it is a good mobile"
            },
            {
                id:5,
                Name:"Huawei Mate 7",
                description:"Lorem Ipsum generator and it is a good mobile"
            },
            {
                id:6,
                Name:"Iphone 6+",
                description:"Lorem Ipsum generator and it is a good mobile",
            },
        ]
    }

    componentDidMount(){
        this.props.getValue()

        if(!localStorage.Name && !localStorage.Pass){
            this.props.history.push('/login')
        }

        setInterval(() => {
            if(!localStorage.Name && !localStorage.Pass){
                this.props.history.push('/login')
            }
        },1000)
    }

    render() {
        return (
            <div>
                <Header />
                <div style={{marginTop:50,display:"flex",alignItems: 'center',flexDirection:"column"}}>
                    {this.state.data.map((item) => (
                        <div key={item.id}>
                        <Card Name={item.Name} Description={item.description} />
                        </div>
                    ))}
                </div>
                {/* {console.log(this.props)} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        auth:state.auth
    })

export default connect(mapStateToProps,{getValue})(Home);
