import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function ContentView(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
    </View>
  );
}
export default ContentView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
});