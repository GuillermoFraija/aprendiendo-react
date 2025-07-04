import './App.css';
import { useCatImage } from './hooks/useCatImage';
import { useCatFact } from './hooks/useCatFact';

function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main>
      <h1>Kitty app</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the three first words for ${fact}`}
        ></img>
      )}
    </main>
  );
}

export default App;
