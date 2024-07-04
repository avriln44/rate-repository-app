import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    repository: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    text: {
      fontSize: 16,
    },
  });
const RepositoryItem = ({repository}) => (
    <View style={styles.repository}> 
      <Text style={styles.text}> Full name: {repository.fullName} </Text>
      <Text style={styles.text}> Description: {repository.description} </Text>
      <Text style={styles.text}> Language: {repository.language} </Text>
      <Text style={styles.text}> Stars: {repository.forksCount} </Text>
      <Text style={styles.text}> Forks: {repository.stargazersCount} </Text>
      <Text style={styles.text}> Reviews: {repository.reviewCount} </Text>
      <Text style={styles.text}> Rating: {repository.ratingAverage} </Text>
    </View>
  );

export default RepositoryItem