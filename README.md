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
* Expression display reduces size for large input strings
 
## Technology used
The front-end app is built with modern React functional components and hooks. The back end is built with nodeJS and the socket.io library for near-instantaneous updates.

Calculations and expression building are unit-tested using Jest.

## Issues
In the spirit of a hackathon, the app is intended as a coding sample rather than representing a robust product. Thus, the following issues are outstanding:

* Only Chrome (desktop and android) has been tested
* Server connection lacks security and could be spammed
* User could enter numbers larger than MAX_INT or MAX_SAFE_INT
* Calculation results are truncated to 20 characters for display purposes
* Server ignored shared results over 40 characters in length
* Overly long inputs will eventually overflow
* Alternate number formats like 1eNN are not handled by the input algorithms. Similarly, results like NaN or Infinity may be reused as input, causing errors.

## Future
There are numerous intriguing avenues to extend this app:
* Allow users to clear, delete, edit, or pin results
* Visually highlight new calculations (React transitions?)
* Add indication of socket connected or disconnected
* Haptic feedback on supporting screens
* Allow multiple operations per input
* Dynamically check for legal number entry

## Dependencies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Web sockets communication is enabled through npm packages socket.io and socket.io-client.