# Kommunity App
 
Requirement doc to project: [gdoc](https://docs.google.com/document/d/1P9znOKfQIHDP3BVS5ptvFgzSLmL0vo4WTAZrcKatFBA)

Server: node.js **"8.11.4"** (version change for node [nvm](https://github.com/creationix/nvm#node-version-manager---) or [nvs](https://github.com/jasongin/nvs#nvs-node-version-switcher)) <br/>
Client: react.js <br/>

## How do i construct this project at my computer ?

- Click on `Clone or download` and copy link
- Write `git clone {your link}` on your terminal
- Afterwards write `cd kommunity-frontend`
- Finally write `npm install` or `yarn`

## How do i start this project at my computer ?

- You should download from [this link](https://github.com/Kommunity-app/kommunity-backend) and start project's backend 
- You should open **kommunity-frontend** and run **npm start** or **yarn start** at your terminal
- Open the **[localhost:3000](http://localhost:3000/)** from browser

## Information about the npm commands used in the project

how do i run npm commands: `npm run KOMUT` yada `yarn KOMUT`

Mevcut komutlar:

- `"build"`: ...

- `"tailwindcss"`: ...

- `"start"`: ...

- `"start:prod"`: ...

- `"check-if-not-committed"`: ...

- `"check-travis"`: ...

- `"test"`: ...

- `"cover"`: ...

- `"lint"`: ...

- `"lint-fix"`: ...

## Yapilan degisiklikten sonra PR olusturma

- (**github ui**) Create new [Fork](https://github.com/Kommunity-app/kommunity-frontend/fork) from project.You need to send the files to your own fork
- (**terminal**) You should write to your terminal `git checkout -b {your branch name}` for create their own branch
- (**terminal**) Write `git add .`after saving changes.
<!-- burasi turkce -->
- (**terminal**) Staging area daki dosyaliri branch e gondermek icin `git commit -m "your commit message"` yaz
- (**terminal**) Projeyi githuba gondermek icin `git push -u {your fork link} {your branch name}` komutunu yaz
- (**github ui**) Daha sonra yeni bir **Pul Request** olustur projenin lint ve unit testleri yapildiktan sonra review edilecek hersey dogruysa proje dev branchine merge edilecek

## Kullanilan Teknolojiler

- [nodejs](https://nodejs.org/en/docs/)
- [react](https://reactjs.org/docs/getting-started.html)
- [razzle](https://github.com/jaredpalmer/razzle#quick-start)
- [axios](https://github.com/axios/axios#axios)
- [react router](https://reacttraining.com/react-router/web/guides/quick-start)
- [redux](https://redux.js.org/)
- [eslint](https://eslint.org/docs/user-guide/getting-started)
- [enzyme](https://github.com/airbnb/enzyme#enzyme)
- [jest](https://jestjs.io/docs/en/getting-started)
- [tailwind css](https://tailwindcss.com/docs/what-is-tailwind/)
- [babel](https://babeljs.io/docs/en/)
