import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { Images } from '../../assets'



const CustomView = ({mainImg, ImgText}) => {
  return (
    <View style={{backgroundColor:'#F6F9FA',padding:20, marginHorizontal:20,borderRadius:16,marginTop:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <View style={{flexDirection:'row'}}>
        <Image source={mainImg} style={{height:44,width:44}}/>
        <Text style={{alignSelf:'center',fontSize:16,fontWeight:'500',marginLeft:20}}>{ImgText}</Text>
      </View>

      <Image source={Images.arrows}/>
    </View>
  )
}

export default CustomView

const styles = StyleSheet.create({})