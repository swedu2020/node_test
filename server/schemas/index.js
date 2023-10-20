const mongoose = require('mongoose');
module.exports = () => {
  function connect() {
    // id와 pw를 몽고디비에서 만들어둠.
    // id : user01,
    // pw : user01pw
    mongoose.connect('mongodb://user01:user01pw@localhost:27017/admin',{
        dbName: 'nodejs',
        useNewUrlParser: true
    }, function(err) {
      if (err) {
        console.error('mongodb connection error', err);
      }
      console.log('mongodb connected');
    });
  }
  connect();
  mongoose.connection.on('disconnected', connect);
};