import React      from 'react';
import {
  Platform,
  Text,
  View
}                 from 'react-native';
import {
  Header
}                 from 'react-native-elements';
import styles     from './style';
import { Icon }   from 'react-native-elements';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends React.Component {

  renderHeader() {
    return(
      <View>
        <Header
          leftComponent = {
            <Icon
              name='three-bars'
              type='octicon'
              color='#fff'
            />
          }
          centerComponent = {{
            text: 'MEU PERFIL',
            style: {
              color: '#fff',
              fontSize: 20,
            }
          }}
          rightComponent = {
            <Icon
              name='gear'
              type='octicon'
              color='#fff'
            />
          }
          containerStyle={styles.containerStyle}
        />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderHeader() }
        <View style={styles.content}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
      </View>
    );
  }
}


