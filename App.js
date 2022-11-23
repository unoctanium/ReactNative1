//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Welcome  from './src/components/Welcome.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
      
      {/*
      <Welcome message="odo" />
      <Text>hello world</Text>
      <StatusBar style="auto" /> 
      */}
      
    </View>
  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

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