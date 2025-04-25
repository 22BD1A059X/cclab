import React from 'react';

function Headers() {
  return (
    <div className="search-popup">
      <div className="search-popup-container">
        <form role="search" method="get" className="form-group" action="">
          <input
            type="search"
            id="search-form"
            className="form-control border-0 border-bottom"
            placeholder="Type and press enter"
            name="s"
          />
          <button
            type="submit"
            className="search-submit border-0 position-absolute bg-white"
            style={{ top: '15px', right: '15px' }}
          >
            <svg className="search" width="24" height="24">
              {/* Make sure the `#search` symbol is defined elsewhere */}
              <use xlinkHref="#search"></use>
            </svg>
          </button>
        </form>

        <h5 className="cat-list-title">Browse Categories</h5>

        <ul className="cat-list">
          <li className="cat-list-item">
            <a href="#" title="Jackets">Jackets</a>
          </li>
          <li className="cat-list-item">
            <a href="#" title="T-shirts">T-shirts</a>
          </li>
          <li className="cat-list-item">
            <a href="#" title="Handbags">Handbags</a>
          </li>
          <li className="cat-list-item">
            <a href="#" title="Accessories">Accessories</a>
          </li>
          <li className="cat-list-item">
            <a href="#" title="Cosmetics">Cosmetics</a>
          </li>
          <li className="cat-list-item">
            <a href="#" title="Dresses">Dresses</a>
          </li>
          <li className="cat-list-item">
            <a href="#" title="Jumpsuits">Jumpsuits</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Headers;
