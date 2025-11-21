import React from 'react';
import { Link } from 'react-router';
import App from '../Apps/App';

/**
 * @typedef {Object} AppData
 * @property {string} id - Unique identifier of the app.
 * @property {string} title - Display name of the app.
 * @property {string} image - URL of the app thumbnail image.
 * @property {number} downloads - Number of downloads (in millions).
 * @property {number} ratingAvg - Average rating score of the app.
 */

/**
 * Trending section that displays the top trending applications.
 * Shows a grid of App cards (limited to 8 items) and a button that
 * navigates to the full list of apps.
 *
 * @component
 * @param {{ apps: AppData[] }} props - Component receives a list of apps.
 * @returns {JSX.Element} Rendered Trending section.
 *
 * @example
 * const apps = [
 *   { id: "1", title: "App One", image: "/a.png", downloads: 5, ratingAvg: 4.6 },
 *   { id: "2", title: "App Two", image: "/b.png", downloads: 8, ratingAvg: 4.8 }
 * ];
 *
 * <Trending apps={apps} />
 */
const Trending = ({ apps }) => {
  return ( 
    <div className="bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto py-20">
        <div className="text-center sm:p-0 p-4">
          <h1 className="sm:text-5xl text-3xl font-bold mb-4">Trending Apps</h1>
          <p className="text-[#627382] sm:text-xl text-sm">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 p-2 lg:p-0 ">
          {apps.slice(0, 8).map((app) => (
            <App key={app.id} app={app} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to={'/apps'}
            target="_parent"
            role='link'
            className="btn w-[145px] bg-gradient-to-r from-[#632ee3] to-[#d9ccec] text-white rounded px-4 py-3 hover:-translate-y-0.5"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trending;
