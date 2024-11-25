import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countries from './Countries';
import Details from './Details';

export default function App() {
  return (
    <div style={styles.container}>
      <Router>
        <div style={styles.header}>
          <h1 style={styles.title}>World kingdoms</h1>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div style={styles.contentBox}>
                <Countries />
              </div>
            }
          />
          <Route
            path="/countries"
            element={
              <div style={styles.contentBox}>
                <h2 style={styles.subtitle}>Let’s choose a kingdom.</h2>
                <Countries />
              </div>
            }
          />
          <Route
            path="countries/:cca2"
            element={
              <div style={styles.contentBox}>
                <h2 style={styles.subtitle}>Here are the details:</h2>
                <Details />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f8f8f8',
    height: '100vh',
    width: '100vw', // Full width
    margin: 0, // Remove default margin
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    marginBottom: '20px',
  },
  title: {
    color: '#6a0dad',
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '0',
  },
  contentBox: {
    backgroundColor: '#fff',
    color: 'black',
    padding: '20px',
    borderRadius: '25px',
    border: 'solid 2px black',
    width: '90%', 
    maxWidth: '900px',
  },
  subtitle: {
    color: '#333',
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
};
