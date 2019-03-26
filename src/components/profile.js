import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './input.js';
import Dropdown from './dropdownMenu.js';
import './profile.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class Profile extends Component {
  constructor(props) {
    super(props);
    const {name, phone, email, gender} = props.profile

    this.state = {
      profileName: name || '',
      phone: phone || '',
      email: email || '',
      gender: gender || '',
      formSuccess: false,
      emptyFields: [],
      class: "profile-form__row hide"

    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const emptyFields = [];
    for (let field in this.state) {
      if (this.state[field] === '') {
        emptyFields.push(field)
      }
    }
    if (emptyFields.length) {
      let stateObj = {
        formSuccess: false,
        emptyFields: emptyFields,
        class: "profile-form__row",
        emptyprofileName: false,
        emptyemail: false,
        emptyphone: false
      }

      for (let i = 0; i < emptyFields.length; i++) {
        stateObj['empty' + emptyFields[i]] = true
      }

      this.setState(stateObj)
    } else {
      this.setState({
        formSuccess: true,
        class: "profile-form__row",
        profileName: '',
        phone: '',
        email: '',
        gender: '',
        emptyFields: []
      })
    }
  }

  handleInputChange = (name, e) => {
    this.setState({
      [name]: e.target.value
    })

  }

  render() {
    const {emptyFields} = this.state
    return (
      <div className="app">
        <h1>{this.props.name}</h1>
        <form onSubmit={this.handleFormSubmit}>
          <Input 
          value={this.state.profileName} 
          label="Name" 
          type="text" 
          emptyInput={emptyFields.includes("profileName")} 
          onChange={(e) => this.handleInputChange("profileName", e)} />
          <Dropdown 
          label={"Gender"}  
          data={["Unspecified", "Male", "Female"]} 
          type="text" 
          onChange={(e) => this.handleInputChange("gender", e)} />
          <Input 
          value={this.state.email} 
          label="Email" 
          type="text" 
          emptyInput={emptyFields.includes("email")} 
          onChange={(e) => this.handleInputChange("email", e)} />
          <Input 
          value={this.state.phone} 
          label="Phone" 
          type="number" 
          emptyInput={emptyFields.includes("phone")} 
          onChange={(e) => this.handleInputChange("phone", e)} />
          <div className="profile-form__row">
            <input type="submit" value="Save" />
          </div>
          <div className="profile-form__row">
            {this.state.formSuccess ?
              <span className={this.state.class}>Form Submitted!</span>
              :
              <span value="Invalid form"className={this.state.class}>
              Invalid Form! {capitalizeFirstLetter(`${this.state.emptyFields.join(', ')} can not be blank`)}
              </span>
            }
          </div>
        </form>
      </div>
    );
  }
}

Profile.defaultProps = {
  profile: {
    name: '',
    gender: '',
    email: '',
    phone: ''
  }
}

Profile.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }),
  name: PropTypes.string.isRequired
}

export default Profile;
