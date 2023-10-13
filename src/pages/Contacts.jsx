import './../styles/main.css';
import { memo } from 'react';

const ContactsImpl = () => {
  return (
    <main className='section'>
      <div className='container'>
        <h1 className='title_1'>Contacts</h1>
        <ul className='content-list'>
          <li className='content-list__item'>
            <h2 className='title_2'>Location</h2>
            <p>Samara,Russia</p>
          </li>

          <li className='content-list__item'>
            <h2 className='title_2'>Telegram/WatsApp</h2>
            <p>
              <a href='tel:+79963418515'>+7(996)341-85-15</a>
            </p>
          </li>

          <li className='content-list__item'>
            <h2 className='title_2'>Email</h2>
            <p>
              <a href='mailto:pavl0ffn94@gmail.com'>pavl0ffn94@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export const Contacts = memo(ContactsImpl);
