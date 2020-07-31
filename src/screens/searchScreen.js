import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import  SearchBar from './../components/SearchBar';


const searchScreen = () => {

    return <View>
        <SearchBar />
        <Text>Search Screen</Text>
    </View>
};

const styles = StyleSheet.create({

});

export default searchScreen;