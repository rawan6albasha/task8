// src/App.jsx

import HeaderCombo from './components/HeaderCombo';
import NavbarCombo from './components/NavbarCombo'
import Services from './components/Services'
import Hosting from './components/Hosting'
import FooterCompo from './components/FooterCompo'
import'../src/assets/style/master.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <div className="App">
        <NavbarCombo/>
            <HeaderCombo />
            <Services/>
            <Hosting/>
            <FooterCompo/>
        </div>
    );
}

export default App;
