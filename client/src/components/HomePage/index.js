import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component
{
constructor(props)
{
    super(props);
    this.state={
        email:"",
        password:""
    }

}

authenticate=()=>{
    this.props.onLogIn(
        {email:this.state.email});
}   
handleInputChange=(e)=>this.setState({[e.target.name]:e.target.value});
render ()
{
    return <div>
    <h1> Welcome to Real Estate Game!</h1>
    {!this.props.authenticated&&<div className="row">
        <div className="col-6 offset-3">
            <div className="input-group">
                <input name="email" value={this.state.email} onChange={this.handleInputChange} type="text" name="email" placeholder="Enter your email" className="form-control"/>
            </div>
            <div className="col-6 offset-3">
            <div className="input-group">
                <input name="password" value={this.state.password} onChange={this.handleInputChange} type="password" name="password" placeholder="Enter your password" className="form-control"/>
            </div>
            <button onClick={this.authenticate} className="btn btn-primary">Log In</button>
        </div>
        </div>
    </div>}
    {this.props.authenticated&&<div className="row">
        <div className="col-6 offset-3">
            <h1>Let's play the game!!!</h1>
            <Link to="/MainCtrl" className="btn btn-primary">Start Game</Link>
        </div>
    </div>}
</div>
}
}

export default HomePage;