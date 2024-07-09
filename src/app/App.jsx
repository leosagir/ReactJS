
import './App.css';
import Header from '../components/Header/Header';
import LoginForm from '../components/LoginForm/loginForm';
import Counter from '../components/Counter/Counter';
import Feedback from '../components/Feedback/Feedback';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <h1>Hello, react 🚀</h1>
      <Counter />
      <LoginForm />
      <Feedback />
      <section>Наш подход к обучению</section>
      </main>
      
    </div>
  );
}

export default App;
