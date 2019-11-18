import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import IndexPage from './routes/indexPage/index'
import AboutPage from './routes/aboutPage'
import NoMatch from './routes/404'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={IndexPage}/>
        <Route path="/about" component={AboutPage}/>
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}

export default App
