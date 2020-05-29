# Share Calc
Yet another calculator app, but with the added twist of immediately sharing the last 10 calculations and results with all current users.
Each user may enter a single-operation calculation (e.g., 1+2), and share this result by clicking the equals (=) key.

Some extra features:
* Responsive page design
* Radix point entry (.)
* Change sign key (&#0177;)
* Input intelligently reuses previous result or starts fresh when the user enters a new number
* User sees correct operational symbols (e.g., &#0247; rather than / )
* Rejects second and subsequent operators and radix points
* Expression display scales for long inputs
 
## Technologies
The front-end app is built with modern React functional components and hooks. The back end is built with nodeJS, express, and the socket.io library for near-instantaneous updates.

Calculations, expression building, and server input validation are unit-tested using Jest.

## Issues
In the spirit of a hackathon, the app is intended as a coding sample rather than representing a robust product. Thus, the following issues are outstanding:

* Only Chrome 81 (MacOS and android) has been tested
* Server security allows spamming, but has simple checks that are likely to stop html injection
* User can enter numbers larger than MAX_INT or MAX_SAFE_INT
* Calculation results are truncated to 20 characters for display purposes, which might make some displayed results incorrect
* Overly long inputs will eventually overflow
* Alternate number formats like 1e&#0177;NN are not handled by the input algorithms. Similarly, results like NaN or Infinity may be reused as input, leading to meaningless results.

## Future
There are numerous intriguing avenues to extend this app:
* Allow users to clear, delete, edit, or pin results
* Visually highlight new calculations (React transitions?)
* Add indication of socket connected or disconnected (navigator object?)
* Haptic feedback on supporting screens
* Allow multiple operations per input
* Dynamically check for legal, in-range number entry

## Dependencies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Web sockets communication is enabled through npm packages socket.io and socket.io-client.