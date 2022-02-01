import './App.css';

import styled from 'styled-components'

import SearchForm from './features/SearchForm/SearchForm';
import SearchResults from './features/SearchResults/SearchResults';
import SavedImages from './features/SavedImages/SavedImages';
import { useState } from 'react';

const AppContainer = styled.div`
  margin: 1em;
`

function App() {
  const [results, setResultsState] = useState([])
  const [savedImages, setSavedImages] = useState([])

  function handleResults(results) {
    console.log('handleResults:', results)
    setResultsState(results)
  }

  function handleSaveImage(image) {
    console.log('handleSaveImage:', image)
    setSavedImages([...savedImages, image])
  }

  function handleRemoveImage(image) {
    console.log('handleRemoveImage:', image)
    setSavedImages(savedImages.filter(img => img !== image))
  }

  return (
    <AppContainer>
      <h1>Image Search Gallery</h1>
      <p>Search for images to save to your gallery. (This relies on the <a href="https://pixabay.com/api/docs/">Pixabay API</a>)</p>
      <SearchForm submitResults={handleResults} />
      <SavedImages images={savedImages} removeImage={handleRemoveImage} />
      <SearchResults results={results} saveImage={handleSaveImage} />
    </AppContainer>
  );
}

export default App;
