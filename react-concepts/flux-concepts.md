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

Virtual DOM implemention for effecient DOM manipulations
Initial render, apply operations to the DOM, on update, call render and return a description of what the DOM should look like, compare that to the Virtual DOM in memory and apply operations to get to a consistent state.

declarative JSX vs imperative JS method calls

Render React components on the server, truly reusing code on client and server

React with Rails
https://github.com/reactjs/react-rails

npm i -g react-tools # offers the jsx cli tools

Immutable JS, useful immutable object operations
https://github.com/facebook/immutable-js

Accessing the DOM with getDomNode()

Prop validation with { propTypes: }

React Addons
* Animations
* Two-way binding
* Class-name helpers
* React testing utilities
* Immutability helpers

React-router -- npm i react-router
https://github.com/rackt/react-router
Based on the Ember router

Testing React components with Jest

CommonJS modules with React

Lists of views should be uniquely keyed to allows for optimal diff performance

shouldComponentUpdate: can be configured manually to allow for higher performance

Props are passed in to be compiled with view once, state inside a view changes over time

State is internal to the component and its children.
State ownership, move state up the tree of components when necessary.

Concept of supervisor trees - golang, erlang component UIs, http://www.jerf.org/iri/post/2930

Tree of Components, highest level is essentially a supervisor ViewController

Working with other UI libs that need to update the DOM, https://gist.github.com/rpflorence/7cdaea0af8e334413502

RESTful UI

grep /setState|getInitialState/
