import React from 'react';
import Card from './Card';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      searchResults: [],
      searchTerm: '',
      selectedCard: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({searchTerm: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.setState({searchResults: [], isLoading: true }); // prepare state for a new search 
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
    if (this.state.isLoading && this.state.searchResults.length > 0) {
      this.setState({isLoading: false});
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

    const greeting = <div className="text-center mt-5">Welcome to the MTG Athenaeum!</div>  

    return (
      <>

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
        
        {this.state.searchResults.length > 0  ? results : this.state.isLoading ? spinner : greeting}
      
      </>
    );
  }

}

export default Search;