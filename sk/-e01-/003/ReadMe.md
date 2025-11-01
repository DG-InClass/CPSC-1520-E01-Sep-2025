# Node Projects

Here, we will review the basics of setting up a *minimal* Node project from scratch - one that just uses Vanilla JavaScript.

Currently, this is a "blank" project with an absolute minimal structure. We have this `ReadMe.md` and the following subfolders:

- `css` for stylesheets
- `img` for images
- `js` for JavaScript

## Our Bare-Bones Node Project

Setting up a bare-bones Node project is fairly straight forward. All you have to do is run the following command inside this folder to create a `package.json` configuration file.

```ps
pnpm init
```

Take a moment to look at the contents of that configuration file (but don't edit anything). It's a **JSON** file, and it is the heart or starting point of our project.

After that, we need something to act as the **web server** while we're in development. Run the next command in the terminal.

```ps
pnpm add -D vite
```

This will update the configuration file with a ***dependency***. There are two types of dependencies:

- Regular depencencies, under the `"dependencies"` property. These get bundled for distribution with the final web project.
- Developer dependencies, under the `"devDependencies"` property. These are only for us during the development phase. They typically include just those tools/3rd-party packages that we need to help build and test our application.
