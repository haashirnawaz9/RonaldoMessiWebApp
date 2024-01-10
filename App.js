import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/header';
import { Ronaldo } from './pages/ronaldo';
import { Home } from './pages/home';
import { Messi } from './pages/messi';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Cristiano Ronaldo" component={Ronaldo}/>
      <Tab.Screen name="Lionel Messi" component={Messi}/>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Ronaldo & Messi" component={BottomTabs} 
          options={{headerStyle: styles.header, 
                    headerTitleStyle: styles.title,
                    headerTitleAlign: styles.title}} />
        </Stack.Navigator>
      </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: "darkgrey",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  }
});
