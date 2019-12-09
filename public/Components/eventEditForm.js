import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import t from 'tcomb-form-native';

const id = '5de55a61923efa24eaeb6a6a'

const Form = t.form.Form;

const Event = t.struct({
    band: t.String,
  location: t.String,
  date: t.Date
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    band: {
        error: 'We need to know who you are'
      },
      location: {
        error: 'Where is your event?'
      },
      date: {
        label: 'When is your event?',
      },
    },
  stylesheet: formStyles,
};

export default class UserEditForm extends Component {
  handleSubmit = () => {
    const value = this.refs.form.getValue();
    fetch(`https://banderapi.herokuapp.com/events/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        band: value.band,
        location: value.location,
        date: value.date
      })
    })
      .then(response => response.json())
      .catch(error => {
        console.error(error);
      });
  }

  
  render() {
    return (
      <View style={styles.container}>
        <Form 
          ref="form"
          type={Event} 
          options={options}
        />
        <Button
          title="Edit Account"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});