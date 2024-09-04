import React from 'react';
import { useState } from "react";

function OrderDetails(props){
    const [txtQty, setQty] = useState("");
    const [txtRate, setRate] = useState("");

        return (
            <div className="accordion-item" id={props.id}>
                <h2 className="accordion-header" id={"heading" + props.id}>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + props.id} aria-expanded="true" aria-controls={"collapse" + props.id}>
                        Order Details
                    </button>
                </h2>
                <div id={"collapse" + props.id} className="accordion-collapse collapse" aria-labelledby={"heading" + props.id} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="container">
                            <div className="row">
                                <div className="col align-self-start">
                                    Quantity
                                </div>
                                <div className="col align-self-end">
                                    <input
                                        type="number"
                                        onChange={e => setQty(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col align-self-start">
                                    Rate
                                </div>
                                <div className="col align-self-end">
                                    <input
                                        type="number"
                                        onChange={e => setRate(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col align-self-start">
                                    Order Value
                                </div>
                                <div className="col align-self-end">
                                    {txtQty * txtRate}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col align-self-start">
                                    Profit
                                </div>
                                <div className="col align-self-end">
                                {( txtQty * txtRate) - Number(props.TotalExpenses) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}
export default OrderDetails;