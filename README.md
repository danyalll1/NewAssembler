# Vite + Pug + Sass boilerplate

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Check compiled and minifies production version
```
npm run build
```

### Src and hrefs
  All src and hrefs(like images, scripts and styles) in .pug files must begining from /src ...

### scripts and css
  You can import all scripts in /src/scripts/app.js and call it in your layout.pug
  layout.pug :
  ```
 html(lang="ru")
  head
    link(rel="stylesheet" href="/src/styles/app.sass")
    script(type='module' src="/src/scripts/app.js")
  ```
### svg and images

Your pug file:
```
#svg
header.header
    .container
        .header__container
            .header__top
                |copyright
            .header__bottom
                .header__logo
                    include ../../../assets/img/header/vite.svg  <----svg 


#image
section.top
    .container
        h1.section-title Vituum + Pug Template
        .top__content
            img(src="/src/assets/img/top/Vituum.png")
```
