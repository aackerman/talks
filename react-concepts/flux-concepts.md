## Flux

## Concepts

* Uni-directional data flow
* Dispatcher
* Stores
* Views
* ActionCreators
* Actions

## The data-flow story

* App initialization
  * Setup Dispatcher
  * Setup dispatch callbacks on Stores
* Views are rendered, when views are mounted to the dom, they instantiate change listeners on Stores
* Get Data
* Call method on ActionCreator for received data
* ActionCreator calls method on Dispatcher to dispatch the data
* Dispatcher dispatches payload to each store callback
* Store resolves the dispatch, changes data or does nothing
* Store emits an event that it's data has changed


* All API interactions happen at the same layer in ActionCreators
* Views know about ActionCreators and Stores
* ActionCreators know about API interactions and the Dispatcher
* Dispatcher sends payload to registered callbacks, doesn't know about other objects
* Stores register callbacks with the Dispatcher, must know about other Stores in the case where they must wait for a dependent store to update, calls change event when data is changed internally


* Views get data synchronously from stores and respond to store change events to re-render
* Views respond to DOM events from User Interaction and call methods on ActionCreators
* ActionCreators respond to User Interaction sent from Views, and call methods on the Dispatcher
* ActionCreators are also the place to interact with the backend API
* The Dispatcher dispatch messages to each of the registered callbacks, usually registered by Stores
* Stores respond to dispatched payloads through callbacks by changing data based on information passed in the payload, and emit change events

## React Concepts

Virtual DOM implemenation for effecient DOM manipulations

declarative JSX vs imperative JS method calls

It is important to know in which component to handle state. If there is a question, move state up the chain.

Render React components on the server, truly reusing code on client and server

React with Rails
https://github.com/reactjs/react-rails

npm i -g react-tools # offers the jsx cli tools

Immutable JS, useful immutable object operations
https://github.com/facebook/immutable-js

React Addons

Testing React components with Jest


Lists of views should be uniquely keyed to allows for optimal diff performance

shouldComponentUpdate: can be configured manually to allow for higher performance

Props are passed in to be compiled with view once, state inside a view changes over time

State is internal to the component and its children.

RESTful UI

grep /setState|getInitialState/
