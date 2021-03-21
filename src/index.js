import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function Card(props)
{
  return <div>
        <img src={props.image}/><br/>
        <h5>{props.name}<br/>
        <span>{props.age}</span><br/>
        <span>{props.place}</span></h5>
        <p>{props.description}</p>
    </div>
}

class Example  extends React.Component
{
  render()
  {
    const peoples =[
      {
        name:"B. R. Ambedkar",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Ambedkar_1966_stamp_of_India_%28cropped%29.jpg/100px-Ambedkar_1966_stamp_of_India_%28cropped%29.jpg",
        age:"1891–1956",
        place:"Maharashtra",
        description:"father of the Republic of India"
      },
      {
        name:"A. P. J. Abdul-Kalam",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/APJ_Abdul_Kalam_2015_stamp_of_India_%28cropped%29.jpg/100px-APJ_Abdul_Kalam_2015_stamp_of_India_%28cropped%29.jpg",
        age:"1931–2015",
        place:"Maharashtra",
        description:"Aerospace and defence scientist"
      },
      {
        name:"Vallabhbhai-Patel",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Vallabhbhai_Patel_1975_stamp_of_India.jpg/100px-Vallabhbhai_Patel_1975_stamp_of_India.jpg",
        age:"1875–1950",
        place:"Gujarat",
        description:"Known as the Iron Man of India"
      },
      {
        name:"Jawaharlal Nehru",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Jawaharlal_Nehru_stamp_%28cropped%29.jpg/100px-Jawaharlal_Nehru_stamp_%28cropped%29.jpg",
        age:"1889–1964",
        place:"Uttar Pradesh",
        description:"Independence activist and author"
      },
      {
        name:"Mother Teresa",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Mutter_Teresa_von_Kalkutta.jpg/150px-Mutter_Teresa_von_Kalkutta.jpg",
        age:"1910–1997",
        place:"West Bengal",
        description:"Saint Mother Teresa of Calcutta",
      }

    ]
    return (
      <div className="container">
        <h1>The Greatest Indian</h1>
        <div className="row">

        <br/>
        {
          peoples.map((people) => {
            if(!people.blocked){
              return <div className ="box">
                <Card name={people.name} image={people.image} age={people.age} place={people.place} description={people.description} />
            </div>
            }
          })
        }

        </div>
      </div>
    );
  }
}

ReactDOM.render(<Example/>,document.getElementById('root'));