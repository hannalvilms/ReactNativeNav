import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';
import Recipes from './Recipes';

class Home extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
      }}>
        <Image style={{
          top: 70,
          overflow: 'hidden',
          borderRadius: 30,
          width: '90%',
          height: '60%',
          marginBottom: 100,
          borderWidth: 1,

        }}
            source={require('../assets/guacamole.jpg')}
        />
        <Button title = "View recipes"
                onPress = {() => this.props.navigation.navigate('Recipes')}
                color = "orange"
        />
      </View>
    );
  }
}

export default Home;
