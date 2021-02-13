import React, { Component, useState, useEffect } from "react";
import "./style/home.css";
import axios from "axios";
import Dropdown from "./Dropdown";

export default function Home() {
    const [apiData, setAPIdata] = useState();

    useEffect(async () => {
        const data = await axios.get("/user-name");
        console.log(data.data);
        setAPIdata(data.data);
    }, []);

    return (
        <div>
            <Dropdown apidata={apiData} />
        </div>
    );
}
