import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWEbApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWEbApi();

function App() {
  //here the first part gives us what we want like user token
  const [{ user, token }, dispatch] = useDataLayerValue();

  //Run code on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }

    spotify.getPlaylist("37i9dQZEVXcQ9COmYvdajy").then((response) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      });
    });
  }, []);

  return (
    //BEM
    <div className="app">
      
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
