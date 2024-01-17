// import React in our code
import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  ScrollView,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

import GraphComponent from './components/GraphComponent';
import { GraphContext } from './components/GraphContext';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import  HomeScreen from './components/pages/HomeScreen';
import  RecentScreen from './components/pages/RecentScreen';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  const [bitCoinCap, setBitCoinCap] = useState("test");

  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  
  return (
    <GraphContext.Provider value ={{ bitCoinCap, setBitCoinCap }}>
    <NavigationContainer >
    <View>
       <View style={styles.container}>
          <Text
            style={{padding: 10,
              color: 'black',
              fontSize:22,
              fontWeight:'bold'}}>
            Current Balance(USD)
          </Text>
          <Text
            style={{padding: 5,
              marginLeft:10,
              marginBottom:5,
              color: 'green',
              fontSize:20,
              }}>
            {bitCoinCap}
          </Text>
      </View>
      <GraphComponent>
      </GraphComponent>
      </View>
      
    <Tab.Navigator
        screenOptions={{
        tabBarLabelStyle: { fontSize: 12 ,color:'black', fontWeight:'bold'},
        tabBarStyle: { backgroundColor: 'powderblue' },
        }}
        initialRouteName="Market"
    >
        <Tab.Screen name="Market" component={HomeScreen} />
        <Tab.Screen name="Recent" component={RecentScreen} />
    </Tab.Navigator>
</NavigationContainer>
</GraphContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
    color: 'black',
    fontSize:12,
    flex:2,
    fontWeight:'bold'
  },
  itemStyleCap: {
    padding: 10,
    color: 'black',
    fontSize:12,
    flex:4,
    fontWeight:'bold',
  },
  itemStyleHeader: {
    padding: 10,
    color: 'black',
    fontSize:12,
    flex:2,
    fontWeight:'bold',
  },
  itemStyleHeader1: {
    padding: 10,
    color: 'black',
    fontSize:12,
    flex:2,
    fontWeight:'bold',
  },
  itemStyleHeader2: {
    padding: 10,
    color: 'black',
    fontSize:12,
    flex:4,
    fontWeight:'bold',
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});

export default App;