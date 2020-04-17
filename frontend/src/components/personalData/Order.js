import React, {Component} from 'react';
import DeliveryMethod from "./DeliveryMethod";
import PersonalData from "./PersonalData";

class Order extends Component {
    constructor(props) {
        super(props);
        this.checkMessage = '';
        this.state = {
            step: 1,
            homeDelivery: false,
            restaurantDelivery: false,
            userFirstName: '',
            userLastName: '',
            email: '',
            phoneNumber: '',
        }
    }

    changeStep = () =>{
        if(this.state.homeDelivery || this.state.restaurantDelivery){
            const {step} = this.state;
            this.setState({
                step: 2,
            },() => {
                console.log(this.state.step)
            });
        }else{
            this.setState({
                step: 1,
            },() => {
                console.log(this.state.step)
            })
        }
    }

    handleChange = (input) => (e) => {
        if(input === 'homeDelivery' || input === 'restaurantDelivery'){
            this.setState({ [input]: e.target.checked },()=> {
                console.log('handle ' + this.state.homeDelivery + ' ' + this.state.restaurantDelivery)
                this.changeStep()
            });
        }else{
            this.setState({ [input]: e.target.value });
        }
    };

    addFormDetails = (e, data) => {
        e.preventDefault();
        this.setState({
            homeDelivery: data.homeDelivery,
            restaurantDelivery: data.restaurantDelivery,
            userFirstName: data.userFirstName,
            userLastName: data.userLastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
        },() => {
            console.log('add ' + this.state.homeDelivery + ' ' + this.state.restaurantDelivery)
            this.changeStep()
        });
    };

    render() {
        const {homeDelivery, restaurantDelivery, userFirstName, userLastName, email, phoneNumber} = this.state;
        const values = {homeDelivery, restaurantDelivery, userFirstName, userLastName, email, phoneNumber};
        const {step} = this.state;
        console.log('step ' + step)
        switch (step) {
            case 1:
                return (
                    <div>
                        <DeliveryMethod values={values} handleChange={this.handleChange}/>
                        <PersonalData values={values} handleChange={this.handleChange} addFormDetails={this.addFormDetails} disabled={"disabled"}/>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <DeliveryMethod values={values} handleChange={this.handleChange}/>
                        <PersonalData values={values} handleChange={this.handleChange} addFormDetails={this.addFormDetails} disabled={''}/>
                    </div>
                );
        }
    }
}

export default Order;