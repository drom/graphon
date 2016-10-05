'use strict';

var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = {
    hello: () => 'Hello world!'
};

graphql(schema, '{ hello }', root).then(rsp => {
    console.log(rsp);
});

/* eslint no-console: 0 */
