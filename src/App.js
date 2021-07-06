import React from 'react';
import axios from 'axios';

  class App extends React.Component{
    constructor(props){
      super(props)
      
      this.state={
        City:'',
    DataSearch:'',
    CityDirectionsLat:'',
    CityDirectionsLon:'',
    ShowTheMap:false,
    DataForweather:[],

    }
      }
      LocationData =async(event)=>{
      event.preventDefault();
      
      
     await this.setState({DataSearch :event.target.Thecity.value})
     
      let MyUrl=`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.DataSearch}&format=json`;
      let GetTheData=await axios.get(MyUrl);
      
      console.log(GetTheData);
      console.log(GetTheData.data[0].display_name);

      this.setState({City: GetTheData.data[0].display_name,
        ShowTheMap:true
      })
      this.setState({CityDirectionsLat: GetTheData.data[0].lat
      })
      this.setState({CityDirectionsLon: GetTheData.data[0].lon
      })
    }

// WeatherData=async()=>{
//   await this.setState({DataSearch :event.target.Thecity.value})


// }

    render(){
    
      return(
        
       <>
       <h1>city-explorer</h1>
    {/* <button onClick={this.LocationData}>get the location info</button> */}
    <form onSubmit={this.LocationData} >
      <label>CityName
<input type='text' name='Thecity' ></input>
<input type='submit' value='get city information'></input>
</label>

    </form>
   <p>City: {this.state.City},{this.state.CityDirectionsLat},{this.state.CityDirectionsLon},{}</p>
   {this.state.ShowTheMap && <img alt =''src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.CityDirectionsLat},${this.state.CityDirectionsLon}&zoom=10`}></img>
}
        </> 
      )
    }
    
    }
    export default App;







    