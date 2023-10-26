# A project for reproducing an issue with uncompiled routes on Safari.

## Steps

Open Safari (tested on 16.6).

Go to Settings/Search and turn off the &quot;Preload Top Hit in the background&quot; setting to prevent unwanted requests.

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

Append any of the route paths to the URL:

- /static-1
- /static-2
- /static-3
- /static-4
- /static-5

Observe the server and browser consoles while you hit enter.

Server:

```console
 ✓ Compiled /static-1/page in 188ms (399 modules)
 ⚠ Fast Refresh had to perform a full reload. Read more: https://nextjs.org/docs/messages/fast-refresh-reload
```

Browser:

```console
[Log] [Fast Refresh] rebuilding
[Error] Fetch API cannot load http://localhost:3000/_next/static/webpack/2fc5e4dde5ad58d9.webpack.hot-update.json due to access control checks.
	(anonymous function) (webpack.js:1353)
[Warning] [Fast Refresh] performing full reload

Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.
You might have a file which exports a React component but also exports a value that is imported by a non-React component file.
Consider migrating the non-React component export to a separate file and importing it into both files.

It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.
Fast Refresh requires at least one parent function component in your React tree.
```

**Every first attempt to navigate to an uncompiled route should fail.** After the route has been
compiled, it loads normally.

On a side note, the issue can be replicated by using `<a>` tags for navigation instead of manually
altering the URL. You can try this by clicking on the links shown.
