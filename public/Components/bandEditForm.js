import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const id = '5de5848383c0259731bbe274'

const Band = t.struct({
  name: t.String,
  email: t.String,
  password: t.String,
  location: t.String,
  genre: t.String,
  bio: t.String,
  spotify: t.String,
  social: t.String
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
    name: {
      error: 'error'
    },
    email: {
      error: 'Without an email address how are you going to reset your password when you forget it?'
    },
    password: {
      error: 'Choose something you use on a dozen other sites or something you won\'t remember'
    },
    location: {
      error: 'error'
    },
    genre: {
      error: 'error'
    },
    bio: {
      error: 'error'
    },
    spotify: {
      error: 'error'
    },
    social: {
      error: 'error'
    }
  },
  stylesheet: formStyles,
};

export default class BandEditForm extends Component {
  handleSubmit = () => {
    const value = this.refs.form.getValue();
    fetch(`https://banderapi.herokuapp.com/bands/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: value.name,
        email: value.email,
        password: value.password,
        location: value.location,
        genre: value.genre,
        bio: value.bio,
        spotify: value.spotify,
        social: value.social
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