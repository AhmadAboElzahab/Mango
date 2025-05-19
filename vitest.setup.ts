import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest'; 

// Automatically clean up after each test
afterEach(() => {
  cleanup();
});
