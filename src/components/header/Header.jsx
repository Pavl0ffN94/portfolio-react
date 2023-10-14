import './style.css';
import { memo } from 'react';
import btnGit from './../../icons/git_min.svg';

const HeaderImpl = () => {
  return (
    <header className='header'>
      <div className='header_wrapper'>
        <h1 className='header_title'>
          <strong>
            Првиет меня зовут <em> Павлов Николай </em>
          </strong>
          <br />
        </h1>
        <div className='header_text'>
          Добро пожаловать на мою страницу портфолио! Я junior frontend developer, готовый
          к новым вызовам. Приглашаю вас познакомиться с моими работами и обсудить, как я
          могу быть полезным вашей компании
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
