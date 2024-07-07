
import './App.css';
import Header from '../components/Header/Header';
import LoginForm from '../components/LoginForm/loginForm';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <h1>Hello, react 🚀</h1>
      <LoginForm />
      <section>Наш подход к обучению</section>
      </main>
      
    </div>
  );
}

export default App;
