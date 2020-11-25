import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

export const ListItemRenderer = ({item, styles, buttonHandler}) => {
  return (
    <View style={styles.itemBorder}>
      <View style={{...styles.itemWrapper, justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={styles.itemWrapper}
          onPress={() => buttonHandler('Lesson')}>
          <Image style={styles.itemImage} source={item.image} />
          <View>
            <Text style={styles.subText}>{'- ' + item.time}</Text>
            <Text style={styles.itemTitleText}>{item.title}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => buttonHandler('Calendar')}>
          <Image
            style={styles.calendarIcon}
            source={require('../../assets/image/Calendar.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{height: 20}} />
    </View>
  );
};
