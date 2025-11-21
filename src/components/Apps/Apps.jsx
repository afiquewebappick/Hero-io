import React, { useState } from 'react';
import { Link } from 'react-router';
import App from './App';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

/**
 * @typedef {Object} AppData
 * @property {string} id - Unique identifier of the app.
 * @property {string} title - Display name of the app.
 * @property {string} image - URL of the app thumbnail.
 * @property {number} downloads - Number of downloads (in millions).
 * @property {number} ratingAvg - Average rating score of the app.
 */

/**
 * A component that displays all applications in a searchable grid.
 * Users can filter apps by typing in the search bar. During search
 * operations, a loading spinner is temporarily shown to simulate
 * asynchronous behavior.
 *
 * @component
 * @param {{ apps: AppData[] }} props - The list of all available apps.
 * @returns {JSX.Element} Rendered Apps page.
 */
const Apps = ({ apps }) => {
  const [totalApps, setTotalApps] = useState(apps);
  const [loading, setLoading] = useState(false);

  /**
   * Handles filtering apps by name based on user input.
   * Shows loading animation for 500ms to simulate data fetching.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - Input change event.
   * @returns {void}
   */
  const handleSearch = (e) => {
    const name = e.target.value.toLowerCase();
    setLoading(true);

    setTimeout(() => {
      const filteredApps = apps.filter((a) =>
        a.title.toLowerCase().includes(name),
      );
      setTotalApps(filteredApps);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto py-20">
        <div className="text-center sm:p-0 p-4">
          <h1 className="sm:text-5xl text-3xl font-bold mb-4">
            Our All Applications
          </h1>
          <p className="text-[#627382] sm:text-xl text-sm">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="mt-10 flex sm:justify-between sm:flex-row flex-col justify-center items-center sm:gap-0 gap-4">
          <p className="text-2xl font-semibold text-center sm:text-left">
            ({totalApps.length}) Apps Found
          </p>

          <label className="input border-1 border-[#d2d2d2] rounded bg-[#f5f5f5]">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>

            <input
              onChange={handleSearch}
              type="search"
              required
              placeholder="Search by name"
            />
          </label>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <LoadingSpinner />
          </div>
        )}

        {!loading && totalApps.length === 0 && (
          <div className="flex flex-col justify-center items-center mt-5.5 py-40">
            <h1 className="text-4xl font-bold">No Apps Found</h1>
            <div className="mt-5 text-center">
              <Link
                to={'/apps'}
                target="_parent"
                className="btn w-[145px] bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white rounded px-4 py-3 hover:-translate-y-0.5"
              >
                Show All Apps
              </Link>
            </div>
          </div>
        )}

        <div className="mt-5.5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 p-2 lg:p-0 ">
          {totalApps.map((app) => (
            <App key={app.id} app={app} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
