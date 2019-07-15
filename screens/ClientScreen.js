import React from 'react';
import {Alert, Button, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function ClientScreen() {
  return (
    <Button
      onPress={ () =>
        { Alert.alert('add functionality to upload fotos'); } }
      title="upload photo"
      color="#000000"
      accessibilityLabel="upload"
    />

  );
}

ClientScreen.navigationOptions = {
  title: 'Client',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
