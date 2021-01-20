# js-db-manager
Javascript Object to manager the browser DB


## Usage

- Select DB
```js
dbi.use('MY_DB');
```

- Select db row
```js
dbi.getRow('DB_KEY_INDEX', function (value) {
  //....
});
```

- Select row value
```js
dbi.getVal('DB_KEY_INDEX'); //Return value
```

- Set & Save DB Row
```js
dbi.set('DB_KEY_INDEX', value);
```

- Delete DB Row
```js
dbi.del('DB_KEY_INDEX');
```

- Empty DB / Truncate
```js
dbi.empty();
```
