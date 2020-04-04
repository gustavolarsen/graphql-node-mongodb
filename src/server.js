const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers/userResolver');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/graphql', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schemas', 'userSchema.graphql'),
  resolvers
});

server.start();