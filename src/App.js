import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './component/Movies'
 
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
    showmovie:false,
    ShowTheMap:false,
    DataForCity:false,
   
  TheMoviesData:[],

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
    
    
this.GetTheCity();
this.GetMovies();


  }
  GetMovies = async () => {
    let THEmovies = this.state.DataSearch.charAt(0).toUpperCase() + this.state.DataSearch.slice(1);
  let TheMoviesUrl=`https://cityexplorerv3.herokuapp.com/GetMovieUrl?CityMovie=${THEmovies}&format=json`
  let TheMoviesreq= await axios.get(TheMoviesUrl)
  console.log(TheMoviesreq);
  await this.setState({TheMoviesData:TheMoviesreq.data , showmovie:true  })
    // console.log(this.state.TheMoviesData)
  // let TheMoviesUrl=`{https://cityexplorerv3.herokuapp.com/GetMovieUrl?CityMovie=${this.state.DataSearch}`
}

GetTheCity = async () =>{
let CityInfo= this.state.DataSearch.charAt(0).toUpperCase() +this.state.DataSearch.slice(1);

    let TheCityUrl=`https://city-explorer-api12.herokuapp.com/GetweatherDATA?cityName=${CityInfo}&format=json`
    let GetTHECity=await axios.get(TheCityUrl);
    await this.setState({ date:GetTHECity.data[0].valid_date, Desc:GetTHECity.data[0].description , date1:GetTHECity.data[1].valid_date, Desc1:GetTHECity.data[1].description ,
     date2:GetTHECity.data[2].valid_date, Desc2:GetTHECity.data[2].description,DataForCity:true  })

   }

  
   
    render(){
    
      return(
        
       <>


<form onSubmit={this.LocationData} >
      <label>CityName
<input type='text' name='Thecity' ></input>
<input type='submit' value='get city information'></input>
</label>

    </form>

    {this.state.ShowTheMap &&
       <Card style={{ width: '800px' }} onClick={this.state.changeState} className="cards">
         
                 
                    <Card.Body style={{backgroundColor:'Lavender'}}>
                    <Card.Img variant="top" src={this.state.image_url} style={{ width: '100px' },{ margin_left: '10px' }}/>
                        <Card.Title> City: {this.state.City}</Card.Title>
                        <Card.Text>
                        <h5>    latitude :  {this.state.CityDirectionsLat}</h5>
                        </Card.Text>
                        <Card.Text>
                        <h5> longitude : {this.state.CityDirectionsLon}</h5>
                        </Card.Text>
                        
                        <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.CityDirectionsLat},${this.state.CityDirectionsLon}&zoom=10`}></Card.Img>
                        <Card.Text>
                      <h5>  valid_date: {this.state.date}</h5>
                        </Card.Text>
                        <Card.Text>
                     <h5>  Description: {this.state.Desc}</h5> 
                        </Card.Text>
                        <Card.Text>
                        <h5>  valid_date: {this.state.date1}</h5>
                        </Card.Text>
                        <Card.Text>
                        <h5>   Description: {this.state.Desc1}</h5>
                        </Card.Text>
                        <Card.Text>
                        <h5>   valid_date: {this.state.date2}</h5>
                         </Card.Text>
                        <Card.Text>
                        <h5>  Description:{this.state.Desc2}</h5>
                        </Card.Text>
                    </Card.Body>
                </Card>


    }
  {this.state.TheMoviesData.map(movie => {
          return (
            <Movies movie={movie} ShowTheMap={true}/>
          )
        })
    }
        </> 
      );
    }}
    export default App;

  





    
      
    
    