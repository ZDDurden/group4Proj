import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Fetches extends Component {
    render() {
        try {
            let [bands, users, events] = await Promise.all([
              fetch("http://localhost:3000/bands"),
              fetch("http://localhost:3000/users"),
              fetch("http://localhost:3000/events")
            ])
            return (
                <View>
                    {/* <Test bands={bands} users={users} events={events} /> */}
                    <Text>`${bands}`</Text>
                    <Text>`${users}`</Text>
                    <Text>`${events}`</Text>
                </View>
            )
          }
          catch(err) {
            console.log(err);
          };
    }
}
