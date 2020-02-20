import React, {Component} from "react";

class MoviesDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { params } = this.props.match;
    console.log(params);
    return (
      <React.Fragment>
        <h1>Movies Details : {params.id}</h1>
        <button className="btn btn-primary" onClick={this.handleSave}>Save</button>
      </React.Fragment>
    );
  }

  handleSave = () => {
    this.props.history.push('/movies');
  }
}

export default MoviesDetails;
