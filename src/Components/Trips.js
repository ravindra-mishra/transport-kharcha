import React from 'react';
import { useState } from "react";

export const  Trips = (props) => {
    const [inputList, setInputList] = useState([
        { tripName: "", tripDistance: "", fuelAverage: "", fuelConsumption: "" }
    ]);

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    }
    const handleAddInput = (e) => {
        setInputList([...inputList, { tripName: "", tripDistance: "", fuelAverage: "", fuelConsumption: "" },])
    }
    const handleRemoveInput = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }
    function totalFuelConsumption() {
        let totalFuelConsumption = inputList.reduce(function (prev, current) {
            return prev + + (current.fuelConsumption ? current.fuelConsumption : 0);
        }, 0);
        return totalFuelConsumption ? totalFuelConsumption : "";
    }

    return (
        <div className="accordion-item" id={props.id}>
            <h2 className="accordion-header" id={"heading" + props.id}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + props.id} aria-expanded="true" aria-controls={"collapse" + props.id}>
                    Trips
                </button>
            </h2>
            <div id={"collapse" + props.id} className="accordion-collapse collapse show" aria-labelledby={"heading" + props.id} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <div className="container">

                        {inputList.map((item, i) => {
                            return (
                                <div key={i} className="row">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="col align-self-start">
                                                <input
                                                    type="text"
                                                    name="tripName"
                                                    placeholder="Trip Name"
                                                    value={item.tripName}
                                                    onChange={e => handleChange(e, i)}
                                                />
                                            </div>
                                            <div className="col align-self-start">
                                                <input
                                                    type="number"
                                                    name="tripDistance"
                                                    placeholder="Trip Distance"
                                                    value={item.tripDistance ? item.tripDistance : ""}
                                                    onChange={e => handleChange(e, i)}
                                                />
                                            </div>
                                            <div className="col align-self-start">
                                                <input
                                                    type="number"
                                                    name="fuelAverage"
                                                    placeholder="Fuel Average"
                                                    value={item.fuelAverage ? item.fuelAverage : ""}
                                                    onChange={e => handleChange(e, i)}
                                                />
                                            </div>
                                            <div className="col align-self-end">
                                                <input
                                                    type="number"
                                                    disabled={true}
                                                    name="fuelConsumption"
                                                    placeholder="Fuel Consumption"
                                                    value={Number(item.fuelConsumption = Number(item.tripDistance) / Number(item.fuelAverage))}
                                                    onChange={e => handleChange(e, i)}
                                                />
                                            </div>
                                            <div className="col align-self-end">
                                                <input
                                                    type="button"
                                                    value="Remove"
                                                    className="btn btn-danger"
                                                    onClick={() => handleRemoveInput(i)}
                                                />
                                            </div>

                                        </div>
                                    </div>
                                    <br />

                                </div>
                            )
                        })}
                        <div className="row">
                            <div className="col align-self-start">
                                <label><strong>Total Fuel Consumption</strong></label>
                            </div>
                            <div className="col align-self-end">
                                <label><strong>{totalFuelConsumption()}</strong></label>
                            </div>
                        </div>
                        <div className="row">
                            <input
                                type="button"
                                value="Add"
                                className="btn btn-outline-success"
                                onClick={handleAddInput}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Trips;