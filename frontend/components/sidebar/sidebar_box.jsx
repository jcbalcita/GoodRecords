import React from 'react';

const SidebarBox = ({ section, handleBrowseClick, handleCollectionClick }) => (
  <div className="sidebar-box">
    <button className={section === 'all' ? "sidebar-item-highlighted" : "side-bar-item"}
            onClick={handleBrowseClick}>
      Browse Albums
    </button>
    <button className={section === "owned" ? "sidebar-item-highlighted" : "side-bar-item"}
            onClick={handleCollectionClick.bind(this, "owned")}>
      My Collection
    </button>
    <button className={section === "wishlist" ? "sidebar-item-highlighted" : "side-bar-item"}
            onClick={handleCollectionClick.bind(this, "wishlist")}>
      My Wish List
    </button>
    <button className={section === "want to listen" ? "sidebar-item-highlighted" : "side-bar-item"}
            onClick={handleCollectionClick.bind(this, "want to listen")}>
      Want to Listen
    </button>
  </div>
);

export default SidebarBox;
