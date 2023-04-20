import Header from '../components/header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h1 className="title_1">Skills</h1>
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title_2">Hard Skills</h2>
              <p>
                HTML, CSS, Java Script, React, Node.js, Git, GitHub, Leaflet.js,
                Bootstrap, jQuery
              </p>
            </li>

            <li className="content-list__item">
              <h2 className="title_2">Soft Skills</h2>
              <p>
                Вот какие софт скилы выделил ChatGPT на основе анализа моего профиля в
                GitHab
              </p>
              <p>
                Проактивность, Креативность, Адаптивность, Самообучение, Коммуникация,
                Управление временем
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
