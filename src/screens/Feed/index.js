import React, {} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {goBack, onScreen} from "../../constants";

const Feed = ({route, navigation}) => {
    const { itemId, otherParam,post} = route.params;
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button onPress={()=> goBack(navigation)()} title="Go Back" />
            ),
        });
    }, [navigation]);
    return (
        <View style={styles.container}>
            <Text>Hello Feed</Text>
            <Text>Message from Home</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>

            <Text>From form</Text>
            <Text>Post=>{post}</Text>
            <Button
                title="Go to Add"
                onPress={() => onScreen("Add", navigation)()}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export {Feed};
