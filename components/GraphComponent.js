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

function GraphComponent() {

  const dataDays = {
    labels: ["4h", "16h", "1d", "7d", "30d", "90d"],
    legend: ["L1", "L2", "L3","L3","L3","L3"],
    datasets: [
      {
        data: [2000, 4500, 2800, 8000, 9900, 4300],
        barColors: ["#8000FF80","#0000ff80","#00FFFF80","#00ff0080","#ffff0080","#FFA50080"],
        colors: [
          (opacity = 0) => "#8000FF80",
          (opacity = 0) => "#0000ff80",
          (opacity = 0) => "#00FFFF80",
          (opacity = 0) => "#00FFFF80",
          (opacity = 0) => "#ffff0080",
          (opacity = 0) => "#FFA50080",
        ],
        strokeWidth: 1, // optional
      },
    ]
  };
 

  return (
    <ScrollView>
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
      <ScrollView horizontal ={true}><BarChart
              data={dataDays}
              width={dataDays.datasets.length*400} 
              height={220}
              yAxisLabel=""
              chartConfig={{
                data: dataDays.datasets,
                backgroundGradientFrom: "orange",
                backgroundGradientFromOpacity: 0,
                backgroundGradientTo: "orange",
                backgroundGradientToOpacity: 0,
                useShadowColorFromDataset: false, // optional,
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => '#ffffff',
                labelColor: () => '#000000',
                scrollableDotStrokeColor: 'red',
                scrollableDotRadius:20,
                barRadius:10,
                
              }}
              flatColor={true}
              useShadowColorFromDataset={false}
              fromZero={true}
              withCustomBarColorFromData={true}
              showBarTops={false}
              showValuesOnTopOfBars={false}
              verticalLabelRotation={0}
            />
            </ScrollView>
            
      </View>
    </SafeAreaView>
   
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    }
  });

export default GraphComponent;