import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./cards.json";

class App extends Component {
   
  state = {
      friends
  };

guessCard = id => {
  
  const friends = this.state.friends.filter(friend => friend.id !== id)
  this.setState({ friends });
}

render() {
 return(
   <Wrapper>
    <Title>Don't Repete</Title>
    {this.state.friends.map(friends => (
      <Card
      guessCard={this.guessCard}
      id={friends.id}
      key={friends.id}
      name={friends.name}
      image={friends.image}
      occupation={friends.occupation}
      location={friends.location}
      />
    ))}
    </Wrapper>
   );
 }
}

export default App;




