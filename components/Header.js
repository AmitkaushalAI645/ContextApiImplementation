import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const Header = (props) => {
    var url= 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png';
    return (
        <View style={{flexDirection:'row',color:'white', padding:10, justifyContent: 'space-between',}}>
        <Image 
                source={{
                    uri: url
                }} 
                style={{width: 40, height: 40, borderRadius: 40/ 2}} 
            />
        <Text style={{fontWeight:'bold'}}>
            {props.name}
        </Text>
        <View 
        style={{alignSelf:'flex-end',flexDirection:'row',alignContent:'flex-end',justifyContent:'flex-end'}}
        >
        <Image 
                source={{
                    uri: url
                }} 
                style={{width: 40, height: 40, marginEnd:5, borderRadius: 40/ 2,alignContent:'flex-end',justifyContent:'flex-end'}} 
            />
            <Image 
                source={{
                    uri: url
                }} 
                style={{width: 40, height: 40, marginEnd:5, borderRadius: 40/ 2}} 
            />
            <Image 
                source={{
                    uri: url
                }} 
                style={{width: 40, height: 40, borderRadius: 40/ 2}} 
            />
        </View>
        </View>
    )
}

export default Header