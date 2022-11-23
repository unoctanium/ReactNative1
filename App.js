//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import  ContentView  from './src/components/ContentView.js';

export default function App() {
  return (
    <View style={styles.container}>
      <ContentView />
      
      {/*
      <Welcome message="odo" />
      <StatusBar style="auto" /> 
      */}
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});


