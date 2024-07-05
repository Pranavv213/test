import logo from './logo.svg';
import './App.css';
import { LoginButton } from '@telegram-auth/react';

function App() {
  return (
    <div className="App">
       <LoginButton
                botUsername='Tet1234bot'
                onAuthCallback={(data) => {
                    console.log(data);
                    // call your backend here to validate the data and sign in the user
                }}
            />
    </div>
  );
}

export default App;
