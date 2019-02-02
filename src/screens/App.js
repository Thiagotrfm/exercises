import React        from 'react';
import {
  ScrollView,
  Text,
  View
}                   from 'react-native';
import {
  Header
}                   from 'react-native-elements';
import styles       from './style';
import { Icon }     from 'react-native-elements';
import { MOCK }     from '../settings/mock';
import FilterCard       from '../components/FilterCard/index'
import ExerciseCard from '../components/ExerciseCard'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      filteredExercises: MOCK.filters,
      filter: [],
      exercises: MOCK.exercices,
    }
  }

  handleFilterChange(newFilterOption){
    let newFilter = [];

    if(this.state.filter.length){
      let filter = this.state.filter.slice();

      if(filter.includes(newFilterOption))
        newFilter = filter.filter(filterOption => filterOption !== newFilterOption)
      else {
        filter.push(newFilterOption)
        newFilter = filter.slice();
      }
      
      this.setState({
        filter: newFilter,
        exercises: newFilter.length === 0 ?
                   MOCK.exercices :
                   MOCK.exercices.filter(exercise => newFilter.includes(exercise.name))
      })
    } else {
      filter = []
      filter.push(newFilterOption)
    
      this.setState({
        filter: filter,
        exercises: filter.length === 0 ?
                   MOCK.exercices :
                   MOCK.exercices.filter(exercise => filter.includes(exercise.name))
      })
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
          this.state.filteredExercises.map((filter, index) => {
            return(
              <FilterCard
                key = { index }
                filter = { filter }
                handleFilterChange = { this.handleFilterChange.bind(this) } 
              />
            )
          })
        }
      </ScrollView>
    )
  }

  renderExercises(){
    return(
      <View>
        { this.state.exercises.map((exercise, index) => {
          return(
            <ExerciseCard
              key       = { index }
              exercise  = { exercise }
            />
          )
        })}
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderHeader() }
        <ScrollView>
          <View style={styles.content}>
          { this.renderFilters() }
          { this.renderExercises() }
          </View>
        </ScrollView>
      </View>
    );
  }
}


export default App;