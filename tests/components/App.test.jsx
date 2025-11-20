import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import App from '../../src/components/Apps/App';

// Mock images (optional but recommended)

// Mock react-router useNavigate
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

    // Title
    expect(screen.getByText('Test App')).toBeInTheDocument();

    // Image
    const img = screen.getByAltText('Test App');
    expect(img).toHaveAttribute('src', fakeApp.image);

    // Downloads
    expect(screen.getByText(/5M/i)).toBeInTheDocument();

    // Rating
    expect(screen.getByText(/4.5/i)).toBeInTheDocument();
  });
});
