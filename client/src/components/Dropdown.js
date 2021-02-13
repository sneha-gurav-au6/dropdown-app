import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";

export default function Dropdown(props) {
    console.log(props.apidata);

    const options = props.apidata;
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                width: "30% ",
                margin: "50px",
            }}
        >
            <Multiselect options={options} displayValue="name" />
        </div>
    );
}
