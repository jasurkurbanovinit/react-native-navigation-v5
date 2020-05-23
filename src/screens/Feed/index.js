import React, {} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {onScreen} from "../../constants";

const Feed = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Hello Feed</Text>
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
