import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      "The weather in ${response.data.name} is ${response.data.main.temp}°C"
    );
  }

  axios.get(apiUrl).then(handleResponse);
  return (
    <Loader
      type="Puff"
      color="orange"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
