import './style.css';
import { memo } from 'react';
import btnGit from './../../icons/git_min.svg';

const HeaderImpl = () => {
  return (
    <header className='header'>
      <div className='header_wrapper'>
        <h1 className='header_title'>
          <strong>
            {' '}
            Hi, my name is <em> Nikolai </em>
          </strong>
          <br />
        </h1>
        <div className='header_text'>
          <p>I strive to create high-quality, modern, and attractive user interfaces.</p>
          <p>
            My goal as a developer is to create unique and intuitive user interfaces that
            delight and drive conversions.
          </p>
          <p>Here you can familiarize yourself with the code of this website.</p>
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
