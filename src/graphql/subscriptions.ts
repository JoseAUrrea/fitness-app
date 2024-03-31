/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateFitness = /* GraphQL */ `subscription OnCreateFitness(
  $filter: ModelSubscriptionFitnessFilterInput
  $userID: String
) {
  onCreateFitness(filter: $filter, userID: $userID) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFitnessSubscriptionVariables,
  APITypes.OnCreateFitnessSubscription
>;
export const onUpdateFitness = /* GraphQL */ `subscription OnUpdateFitness(
  $filter: ModelSubscriptionFitnessFilterInput
  $userID: String
) {
  onUpdateFitness(filter: $filter, userID: $userID) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFitnessSubscriptionVariables,
  APITypes.OnUpdateFitnessSubscription
>;
export const onDeleteFitness = /* GraphQL */ `subscription OnDeleteFitness(
  $filter: ModelSubscriptionFitnessFilterInput
  $userID: String
) {
  onDeleteFitness(filter: $filter, userID: $userID) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFitnessSubscriptionVariables,
  APITypes.OnDeleteFitnessSubscription
>;
export const onCreateNutrition = /* GraphQL */ `subscription OnCreateNutrition(
  $filter: ModelSubscriptionNutritionFilterInput
  $userID: String
) {
  onCreateNutrition(filter: $filter, userID: $userID) {
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
` as GeneratedSubscription<
  APITypes.OnCreateNutritionSubscriptionVariables,
  APITypes.OnCreateNutritionSubscription
>;
export const onUpdateNutrition = /* GraphQL */ `subscription OnUpdateNutrition(
  $filter: ModelSubscriptionNutritionFilterInput
  $userID: String
) {
  onUpdateNutrition(filter: $filter, userID: $userID) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateNutritionSubscriptionVariables,
  APITypes.OnUpdateNutritionSubscription
>;
export const onDeleteNutrition = /* GraphQL */ `subscription OnDeleteNutrition(
  $filter: ModelSubscriptionNutritionFilterInput
  $userID: String
) {
  onDeleteNutrition(filter: $filter, userID: $userID) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteNutritionSubscriptionVariables,
  APITypes.OnDeleteNutritionSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $id: String
) {
  onCreateUser(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $id: String
) {
  onUpdateUser(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $id: String
) {
  onDeleteUser(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
