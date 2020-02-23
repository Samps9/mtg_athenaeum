import React from 'react';
import Card from './Card';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      resultsFound: false,
      searchResults: [],
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Results 'Quality Of Life' (or 'Length' perhaps more aptly) - shorthand because this logic gets used a lot
  resultsQOL() {
    return this.state.searchResults.length > 0
  }
  
  // update searchTerm state as the user types into search bar
  handleChange(event) {
    this.setState({searchTerm: event.target.value});
  }
  
  // when the user enters a search term:
  handleSubmit(event) {
    event.preventDefault();
    this.setState({searchResults: [], isLoading: true, resultsFound: false }); // prepare state for a new search 
    const url = '/api/v1/cards/search/' + this.state.searchTerm
    fetch(url).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Bad response :(");
    })
    .then(response => this.setState({searchResults: response}));
  }

  componentDidUpdate() {
    // reset the state of isLoading to stop loading animation after results populate
    if (this.state.isLoading && this.resultsQOL()) {
      this.setState({isLoading: false});
    } 
    // if there are actual cards in search results, set resultsFound to true
    if (this.resultsQOL() && this.state.searchResults[0] !== "No results found" && !this.state.resultsFound) {
      this.setState({resultsFound: true});
    }
  }

  render() {
    
    const results = this.state.searchResults.map(
        (cardData, index) => (
          <Card key = {index} data = {cardData} />
        )
    );

    const spinner = (
      <div className="search-loading text-center mt-5">
        <i className="fa fa-spinner"></i>
        <p>Loading cards with "{`${this.state.searchTerm}`}" in the name...</p>
      </div>
    );

    const greeting = <div className="text-center mt-5">Welcome to the MTG Athenaeum!</div>;

    const noResults = <div className="text-center mt-5">No results found for "{`${this.state.searchTerm}`}"</div>;

    return (
      <>
        <div className="search-container">
          <form onSubmit={this.handleSubmit} className="my-2">
            <div className="form-row">
              <div className="col-9">
                <input value={this.state.searchTerm} onChange={this.handleChange} className="form-control ml-2 mr-2" type="text" placeholder="Search for cards by name" aria-label="Search" />
              </div>
              <div className="col-2">
                <button className="btn btn-outline-dark ml-2 mr-2 form-control" type="submit" value="Search">
                  <i className="fa fa-search"></i>
                </button>
              </div>
              
            </div>
          </form>
          
          {this.resultsQOL() && this.state.resultsFound ? 
            results : this.state.isLoading ? 
              spinner : this.resultsQOL() && this.state.searchResults[0] === "No results found" ? 
                noResults : greeting}
        </div>
    </>
    );
  }

}

export default Search;