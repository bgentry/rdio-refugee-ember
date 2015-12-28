# Rdio Refugee

I was a long-time Rdio user before they decided to shut down. Of the other music streaming services, Spotify seemed like the only one that was good enough and had an API for me to move my Rdio collection over. I built Rdio Refugee to do that: https://twitter.com/blakegentry/status/679206751174987777

![](http://cl.ly/3y0E3b3A0f45/data)

![](http://cl.ly/0O0t052k1u2P/data)

The app was only active for around 24 hours before Rdio shut down as it required Rdio's API. Even though this code is no longer being used, I've pushed it up to Github in case it's useful to anybody as an example Ember.js app.

It's built with Ember 2.2.0 and ember-data. It uses ember-simple-auth to manage authentication state and Torii to handle OAuth with external services (Rdio and Spotify). It was built in a big rush during my spare time before Rdio shut down, so I definitely had to cut some corners. That being said, I still think it's a respectable Ember app.

The backend for this was written in Go. I'm really not proud of the code for that because of the verbosity of all the Go code for dealing with SQL queries, so I'm not open sourcing it.
