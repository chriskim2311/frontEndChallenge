import React from 'react'
import './profile.css'


function Input(props) {
    const {label, id, emptyInput, type, value, onChange} = props

        return(
            <div>
                <label>
                     {label + ":"}
                     <input
                     id= {id}
                     className=  {emptyInput ?  'profile-form__row profile-form__field--invalid' : "profile-form__row"}
                     type={type}
                     value={value}
                     onChange= {onChange}
                     />
                </label>
            </div>
        )
    }



export default Input;