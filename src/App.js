import React, { useState } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import RoutePlans from './components/RoutePlans';
import AddressView from './components/AddressView'

const client = new ApolloClient({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
});

function App() {
  const [currentAddress, setCurrentAddress] = useState(null);
  const [toggleFrom, setToggleFrom] = useState(false);

  return (
    <ApolloProvider client={client}>
      <div className="uk-container uk-container-expand uk-aling-center ">
        {currentAddress ? (
          <RoutePlans address={currentAddress} toggleFrom={toggleFrom} />
        ) : (
          <AddressView
            toggleFrom={toggleFrom}
            setToggleFrom={setToggleFrom}
            setCurrentAddress={setCurrentAddress}
          />
        )}
      </div>
    </ApolloProvider>
  );
}

export default App;
