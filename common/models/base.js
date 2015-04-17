'use strict';

module.exports = function (Base) {

  Base.foo = function (id, cb) {
    cb(null, { foo: id });
  };

  Base.remoteMethod('foo', {
    accepts: [{ arg: 'id', type: 'string' }],
    returns: { arg: 'data' },
    http: { verb: 'get' }
  });
};

