import './styles/style.css';

import githab from './icons/githab.svg';
import vk from './icons/vk.svg';
import insta from './icons/insta.svg';

import ipAdressTracker_min from './img/ipAdressTracker_min.png';
import CostAcco_min from './img//CostAcco_min.png';
import FitnesTrainier_min from './img/FitnesTrainier_min.png';
import GuetarSchool_min from './img/GuetarSchool_min.png';
import jsQuiz_min from './img/jsQuiz_min.png';

import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Header />

      <main id="projects" className="section">
        <div className="container">
          <h2 className="title_1">Projects</h2>
          <ul className="projects">
            <li className="project">
              <a href="./project-ip.html">
                <img
                  src={ipAdressTracker_min}
                  alt="ip Adress Tracker"
                  className="project__image"
                />
                <h3 className="project__title">ip Adress Tracker</h3>
              </a>
            </li>
            <li className="project">
              <a href="./cost-accounting.html">
                <img
                  src={CostAcco_min}
                  alt="cost accounting"
                  className="project__image"
                />
                <h3 className="project__title">cost accounting</h3>
              </a>
            </li>
            <li className="project">
              <a href="./fitness.html">
                <img
                  src={FitnesTrainier_min}
                  alt="fitness trainer's business card"
                  className="project__image"
                />
                <h3 className="project__title">fitness trainer's business card</h3>
              </a>
            </li>
            <li className="project">
              <a href="./guetar-school.html">
                <img
                  src={GuetarSchool_min}
                  alt="Guetar School"
                  className="project__image"
                />
                <h3 className="project__title">Guetar School</h3>
              </a>
            </li>
            <li className="project">
              <a href="./js-quiz.html">
                <img src={jsQuiz_min} alt="JS Quiz" className="project__image" />
                <h3 className="project__title">JS Quiz</h3>
              </a>
            </li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="https://vk.com/pavl0ffn">
                  <img src={vk} alt="link-vk" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://github.com/Pavl0ffN94">
                  <img src={githab} alt="link-githab" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://www.instagram.com/bulbazavr_rrr/">
                  <img src={insta} alt="link-insta" />
                </a>
              </li>
            </ul>
            <p className="copyright">2023 pavl0ffn94@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
