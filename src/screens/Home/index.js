import React, {} from 'react';
import {View,Button, Text, StyleSheet} from 'react-native';
import {onScreen} from "../../constants";

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Hello Home</Text>
            <Button
                title="Go to Feed"
                onPress={()=>onScreen('Feed', navigation)()}
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
export {Home};
