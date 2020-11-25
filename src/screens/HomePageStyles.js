import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  greetingsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  greetingsText: {
    fontSize: 22,
    width: 183,
    textAlign: 'center',
    marginTop: 72,
    fontWeight: '400',
  },
  menuButtonWrapper: {
    padding: 15,
    borderColor: '#EAEAEA',
    borderWidth: 1,
    borderRadius: 50,
    marginTop: 60,
    marginRight: '10%',
  },
  latestWrapper: {
    backgroundColor: '#EAEAEA',
    borderRadius: 20,
    borderColor: '#EAEAEA',
    paddingBottom: 26,
    paddingTop: 20,
    paddingLeft: 20,
    margin: 32,
    flexDirection: 'row',
  },
  latestTextWrapper: {
    width: '50%',
    justifyContent: 'space-around',
    paddingTop: 7,
  },
  subText: {
    color: '#6D6D78',
    fontSize: 12,
    lineHeight: 18,
  },
  titleText: {
    lineHeight: 24,
    fontSize: 22,
    fontFamily: 'Roboto-Medium',
    marginVertical: 10,
  },
  latestImage: {
    height: 110,
    width: 140,
    alignSelf: 'center',
  },
  flatList: {
    height: '70%',
  },
  itemBorder: {
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderColor: '#EAEAEA',
    borderWidth: 1,
    borderRadius: 20,
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 15,
    marginTop: 6,
  },
  itemTitleText: {
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
  },
  calendarIcon: {
    marginTop: 10,
    marginRight: 10,
    width: 30,
    height: 30,
  },
});
