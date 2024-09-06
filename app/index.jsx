import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Text className="text-4xl">Handy Hank!</Text>
      <StatusBar style="auto" />
    </View>
  );
}