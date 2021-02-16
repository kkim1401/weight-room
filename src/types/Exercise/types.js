import { gql } from 'apollo-server';

const typeDef = gql`
  type Exercise {
    category: Category
    id: ID!
    # The max weight lifted in lbs
    max: PositiveInt
    name: String!
    primaryMuscle: MuscleGroup
    secondaryMuscle: MuscleGroup
    sets: [Set!]!
  }

  input ExerciseOrderByInput {
    name: Sort
  }

  extend type Query {
    getExercises(orderBy: ExerciseOrderByInput = { name: asc }): [Exercise!]!
    getExerciseById(id: ID!): Exercise
  }

  extend type Mutation {
    createExercise(
      category: Category
      max: PositiveInt
      name: String!
      primaryMuscle: MuscleGroup
      secondaryMuscle: MuscleGroup
    ): Exercise!
    updateExercise(
      category: Category
      id: ID!
      max: PositiveInt
      name: String
      primaryMuscle: MuscleGroup
      secondaryMuscle: MuscleGroup
    ): Exercise!
    deleteExercise(id: ID!): Exercise!
  }
`;

export default typeDef;
