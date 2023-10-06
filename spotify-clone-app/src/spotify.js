export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientId = "4dacc7a6f3d044b987e78bceae2426d0";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//find the location of the hashtag in the url and get the access token  further to it 
export const getTokenFromUrl=()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=> {
      //accessToken=mySuperSecretKey
      let parts = item.split('=')
      initial[parts[0]]= decodeURIComponent(parts[1]);
      return initial;
    },{})
}

//%20 for ascii of space
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

