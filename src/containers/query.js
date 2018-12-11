import gql from 'graphql-tag';

export const POPULAR_COMMUNITIES = gql`
  {
    popularCommunities {
      uuid
      name
      tagline
      desc
      location
      userCount
    }
  }
`;
