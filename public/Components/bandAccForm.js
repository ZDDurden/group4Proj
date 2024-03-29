import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const Band = t.struct({
  email: t.String,
  bandname: t.String,
  password: t.String,
  location: t.String
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
    email: {
      error: 'Without an email address how are you going to reset your password when you forget it?'
    },
    bandname: {
      error: 'We need to know the name of your band'
    },
    password: {
      error: 'Choose something you use on a dozen other sites or something you won\'t remember'
    },
    location: {
      label: 'Where are you originally from?',
    },
  },
  stylesheet: formStyles,
};

export default class BandAccForm extends Component {
  handleSubmit = () => {
    const value = this.refs.form.getValue()
  
    fetch("https://banderapi.herokuapp.com/bands", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: value.bandname,
        email: value.email,
        password: value.password,
        location: value.location
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
          type={Band} 
          options={options}
        />
        <Button
          title="Sign Up!"
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