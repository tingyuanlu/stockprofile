import React, { Component } from 'react';
import Form from "./components/Form"
import Profile from "./components/Profile"

import './App.css';

class App extends Component {
  state={
    Price: undefined,
    Beta: undefined,
    VolAvg: undefined,
    MktCap: undefined,
    LastDiv: undefined,
    Range: undefined,
    Changes: undefined,
    ChangesPerc: undefined,
    companyName: undefined,
    exchange: undefined,
    industry: undefined,
    website: undefined,
    description: undefined,
  }
  getStock=async(e)=>{
    e.preventDefault();
    const stockTicker=e.target.elements.sName.value;
    console.log(stockTicker);
    const api_call = await fetch(`https://financialmodelingprep.com/api/company/profile/${stockTicker}?datatype=json`)
    console.log(api_call);
    const data= await api_call.json();
      console.log(data);
        this.setState({
          Price: data[`${stockTicker}`].Price,
          Beta: data[`${stockTicker}`].Beta,
          VolAvg: data[`${stockTicker}`].VolAvg,
          MktCap: data[`${stockTicker}`].MktCap,
          LastDiv: data[`${stockTicker}`].LastDiv,
          Range: data[`${stockTicker}`].Range,
          Changes: data[`${stockTicker}`].Changes,
          ChangesPerc: data[`${stockTicker}`].ChangesPerc,
          companyName: data[`${stockTicker}`].companyName,
          exchange: data[`${stockTicker}`].exchange,
          industry: data[`${stockTicker}`].industry,
          website: data[`${stockTicker}`].website,
          description: data[`${stockTicker}`].description,

        });

  }
  render() {
     return(
       <div >
        <Form getStock={this.getStock}/>
        <Profile
        Price={this.state.Price}
       Beta={this.state.Beta}
       VolAvg={this.state.VolAvg}
       MktCap={this.state.MktCap}
       LastDiv={this.state.LastDiv}
       Range={this.state.Range}
       Changes={this.state.Changes}
       ChangesPerc={this.state.ChangesPerc}
       companyName={this.state.companyName}
       exhange={this.state.exchange}
       industry ={this.state.industry}
       website={this.state.website}
       description={this.state.description}

        />
       </div>
     );
  }
}

export default App;
