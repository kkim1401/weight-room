import { gql } from 'apollo-server';

const typeDef = gql`
  type Set {
    id: ID!
    exercise: Exercise!
    notes: String
    percentage: PositiveFloat
    reps: PositiveInt!
    rpe: PositiveFloat
    weight: PositiveFloat
    workout: Workout!
  }

  input SetOrderByInput {
    date: Sort
  }

  extend type Query {
    getSetById(id: ID!): Set
    getSets(orderBy: SetOrderByInput = { date: desc }): [Set!]!
  }

  extend type Mutation {
    createSet(
      exerciseId: ID!
      notes: String
      percentage: PositiveFloat
      reps: PositiveInt!
      rpe: PositiveFloat
      weight: PositiveFloat
      workoutId: ID!
    ): Set!
    updateSet(
      id: ID!
      notes: String
      percentage: PositiveFloat
      reps: PositiveInt
      rpe: PositiveFloat
      weight: PositiveFloat
    ): Set!
    deleteSet(id: ID!): Set!
  }
`;

export default typeDef;
