window.dbi = {
  success: false,
  use: function (n) {
    console.log('Table in use ' + n);
    dbTable = n;
  },
  getAll: function () {
    dbi.success = false;
    let tx = db.transaction(dbTable, 'readonly');
    let store = tx.objectStore(dbTable);
    return store.getAll();
  },
  getVal: function (n) {
    dbi.success = false;
    let tx = db.transaction(dbTable, 'readonly');
    let store = tx.objectStore(dbTable);
    let r = store.get(n);
    r.onsuccess = function (e) {
      dbi.success = true;
      let t = e.target.result || null;
      return t;
    }
  },
  getRow: function (t, o) {
    dbi.success = false;
    return db ? void (db.transaction(dbTable, 'readonly').objectStore(dbTable).get(t).onsuccess = function (e) {
      let t = e.target.result && e.target.result.v || null;
      if (t !== null) {
        dbi.success = true;
      }
      o(t)
    }) : void setTimeout(function () {
      dbi.get(t, o)
    }, 100)
  },
  set: function (k, i) {
    dbi.success = false;
    let transaction = db.transaction([dbTable], 'readwrite');
    let store = transaction.objectStore(dbTable);
    let o = {key: "", v: ""};
    o.key = k, o.v = i;
    let request = store.add(o);
    request.onerror = function (e) {
      console.error('DB Error ', e.target.error.name);
    };
    request.onsuccess = function (e) {
      dbi.success = true;
      console.log('DB Success');
    };
  },
  del: function (k) {
    dbi.success = false;
    let transaction = db.transaction(dbTable, 'readwrite');
    let store = transaction.objectStore(dbTable);
    let request = store.delete(k);
    request.onerror = function (e) {
      console.error('DB Error ', e.target.error.name);
    };
    request.onsuccess = function (e) {
      dbi.success = true;
      console.log('DB Success');
    };
  },
  empty: function () {
    dbi.success = false;
    let transaction = db.transaction(dbTable, 'readwrite');
    let store = transaction.objectStore(dbTable);
    let request = store.clear();
    request.onerror = function (e) {
      console.error('DB Error ', e.target.error.name);
    };
    request.onsuccess = function (e) {
      dbi.success = true;
      console.log('DB Success');
    };
  }
};
