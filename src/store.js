import {createStore, applyMiddleware } from 'redux'
import reducer from './ducks/reducer.js'


export default createStore(reducer)