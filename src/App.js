import './assets/css/bootstrap-icons.css';
import './assets/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.min.css';
import './assets/scss/style.scss';
import Header from './pages/Header';
import Banner from './pages/Banner'
import Content from './pages/Content';
import Temple from './pages/Temple';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Demo from './pages/Demo';
import { Helmet } from 'react-helmet';
function App() {
  return (
    <div className="App">
      <Helmet>
          <title>TSNQ - Ta'lim sifatini nazorat qilish</title>
      </Helmet>
      <Header />
      <Banner />
      <Content />
      <Demo />
      <Temple />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
