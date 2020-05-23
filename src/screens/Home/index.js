import React, {useState} from 'react';
import {View,Button, Text,TextInput, StyleSheet} from 'react-native';
import {onScreen} from "../../constants";

const Home = ({navigation}) => {
    const [postText, setPostText] = React.useState('');
    return (
        <View style={styles.container}>
            <Text>Hello Home</Text>
                <TextInput
                    multiline
                    placeholder="What's on your mind?"
                    style={{ height: 200, padding: 10, backgroundColor: 'white' }}
                    value={postText}
                    onChangeText={setPostText}
                />
                <Button
                    title="Done"
                    onPress={() => onScreen ('Feed',  navigation, {post: postText })()}
                />
            <Button
                title="Go to Feed"
                onPress={() => onScreen('Feed',
                    navigation, {itemId: 86,otherParam: 'anything you want here'})()}
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
