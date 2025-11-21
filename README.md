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
npm i -D @testing-library/jest-dom

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
---

# What you already have (this is good):
npm install --save-dev eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import
# Add Prettier if you want formatting:
npm install --save-dev eslint-config-prettier eslint-plugin-prettier prettier
# install
npm install --save-dev eslint@latest

---

package.json

"lint:fix": "eslint . --fix"

---
# JsDoc

# from project root
npm install --save-dev jsdoc jsdoc-cli
# optional for nicer templates
npm install --save-dev minami
npm install --save-dev taffydb
# optional plugin for markdown in descriptions
npm install --save-dev jsdoc-export-default-interop

# package.json
"scripts": {
  "docs:build": "jsdoc -c jsdoc.json",
  "docs:clean": "rimraf docs"         
}

# Create jsdoc.json
{
  "tags": {
    "allowUnknownTags": true
  },
  "source": {
    "include": ["src"],
    "includePattern": ".+\\.(js|jsx)$",
    "excludePattern": "(^|\\/|\\\\)_"
  },
  "plugins": [
    "plugins/markdown"
  ],
  "templates": {
    "cleverLinks": false,
    "monospaceLinks": false
  },
  "opts": {
    "destination": "./docs",
    "recurse": true,
    "template": "node_modules/minami"
  }
}
