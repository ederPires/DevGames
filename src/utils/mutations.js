import { gql } from '@apollo/client';

export const CREATE_GAME_MUTATION = gql`
  mutation CreateGame($data: CreateGameInput!) {
    createGame(data: $data) {
      id
      name
      description
      dateRelease
      rating
      site
      urlImage
      genre {
        id
        name
      }
    }
  }
`;
