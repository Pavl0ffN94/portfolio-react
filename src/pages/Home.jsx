import { memo } from 'react';
import { Header } from '../components/header/Header';

const HomeImpl = () => {
  return (
    <>
      <Header />
      <main className='section'>
        <div className='container'>
          <h1 className='title_1'>Skills</h1>
          <ul className='content-list'>
            <li className='content-list__item'>
              <h2 className='title_2'>Hard Skills</h2>
              <p>
                HTML, CSS, JavaScript, TypeScript, React, Git, GitHub, Redux, Redux
                Toolkit, RTK AsyncThunk, RTQwery, NextJS, ExpressJS;
              </p>
            </li>

            <li className='content-list__item'>
              <h2 className='title_2'>Soft Skills</h2>
              <p>
                Адаптивность, Самообучение, Управление временем, Гибкость и
                адаптивность,Самомотивация, Постоянное обучение и обновление знаний,Умение
                работать в команде
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export const Home = memo(HomeImpl);
