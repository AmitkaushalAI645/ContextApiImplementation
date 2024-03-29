// React Native Tab
// https://aboutreact.com/react-native-tab/
import { useContext } from 'react';
import  React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
    FlatList,
    TextInput,
    Image,
} from 'react-native';
import { GraphContext } from '../GraphContext';

const RecentScreen = ({ navigation }) => {
    var url= 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png';
    const { bitCoinCap, setBitCoinCap } = useContext(GraphContext);
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
  
    let bitCoins = [
      { "title": "A",
        "market": "BTHC",
        "price": "$1898.3",
        "change": "-8%",
        "marketCap": "$"+Date.now()
      },
      { "title": "A",
        "market": "YUT",
        "price": "$1898.3",
        "change": "-8%",
        "marketCap": "$"+Date.now()
      },
      { "title": "A",
        "market": "IUY",
        "price": "$1898.3",
        "change": "-8%",
        "marketCap": "$"+Date.now()
      },
      { "title": "A",
        "market": "IJH",
        "price": "$1898.3",
        "change": "-8%",
        "marketCap": "$"+Date.now()
      },
      { "title": "A",
        "market": "MJH",
        "price": "$1898.3",
        "change": "-8%",
        "marketCap": "$"+Date.now()
      },
      { "title": "A",
        "market": "MNG",
        "price": "$1898.3",
        "change": "-8%",
        "marketCap": "$"+Date.now()
      },
      { "title": "A",
        "market": "MNBG",
        "price": "$1898.3",
        "change": "-8%",
        "marketCap": "$"+Date.now()
      },
    ]
  
  
    useEffect(() => {
      setFilteredDataSource(bitCoins);
      setMasterDataSource(bitCoins);
    }, []);
  
    const searchFilterFunction = (text) => {
      // Check if searched text is not blank
      if (text) {
        // Inserted text is not blank
        // Filter the masterDataSource
        // Update FilteredDataSource
        const newData = masterDataSource.filter(
          function (item) {
            const itemData = item.market
              ? item.market.toUpperCase()
              : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource(newData);
        setSearch(text);
      } else {
        // Inserted text is blank
        // Update FilteredDataSource with masterDataSource
        setFilteredDataSource(masterDataSource);
        setSearch(text);
      }
    };
  
    const ItemView = ({item}) => {
      return (
        <TouchableOpacity onPress={() => getItem(item)}>
        <View style={{flex : 12, flexDirection : 'row', backgroundColor:'#FFFFFF' }}>
        <Image style ={{flex:0.7, margin:10, height:20,width:20,}} source={{uri:url}}/>
        <Text
          style={styles.itemStyle}
          >{item.market.toUpperCase()}
        </Text>
        <Text
          style={styles.itemStyle}>
          {item.price}
        </Text>
        <Text
          style={styles.itemStyle}>
          {item.change}
        </Text>
        <Text
          style={styles.itemStyleCap}>
          {item.marketCap}
        </Text>
        </View>
        </TouchableOpacity>
      );
    };
  
    const ItemSeparatorView = () => {
      return (
        // Flat List Item Separator
        <View
          style={{
            height: 0.5,
            width: '100%',
            backgroundColor: '#C8C8C8',
          }}
        />
      );
    };
  
    const getItem = (item) => {
      item.marketCap = "$"+Date.now()
      setBitCoinCap(item.marketCap);
    };
  

  return (
    <View >
    <TextInput
    style={styles.textInputStyle}
    onChangeText={(text) => searchFilterFunction(text)}
    value={search}
    underlineColorAndroid="transparent"
    placeholder="Search Bitcoins"
    />
    <View style={{flexDirection : 'row', backgroundColor:'#FFFFFF' }}>
    <View style={{flex:8,flexDirection : 'row'}}>
    <Text
        style={styles.itemStyleHeader2}>
        Market
    </Text>
    <Text
        style={styles.itemStyleHeader}>
        Price
    </Text>
    <Text
        style={styles.itemStyleHeader}>
        Change
    </Text>
    <Text
        style={styles.itemStyleCap}>
        Market Cap
    </Text>
    </View>
</View>
    <FlatList
    data={filteredDataSource}
    keyExtractor={(item, index) => index.toString()}
    ItemSeparatorComponent={ItemSeparatorView}
    renderItem={ItemView}
    />
</View>
  );
}

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
      borderColor: '#F1EFEF',
      backgroundColor: '#FFFFFF',
      backgroundColor: 'white',
      borderTopLeftRadius: 10,
      borderTopRightRadius:10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius:10,
    },
  });

export default RecentScreen;