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
import  Header from './components/Header';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  const [bitCoinCap, setBitCoinCap] = useState("test");

  return (
    <GraphContext.Provider value ={{ bitCoinCap, setBitCoinCap }}>
    <NavigationContainer >
    <Header name='' ></Header>
    <View style={{backgroundColor:'#F1EFEF', padding:10, }}>
       <View style={styles.container}>
          <Text
            style={{
              color: 'black',
              fontSize:22,
              marginLeft:10,
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
        tabBarLabelStyle: { fontSize: 12 ,color:'black', fontWeight:'bold' },
        tabBarStyle: { backgroundColor: 'white' },
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
    borderTopLeftRadius: 10,
    borderTopRightRadius:10,
    padding:10
  }
});

export default App;