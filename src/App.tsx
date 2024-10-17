import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import YapaneseTranslator from './YapaneseTranslator';
import MemeGenerator from './components/MemeGenerator';
import IntroPage from './components/IntroPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/translator" element={<YapaneseTranslator />} />
          <Route path="/meme" element={<MemeGenerator />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
