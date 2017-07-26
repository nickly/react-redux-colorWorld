'use strict';

import    React                   from 'react'
import    { render }             from  'react-dom';
import    { Provider }          from 'react-redux';
import    configureStore   from  './store';
import     routes                 from  './routes';

const  store                   = configureStore();
const  rootElement       = document.createElement('app');
document.body.appendChild(rootElement);


render((

        <Provider store={store} >
            {routes}
        </Provider>

), rootElement);









