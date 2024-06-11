import './style.css';
import {memo} from 'react';
import btnGit from './../../icons/git_min.svg';

const HeaderImpl = () => {
  return (
    <header className='header'>
      <div className='header_wrapper'>
        <h1 className='header_title'>
          <strong>
            Привет, меня зовут <em> Павлов Николай </em>
          </strong>
          <br />
        </h1>
        <div className='header_text'>
          Добро пожаловать на мою страницу портфолио!Я фронтенд-разработчик с более чем полутора годовым практическим опытом в
создания динамичных и интуитивно понятных пользовательских интерфейсов. Я специализируюсь на разработке веб-приложений с использованием React, Next.js и TypeScript.
<br/> Моя цель - создавать
продукты, которые не только красивы, но и функциональны,
обеспечивая высокую степень удовлетворенности пользователей
          <a
            target='_blank'
            rel='noreferrer'
            href='https://github.com/Pavl0ffN94/portfolio-react'
            className='btn'>
            <img className='web-icon' src={btnGit} alt='git_min' />
            GitHab repo
          </a>
        </div>
      </div>
    </header>
  );
};

export const Header = memo(HeaderImpl);
