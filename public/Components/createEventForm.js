import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import t from 'tcomb-form-native';

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

export default class UserAccForm extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    fetch("https://https://banderapi.herokuapp.com/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        band: this.refs.form.getComponent('name').refs.input.focus().getValue(),
        location: this.refs.form.getComponent('location').refs.input.focus().getValue(),
        date: this.refs.form.getComponent('date').refs.input.focus().getValue()
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
          ref={form}
          type={Event} 
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
