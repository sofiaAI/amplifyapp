import React from 'react';


/**
 * Component that holds all the security violation events
 *
 * Proptypes
 * @param {ContentObject[]} events
 */
class EventList extends React.Component {
      constructor(props) {
        super(props);
      }

      render() {
        return (
          <div className="event-list">
            <div className="events">
              {this.props.events.map((event) => (
                <Event
                  time={event.time}
                  location={event.location }
                  video={event.video}
                  type={event.type}
                />
              ))}
            </div>
          </div>
        );
      }
  }

  export default EventList;
