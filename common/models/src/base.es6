module.exports = (Base) => {

  Base.foo = (id, cb) => {
    cb(null, { 'foo': id });
  }

  Base.remoteMethod('foo', {
    accepts: [
      {arg: 'id', type: 'string'}
    ],
    returns: {arg: 'data'},
    http: {verb: 'get'}
  });

};
