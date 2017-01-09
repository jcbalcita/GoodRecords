import React from 'react';
import { Link, withRouter } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.fireSearch = this.fireSearch.bind(this);

    this.state = { searchTerm: ''}
  }

  componentWillReceiveProps() {
    if (this.state.searchTerm !== '') {
      this.setState({searchTerm: ''});
    }
  }

  updateSearchTerm(e) {
    this.setState({searchTerm: e.target.value});
  }

  fireSearch(e) {
    e.preventDefault();
    this.props.requestSearchResults(this.state.searchTerm.trim().slice(0, 50));
  }

   render() {
     return (
       <form onSubmit={this.fireSearch}>
         <input type="text"
                placeholder="Search albums"
                className="input-search"
                value={this.state.searchTerm}
                onChange={this.updateSearchTerm}
                ></input>
       </form>

     );
   }
 }

 export default Search;
