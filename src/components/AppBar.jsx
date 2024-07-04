import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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

const AppBar = () => {
  return (
    <View style={styles.container}>
    <ScrollView horizontal contentContainer={styles.scrollContainer}>

      <Link to="/repository">
        <Text style={styles.tab}>Repositories</Text>
        </Link>
     
      <Link to="/sign-in">
        <Text style={styles.tab}>Sign-in</Text>
        </Link>

        <Link to="/repository">
        <Text style={styles.tab}>Repositories</Text>
        </Link>
     
      <Link to="/sign-in">
        <Text style={styles.tab}>Sign-in</Text>
        </Link>
     
        </ScrollView>

    </View>
  );
};

export default AppBar;
