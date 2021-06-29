/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEventList = /* GraphQL */ `
  mutation CreateEventList(
    $input: CreateEventListInput!
    $condition: ModelEventListConditionInput
  ) {
    createEventList(input: $input, condition: $condition) {
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
export const updateEventList = /* GraphQL */ `
  mutation UpdateEventList(
    $input: UpdateEventListInput!
    $condition: ModelEventListConditionInput
  ) {
    updateEventList(input: $input, condition: $condition) {
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
export const deleteEventList = /* GraphQL */ `
  mutation DeleteEventList(
    $input: DeleteEventListInput!
    $condition: ModelEventListConditionInput
  ) {
    deleteEventList(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
