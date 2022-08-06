import ReactDOM from 'react-dom'

import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

import './global.css'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorkerRegistration.register()
