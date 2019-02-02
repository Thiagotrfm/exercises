import { StyleSheet } from 'react-native';
import COLORS         from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginLeft: 20,
    marginTop: 15,
    backgroundColor: COLORS.textColor,
    color: COLORS.textColor,
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  icon: {
    color: 'white',
    position: 'absolute',
    top: 0,
    left: 35,
  }
});

export default styles