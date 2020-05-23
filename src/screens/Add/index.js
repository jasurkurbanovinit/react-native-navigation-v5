import React, {} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { goBack, goHome } from "../../constants";

const Add = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Hello Add</Text>
            <Button
                title="Go Back"
                onPress={() => goBack(navigation)()}
            />
            <Button
                title="Go to Home"
                onPress={() => goHome(navigation)()}
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
export {Add};
