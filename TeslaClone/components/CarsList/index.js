import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import cars from './cars';
import CarItem from '../CarItem'

const CarsList = () => {
  return(
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItem car={item} key={item.name}/>}
        showsVerticalScrollIndicator={false} // 스크롤바 
        snapToAlignment='start' // 특정영역이 왔을때 움직이는..?
        decelerationRate='fast' // 움직이는 속도
        snapToInterval={Dimensions.get('window').height} //snap범위
      />
    </View>
  )
}

export default CarsList;