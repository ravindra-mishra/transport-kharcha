import React from 'react';
import { useState } from "react";

function FilledFuel(props) {
    const [inputList, setInputList] = useState([
        { qtyLtr: "", rate: "", amount: "" }
    ]);
    const [finalOutput, setFinalOutput] = useState(
        { finalQtyLtr: "", finalQtyLtr: "", finalRate: "", finalAmount: "" }
    );

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;

        setInputList(list);
    }

    const handleAddInput = (e) => {
        setInputList([...inputList, { qtyLtr: "", rate: "", amount: "" },])
    }

    const handleRemoveInput = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    function TotalFuelFilled() {
        let totalFuelFilled = inputList.reduce(function (prev, current) {
            return prev + + (current.qtyLtr ? current.qtyLtr : 0);
        }, 0);
        return totalFuelFilled ? totalFuelFilled : "";
    }
    function BalanceFuelToFill() {
        finalOutput.finalQtyLtr = TotalFuelFilled() ?? "";
        return (props.totalFuelConsumption - finalOutput.finalQtyLtr) ?? "";
    }
    

    return (
        <div className="accordion-item" id={props.id}>
            <h2 className="accordion-header" id={"heading" + props.id}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + props.id} aria-expanded="true" aria-controls={"collapse" + props.id}>
                    Filled Fuel
                </button>
            </h2>
            <div id={"collapse" + props.id} className="accordion-collapse collapse" aria-labelledby={"heading" + props.id} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <div className="container">

                        {inputList.map((item, i) => {
                            return (
                                <div key={i} className="row">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="col align-self-start">
                                                <input
                                                    type="number"
                                                    name="qtyLtr"
                                                    placeholder="Qty in Ltr"
                                                    value={item.qtyLtr ? item.qtyLtr : ""}
                                                    onChange={e => handleChange(e, i)}
                                                />
                                            </div>
                                            <div className="col align-self-start">
                                                <input
                                                    type="number"
                                                    name="rate"
                                                    placeholder="Rate"
                                                    value={item.rate ? item.rate : ""}
                                                    onChange={e => handleChange(e, i)}
                                                />
                                            </div>
                                            <div className="col align-self-start">
                                                <input
                                                    type="number"
                                                    disabled={true}
                                                    name="amount"
                                                    placeholder="amount"
                                                    value={item.qtyLtr * item.rate  ?? ""}
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
                            <div>
                                <label><strong>Balance Fuel To Be Filled</strong></label>
                            </div>
                            <div className="col align-self-start">
                                <input
                                    type="number"
                                    disabled={true}
                                    name="balanceFuelToFill"
                                    placeholder="balanceFuelToFill"
                                    value={ finalOutput.BalanceFuelToFill =  BalanceFuelToFill() ?? ""}
                                />
                            </div>
                            <div className="col align-self-start">
                                <input
                                    type="number"
                                    name="finalRate"
                                    placeholder="rate"
                                    value={finalOutput.finalRate ? finalOutput.finalRate : ""}
                                    onChange={e => setFinalOutput({ finalRate: e.target.value })}
                                />
                            </div>
                            <div className="col align-self-start">
                                <input
                                    type="number"
                                    disabled={true}
                                    name="finalAmount"
                                    placeholder="rate"
                                    value={finalOutput.BalanceFuelToFill * finalOutput.finalRate ?? ""}
                                />
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
export default FilledFuel;