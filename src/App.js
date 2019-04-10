import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import pictures from "./pictures.json";

class App extends Component {
  // Setting this.state.pictures to the pictures json array
  state = {
    pictures: pictures,
    score: 0,
    topScore: 0,
    clickedPictures: []
  };

  shuffleCards = () => {
    const nextPictures = this.state.pictures.slice();
    nextPictures.sort(function() {
      return 0.5 - Math.random();
    });
    this.setState({ pictures: nextPictures });
  };
  //event.target display the image object on the console
  imageClick = event => {
    //console.log("you clicked ", event.target);
    const id = event.target.id;
    const isIncluded = this.state.clickedPictures.includes(id);
    if (isIncluded === false && this.state.score < this.state.topScore) {
      this.setState({
        score: this.state.score + 1,
        clickedPictures: [...this.state.clickedPictures, id]
      });
    } else if (
      isIncluded === false &&
      this.state.score === this.state.topScore
    ) {
      this.setState({
        score: this.state.score + 1,
        topScore: this.state.topScore + 1,
        clickedPictures: [...this.state.clickedPictures, id]
      });
    } else if (this.state.score === 12 && this.state.topScore === 12) {
      alert("Yayyy you won the Game!");
      this.setState({ score: 0, topScore: 0 });
    } else {
      alert("This picture was already Clicked! Try Again!");
      this.setState({
        score: 0,
        clickedPictures: []
      });
    }
    this.shuffleCards();
  };

  render() {
    return (
      <div className="container">
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
        <Wrapper>
          {this.state.pictures.map(picture => (
            <Card
              imageClick={this.imageClick}
              id={picture.id}
              key={picture.id}
              name={picture.name}
              image={picture.image}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
