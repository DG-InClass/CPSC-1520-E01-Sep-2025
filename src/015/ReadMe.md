# Comments on Node/Web Projects

Creating a web/node project from scratch is done with a command such as `npm init -y` or `pnpm init` (I prefer using *pnpm*). Here's the result of initializing a new node project.

```json
{
  "name": "rnd",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "packageManager": "pnpm@10.17.1"
}
```

Notice that there are no dependencies on third-party libraries in a bare-bones Node project.

Since we've been doing simple Web projects that use JavaScript on the client-side (in the browser), we've been using [Vite](https://vite.dev) as the build tool and development web server.

```ps
pnpm add -D vite
```

Here's a partial view of what changes in the `package.json` when we add 3rd-party libraries/packages.

```diff lang="js"
  "license": "ISC",
- "packageManager": "pnpm@10.17.1"
+ "packageManager": "pnpm@10.17.1",
+ "devDependencies": {
+   "vite": "^7.2.6"
+ }
```

In general there are two kinds of dependencies:

- **Developer Dependencies:** Packages that are only used for the construction/creation of the final product. In other words, these are just for you, the developer.
- **Regular Dependencies:** Packages that are to be included in your final website results.

## Getting Node/Web Projects

When you clone down a project that already has a `package.json`, then you do not need to do a `pnpm init`. In fact, if you attempt to do that, you'll get a message saying that the `package.json` file already exists.

Instead, what you want to do is to *install* the dependencies of this cloned project/package. You do that by running `pnpm install` (or `pnpm i` as the "short form").

## Outdated Packages

We can check in our projects for which packages/dependencies are outdated by running `pnpm outdated`. Here's an example from the [*FetchingMarkdown* demo](./FetchingMarkdown/). The `package.json` lists the following dependencies.

```json
  "devDependencies": {
    "vite": "^7.1.12"
  },
  "dependencies": {
    "@picocss/pico": "^2.0.6",
    "markdown-it": "^14.1.0"
  }
```

When I run `pnpm outdated` on my project, I get the following:

```ps
pnpm outdated
┌────────────┬─────────┬────────┐
│ Package    │ Current │ Latest │
├────────────┼─────────┼────────┤
│ vite (dev) │ 7.2.4   │ 7.2.6  │
└────────────┴─────────┴────────┘
```

> *Why does it show the current as `7.2.4` when the `package.json` is saying `^7.1.12`? It's because at the time that I had downloaded/ran the `pnpm install`, it grabbed version `7.2.4` which was the current version at the time. The caret symbol - `^` - meant that the project could use version 7.1.12 **or higher**. As long as it's not a "breaking change", it would grab the current published version at the time you do your install.*
>
> *It's often a good practice to **pin your package dependencies** by removing the caret from the version number. For example, if I had said use version `7.1.12` it would download that exact version when I do a `pnpm install`.*

## Updating Packages

When we have an outdated package that we want to update, we can run a `pnpm update <pkg>` to get the latest version. For example:

```ps
pnpm update vite@latest
```

> *Using `@latest` grabs the latest non-breaking version.*

Here was the result of doing the update on *FetchingMarkdown*.

```ps
pnpm update vite@latest
Packages: +1 -1
+-
Progress: resolved 68, reused 22, downloaded 0, added 1, done

devDependencies:
- vite 7.2.4
+ vite 7.2.6
```

Note that you can specify the version you want to install or update to. For example, if we run a `pnpm outdated` on the [*Rectangles* demo](./Rectangles/), we should get something like the following.

```ps
pnpm outdated
┌────────────┬─────────┬────────┐
│ Package    │ Current │ Latest │
├────────────┼─────────┼────────┤
│ vite (dev) │ 5.4.21  │ 7.2.6  │
└────────────┴─────────┴────────┘
```

In your terminal, the latest version should show the number in red, meaning that the version change is a major one with potential breaking changes. In order to do an update of `vite` in this case, I need to specify the version number in my `pnpm update`:

```ps
pnpm update vite@7.2.6
Packages: +7 -4
+++++++----
Progress: resolved 99, reused 32, downloaded 0, added 7, done

devDependencies:
- vite 5.4.21
+ vite 7.2.6
```
