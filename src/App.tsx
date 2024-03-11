import './App.css';
import { Header } from './assets/layout/header/Header';
import { Main } from './assets/layout/section/main/Main';
import { Skills } from './assets/layout/section/skills/Skills';


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
        </div>
    );
}

export default App;

