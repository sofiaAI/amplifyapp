/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEventList = /* GraphQL */ `
  query GetEventList($id: ID!) {
    getEventList(id: $id) {
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
export const listEventLists = /* GraphQL */ `
  query ListEventLists(
    $filter: ModelEventListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
