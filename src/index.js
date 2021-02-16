import { ApolloServer } from 'apollo-server';
import merge from 'deepmerge';
import createContext from './createContext';
import Core from './types/Core';
import Exercise from './types/Exercise';
import Set from './types/Set';
import Workout from './types/Workout';

const server = new ApolloServer({
  context: createContext,
  resolvers: merge.all([
    Core.resolvers,
    Exercise.resolvers,
    Set.resolvers,
    Workout.resolvers,
  ]),
  typeDefs: [Core.typeDef, Exercise.typeDef, Set.typeDef, Workout.typeDef],
});

server
  .listen({
    port: process.env.PORT,
  })
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
