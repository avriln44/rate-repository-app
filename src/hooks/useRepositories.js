import { useQuery, gql } from '@apollo/client';

const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          description
          fullName
          language
          name
          reviewCount
          ratingAverage
          reviews {
            totalCount
          }
        }
      }
    }
  }
`;

const useRepositories = () => {
  const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  const repositories = data ? data.repositories : null;

  return { repositories, loading, refetch };
};

export default useRepositories;
