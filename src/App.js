import './App.css';

// importar componentes de react:
import Saludo from './components/Saludo';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
    const menu = ['Home', 'About', 'Contact', 'Portfolio'];
    return (
        <div className="App">
            <Navbar menu={menu} />
            <h1>Practica como en la clase!</h1>
            <Saludo
                nombre="Danlois"
                apellido="Tovar"
                profesion="Desarrollador Full Stack"
                edad={37}
            />

            <Footer desarrollador="DanloisDev" />
        </div>
    );
}

export default App;
