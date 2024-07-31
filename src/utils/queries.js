import { gql } from '@apollo/client';

export const GAMES_QUERY = gql`
  query GetGames {
    games {
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

export const GENRES_QUERY = gql`
  query GetGenres {
    genres {
      id
      name
    }
  }
`;

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
