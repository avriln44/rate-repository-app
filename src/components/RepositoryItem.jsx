import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Text from './Text';

const RepositoryItem = ({repository}) => (
    <View > 
      <Text > Full name: {repository.fullName} </Text>
      <Text > Description: {repository.description} </Text>
      <Text > Language: {repository.language} </Text>
      <Text > Stars: {repository.forksCount} </Text>
      <Text > Forks: {repository.stargazersCount} </Text>
      <Text > Reviews: {repository.reviewCount} </Text>
      <Text > Rating: {repository.ratingAverage} </Text>
    </View>
  );

export default RepositoryItem