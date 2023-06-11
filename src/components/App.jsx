// ************************************************************
/* 6 - Книга контактів
Виконай рефакторинг коду застосунку «Книга контактів», додавши управління станом
за допомогою бібліотеки Redux Toolkit.

* - Redux-стан має виглядати наступним чином:
        {
          contacts: [],
          filter: ""
        }
*  - Створи сховище з configureStore()
*  - Використовуй функцію createSlice()
*  - Створи дії збереження та видалення контакту, а також оновлення фільтра
*  - Зв'яжи React-компоненти з Redux-логікою за допомогою хуків з react-redux.
*  - Використай Redux Persist для збереження контактів у локальному сховищі
*/

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Header } from 'common/styledCommon';

export const App = () => {
    return (
      <>
        <Header>Phonebook</Header>
        <ContactForm />
        <Header as="h2">Contacts</Header>
        <Filter />
        <ContactList />
      </>
    );
};
