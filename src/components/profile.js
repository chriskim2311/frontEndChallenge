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

    this.state = {
      name: this.props.name,
      profileName: this.props.profileName || '',
      phone: this.props.phone || '',
      email: this.props.email || '',
      gender: this.props.gender || '',
      formSuccess: false,
      emptyprofileName: false,
      emptyemail: false,
      emptyphone: false,
      emptyFields: [],
      class: "profile-form__row hide"

    }
  }

  // removeInvalidClasses = () => {
  //   const emptyRedFields = document.querySelectorAll('.profile-form__field--invalid')
  //   for (let i = 0; i < emptyRedFields.length; i++) {
  //     emptyRedFields[i].classList.remove('profile-form__field--invalid')
  //   }
  // }

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
        emptyprofileName: false,
        emptyemail: false,
        emptyphone: false,
      })
    }
  }

  handleInputChange = (name, e) => {
    this.setState({
      [name]: e.target.value
    })

  }

  render() {
    return (
      <div className="app">
        <h1>{this.props.name}</h1>
        <form onSubmit={this.handleFormSubmit}>
          <Input name="profileName" value={this.state.profileName} label="Name" type="text" emptyInput={this.state.emptyprofileName} onChange={(e) => this.handleInputChange("profileName", e)} />
          <Dropdown label={"Gender"} name="gender" data={["Unspecified", "Male", "Female"]} type="text" onChange={(e) => this.handleInputChange("gender", e)} />
          <Input name="email" value={this.state.email} label="Email" type="text" emptyInput={this.state.emptyemail} onChange={(e) => this.handleInputChange("email", e)} />
          <Input name="phone" value={this.state.phone} label="Phone" type="number" emptyInput={this.state.emptyphone} onChange={(e) => this.handleInputChange("phone", e)} />
          <div className="profile-form__row">
            <input type="submit" value="Save" />
          </div>
          <div className="profile-form__row">
            {this.state.formSuccess ?
              <span className={this.state.class}>Form Submitted!</span>
              :
              <span value="Invalid form"
                className={this.state.class}>Invalid Form! {capitalizeFirstLetter(`${this.state.emptyFields.join(', ')} can not be blank`)}
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
