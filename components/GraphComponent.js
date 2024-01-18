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
  console.log('Amit Here');
  const dataDays = {
    labels: ["4h", "16h", "1d", "7d", "30d", "90d"],
    legend: ["L1", "L2", "L3","L3","L3","L3"],
    datasets: [
      {
        data: [2000, 4500, 9800, 8000, 9900, 4300,8000, 4500,2000, 4500, 9800, 8000, 9900, 4300],
        barColors: ["#8000FF80","#0000ff80","#00FFFF80","#00ff0080","#ffff0080","#FFA50080"],
        colors: [
          (opacity = 0) => "#8000FF80",
          (opacity = 0) => "#0000ff80",
          (opacity = 0) => "#00FFFF80",
          (opacity = 0) => "#00FFFF80",
          (opacity = 0) => "#ffff0080",
          (opacity = 0) => "#FFA50080",
          (opacity = 0) => "#8000FF80",
          (opacity = 0) => "#0000ff80",
          (opacity = 0) => "#ffff0080",
          (opacity = 0) => "#FFA50080",
          (opacity = 0) => "#8000FF80",
          (opacity = 0) => "#0000ff80",
          (opacity = 0) => "#8000FF80",
          (opacity = 0) => "#0000ff80",
        ],
        strokeWidth: 1, // optional,
        plotOptions: {
          bar: {
            borderRadius: 5,
            borderTopEndRadius:10
          }
        },
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
              chartConfig={{
                data: dataDays.datasets,
                horizontalOffset:50,
                backgroundGradientFrom: "orange",
                backgroundGradientFromOpacity: 0,
                backgroundGradientTo: "orange",
                backgroundGradientToOpacity: 0,
                useShadowColorFromDataset: false, // optional,
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => '#ffffff',
                labelColor: () => '#000000',
                scrollableDotStrokeColor: 'red',
                showBarTops:false,
                barPercentage: 0.5,
                borderTopEndRadius:10,
                spacingInner: 0.1,
                scrollableInfoOffset:50,
                propsForVerticalLabels:{
                  borderTopLeftRadius:10,
                  borderTopEndRadius:10

                },
                barRadius:6,
                // plotOptions: {
                //   bar: {
                //     borderRadius: 10
                //   }
                // },
                // style:{
                //   margin: 10,
                //   height: 200,
                //   width: 20,
                //   borderTopRightRadius: 10,//for rounded curve
                //   borderTopLeftRadius: 10,// for rounded curve.
                //   backgroundColor: "blue",
                //   borderRadius: 16,
                // },
                // formatTopBarValue:{
                //   borderTopEndRadius:10,
                //   borderBottomLeftRadius:10
                // }
                 
              }}
              
              withInnerLines={false}
              withHorizontalLabels={false}
              flatColor={true}
              useShadowColorFromDataset={false}
              fromZero={true}
              withCustomBarColorFromData={true}
              showBarTops={false}
              showValuesOnTopOfBars={false}
              verticalLabelRotation={0}
              contentInset={{ top: 20, bottom: 20, left: 20, right: -20 }}
            ></BarChart>
            </ScrollView>
            
      </View>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius:10,
      padding:10,
      borderColor:'grey',
      borderTopColor:'grey',
      borderBlockStartColor:'grey',

    }
  });

export default GraphComponent;