import React from 'react';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import App from '../../src/components/Apps/App';

const mockNavigate = vi.fn();

vi.mock('react-router', () => ({
  useNavigate: () => mockNavigate,
}));

describe('App Component', () => {
  const fakeApp = {
    id: 1,
    title: 'Test App',
    image: 'test-image.png',
    downloads: 5,
    ratingAvg: 4.5,
  };

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders title, image, downloads and rating', () => {
    render(<App app={fakeApp} />);

    expect(screen.getByText('Test App')).toBeInTheDocument();

    const img = screen.getByAltText('Test App');
    expect(img).toHaveAttribute('src', fakeApp.image);

    expect(screen.getByText(/5M/i)).toBeInTheDocument();

    expect(screen.getByText(/4.5/i)).toBeInTheDocument();
  });
});
