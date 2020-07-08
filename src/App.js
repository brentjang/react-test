import React, { component } from 'react';
import BaseRouter from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';

import CustomLayout from './containers/Layout';

function App() {
  return (
    <div className="App">
      <CustomLayout>
        <Router>
          <BaseRouter />
        </Router>
      </CustomLayout>
    </div>
  );
}

export default App;
