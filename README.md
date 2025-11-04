# [GeoInfo](https://geo-info.vercel.app/)

Information System (GIS) where you can combine and monitor various types of geodata.

![review](https://user-images.githubusercontent.com/40334272/94373473-81930d00-010e-11eb-87b2-08c9d24173cc.png)

[![Review](https://github.com/user-attachments/assets/dbdbc656-e84c-48d7-b431-9f07945e722d)](https://geo-info.vercel.app/)
[![Review](https://github.com/user-attachments/assets/08222949-cb5a-40ac-adf8-66feb463b641)](https://www.youtube.com/watch?v=_H1fAfAuQLM)

## [Review](https://www.youtube.com/watch?v=_H1fAfAuQLM)
[![Review](https://user-images.githubusercontent.com/40334272/94373616-39c0b580-010f-11eb-9b60-ce61c8a5ff1c.png)](https://www.youtube.com/watch?v=_H1fAfAuQLM)

Geographic Information System (GIS) where you can combine and monitor various types of geodata. It displays satellite positions, topographic maps, air pollution levels, atmospheric indicators, and more.

[![Review](https://github.com/user-attachments/assets/dbdbc656-e84c-48d7-b431-9f07945e722d)](https://geo-info.vercel.app/)

## 🌎 [API](https://geo-info.vercel.app/) & Deployment (vercel)

Demo API keys with limitations are included in the repository (src/api/api.js). You can generate your own keys [here](https://www.spacex.com/). Open the live application(Vercel) - [GeoInfo](https://geo-info.vercel.app/).

## 📂 Folder structure

 ```
   ├── dist                      /* generate build in production mode
   └── public                    /* static files
   |     ├── index.html          /* change title and static html here
   |     └── favicon
   └── src
   |     └── assets              /* images, fonts, additional files
   |      ...
   |     ├── components          /* react components
   |          └── common         /* reusable react components
   |     ├── hooks               /* custom react hooks
   |     └── store               /* store
   |          ├── api            /* api
   |          ├── sagas          /* redux-saga generators
   |          ├── actions        /* actions
   |          ├── constants      /* constants
   |          ├── reducers       /* reducers
   |          ├── selectors      /* selectors
   |          ├── state          /* initial state
   |          ├── types          /* typescript types
   |          └── store.js       /* create store
   |     ├── scss                /* general style, reset & normalaize
   |     ├── utils               /* utils, handlers
   |     ├── App.js              /* general component, router
   |     └── index.js            /* app starts here ;)
   |      ...
   ├── .babelrc                  /* babel config
   ├── .eslintrc                 /* eslint config
   ├── .prettierrc               /* prettier config
   ├── package.json              /* dependencies
   ├── webpack.config.dev.babel  /* webpack config for development
   ├── webpack.config.prod.babel /* webpack config for production
   └── .gitignore                /* ignore folders & files

```
## 💻 Technology stack
- ### ARCHITECTURE
   - UI(React), BLL(Redux), DAL(Redux-Saga).
- ### Build system
   - Custom build system based on webpack + Babel, with the ability for gradual TypeScript integration.
- ### LAYOUT
   - For styling, I used sass. To customize the scrollbar, I used react-perfect-scrollbar. For convenient class name combination, I integrated the classnames.
- ### STORE
   - For storing the global state of the application, I traditionally used redux with react-redux. I tried using hooks instead of the connect function. On one hand, this eliminates the need to wrap components in HOC (connect hell), but there are some drawbacks. The first is that we directly use dispatch. Additionally, by loading components with external actions, we break the clean functions paradigm of SOLID. Also, unlike the optimizations with connect, useSelector doesn't prevent component re-renders even if the props haven't changed, which forces us to use React.memo. When passing a callback with dispatch to child components, it needs to be wrapped in useCallback to prevent unnecessary re-renders.
- ### ROUTING
   - For routing implementation, I used the react-router-dom library.
- ### API
   - To be able to create asynchronous actions and handle side effects, I integrated redux-saga. I used the SpaceX API v4 and NASA API (ISS).
- ### MAPS
   - For working with maps, I used the Leaflet library Leaflet.

 ## 💻 FUNCTIONAL
 - ### **SPACE**
   - *Display of the Starlink satellite array (updated every 10 minutes), coverage areas, the number of satellites launched into orbit, and detailed information about each satellite.*
   - *Real-time tracking of the ISS, its past trajectory, and visibility zones from Earth.*
 - ### **MAPS**
   - *Satellite imagery*
   - *General Staff map*
   - *Bicycle routes*
   - *Transport routes*
   - *Tourist route map*
   - *Railway map*
   - *NASA Nighttime Imagery Map*
 - ### **LAYERS**
   - *Real-time air pollution*
   - *Rainfall*
   - *Air pressure*
 - ### **МАRKERS**
   - *Adding markers*
   - *Storing an array of markers*

## 🚀 Getting Started (development)

You can run the application on your local development environment in 5 minutes by following these steps:
1. **Install Node.js** [download](https://nodejs.org/en/).
2. **Install Yarn** [download](https://classic.yarnpkg.com/en/docs/install#windows-stable).
3. **Clone repository** .
4. **Install dependencies** .

   Open CLI in aplication folder and set up in a single command:

   ```shell
   yarn install

   ```
5. **Start aplication in development mode** .

   Set up in a single command in CLI:

   ```shell
   yarn start

   ```
![Screenshot_1](https://user-images.githubusercontent.com/40334272/92362988-780f1a00-f0f9-11ea-879f-77af2b98dd37.png)

[![Review](https://github.com/user-attachments/assets/dbdbc656-e84c-48d7-b431-9f07945e722d)](https://geo-info.vercel.app/)

 ## 📷 Screenshots
![s1](https://user-images.githubusercontent.com/40334272/94373474-822ba380-010e-11eb-8905-2486f99d01b9.png)
![s2](https://user-images.githubusercontent.com/40334272/94373476-82c43a00-010e-11eb-9f2b-92822ea9a732.png)
![s3](https://user-images.githubusercontent.com/40334272/94373477-82c43a00-010e-11eb-940f-b9ee6af22019.png)
![s4](https://user-images.githubusercontent.com/40334272/94373478-835cd080-010e-11eb-9f11-8f7bcc07fe27.png)
![s5](https://user-images.githubusercontent.com/40334272/94373479-835cd080-010e-11eb-91b3-f40815326f1c.png)
![s6](https://user-images.githubusercontent.com/40334272/94373480-835cd080-010e-11eb-9a37-20011ba97850.png)
![s7](https://user-images.githubusercontent.com/40334272/94373481-83f56700-010e-11eb-9cc8-b973a8064ee3.png)

