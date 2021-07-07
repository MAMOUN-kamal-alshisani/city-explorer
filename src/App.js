import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Movies from './component/Movies'
import Table from 'react-bootstrap/Table'

// import Cards from 'card'
  class App extends React.Component{
    constructor(props){
      super(props)
      
      this.state={
        City:'',
    DataSearch:'',
    CityDirectionsLat:'',
    CityDirectionsLon:'',
    daysDATA:'',
    date:'',
    Desc:'',
    ShowTheMap:false,
    DataForweather:false,
   weather:{},
  TheMoviesData:{}

    }
  }
     LocationData =async(event)=>{
      event.preventDefault();
     await this.setState({DataSearch :event.target.Thecity.value})
     
      let MyUrl=`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.DataSearch}&format=json`;
      let GetTheData = await axios.get(MyUrl);
      this.setState({City: GetTheData.data[0].display_name, CityDirectionsLat: GetTheData.data[0].lat ,CityDirectionsLon: GetTheData.data[0].lon,
        ShowTheMap:true
      })

      // http://localhost:3001/GetMovieUrl?CityMovie=Amman

      let TheMoviesUrl=`https://cityexplorerv3.herokuapp.com/GetMovieUrl?CityMovie=${this.state.DataSearch}&format=json`
      let TheMoviesreq= await axios.get(TheMoviesUrl)
      console.log(TheMoviesreq);
      await this.setState({TheMoviesData:TheMoviesreq.data.original_title })


      console.log(this.state.TheMoviesData)
      this.renderweather();
      //
      // let TheMoviesUrl=`{https://cityexplorerv3.herokuapp.com/GetMovieUrl?CityMovie=${this.state.DataSearch}`
    }
    



   renderweather = async () =>{
let CityInfo= this.state.DataSearch.charAt(0).toUpperCase() +this.state.DataSearch.slice(1);

    let TheWeatherUrl=`https://city-explorer-api12.herokuapp.com/GetweatherDATA?cityName=${CityInfo}&format=json`
    let GetTHEWeather=await axios.get(TheWeatherUrl);
     
   
    await this.setState({ date:GetTHEWeather.data[0].valid_date, Desc:GetTHEWeather.data[0].description , date1:GetTHEWeather.data[1].valid_date, Desc1:GetTHEWeather.data[1].description ,
      date2:GetTHEWeather.data[2].valid_date, Desc2:GetTHEWeather.data[2].description,DataForweather:true
    })
    
   }
  
   
    
   
  

   
   
   
   
    render(){
    
      return(
        
       <>

<Table>
<thead>
<tr>
    <td>
title :
    </td>
</tr>
<tr>
    <td>
overview :
    </td>
</tr>

<tr>
    <td>
    average_vote :
        
    </td>
</tr>
<tr>
    <td>
total_votes :
        
    </td>
</tr>
<tr>
    <td>
    popularity
        
    </td>
</tr>
<tr>
    <td>
    poster_path
        
    </td>
</tr>
<tr>
    <td>
    release_date
        
    </td>
</tr>
</thead>
</Table>

{/* 
<Movies/> */}

<form onSubmit={this.LocationData} >
      <label>CityName
<input type='text' name='Thecity' ></input>
<input type='submit' value='get city information'></input>
</label>

    </form>


       
       <Card style={{ width: '18rem' }} onClick={this.changeState} className="cards">
                    <Card.Img variant="top" src={this.props.image_url} />
                    <Card.Body>
                        <Card.Title> City:{this.state.City}</Card.Title>
                        <Card.Text>
                      lat :  {this.state.CityDirectionsLat}
                        </Card.Text>
                        <Card.Text>
                       lon : {this.state.CityDirectionsLon}
                        </Card.Text>
                        {this.state.ShowTheMap &&
                        <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.CityDirectionsLat},${this.state.CityDirectionsLon}&zoom=10`}></Card.Img>
                        }
                       
                        <Card.Text>
                        valid_date: {this.state.date}
                        </Card.Text>
                        <Card.Text>
                        Description:{this.state.Desc}
                        </Card.Text>
                        <Card.Text>
                        valid_date:{this.state.date1}
                        </Card.Text>
                        <Card.Text>
                        Description:{this.state.Desc1}
                        </Card.Text>
                        <Card.Text>
                        valid_date:{this.state.date2}
                         </Card.Text>
                        <Card.Text>
                        Description:{this.state.Desc2}
                        </Card.Text>
                    </Card.Body>
                </Card>

    {/* <button onClick={this.LocationData}>get the location info</button> */}
 


        </> 
      )
    }
    
    }
    export default App;







    