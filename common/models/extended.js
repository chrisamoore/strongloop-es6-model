'use strict';

module.exports = function (Extended) {

  Extended.remoteMethod('foo', {
    accepts: [{ arg: 'id', type: 'string' }],
    returns: { arg: 'data' },
    http: { verb: 'get' }
  });
};

