import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { listEvents } from '../graphql/queries';
import { createEvent as createEventMutation, deleteEvent as deleteEventMutation } from '../graphql/mutations';
import Event from '../components/Event.js';
import NavBar from '../components/NavBar.js';
import "./api.css";
import uniqid from 'uniqid'

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const initialFormState = { time: '', location: '' , video: '' , type: ''}

function Api() {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    const apiData = await API.graphql({ query: listEvents });
    setEvents(apiData.data.listEvents.items);
  }

  async function createEvent() {
    if (!formData.time || !formData.location || !formData.video || !formData.type) return;
    await API.graphql({ query: createEventMutation, variables: { input: formData } });
    setEvents([ ...events, formData ]);
    setFormData(initialFormState);
  }

  async function deleteEvent({ id }) {
    const newEventsArray = events.filter(event => event.id !== id);
    setEvents(newEventsArray);
    await API.graphql({ query: deleteEventMutation, variables: { input: { id } }});
  }

  return (
    <html lang="en" class="has-aside-left has-aside-mobile-transition has-navbar-fixed-top has-aside-expanded">
    <head>
      <script>
          console.log("hello");
      </script>
    </head>
    <body>
    <div className="api">
      <NavBar/>
      <input
        onChange={e => setFormData({ ...formData, 'time': e.target.value})}
        placeholder="Event time"
        value={formData.time}
      />
      <input
        onChange={e => setFormData({ ...formData, 'location': e.target.value})}
        placeholder="Event location"
        value={formData.location}
      />
      <input
        onChange={e => setFormData({ ...formData, 'video': e.target.value})}
        placeholder="Event video"
        value={formData.video}
      />
      <input
        onChange={e => setFormData({ ...formData, 'type': e.target.value})}
        placeholder="Event type"
        value={formData.type}
      />
      <button onClick={createEvent}>Create Event</button>
      <div className = "events-container">
        {
          events.map(event => (
            <div>
            <Event
              id_ = {uniqid()}
              type={event.type}
              time = {event.time}
              location = {event.location}
              video = {event.video}
            />
            </div>
          ))
        }
      </div>

      <div className = "delete">
        {
          events.map(event => (
            <div>
            <p>{event.type, event.time}</p>
            <button onClick={() => deleteEvent(event)}>Delete event</button>
            </div>
          ))
        }
      </div>

    </div>
    </body>
    </html>
  );
}

export default withAuthenticator(Api);
