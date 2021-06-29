/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEventList = /* GraphQL */ `
  subscription OnCreateEventList {
    onCreateEventList {
      id
      name
      events {
        items {
          id
          time
          location
          video
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEventList = /* GraphQL */ `
  subscription OnUpdateEventList {
    onUpdateEventList {
      id
      name
      events {
        items {
          id
          time
          location
          video
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEventList = /* GraphQL */ `
  subscription OnDeleteEventList {
    onDeleteEventList {
      id
      name
      events {
        items {
          id
          time
          location
          video
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
      id
      time
      location
      video
      type
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
      id
      time
      location
      video
      type
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
      id
      time
      location
      video
      type
      createdAt
      updatedAt
    }
  }
`;
