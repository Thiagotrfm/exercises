import { StyleSheet } from 'react-native';
import COLORS         from '../assets/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey,
    flex: 1,
  },
  content: {
    top: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.grey,
    color: COLORS.textColor,
    marginBottom: 90,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  containerStyle: {
    justifyContent: 'space-around',
    borderBottomColor: COLORS.grey,
    backgroundColor: COLORS.grey,
    height: 80,
    width: '100%',
  },
  iconContainer: {
    margin: 0
  },
  filtersContainer: {
    backgroundColor: COLORS.lightgrey,
    width: 320,
    height: 90,
    borderRadius: 10,
  },
});

export default styles