module.exports = (Extended) => {

  Extended.remoteMethod('foo', {
    accepts: [
      {arg: 'id', type: 'string'}
    ],
    returns: {arg: 'data'},
    http: {verb: 'get'}
  });

};
