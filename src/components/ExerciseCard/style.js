import { StyleSheet } from 'react-native';
import COLORS         from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 110,
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: COLORS.lightgrey,
  },
  imageHolder: {
    width: 85,
    height: 85,
    borderRadius: 100,
    marginTop: 10.5,
    marginLeft: 20,
    backgroundColor: COLORS.grey,
  },
  image: {
    position: 'absolute',
    bottom: -15,
    alignSelf: 'center',
  },
  nameHolder: {
    position: 'absolute',
    color: COLORS.textColor,
    marginLeft: 150,
    marginTop: 25,
  }
});

export default styles