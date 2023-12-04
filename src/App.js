import { Route, BrowserRouter } from 'react-router-dom';
import routes from './components/pages/index';
import { io } from 'socket.io-client';
import React from 'react';
const socket = io('http://localhost:5005');
function App() {
  React.useEffect(() => {
    socket.emit('CONNECT', {
      socketID: socket.id,
      userID: 1,
    });

    socket.on('received message', (data) => {});
  }, []);
  return (
    <BrowserRouter>
      {routes.map((route, idx) => (
        <Route
          exact
          path={route.path}
          component={route.component}
          key={idx}
        ></Route>
      ))}
    </BrowserRouter>
  );
}

export default App;
