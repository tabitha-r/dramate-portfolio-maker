import React from 'react';
import MainPreview from './components/preview/main';
import EditorPane from './components/editor-pane/editor';
import './App.css';

function App() {
  return (
    <div className="App">
        <EditorPane />
        <MainPreview />
    </div>
  );
}

export default App;
