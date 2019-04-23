import React from "react";

class Profile extends React.Component{
  render(){


    return(


      <div className="center">
      {this.props.Price && <p>Price :{this.props.Price}</p>}
      {this.props.Beta && <p>Beta :{this.props.Beta}</p>}
      {this.props.VolAvg &&<p>Vol Avg: {this.props.VolAvg}</p>}
      {this.props.MktCap &&<p> Market Cap:{this.props.MktCap}</p>}
      {this.props.LastDiv &&<p>LastDiv :{this.props.LastDiv}</p>}


      {this.props.Range&& <p> Rangs: {this.props.Range}%</p>}
      {this.props.Changes&& <p> Changes:{this.props.Changes}%</p>}

      {this.props.ChangesPerc&&<p>Changes Perc: {this.props.ChangesPerc}</p>}
      {this.props.companyName&&<p>Company Name: {this.props.companyName}</p>}
      {this.props.exchange&&<p>Exchange: {this.props.exchange}</p>}
      {this.props.industry&&<p>Industry: {this.props.industry}</p>}
      {this.props.website&&<p>Website: {this.props.website}</p>}
      {this.props.description&&<p>description: {this.props.description}</p>}
       </div>
    )
  }
}

export default Profile;
