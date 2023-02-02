import Searcher from './components/Searcher';
import PokemonCard from './components/PokemonCard';
import { Container } from "@mui/material"
import './App.css';

function App() {
  return (
    <Container 
      className="App"
      sx={{
        borderRadius: '16px',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Searcher />
      <PokemonCard />
    </Container>
  );
}

export default App;
