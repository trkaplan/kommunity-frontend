# Kommunity Frontend
Kommunity is an online app for creating & joining communities. This is the frontend app.

Check product [documentation](https://docs.google.com/document/d/1P9znOKfQIHDP3BVS5ptvFgzSLmL0vo4WTAZrcKatFBA) for more details.

# Instructions
1. Fork this repo
2. Click on `Clone or download` button and copy the url
3. Run the following command:
```bash
# Replace FORK_URL with what you just copied
git clone FORK_URL
```

## 1. Install Node.js
Follow [these](https://github.com/Kommunity-app/kommunity-backend/blob/dev/README.md#2-install-nodejs) instructions to setup node.js/npm.

## 2. Install dependencies
``` bash
cd kommunity-frontend
npm install
```

## 3. Start frontend server
```bash
npm run start
```

## 4. Start backend server
Follow [these](https://github.com/Kommunity-app/kommunity-backend/blob/dev/README.md#instructions) instructions to setup backend server.

Start the backend server **in a separate terminal**:

```bash
# in a new terminal:
cd kommunity-backend
npm run start
```

## 5. Navigate to homepage
All set! Open http://localhost:3000/ in your browser. You should see the homepage.

# Other details

## Available NPM commands

```
npm run COMMAND
```

Available npm commands:

- `tailwindcss`: generates tailwind css (see `src/css/vendor` folder for setting new css rules
- `start`: starts the frontend server, and watches for file changes
- `test`: runs all tests
- `cover`: runs all tests and generates a coverage report
- `lint`: checks for lint errors
- `lint-fix`: checks for lint errors and tries to fix them

## Git instructions for developing new features
See [this link](https://github.com/Kommunity-app/kommunity-backend/blob/dev/README.md#git-instructions-for-developing-new-features).

## Libraries/tools used

- `node.js`: https://nodejs.org/en/docs/
- `react`: https://reactjs.org/docs/getting-started.html
- `razzle`: https://github.com/jaredpalmer/razzle#quick-start
- `axios`: https://github.com/axios/axios#axios
- `react router`: https://reacttraining.com/react-router/web/guides/quick-start
- `redux`: https://redux.js.org/
- `eslint`: https://eslint.org/docs/user-guide/getting-started
- `enzyme`: https://github.com/airbnb/enzyme#enzyme
- `jest`: https://jestjs.io/docs/en/getting-started
- `tailwind css`: https://tailwindcss.com/docs/what-is-tailwind/
- `babel`: https://babeljs.io/docs/en/
