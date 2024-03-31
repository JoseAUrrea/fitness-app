/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createFitness = /* GraphQL */ `mutation CreateFitness(
  $input: CreateFitnessInput!
  $condition: ModelFitnessConditionInput
) {
  createFitness(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFitnessMutationVariables,
  APITypes.CreateFitnessMutation
>;
export const updateFitness = /* GraphQL */ `mutation UpdateFitness(
  $input: UpdateFitnessInput!
  $condition: ModelFitnessConditionInput
) {
  updateFitness(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFitnessMutationVariables,
  APITypes.UpdateFitnessMutation
>;
export const deleteFitness = /* GraphQL */ `mutation DeleteFitness(
  $input: DeleteFitnessInput!
  $condition: ModelFitnessConditionInput
) {
  deleteFitness(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFitnessMutationVariables,
  APITypes.DeleteFitnessMutation
>;
export const createNutrition = /* GraphQL */ `mutation CreateNutrition(
  $input: CreateNutritionInput!
  $condition: ModelNutritionConditionInput
) {
  createNutrition(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateNutritionMutationVariables,
  APITypes.CreateNutritionMutation
>;
export const updateNutrition = /* GraphQL */ `mutation UpdateNutrition(
  $input: UpdateNutritionInput!
  $condition: ModelNutritionConditionInput
) {
  updateNutrition(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateNutritionMutationVariables,
  APITypes.UpdateNutritionMutation
>;
export const deleteNutrition = /* GraphQL */ `mutation DeleteNutrition(
  $input: DeleteNutritionInput!
  $condition: ModelNutritionConditionInput
) {
  deleteNutrition(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteNutritionMutationVariables,
  APITypes.DeleteNutritionMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
