import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listEvents } from './graphql/queries';
import { createEvent as createEventMutation, deleteEvent as deleteEventMutation } from './graphql/mutations';

const initialFormState = { time: '', location: '' , video: '' , type: ''}

function api() {
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
    <div className="api">
      <h1>API CONNECTION</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
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
      <div style={{marginBottom: 30}}>
        {
          events.map(event => (
            <div key={event.time || event.location}>
              <h2>{event.time}</h2>
              <p>{event.location}</p>
              <p>{event.video}</p>
              <button onClick={() => deleteEvent(event)}>Delete event</button>
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(api);
