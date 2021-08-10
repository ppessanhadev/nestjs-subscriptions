import { ApolloProvider } from '@apollo/react-hooks';
import api from './services/api';
import './App.css';
import Title from './components/Title';
import Card from './components/Card';

function App() {
  return (
    <ApolloProvider client={api}>
      <div className="App">
        <Title />
        <Card />
      </div>
    </ApolloProvider>
  );
}

export default App;
