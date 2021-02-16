import { gql } from 'apollo-server';

const typeDef = gql`
  type Workout {
    id: ID!
    name: String
    date: DateTime!
    sets: [Set!]!
  }

  input WorkoutOrderByInput {
    name: Sort
    date: Sort
  }

  extend type Query {
    getWorkouts(
      date: DateTime
      orderBy: WorkoutOrderByInput = { date: desc, name: asc }
    ): [Workout!]!
    getWorkoutById(id: ID!): Workout
  }

  extend type Mutation {
    createWorkout(date: DateTime, name: String): Workout!
    updateWorkout(
      date: DateTime
      id: ID!
      name: String
      setIds: [ID!]
    ): Workout!
    deleteWorkout(id: ID!): Workout!
  }
`;

export default typeDef;
