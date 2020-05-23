import React, {} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Add = () => {
    return (
        <View style={styles.container}>
            <Text>Hello Add</Text>
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
export {Add};
