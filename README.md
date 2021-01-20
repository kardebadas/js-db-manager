# js-db-manager
Javascript Object to manager the browser DB


## Usage

- Select Table
```js
dbi.use('MY_TABLE_NAME');
```

- Select table row
```js
dbi.getRow('TABLE_KEY_INDEX', function (value) {
  //....
});
```

- Select row value
```js
dbi.getVal('TABLE_KEY_INDEX'); //Return value
```

- Set & Save DB Row
```js
dbi.set('TABLE_KEY_INDEX', value);
```

- Delete table Row
```js
dbi.del('TABLE_KEY_INDEX');
```

- Empty table / Truncate
```js
dbi.empty();
```
