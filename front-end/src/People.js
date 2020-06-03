import React, {Component} from "react";

class People extends Component {
  constructor(props) {
    super([props]);
    this.people = [];
  }

  componentDidMount() {
    return fetch("https://swapi.dev/api/people/").then(resp => resp.json()).then(swapi => {
        swapi.results.map((p, index) => {
          let newPeople = this.people;
          newPeople.push({id: index, name: p.name, hair_color: p.hair_color});
          this.setState({people: newPeople});
        });
      });
  }

  render() {
    return (
      <div className="App">
      <h1>Wine List</h1>

       {this.people.map(element => {
          return (
        <div class="gallery">
              <a target="_blank" href="img_5terre.jpg"><img src="img_5terre.jpg" alt={element.name} width="600" height="400"/></a>
              <div class="desc">
                <p>{element.name}</p>
                <p>{element.hair_color}</p>
              </div>
        </div>
          )
        })}
    </div>
    )
  }
}

export default People;
