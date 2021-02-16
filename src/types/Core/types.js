import { gql } from 'apollo-server';

const typeDef = gql`
  scalar DateTime
  scalar EmailAddress
  scalar PositiveFloat
  scalar PositiveInt

  enum Category {
    hipDominant
    horizontalPush
    horizontalPull
    kneeDominant
    verticalPush
    verticalPull
  }

  enum MuscleGroup {
    abs
    abductors
    adductors
    back
    biceps
    calves
    chest
    forearms
    glutes
    hamstrings
    quadriceps
    shoulders
    triceps
  }

  enum Sort {
    asc
    desc
  }

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export default typeDef;
