import { Route, BrowserRouter } from 'react-router-dom'
import routes from './components/pages/index'
function App() {

  return (
      <BrowserRouter>
          {
            routes.map((route, idx) => (
              <Route exact path={route.path} component={route.component} key={idx}></Route>
            ))
          }
      </BrowserRouter>
  );
}

export default App;
