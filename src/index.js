import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import {CONSTANTS} from 'config/constants';

//mobx
import store from 'stores/store';
import {Provider} from 'mobx-react';

//router
import {startRouter} from 'mobx-router';
import views from 'config/views';

//components
import App from 'views/App';

//apollo
import ApolloClient, {createNetworkInterface} from 'apollo-client'
import {ApolloProvider} from 'react-apollo';

startRouter(views, store);

const networkInterface = createNetworkInterface({uri: CONSTANTS.GRAPHQL_URL});
networkInterface.use([{
  applyMiddleware (req, next) {
    const token = localStorage.getItem(CONSTANTS.TOKEN_KEY);
    req.options.headers = {
      ...req.options.headers,
      ...token && {authorization: `Bearer ${token}`}
    }
    next();
  }
}])
const client = new ApolloClient({networkInterface});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App/>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);