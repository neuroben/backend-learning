const argon2 = require('argon2'); // import argon2

export default async function comparePassword(credentials) {
       try {
      if (await argon2.verify(query.password, credentials.password)) {
        console.log('ok');
      } else {
        console.log('not ok');
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  }