import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './routes/Home';
import Book from './routes/Book';

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Book />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
