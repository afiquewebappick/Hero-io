import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router';
import Trending from '../../src/components/Trending.jsx/Trending';

// Mock the App component to avoid rendering full child component
// vi.mock('../../src/pages/Root/Root.jsx', () => ({
//   default: ({ app }) => <div data-testid={app.id}>{app.name}</div>,
// }));
const fakeApps = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Test App ${i + 1}`,
  description: `Description for app ${i + 1}`,
}));

describe('Trending Component', () => {
  //   const fakeApps = Array.from({ length: 10 }, (_, i) => ({
  //     id: i,
  //     name: `App ${i}`,
  //   }));

  it('should render heading and subheading', () => {
    render(
      <MemoryRouter>
        <Trending apps={fakeApps} />
      </MemoryRouter>,
    );

    // console.log(screen.debug());
    expect(
      screen.getByRole('heading', { name: /Trending Apps/i }),
    ).toBeInTheDocument();
    // expect(screen.getByText('Trending Apps')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Explore All Trending Apps on the Market developed by us',
      ),
    ).toBeInTheDocument();
  });

  it('should render only the first 8 apps', () => {
    render(
      <MemoryRouter>
        <Trending apps={fakeApps} />
      </MemoryRouter>,
    );

    for (let i = 1; i <= 8; i += 1) {
      const matches = screen.getAllByText(`Test App ${i}`);
      expect(matches.length).toBeGreaterThan(0);
    }
  });

  it('should render the Show All link with correct href', () => {
    render(
      <MemoryRouter>
        <Trending apps={fakeApps} />
      </MemoryRouter>,
    );
    // screen.debug();

    // console.log(screen.debug());
    const links = screen.getAllByRole('link', { name: /Show All/i });
    expect(links.length).toBeGreaterThan(0);
    // Ensure at least one of the rendered links points to /apps
    expect(links.some((l) => l.getAttribute('href') === '/apps')).toBe(true);
  });
});
