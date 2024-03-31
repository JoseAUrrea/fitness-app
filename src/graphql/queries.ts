/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getFitness = /* GraphQL */ `query GetFitness($id: ID!) {
  getFitness(id: $id) {
    id
    date
    exerciseType
    caloriesBurned
    description
    duration
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFitnessQueryVariables,
  APITypes.GetFitnessQuery
>;
export const listFitnesses = /* GraphQL */ `query ListFitnesses(
  $filter: ModelFitnessFilterInput
  $limit: Int
  $nextToken: String
) {
  listFitnesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      date
      exerciseType
      caloriesBurned
      description
      duration
      userID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFitnessesQueryVariables,
  APITypes.ListFitnessesQuery
>;
export const fitnessesByUserID = /* GraphQL */ `query FitnessesByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFitnessFilterInput
  $limit: Int
  $nextToken: String
) {
  fitnessesByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      date
      exerciseType
      caloriesBurned
      description
      duration
      userID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FitnessesByUserIDQueryVariables,
  APITypes.FitnessesByUserIDQuery
>;
export const getNutrition = /* GraphQL */ `query GetNutrition($id: ID!) {
  getNutrition(id: $id) {
    id
    calories
    macronutrients
    micronutrients
    description
    date
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetNutritionQueryVariables,
  APITypes.GetNutritionQuery
>;
export const listNutritions = /* GraphQL */ `query ListNutritions(
  $filter: ModelNutritionFilterInput
  $limit: Int
  $nextToken: String
) {
  listNutritions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      calories
      macronutrients
      micronutrients
      description
      date
      userID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNutritionsQueryVariables,
  APITypes.ListNutritionsQuery
>;
export const nutritionsByUserID = /* GraphQL */ `query NutritionsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelNutritionFilterInput
  $limit: Int
  $nextToken: String
) {
  nutritionsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      calories
      macronutrients
      micronutrients
      description
      date
      userID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.NutritionsByUserIDQueryVariables,
  APITypes.NutritionsByUserIDQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    email
    name
    weight
    height
    gender
    goals
    age
    userNutrition {
      nextToken
      __typename
    }
    Fitnesses {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      name
      weight
      height
      gender
      goals
      age
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
