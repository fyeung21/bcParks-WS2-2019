import React from 'react';
import {
    ScrollView,
    View,
    Text
} from 'react-native';
// import styles from './styles';
import moment from "moment";


const ActivityDisplay = ({ data }) => {

    let durationDisplay = data.graphValues.progresses ?
        (data.graphValues.progresses.map(progress => progress.duration)) :
        (data.graphValues.sessions.map(session => {
            let start = moment.utc(session.timeStart);
            let end = moment.utc(session.timeEnd);
            return end.diff(start, 'hours', true)
        }));
    const totalDuration = durationDisplay.reduce((result, number) => result + number);

    console.log('session duration', durationDisplay)

    return (
        <View>
            <Text>You have spent</Text>

            <Text>{totalDuration}h</Text>

            <Text>Average mood</Text>



        </View>
    )



}

export default ActivityDisplay;