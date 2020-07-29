import './index.css';
import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from './redux/render'
import state from './redux/state'

rerenderEntireTree(state)

serviceWorker.unregister();
