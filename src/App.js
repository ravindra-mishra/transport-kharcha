import React from 'react';
import AccordianItem from './Components/AccordianItem';
import Trips from './Components/Trips';
import OrderDetails from './Components/OrderDetails';
import FilledFuel from './Components/FilledFuel';
import Expenses from './Components/Expenses';
import { useState } from "react";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state ={ xtotalFuelConsumption: "d", AmountOfFuelToBeFilled: "d", TotalExpenses: "d" };
    //   this.state.items = [
    //     {
    //       id: 0,
    //       name: '',
    //       description: '',
    //       price: '1.00',
    //       quantity: 1
    //     }
    //   ];
    //   this.editField = this.editField.bind(this);
    }
    updateGlobalData(data){
        this.setState({
            [data.name]: data.value
          });
    }
    render(){
        return (
        
            <div className="accordion" id="accordionExample">
                <Trips  updateGlobalData={this.updateGlobalData.bind(this)} id="One"></Trips>
                <FilledFuel id="Two" totalFuelConsumption="420" ></FilledFuel>
                <Expenses id="Three" AmountOfFuelToBeFilled="38000" ></Expenses>
                <OrderDetails id="Four" TotalExpenses="48700" ></OrderDetails>
                {JSON.stringify(this.state)}
            </div>
        );
    }
}

export default App;