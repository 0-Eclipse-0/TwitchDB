  var	config = require('./config'),
    thinky = require('thinky')({host:config.app.rethink.host, port:config.app.rethink.port, db: config.app.rethink.db}),
  	r = thinky.r,
  	type = thinky.type,
  	Query = thinky.Query;

  var schema = {};

  schema.primarykey = {
    users: "twitchname"
  };

  schema.users = {
  	twitchname: type.string(),
  	redditname: type.string(),
  	intro_status: type.string(),
  	intro_date:  type.string(),
  	profile_data: type.object()

  };
  schema.cache = {
  };

  schema.feedback = {

  };

  module.exports = schema;