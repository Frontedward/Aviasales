import React, { useState } from 'react';
import { AsideFilters } from '../aside-filters/aside-filters';
import { HeadSorts } from '../head-sorts/head-sorts';
import TicketList from '../ticket-list/ticket-list';
import './App.css';

const logo = './logo.scg';

function App() {
  const [btnPage, setBtnPage] = useState(1);
  const showMore = () => setBtnPage((btnPage) + 1);

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt='' />
      </header>
      <div className='content'>
        <AsideFilters />
        <div className='column'>
          <HeadSorts />
          <TicketList props={btnPage} />
          <button onClick={showMore} className='column_button button-show-more'>показать еще 5 билетов</button>
        </div>
      </div>
    </div>
  );
}

export default App;
