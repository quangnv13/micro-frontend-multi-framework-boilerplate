# Micro frontend app boilerplate

![Logo](https://s3.amazonaws.com/oodles-blogs/blog-images/8beaf2c4-fe6f-494c-b523-a963cc327043.jpeg)

## Key concepts:

- Web component
- Shadow root
- Module federation

## How to use:

### Start each micro frontend projects:

Go to folder of each project you can run

```
  pnpm install && pnpm start
  yarn install && yarn start
  npm install && npm start
```

### Start or build all micro frontend projects:

Project use [**concurrently**](https://www.npmjs.com/package/concurrently) to run many script. You can check config in **./concurrently.js**
From root path you can run

```
  pnpm serve
  yarn serve
  npm run serve
```

```
  pnpm build
  yarn build
  npm run build
```

### Assets:

I setup a **Nodejs/Express** project at **./share/assets/app.js**. You need add your asset files of each project in specify folder
**Example: ./share/assets/images/solid-about**.

**Why we can not use asset files directly from project?**

Because if we expose a web component and use it from another shell project.
The shell project can not accessible to the asset files from micro frontend project by other origin url like below:

**micro_url/assets/image.png => shell/assets/image.png**

### Frameworks supported & default projects:

I config/setup default projects for each supported framework. You need follow config/setup from specify project folder.## Supported frameworks:

- [SolidJS](https://www.solidjs.com)
- [ReactJS](https://www.reactjs.org)
- [Vuejs](https://www.vuejs.org)
- [Angular](https://www.angular.io)
- [Svelte](https://www.svelte.dev)

## Support frameworks(future):

- [Lit](https://www.lit.dev)
- [Nextjs](https://nextjs.org)

## Features(future):

- [Monorepo with pnpm](https://pnpm.io/workspaces)
- [Shared package module federation](https://webpack.js.org/plugins/module-federation-plugin)
- Generate project with built-in CLI

## Store management:

- [Rxjs](https://rxjs.dev/guide/overview)
- Setup in **./share/store**

## Design architecture:

![Logo](https://i.ibb.co/ns03rLg/micro-fe-architect.jpg)

## Support

For support, email quangnv1311@gmail.com or create an issue in this repo.
