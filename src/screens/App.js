import React      from 'react';
import {
  ScrollView,
  Text,
  View
}                 from 'react-native';
import {
  Header
}                 from 'react-native-elements';
import styles     from './style';
import { Icon }   from 'react-native-elements';
import { MOCK }   from '../settings/mock';
import Filter     from '../components/Filter/index'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      teste: 'Teste'
    }
  }

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

  renderFilters(){
    return(
      <ScrollView 
        style = { styles.filtersContainer }
        horizontal = { true }
        showsHorizontalScrollIndicator = { false }
      >
        {
          MOCK.filters.map((filter, index) => {
            return(
              <Filter
                key = { index }
                filter = { filter }  
              />
            )
          })
        }
      </ScrollView>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderHeader() }
        <View style={styles.content}>
          { this.renderFilters() }
        </View>
      </View>
    );
  }
}


export default App;