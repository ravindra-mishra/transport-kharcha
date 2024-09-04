import React from 'react';
import { useState } from "react";

function Expenses(props) {
    const [inputList, setInputList] = useState([
        { Text: "Diesel", amount: props.AmountOfFuelToBeFilled, expenseType: "Online" },
        { Text: "Toll", amount: "", expenseType: "Online" },
        { Text: "BACHAT", amount: "", expenseType: "" },
        { Text: "ROTI", amount: "", expenseType: "" },
        { Text: "LOADING/ UNLOADING", amount: "", expenseType: "" },
        { Text: "TYRE", amount: "", expenseType: "" },
        { Text: "BORDER", amount: "", expenseType: "" },
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
        setInputList([...inputList, { Text: "", amount: "", expenseType: "" }])
    }

    const handleRemoveInput = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    function TotalExpenses() {
        let totalExpenses = inputList.reduce(function (prev, current) {
            return prev + + (current.amount ? current.amount : 0);
        }, 0);
        return totalExpenses ? totalExpenses : "";
    }

    function TotalCashExpenses() {
        let totalExpenses = inputList.filter(e => e.expenseType !== "Online").reduce(function (prev, current) {
            return prev + + (current.amount ? current.amount : 0);
        }, 0);
        return totalExpenses ? totalExpenses : "";
    }


    return (
        <div className="accordion-item" id={props.id}>
            <h2 className="accordion-header" id={"heading" + props.id}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + props.id} aria-expanded="true" aria-controls={"collapse" + props.id}>
                    Expenses
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
                                                    type="text"
                                                    name="Text"
                                                    placeholder="Text"
                                                    value={item.Text ? item.Text : ""}
                                                    onChange={e => handleChange(e, i)}
                                                />
                                            </div>
                                            <div className="col align-self-start">
                                                <input
                                                    type="number"
                                                    name="amount"
                                                    placeholder="Amount"
                                                    value={item.amount ? item.amount : ""}
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
                                <label><strong>Total Cash Expenses</strong></label>
                            </div>
                            <div className="col align-self-end">
                                <input
                                    type="number"
                                    disabled={true}
                                    name="totalCashExpenses"
                                    placeholder="Total Cash Expenses"
                                    value={TotalCashExpenses() ?? ""}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col align-self-start">
                                <label><strong>Total Expenses</strong></label>
                            </div>
                            <div className="col align-self-end">
                                <input
                                    type="number"
                                    disabled={true}
                                    name="totalExpenses"
                                    placeholder="Total Expenses"
                                    value={TotalExpenses() ?? ""}
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
export default Expenses;