import React from 'react';

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div className="home">
				This is my home.
				<SideBarContainer />
				{this.props.children}
      </div>
    );
  }
}

export default Home;
