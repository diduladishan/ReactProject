import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Pages
const Dashboard = React.lazy(() => import('./views/dashboard'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/" name="Dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
