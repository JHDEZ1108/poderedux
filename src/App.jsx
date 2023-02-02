import Searcher from './components/Searcher';
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
    </Container>
  );
}

export default App;
