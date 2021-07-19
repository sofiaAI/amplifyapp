import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { listEvents } from '../graphql/queries';
import { createEvent as createEventMutation, deleteEvent as deleteEventMutation } from '../graphql/mutations';
import Event from '../components/Event.js';
import NavBar from '../components/NavBar.js';
import VideoBar from '../components/VideoBar.js';
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
    <>
      <NavBar/>
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

      <VideoBar/>
      <img src = "../components/logout.png" />
      <div className = "video-container">
      	<div className = "live-stream">"LIVESTREAM GOES HERE"</div>
        <video className = "video-play" controls loop src = "" type="video/mp4"> </video>
      </div>

      <div className = "map-container"> </div>

  </>
  );
}

export default withAuthenticator(Api);
