import React from "react/addons";
import Header from "./Header.react";

module.exports = React.createClass({
  render: function() {
    return (
      <div className="loading">
        <Header hideLogin={true} />
        <div className="loading-content">
          <div>
            <img src="logo_active@2x.png" />
          </div>

          <div className="spinner la-ball-clip-rotate la-lg la-dark">
            <div />
          </div>
        </div>
      </div>
    );
  }
});
