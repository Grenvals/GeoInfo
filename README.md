# [MapInfo ](http://test.grenvalz.kl.com.ua/main)
 ![1](https://user-images.githubusercontent.com/40334272/92362326-8577d480-f0f8-11ea-8cbe-1936f8a13e89.png)
 ![2 1](https://user-images.githubusercontent.com/40334272/92362600-e2738a80-f0f8-11ea-875f-c2dccf4978ef.png)


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
   |          ├── actions        /* actions 
   |          ├── constants      /* constants 
   |          ├── reducers       /* reducers
   |          ├── selectors      /* selectors
   |          ├── state          /* initial state
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
- ### Shell  
   - Збірка на основі webpack + babel.
      
- ### Design 
   - Mінімалізм, flat.

- ### Layout 
   - SASS + BEM.

- ### Store
   - Використав REDUX + локальний стейт за допомогою хуків. Спробував заюзати замість connect хуки. З однієї сторони це знімає необхідність обгортати компонент в HOC(connect hell), але є свої мінуси. Перший - ми використовуємо dispatch напряму. Також ми навантажуючи компонент сторонніми діями, ламаємо парадигму чистих функцій і принципа єдиної відповідальності(SOLID). Також useSelector на відміну від оптимізацій connect, не зупиняє ререндер компонента, навіть якщо props не змінились, що заставляє використовувати React.memo.Також при передачі callback з dispatch дочірнім компонентам приходиться обгортати в useCallback, щоб компоненти не ренедерились без необхідності. Враховуючи все це використовувати хуки замість сonnect в їх теперішньому вигляді на мою думку не дуже зручно, особливо коли є складна логіка.

- ### Route
   - Для реалізації роутинга використав бібліотеку **react-router-dom**.

- ### Forms 
   - Реалізація з використанням хуків. 

- ### Maps 
   - Перше знайомство з взаємодією з картами в React, використовуючи бібліотеку Leaflet. 

 ## 📱 Needs to be improved
  -  Додати векторний слой.
  -  Попрацювати з логікою слоїв, додати Velocity, WeatherLayer.
  -  Добавити форму для редагування маркерів.
  -  Попрацювати з полігонами, geojson.
  -  Імплементувати типизацію(Type Script).
  -  Повернутися до connect замість хуків.

## 🚀 Getting Started (development)
###[Demo online ](http://test.grenvalz.kl.com.ua/main)

You can run aplication on your local dev environment in 5 minutes with these steps:
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

