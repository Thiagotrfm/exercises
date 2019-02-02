import React            from 'react';
import {
  TouchableOpacity,
  Image,
  View
}                       from 'react-native';
import styles           from './style';
import LinearGradient   from 'react-native-linear-gradient';
import COLORS           from '../../assets/colors';
import { IMAGES }       from '../../settings/images';
import { Icon } from 'react-native-elements';

class FilterCard extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            filter: props.filter,
            selected: false,
        }
    }

    onPress = () => {
        this.setState({
            selected: !this.state.selected,
        })
        this.props.handleFilterChange(this.state.filter.name)
      }

    render() {
        return (
            <TouchableOpacity onPress = {this.onPress}>
                <LinearGradient
                    colors={[COLORS.gradient1, COLORS.gradient2, COLORS.gradient3]}
                    style={styles.container}
                    useAngle = { true }
                    angle = { 135 }
                    angleCenter = {{ x: 0.5, y: 0.5}}
                >
                    <Image
                        source = { IMAGES[this.state.filter.image] }
                        style  = { styles.image }
                    />
                    {
                        this.state.selected ? 
                        <Icon
                            name = 'done'
                            type = 'material-icons'
                            color = 'white'
                            containerStyle = { styles.icon }
                        /> : <View></View>
                    }
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}


export default FilterCard;