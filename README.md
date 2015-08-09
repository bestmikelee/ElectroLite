# ElectroLite

## An Electron + Angular + Sqlite Desktop Application

======

This app is still under construction but does work under the right conditions

Configuration of sqlite3 may give you some issues.  [Solution found here]
(http://verysimple.com/2015/05/30/using-node_sqlite3-with-electron/)

```
cd node_modules/sqlite3
npm run prepublish
node-gyp configure --module_name=node_sqlite3 --module_path=../lib/binding/node-v44-darwin-x64
node-gyp rebuild --target=0.30.3 --arch=x64 --target_platform=darwin --dist-url=https://atom.io/download/atom-shell --module_name=node_sqlite3 --module_path=../lib/binding/node-v44-darwin-x64
```



