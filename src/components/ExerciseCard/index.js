import React            from 'react';
import {
  Text,
  Image,
  View
}                       from 'react-native';
import styles           from './style';
import LinearGradient   from 'react-native-linear-gradient';
import COLORS           from '../../assets/colors';
import { IMAGES }       from '../../settings/images';
import { Icon } from 'react-native-elements';

class ExerciseCard extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            exercise: props.exercise,
        }
    }

    render() {
        return (
            <View style = { styles.container }>
                <View style = { styles.imageHolder }>
                    <Image
                            source = { IMAGES[this.props.exercise.image] }
                            style  = { styles.image }
                    />
                </View>
                <View style = { styles.nameHolder }>
                    <Text style = {{
                        color: COLORS.textColor,
                        fontSize: 20,
                    }}>
                        { this.props.exercise.name.toUpperCase() }
                    </Text>
                </View>
            </View>
        );
    }
}


export default ExerciseCard;