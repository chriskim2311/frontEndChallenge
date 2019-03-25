import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './input.js';
import Dropdown from './dropdown.js';
import './profile.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name || '',
      phone: this.props.phone || '',
      email: this.props.email || '',
      gender: this.props.gender || '',
      formSuccess: false,
      emptyFields: [],
      class: "profile-form__row hide"

    }
  }

  removeInvalidClasses = () => {
    const emptyRedFields = document.querySelectorAll('.profile-form__field--invalid')
    for (let i = 0; i < emptyRedFields.length; i++) {
      emptyRedFields[i].classList.remove('profile-form__field--invalid')
    }
    // this.setState({
    //   formSuccess: false
    // })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const emptyFields = [];
    console.log(this.state)
    for (let field in this.state) {
      if (this.state[field] === '') {
        emptyFields.push(field)
      }
    }
    console.log(emptyFields)

    if (emptyFields.length) {
      this.removeInvalidClasses();
      let index = 0
      while (index < emptyFields.length - 1) {
        let inputField = document.getElementById(emptyFields[index])
        index++
        inputField.classList.add('profile-form__field--invalid')
      }
      this.setState({
        emptyFields: emptyFields,
        class: "profile-form__row"
      })
    } else {
      this.setState({
        formSuccess: true,
        class: "profile-form__row"
      })
    }
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handlePhone = (e) => {
    this.setState({
      phone: e.target.value
    })
  }
  handleGender = (e) => {
    this.setState({
      gender: e.target.value
    })
  }

  render() {
    return (
      <div className="app">
        <h1>{this.props.title}</h1>
        <form onSubmit={this.handleFormSubmit}>
          <Input className="profile-form__row" id="name" value={this.state.name} label="Name" type="text" onChange={this.handleName} />
          <Dropdown label={"Gender"} id="gender" data={["Unspecified", "Male", "Female"]} type="text" onChange={this.handleGender} />
          <Input className="profile-form__row" id="email" value={this.state.email} label="Email" type="text" onChange={this.handleEmail} />
          <Input className="profile-form__row" id="phone" value={this.state.phone} label="Phone" type="number" onChange={this.handlePhone} />
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
