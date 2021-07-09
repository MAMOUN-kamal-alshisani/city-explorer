import React from 'react';
import Card from 'react-bootstrap/Card';



 class Cards extends React.Component{
constructor(props){

super(props)



}


render(){

return(

<>
{this.props.ShowTheMap &&
       <Card style={{ width: '800px' }} onClick={this.props.changeState} className="cards">
         
                 
                    <Card.Body style={{backgroundColor:'Lavender'}}>
                    <Card.Img variant="top" src={this.props.image_url} style={{ width: '100px' },{ margin_left: '10px' }}/>
                        <Card.Title> City: {this.props.City}</Card.Title>
                        <Card.Text>
                        <h5>    latitude :  {this.props.CityDirectionsLat}</h5>
                        </Card.Text>
                        <Card.Text>
                        <h5> longitude : {this.props.CityDirectionsLon}</h5>
                        </Card.Text>
                        
                        <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.CityDirectionsLat},${this.props.CityDirectionsLon}&zoom=10`}></Card.Img>
                        <Card.Text>
                      <h5>  valid_date: {this.props.date}</h5>
                        </Card.Text>
                        <Card.Text>
                     <h5>  Description: {this.props.Desc}</h5> 
                        </Card.Text>
                        <Card.Text>
                        <h5>  valid_date: {this.props.date1}</h5>
                        </Card.Text>
                        <Card.Text>
                        <h5>   Description: {this.props.Desc1}</h5>
                        </Card.Text>
                        <Card.Text>
                        <h5>   valid_date: {this.props.date2}</h5>
                         </Card.Text>
                        <Card.Text>
                        <h5>  Description:{this.props.Desc2}</h5>
                        </Card.Text>
                    </Card.Body>
                </Card>
    }
</>
)
}

 }

 export default Cards 