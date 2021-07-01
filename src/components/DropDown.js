import React from 'react';


/**
 * DropDown menu for each event
 *
 * Proptypes
 * @param {ContentObject[]} events
 */
class DropDown extends React.Component {
      constructor(props) {
        super(props);
      }

      render() {
        return (
          <div className = "drop-down">
            <div className = "drop-down-button"> Button 1 </div>
            <div className = "drop-down-button"> Button 2 </div>
            <div className = "drop-down-button"> Button 3 </div>
            <div className = "drop-down-button"> Button 4 </div>
          </div>
        );
      }
  }

  export default DropDown;
