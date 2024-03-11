import './App.css';
import { Header } from './assets/layout/header/Header';
import { Main } from './assets/layout/section/main/Main';
import { Projects } from './assets/layout/section/projects/Projects';
import { Skills } from './assets/layout/section/skills/Skills';


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Projects />
        </div>
    );
}

export default App;

