import './style.css';
import { memo } from 'react';

import githab from './../../icons/githab.svg';
import vk from './../../icons/vk.svg';
import insta from './../../icons/insta.svg';

const FooterImpl = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__wrapper'>
          <ul className='social'>
            <li className='social__item'>
              <a target='_blank' rel='noreferrer' href='https://vk.com/pavl0ffn'>
                <img src={vk} alt='link-vk' />
              </a>
            </li>
            <li className='social__item'>
              <a target='_blank' rel='noreferrer' href='https://github.com/Pavl0ffN94'>
                <img src={githab} alt='link-githab' />
              </a>
            </li>
            <li className='social__item'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.instagram.com/bulbazavr_rrr/'>
                <img src={insta} alt='link-insta' />
              </a>
            </li>
          </ul>
          <p className='copyright'>2023 Pavl0ffN</p>
        </div>
      </div>
    </footer>
  );
};

export const Footer = memo(FooterImpl);
