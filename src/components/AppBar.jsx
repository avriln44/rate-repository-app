import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { useQuery, gql, useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import { useNavigate } from 'react-router-native';
import { Link } from "react-router-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    padding: 10,
  },
  scrollContainer: {
    flexDirection: 'row', // Ensures horizontal layout
  },
  tab: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 20,
  },
});
const ME = gql`
  query Me {
    me {
      id
      username
    }
  }
`;
const AppBar = () => {
  const { data, loading, error } = useQuery(ME,{
    fetchPolicy: 'network-only', // Ensure the query does not use the cache
  });

  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate('/');
  };

  return (
    <View style={styles.container}>
    <ScrollView horizontal contentContainer={styles.scrollContainer}>

      <Link to="/repositories">
        <Text style={styles.tab}>Repositories</Text>
        </Link>
        {data?.me ? (
        <Link to="/" onPress={signOut}>
          <Text style={styles.tab}>Sign-out</Text>
        </Link>
      ) : (
        <Link to="/sign-in">
        <Text style={styles.tab}>Sign-in</Text>
        </Link>
      )}
      


        </ScrollView>

    </View>
  );
};

export default AppBar;
