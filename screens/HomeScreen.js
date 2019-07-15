import React from 'react';
import {Alert, Button,View ,ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function UserScreen() {
  return (
    <View style={styles.buttonContainer}>
      <Button
        onPress={ () =>
          { Alert.alert('add functionality to search for art'); } }
        title="Search for Art"
        color="#000000"
        accessibilityLabel="upload"
      />
    </View>

  );
}

UserScreen.navigationOptions = {
  title: 'User Page',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  buttonContainer:{
    paddingBottom: 30,
  }
});
