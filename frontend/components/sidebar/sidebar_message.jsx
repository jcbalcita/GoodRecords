import React from 'react';

const SidebarMessage = () => (
  <div className="sidebar-message">
    <img className="sidebar-logo"
         src="https://res.cloudinary.com/jcbalcita/image/upload/c_scale,w_234/v1478708380/logos/good_records2.png">
    </img>
    <span className="sidebar-message-text">
      <p className="sidebar-title">Welcome to Goodrecords!</p>
      <br/>
      Having trouble remembering all the records you own? Keep track of them here by adding them to your <b>My Collection</b> list.
      <br/><br/><br/>
      Always draw a blank when shopping at the record store, putting together a playlist, or giving new music recommendations to friends?
      <br/><br/>Never again! Keep track of your <b>wish list</b> and albums you <b>want to listen</b> to with the simple click of a button.
    </span>
  </div>
);

export default SidebarMessage;
