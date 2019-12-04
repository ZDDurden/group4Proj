import React, { Component } from "react";

class BandsPost extends Component {
  handleBandPost = async () => {
    fetch("https://localhost:3000/bands", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: req.body.value,
        email: req.body.value,
        password: req.body.value,
        location: req.body.value,
        genre: req.body.value,
        bio: req.body.value,
        spotify: req.body.value,
        social: req.body.value
      })
    })
      .then(response => response.json())
      .catch(error => {
        console.error(error);
      });
  };
}
class UsersPost extends Component {
  handleUserPost = async () => {
    fetch("https://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: req.body.value,
        email: req.body.value,
        password: req.body.value,
        dob: req.body.value,
        location: req.body.value,
        likes: req.body.value,
        pic: req.body.value,
        bands: req.body.value,
        genres: req.body.value
      })
    })
      .then(response => response.json())
      .catch(error => {
        console.error(error);
      });
  };
}
class EventsPost extends Component {
  handleEventPost = async () => {
    fetch("https://localhost:3000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        band: req.body.value,
        location: req.body.value,
        date: req.body.value
      })
    })
      .then(response => response.json())
      .catch(error => {
        console.error(error);
      });
  };
}

export default { BandsPost, UsersPost, EventsPost };
