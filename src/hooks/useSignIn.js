import { gql, useMutation, useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';
import useAuthStorage from '../hooks/useAuthStorage';

const AUTHENTICATE_USER = gql`
  mutation authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const [mutate, result] = useMutation(AUTHENTICATE_USER);

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        credentials: { username, password },
      },
    });

    const token = data.authenticate.accessToken;
    console.log('token:', token);
    await authStorage.setAccessToken(token);
    await apolloClient.resetStore();

    navigate('/repositories');
  };

  return [signIn, result];
};

export default useSignIn;
