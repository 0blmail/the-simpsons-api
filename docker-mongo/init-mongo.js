db.createUser({
  user: 'homer',
  pwd: 'simpsons',
  roles: [
    {
      role: 'readWrite',
      db: 'simpsons-mongo',
    },
  ],
});
