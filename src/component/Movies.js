import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'

class Movies extends React.Component{



render(){

return(


<>




<Table style={{backgroundColor:'Lavender'}}>
<thead>
<tr >

<th>
original_title 
    </th>
<th>
    picture 
    </th>
    <th>
    release_date 
    </th>
    <th>
    popularity
    </th>
    <th>
    vote_count
    </th>
    <th>
    vote_average
    </th>
    <th >
    overview
    </th>
</tr>

<tr>

<td>
{this.props.movie.original_title}
    </td>

    <td>
    <img alt='pics' src={this.props.movie.poster_path} style={{ width: '300px' },{height:'300px'}}/>
    </td>
    <td>
    {this.props.movie.release_date}
    </td>
    <td>
    {this.props.movie.popularity}
    </td>
    <td>
    {this.props.movie.vote_count}
    </td>
    <td>
    {this.props.movie.vote_average}
    </td>
    <td>
    {this.props.movie.overview}
    </td>

 

</tr>

</thead>
</Table>


            

</>








)



}


}

export default Movies;



{/* <Card style={{ width: '18rem' }} className="cards" >
         <Card.Body>
         <Card.Title> original_title : {this.props.movie.original_title}</Card.Title>

             <Card.Text>
             overview    {this.props.movie.overview}
             </Card.Text>
             <Card.Text>
             popularity : {this.props.movie.popularity}
             </Card.Text>
             poster_path 
             <Card.Img variant="top" src= {this.props.movie.poster_path}></Card.Img>
             
            
             <Card.Text>
             release_date: {this.props.movie.release_date}
             </Card.Text>
             <Card.Text>
             vote_average :{this.props.movie.vote_average}
             </Card.Text>
             <Card.Text>
             vote_count :{this.props.movie.vote_count}
             </Card.Text>
         </Card.Body>
     </Card> */}

{/* style={{width:'300px'},{height:'300px'},{textAlign:'center'},{border:'solid 1px grey'}} */}
{/* <Card style={{ width: '20px' },{height:'50px'}}>
    <Card.Body style={{ width: '20pxpx' },{height:'50px'}}>
    <Card.Img variant="top" src= {this.props.movie.poster_path} style={{ width: '20px' },{height:'50px'}}></Card.Img>
    </Card.Body>
    </Card>
      */}