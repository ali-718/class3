import React, { Component } from 'react'
import { connect } from 'react-redux';
import { userLogin,getValue } from './../actions/userLogin';

class Login extends Component {

    componentDidMount(){
        this.props.getValue()
    }

    state={
        Name:"",
        Password:""
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.userLogin(this.state.Name,this.state.Password)
    }


    render() {
        return (
            <div style={{marginTop:100}}>
                <form onSubmit={this.onSubmit}>
                    {console.log(this.props)}
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onChange={(e) => {this.setState({Name:e.target.value})}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input onChange={(e) => {this.setState({Password:e.target.value})}} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth:state.auth
})

export default connect(mapStateToProps,{userLogin,getValue})(Login);
