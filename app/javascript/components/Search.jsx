import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResults: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({searchTerm: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const url = '/api/v1/cards/search/' + this.state.searchTerm
    fetch(url).then(response => {
      if(response.ok) {
        return response.json();
      }
      throw new Error("Cannot fetch cards at given url :(");
    })
    .then(response => this.setState({searchResults: response}));
  }

  render() {
    const results = this.state.searchResults.map(
      (card, index) => (
        <div className="col-md-6 col-lg-4" key={index}>
          <img src={this.state.searchResults.length > 0 ? card['imageUrl'] : ""} />
        </div>
      )
    );
    return (
      <>
        <form onSubmit={this.handleSubmit} className="form-inline my-2 my-lg-0" >
          <input value={this.state.searchTerm} onChange={this.handleChange} className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <input className="btn btn-outline-dark my-2 my-sm-0" type="submit" value="Search" />
        </form>

        {this.state.searchResults.length > 0 ? results : null}
      </>
    );
  }

}

export default Search;