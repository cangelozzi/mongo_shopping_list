exports.DATABASE_URL = process.env.DATABASE_URL ||
  global.DATABASE_URL ||
  (process.env.NODE_ENV === 'production' ?
    'mongodb://<dbuser>:<dbpassword>@ds117829.mlab.com:17829/camillo_thinkful'
  );
exports.PORT = process.env.PORT || 8080;


/*                        
'mongodb://localhost/shopping-list' :
'mongodb://localhost/shopping-list-dev'
*/