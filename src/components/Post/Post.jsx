import { Component } from 'react';
import './Post.css';

// import history from "../../history";

export default class NewThoughtRecordForm extends Component {

    state = {
        name: "",
        phone: "",
        email: "",
        message: "",
    };

    handleChange = (e) => {
        this.setState({ 
        [e.target.name]: e.target.value 
        });
    };



    handleSubmit = async (evt) => {
        evt.preventDefault()
        let body = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            message: this.state.message,
        }

        let jwt = localStorage.getItem('token')

        let options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              'Authorization' : 'Bearer ' + jwt,
            },
            body: JSON.stringify(body)
        };
        await fetch ("/api/submitContact", options)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    name: "",
                    contact: "",
                    email: "",
                    message: "",
                })
            this.props.history.push("/home")    
            })
    }

    render () {
        return (
            <div class="form">
                <h1 class="form-header">Contact Me!</h1>
                    <div class="form-content-th">
                           
                    <form onSubmit={this.handleSubmit} class="form">
                        
                        <div className="thought-entry">
                            <li class="thought-entry-title">What is your name?</li>
                            <textarea required class="thought-entry-title-info" name="name"value={this.state.name} onChange={this.handleChange}/>
                        </div>

                        <ul className="list">

                        <li>What is your phone number?</li>
                        <li class="textbox">
                        <textarea class="thought-info" name="contact" value={this.state.contact} onChange={this.handleChange}/>
                        </li>

                        <br />

                        <li>What is your email?</li>
                        <li class="textbox">
                        <textarea class="thought-info" name="email" value={this.state.email} onChange={this.handleChange} />
                        </li>

                        <br />

                        <li>Type your message here:</li>
                        <li class="textbox">
                        <textarea class="thought-info" name="message" value={this.state.message} onChange={this.handleChange} />
                        </li>

                        <br />

                        <div className="button">
                        <button class="save-button">Send Message</button>
                        </div>   
                        <br />
                        </ul>

                    </form>
                </div>
                <br />
                <br />
            </div>
    )
  }
}