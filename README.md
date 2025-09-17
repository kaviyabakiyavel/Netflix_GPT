# Netflix GPT

- Create react app
- Install Tailwind css
- Configured tailwind css
- Header
- Login/Signin Form
- Signup Form
- Form validation - useRef hook
- Authentication - Google firebase
  https://console.firebase.google.com/
  API Reference - https://firebase.google.com/docs/reference/js?authuser=0
- Selected Email Authentication in firebase
- How to deploy app commands to use
  firebase login
  firebase login:ci
  1//0gxxxxxxxxxxxxxxxxxxxxx
  firebase deploy --token "$FIREBASE_TOKEN"
  firebase init
  firebase deploy
- Create Signup user account - https://firebase.google.com/docs/auth/web/manage-users
- Created Redux Store with userSlice
- Implemented sign out
- Update Profile
- BugFix - sign up user display and profile picture update
- BugFix - if the user is not logged in Redirect browser to login page and vice-verse
- Unsubscribe to the onuthStateChnaged callback
- Moved hardcoded value into constant file 
- Register TMDB get API access token (API Key , API Access token) https://www.themoviedb.org/settings/api
- https://developer.themoviedb.org/reference/intro/getting-started
- Get data from TMDB now playing movies list API 
- Custom Hook for now playing movies
-Create movie slice
- Update store with movie data
- Planning for maincontainer and secondary container 
- Fetch Data for Trailer Video 
- Update Store with Trailer video data
- Embedded the youtube video and make it autoplay and mute 
- Tailwind classes to make main container to look awesome
- Build Secondary Component
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Made the browser page amazing with tailwind css
- usePopular movie custom hooks
- GPT Search Page
- GPT Search Bar
- Multi-language feature in our app

# Features

- Login/Signup
  - Sign In / Sign Up Form
  - Redirect to browser page
- Browse (After Authentication)
  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - Movie Suggestion
    - MovieLists
- NetflixGPT
  - Search Bar
  - Movie Suggestions

