import React from 'react';
import {
  View,
  ScrollView,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  LogBox,
  Alert,
} from 'react-native';
import {HomeScreenModel} from './HomeScreenModel';
import {styles} from './HomePageStyles';
import {ListItemRenderer} from './ListItemRender';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

const HomePage = () => {
  const {data, latest} = HomeScreenModel();
  const buttonHandler = (el) => {
    Alert.alert(el + ' button pressed', '', [{text: 'OK'}], {
      cancelable: false,
    });
  };

  return (
    <ScrollView style={{marginBottom: 40}}>
      <View style={styles.greetingsWrapper}>
        <View style={{width: '18%'}} />
        <Text style={styles.greetingsText}>Здравствуйте</Text>
        <TouchableOpacity
          style={styles.menuButtonWrapper}
          onPress={() => buttonHandler('Menu')}>
          <Image
            source={require('../../assets/image/Hamburger.png')}
            style={{width: 28, height: 28}}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.latestWrapper}
        onPress={() => buttonHandler('Latest')}>
        <View style={styles.latestTextWrapper}>
          <Text style={styles.subText}>{'- ' + latest.time}</Text>
          <Text style={styles.titleText}>{latest.title}</Text>
          <Text style={{...styles.subText, fontSize: 13, lineHeight: 20}}>
            Ваша последняя тема
          </Text>
        </View>
        <Image
          style={styles.latestImage}
          source={require('../../assets/image/Teacher.png')}
        />
      </TouchableOpacity>
      <FlatList
        style={styles.flatList}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => {
          return (
            <ListItemRenderer
              item={item}
              styles={styles}
              buttonHandler={buttonHandler}
            />
          );
        }}
      />
    </ScrollView>
  );
};

export default HomePage;
