import React, {} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Likes = () => {
    return (
        <View style={styles.container}>
            <Text>Hello Likes</Text>
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
export {Likes};
