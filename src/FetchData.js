import React from "react";

class ProgrammingJokes extends React.Component {
  state = {
    loading: true,
    type: null,
    joke: null,
    setup: null,
    del: null

  };

  async componentDidMount() {
    const url = "https://v2.jokeapi.dev/joke/programming?idRange=0-100%60"; 
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ type: data.type, joke: data.joke, setup: data.setup, del: data.delivery, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div className="text-center p-5">
            <div className="spinner-border text-warning" style={{width: 10 + 'em', height: 10 + 'em'}} role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
      </div>;
    }

    if (!this.state.type) {
      return <div>Nah, didn't get the Joke</div>;
    }

    return (
      <div className="container p-5">
          <h1 className="main-title display-1 d-flex justify-content-center mb-5"><strong>Programmer's Joke!</strong></h1>
        {/* <div>{this.state.type}</div> */}
        <div className="comedy-jokes display-5 d-flex justify-content-center">{this.state.setup}</div>
        <div className="comedy-jokes-answer h2 d-flex justify-content-center">{this.state.del}</div>
        <div className="comedy-jokes display-4 d-flex justify-content-center">{this.state.joke}</div>
      </div>
    );
  }
}

export default ProgrammingJokes