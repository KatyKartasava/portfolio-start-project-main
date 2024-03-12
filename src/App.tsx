import './App.css';
import { Footer } from './assets/layout/footer/Footer';
import { Header } from './assets/layout/header/Header';
import { Contacts } from './assets/layout/section/contacts/Contacts';
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
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;

