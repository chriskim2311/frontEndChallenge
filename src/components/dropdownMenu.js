import React from 'react'
import './profile.css'


function Dropdown(props) {
    const { label, onChange, data } = props
    return (
        <div >
            <label className="profile-form__row">
                {label + ':'}
                <select 
                className="profile-form__field profile-form__select"
                onChange={onChange}>
                {data.map((gender) => <option value={gender} key={gender}>{gender}</option>)}
                </select>
            </label>
        </div>
    )
}


export default Dropdown