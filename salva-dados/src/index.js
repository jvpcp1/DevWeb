import React, { useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [savedData, setSavedData] = useState(null);

  const handleSaveData = () => {
    setSavedData(inputValue);
    console.log('Dado salvo:', inputValue);
  };

  return (
    <div>
      <label>
        Insira um dado:
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <button onClick={handleSaveData}>Salvar Dado</button>

      {savedData && (
        <div>
          <h3>Dado Salvo:</h3>
          <p>{savedData}</p>
        </div>
      )}
    </div>
  );
};

export default App;
