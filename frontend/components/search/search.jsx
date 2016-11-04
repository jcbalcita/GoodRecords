import React from 'react';
import { Link, withRouter } from 'react-router';

class Search extends React.Component {
   render() {
     return (
       <input type="text" placeholder="Search albums"
              className="input-search"></input>
     );
   }
 }

 export default Search;
