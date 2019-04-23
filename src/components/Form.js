import React from "react";

const Form= props=>(

      <form  className="center" onSubmit= {props.getStock}>
        <input type = "text" name= "sName" placeholder = "Ticker"/>
        <button> Get Profile </button>
      </form>
    );


export default Form;
