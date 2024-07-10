
import './App.css';
import Header from '../components/Header/Header';
import LoginForm from '../components/LoginForm/loginForm';
import Counter from '../components/Counter/Counter';
import Feedback from '../components/Feedback/Feedback';
import Lesson04 from '../Lesson04/Lesson04';


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
      <Lesson04 />
      </main>
      
    </div>
  );
}

export default App;
