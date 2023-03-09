import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      "The weather in ${response.data.name} is ${response.data.main.temp}°C"
    );
  }
}
