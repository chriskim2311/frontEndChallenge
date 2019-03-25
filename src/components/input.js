import React, {Component} from 'react'
import './profile.css'


class Input extends Component {
    constructor(props){
        super(props)

        this.state= {
            value: '',
            label: '',
            type: '',
            emptyFields: [],
            emptyInput: false
        }
    }
    componentDidUpdate(previousProps, previousState){
        console.log(this.props.emptyInput)
        if(previousProps.emptyInput !== this.props.emptyInput){
            this.setState({
                emptyInput: this.props.emptyInput
            })
        }
    }


    componentDidMount() {
        this.setState({
            value: this.props.value,
            label: this.props.label,
            type: this.props.type,
            
        })
    }


    render() {
        return(
            <div>
                <label>
                     {this.state.label + ":"}
                     <input
                     id= {this.props.id}
                     className=  {this.state.emptyInput ?  'profile-form__row profile-form__field--invalid' : "profile-form__row"}
                     type={this.state.type}
                     value={this.props.value}
                     onChange= {this.props.onChange}
                     />
                </label>
            </div>
        )
    }
}


export default Input;