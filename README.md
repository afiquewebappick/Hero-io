1st--> 
npm i -D vitest

2nd--> 
 add script
"test": "vitest",
"test:ui": "vitest --ui"

3rd --> 
npm i -D @testing-library/react

4th --> 
npm i -D jsdom

5th -->
npm i @testing-library/jest-dom

6th -->
create vitest.config.js file and add
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: 'tests/setup.js',
  },
});

7th --> 
Create tests folder and create file setup.js


If we use userEvent, we need install it