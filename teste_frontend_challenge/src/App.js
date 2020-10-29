import React, { useState, useMemo } from 'react';
// import ReactPaginate from 'react-paginate';

import './styles/global.css';
import './styles/header.css';
import './styles/main.css';
import './styles/footer.css';

import logo from './assets/github.svg';
import imgRepository from './assets/repository.svg';
import star from './assets/estrela.svg';

import api from './services/api.js';

function App() {
  const [repositories, setRepositories] = useState({});
  const [repository, setRepository] = useState('');

  // const [currentPage, setCurrentPage] = useState(0);

  function handleClickSearch(event) {
    api.get(`search/repositories?q=${repository}`).then((response) => {
      setRepositories(response.data);
    });
    event.preventDefault();
  }

  const totalCodeGeneral = useMemo(() => {
    let totalCode = 0;
    repositories.items?.map(({ size }) => {
      totalCode += size;
      return totalCode;
    });
    return totalCode;
  }, [repositories.items]);

  const totalIssuesGeneral = useMemo(() => {
    let totalIssues = 0;
    repositories.items?.map(({ openIssues }) => {
      totalIssues += openIssues;
      return totalIssues;
    });
    console.log(totalIssues);
    return totalIssues;
  }, [repositories.items]);

  // const itemsPage = 6;
  // const offset = currentPage * itemsPage;

  // if (repositories.items) {
  //   const currentPageData = repositories.items
  //     .slice(offset, offset + itemsPage)
  //     .map((item) => item);

  //   return currentPageData;
  // }

  // if (repositories.items) {
  //   const pageCount = Math.ceil(repositories.items.length / itemsPage);

  //   return pageCount;
  // }

  // function handlePageClick({ selected: selectedPage }) {
  //   setCurrentPage(selectedPage);
  // }

  return (
    <>
      <header>
        <div className="container">
          <div className="nav">
            <img src={logo} alt="github" />
            <div className="list">
              <h1>Why GitHub?</h1>
              <ul>
                <li />
              </ul>
            </div>
            <a href="/">Team</a>
            <a href="/">Enterprise</a>
            <div className="list">
              <h1>Explore</h1>
              <ul>
                <li />
              </ul>
            </div>
            <a href="/">Marketplace</a>
            <div className="list">
              <h1>Pricing</h1>
              <ul>
                <li />
              </ul>
            </div>
          </div>
          <div className="search-login">
            <div className="search">
              <form onSubmit={handleClickSearch}>
                <input
                  id="search"
                  type="text"
                  onChange={(event) => setRepository(event.target.value)}
                  placeholder="Buscar"
                />
                <button type="submit">Buscar</button>
              </form>
            </div>
            <div className="login">
              <a href="/">Sign in</a>
              <a href="/">Sign up</a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container-middle">
          <div className="left">
            <div className="repositories">
              <div className="cards">
                <div className="card">
                  <a href="/">Repositories</a>
                  <h1>{repositories.total_count}</h1>
                </div>

                <div className="card">
                  <a href="/">Code</a>
                  <h1>{totalCodeGeneral}</h1>
                </div>

                <div className="card">
                  <a href="/">Commits</a>
                  <h1>963K</h1>
                </div>

                <div className="card">
                  <a href="/">Issues</a>
                  <h1>{totalIssuesGeneral}</h1>
                </div>

                <div className="card">
                  <a href="/">Discussions</a>
                  <h1>963K</h1>
                </div>

                <div className="card">
                  <a href="/">Packages</a>
                  <h1>963K</h1>
                </div>

                <div className="card">
                  <a href="/">Marketplace</a>
                  <h1>963K</h1>
                </div>

                <div className="card">
                  <a href="/">Topics</a>
                  <h1>963K</h1>
                </div>

                <div className="card">
                  <a href="/">Wikis</a>
                  <h1>963K</h1>
                </div>

                <div className="card">
                  <a href="/">Users</a>
                  <h1>{repositories.items && repositories.items.length}</h1>
                </div>
              </div>
            </div>
            <div className="languages">
              <div className="cards">
                <h1>Languages</h1>
                <div className="card">
                  <a href="/">JavaScript</a>
                  <h1>963K</h1>
                </div>

                <div className="card">
                  <a href="/">HTML</a>
                  <h1>963K</h1>
                </div>

                <div className="card">
                  <a href="/">TypeScript</a>
                  <h1>963K</h1>
                </div>

                <div className="card">
                  <a href="/">CSS</a>
                  <h1>963K</h1>
                </div>

                <div className="card">
                  <a href="/">C++</a>
                  <h1>963K</h1>
                </div>

                <div className="card">
                  <a href="/">Shell</a>
                  <h1>963K</h1>
                </div>

                <div className="card">
                  <a href="/">Python</a>
                  <h1>963K</h1>
                </div>

                <div className="card">
                  <a href="/">Java</a>
                  <h1>963K</h1>
                </div>

                <div className="card">
                  <a href="/">Dockerfile</a>
                  <h1>963K</h1>
                </div>

                <div className="card">
                  <a href="/">CoffeeScript</a>
                  <h1>963K</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="results">
              <h1>
                {repositories.total_count}
                <p>repository results</p>
              </h1>
              <button type="button">Sort: Best match</button>
            </div>
            {repositories.items &&
              repositories.items.map((item) => (
                <div className="card-grid" key={item.id}>
                  <img src={imgRepository} alt="repositorio" />
                  <div className="card">
                    <div className="header-card">
                      <h1>{item.full_name}</h1>
                    </div>

                    <p>{item.description}</p>

                    <div className="card-bottom">
                      <div className="stars">
                        <img src={star} alt="estrela" />
                        <h1>{item.stargazers_count}</h1>
                      </div>

                      <div className="language">
                        {item.language !== null ? <div /> : ''}
                        <h1>{item.language !== null ? item.language : ''}</h1>
                      </div>

                      <div className="update">
                        <h1>Updated on</h1>
                        <h1>{item.updated_at}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            {/* <ReactPaginate
              previousLabel="← Previous"
              nextLabel="Next →"
              // pageCount={pageCount}
              // onPageChange={handlePageClick}
              containerClassName="pagination"
              previousLinkClassName="pagination__link"
              nextLinkClassName="pagination__link"
              disabledClassName="pagination__link--disabled"
              activeClassName="pagination__link--active"
            /> */}
            {/* {currentPageData} */}
          </div>
        </div>
      </main>
      <footer>
        <div className="container">
          <div className="copyrigth">
            <img src={logo} alt="github" />
            <h1>2020 Github, Inc.</h1>
          </div>
          <a href="/">Terms</a>
          <a href="/">Privacy</a>
          <a href="/">Security</a>
          <a href="/">Status</a>
          <a href="/">Help</a>
          <a href="/">Contact GitHub</a>
          <a href="/">Pricing</a>
          <a href="/">API</a>
          <a href="/">Training</a>
          <a href="/">Blog</a>
          <a href="/">About</a>
        </div>
      </footer>
    </>
  );
}

export default App;
