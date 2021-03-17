import React from 'react';
import {Button, Image, ScrollView, Text, View, StyleSheet} from 'react-native';
import Guacamole from "./Guacamole";
import Choc from "./Choc";
import Poke from "./Poke";
import Nachos from "./Nachos";

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    elevation:3,
  },
});

export default class Recipes extends React.Component {
  render() {
    return (
        <ScrollView>
          <View style={{ flex: 1, alignItems: 'center'}}>
            <Image
                style={{
                  width: 300,
                  height: 200,
                  borderRadius: 20,
                  marginTop: 10,
                }}
                source={require('../assets/guacamole.jpg')} />
            <Text style={{textAlign: 'center', fontSize:20, marginBottom: 10, marginTop: 10}}>Guacamole</Text>
            <Button title = "Details"
                    onPress = {() => this.props.navigation.navigate('Guacamole')}
                    color = "orange"
                    style={styles.button}
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center',}}>
            <Image
                style={{
                  width: 300,
                  height: 200,
                  borderRadius: 20,
                  marginTop: 10,
                }}
                 source={require('../assets/choc-chip.jpg')} />
              <Text style={{textAlign: 'center', fontSize:20, marginBottom: 10, marginTop: 10}}>Choc-chip cookies</Text>
              <Button title = "Details"
                      onPress = {() => this.props.navigation.navigate('Choc')}
                      color = "orange"
                      style={styles.button}
              />
          </View>
          <View style={{ flex: 1, alignItems: 'center',}}>
              <Image
                  style={{
                    width: 300,
                    height: 200,
                    borderRadius: 20,
                    marginTop: 10,
                  }}
                  source={require('../assets/poke.jpg')} />
              <Text style={{textAlign: 'center', fontSize:20, marginBottom: 10, marginTop: 10}}>Poke Bowls</Text>
              <Button title = "Details"
                      onPress = {() => this.props.navigation.navigate('Poke')}
                      color = "orange"
                      style={styles.button}
              />
          </View>
          <View style={{ flex: 1, alignItems: 'center', marginBottom: 20}}>
              <Image
                  style={{
                    width: 300,
                    height: 200,
                    borderRadius: 20,
                    marginTop: 10,
                  }}
                  source={require('../assets/nachod.jpg')} />
              <Text style={{textAlign: 'center', fontSize:20, marginBottom: 10, marginTop: 10}}>Nachos</Text>
              <Button title = "Details"
                      onPress = {() => this.props.navigation.navigate('Nachos')}
                      color = "orange"
                      style={styles.button}
              />
          </View>
        </ScrollView>
    )
  }
};
