const argon2 = require('argon2'); // import argon2

export function comparePassword(credentials, callback) {
    this.db.findOne({username: credentials.username}).exec((err, user) => {
     if (err) {
      return callback(null, err);
     }
  
     // Username not found.
     if (user == null) {
      return callback(null, user);
     }
  
     argon2
      .verify(user.password, credentials.password)
      .then(argon2Match => {
       if (argon2Match) {
        return callback(argon2Match, user.isAdmin);
       }
  
       callback(null, argon2Match, false);
      })
      .catch(error => callback(null, error));
    });
   }