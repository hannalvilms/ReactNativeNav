import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';

class Choc extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center'}}>
                <Image
                    style={{
                        height: 400,
                        width: 400,
                        borderRadius: 20,
                        marginTop: 20
                    }}
                    source={require('../assets/choc-chip.jpg')}/>
                <Text style={{textAlign: 'center', fontSize:40, marginBottom: 10, marginTop: 10}}
                >Choc-chip cookies</Text>
                <Text style={{textAlign: 'justify', margin: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </View>
        );
    }
}

export default Choc;
