/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFitnessInput = {
  id?: string | null,
  date: string,
  exerciseType: string,
  caloriesBurned?: number | null,
  description?: string | null,
  duration?: number | null,
  userID: string,
};

export type ModelFitnessConditionInput = {
  date?: ModelStringInput | null,
  exerciseType?: ModelStringInput | null,
  caloriesBurned?: ModelIntInput | null,
  description?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelFitnessConditionInput | null > | null,
  or?: Array< ModelFitnessConditionInput | null > | null,
  not?: ModelFitnessConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Fitness = {
  __typename: "Fitness",
  id: string,
  date: string,
  exerciseType: string,
  caloriesBurned?: number | null,
  description?: string | null,
  duration?: number | null,
  userID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFitnessInput = {
  id: string,
  date?: string | null,
  exerciseType?: string | null,
  caloriesBurned?: number | null,
  description?: string | null,
  duration?: number | null,
  userID?: string | null,
};

export type DeleteFitnessInput = {
  id: string,
};

export type CreateNutritionInput = {
  id?: string | null,
  calories: number,
  macronutrients?: string | null,
  micronutrients?: string | null,
  description?: string | null,
  date: string,
  userID: string,
};

export type ModelNutritionConditionInput = {
  calories?: ModelIntInput | null,
  macronutrients?: ModelStringInput | null,
  micronutrients?: ModelStringInput | null,
  description?: ModelStringInput | null,
  date?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelNutritionConditionInput | null > | null,
  or?: Array< ModelNutritionConditionInput | null > | null,
  not?: ModelNutritionConditionInput | null,
};

export type Nutrition = {
  __typename: "Nutrition",
  id: string,
  calories: number,
  macronutrients?: string | null,
  micronutrients?: string | null,
  description?: string | null,
  date: string,
  userID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNutritionInput = {
  id: string,
  calories?: number | null,
  macronutrients?: string | null,
  micronutrients?: string | null,
  description?: string | null,
  date?: string | null,
  userID?: string | null,
};

export type DeleteNutritionInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  email: string,
  name?: string | null,
  weight?: number | null,
  height?: number | null,
  gender?: Gender | null,
  goals?: string | null,
  age?: number | null,
};

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}


export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  height?: ModelIntInput | null,
  gender?: ModelGenderInput | null,
  goals?: ModelStringInput | null,
  age?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelGenderInput = {
  eq?: Gender | null,
  ne?: Gender | null,
};

export type User = {
  __typename: "User",
  id: string,
  email: string,
  name?: string | null,
  weight?: number | null,
  height?: number | null,
  gender?: Gender | null,
  goals?: string | null,
  age?: number | null,
  userNutrition?: ModelNutritionConnection | null,
  Fitnesses?: ModelNutritionConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelNutritionConnection = {
  __typename: "ModelNutritionConnection",
  items:  Array<Nutrition | null >,
  nextToken?: string | null,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  name?: string | null,
  weight?: number | null,
  height?: number | null,
  gender?: Gender | null,
  goals?: string | null,
  age?: number | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelFitnessFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  exerciseType?: ModelStringInput | null,
  caloriesBurned?: ModelIntInput | null,
  description?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelFitnessFilterInput | null > | null,
  or?: Array< ModelFitnessFilterInput | null > | null,
  not?: ModelFitnessFilterInput | null,
};

export type ModelFitnessConnection = {
  __typename: "ModelFitnessConnection",
  items:  Array<Fitness | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelNutritionFilterInput = {
  id?: ModelIDInput | null,
  calories?: ModelIntInput | null,
  macronutrients?: ModelStringInput | null,
  micronutrients?: ModelStringInput | null,
  description?: ModelStringInput | null,
  date?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelNutritionFilterInput | null > | null,
  or?: Array< ModelNutritionFilterInput | null > | null,
  not?: ModelNutritionFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  height?: ModelIntInput | null,
  gender?: ModelGenderInput | null,
  goals?: ModelStringInput | null,
  age?: ModelIntInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionFitnessFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  exerciseType?: ModelSubscriptionStringInput | null,
  caloriesBurned?: ModelSubscriptionIntInput | null,
  description?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionFitnessFilterInput | null > | null,
  or?: Array< ModelSubscriptionFitnessFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionNutritionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  calories?: ModelSubscriptionIntInput | null,
  macronutrients?: ModelSubscriptionStringInput | null,
  micronutrients?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNutritionFilterInput | null > | null,
  or?: Array< ModelSubscriptionNutritionFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  email?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  weight?: ModelSubscriptionFloatInput | null,
  height?: ModelSubscriptionIntInput | null,
  gender?: ModelSubscriptionStringInput | null,
  goals?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateFitnessMutationVariables = {
  input: CreateFitnessInput,
  condition?: ModelFitnessConditionInput | null,
};

export type CreateFitnessMutation = {
  createFitness?:  {
    __typename: "Fitness",
    id: string,
    date: string,
    exerciseType: string,
    caloriesBurned?: number | null,
    description?: string | null,
    duration?: number | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFitnessMutationVariables = {
  input: UpdateFitnessInput,
  condition?: ModelFitnessConditionInput | null,
};

export type UpdateFitnessMutation = {
  updateFitness?:  {
    __typename: "Fitness",
    id: string,
    date: string,
    exerciseType: string,
    caloriesBurned?: number | null,
    description?: string | null,
    duration?: number | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFitnessMutationVariables = {
  input: DeleteFitnessInput,
  condition?: ModelFitnessConditionInput | null,
};

export type DeleteFitnessMutation = {
  deleteFitness?:  {
    __typename: "Fitness",
    id: string,
    date: string,
    exerciseType: string,
    caloriesBurned?: number | null,
    description?: string | null,
    duration?: number | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNutritionMutationVariables = {
  input: CreateNutritionInput,
  condition?: ModelNutritionConditionInput | null,
};

export type CreateNutritionMutation = {
  createNutrition?:  {
    __typename: "Nutrition",
    id: string,
    calories: number,
    macronutrients?: string | null,
    micronutrients?: string | null,
    description?: string | null,
    date: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNutritionMutationVariables = {
  input: UpdateNutritionInput,
  condition?: ModelNutritionConditionInput | null,
};

export type UpdateNutritionMutation = {
  updateNutrition?:  {
    __typename: "Nutrition",
    id: string,
    calories: number,
    macronutrients?: string | null,
    micronutrients?: string | null,
    description?: string | null,
    date: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNutritionMutationVariables = {
  input: DeleteNutritionInput,
  condition?: ModelNutritionConditionInput | null,
};

export type DeleteNutritionMutation = {
  deleteNutrition?:  {
    __typename: "Nutrition",
    id: string,
    calories: number,
    macronutrients?: string | null,
    micronutrients?: string | null,
    description?: string | null,
    date: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    weight?: number | null,
    height?: number | null,
    gender?: Gender | null,
    goals?: string | null,
    age?: number | null,
    userNutrition?:  {
      __typename: "ModelNutritionConnection",
      nextToken?: string | null,
    } | null,
    Fitnesses?:  {
      __typename: "ModelNutritionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    weight?: number | null,
    height?: number | null,
    gender?: Gender | null,
    goals?: string | null,
    age?: number | null,
    userNutrition?:  {
      __typename: "ModelNutritionConnection",
      nextToken?: string | null,
    } | null,
    Fitnesses?:  {
      __typename: "ModelNutritionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    weight?: number | null,
    height?: number | null,
    gender?: Gender | null,
    goals?: string | null,
    age?: number | null,
    userNutrition?:  {
      __typename: "ModelNutritionConnection",
      nextToken?: string | null,
    } | null,
    Fitnesses?:  {
      __typename: "ModelNutritionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetFitnessQueryVariables = {
  id: string,
};

export type GetFitnessQuery = {
  getFitness?:  {
    __typename: "Fitness",
    id: string,
    date: string,
    exerciseType: string,
    caloriesBurned?: number | null,
    description?: string | null,
    duration?: number | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFitnessesQueryVariables = {
  filter?: ModelFitnessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFitnessesQuery = {
  listFitnesses?:  {
    __typename: "ModelFitnessConnection",
    items:  Array< {
      __typename: "Fitness",
      id: string,
      date: string,
      exerciseType: string,
      caloriesBurned?: number | null,
      description?: string | null,
      duration?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FitnessesByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFitnessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FitnessesByUserIDQuery = {
  fitnessesByUserID?:  {
    __typename: "ModelFitnessConnection",
    items:  Array< {
      __typename: "Fitness",
      id: string,
      date: string,
      exerciseType: string,
      caloriesBurned?: number | null,
      description?: string | null,
      duration?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNutritionQueryVariables = {
  id: string,
};

export type GetNutritionQuery = {
  getNutrition?:  {
    __typename: "Nutrition",
    id: string,
    calories: number,
    macronutrients?: string | null,
    micronutrients?: string | null,
    description?: string | null,
    date: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNutritionsQueryVariables = {
  filter?: ModelNutritionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNutritionsQuery = {
  listNutritions?:  {
    __typename: "ModelNutritionConnection",
    items:  Array< {
      __typename: "Nutrition",
      id: string,
      calories: number,
      macronutrients?: string | null,
      micronutrients?: string | null,
      description?: string | null,
      date: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NutritionsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNutritionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NutritionsByUserIDQuery = {
  nutritionsByUserID?:  {
    __typename: "ModelNutritionConnection",
    items:  Array< {
      __typename: "Nutrition",
      id: string,
      calories: number,
      macronutrients?: string | null,
      micronutrients?: string | null,
      description?: string | null,
      date: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    weight?: number | null,
    height?: number | null,
    gender?: Gender | null,
    goals?: string | null,
    age?: number | null,
    userNutrition?:  {
      __typename: "ModelNutritionConnection",
      nextToken?: string | null,
    } | null,
    Fitnesses?:  {
      __typename: "ModelNutritionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      weight?: number | null,
      height?: number | null,
      gender?: Gender | null,
      goals?: string | null,
      age?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFitnessSubscriptionVariables = {
  filter?: ModelSubscriptionFitnessFilterInput | null,
  userID?: string | null,
};

export type OnCreateFitnessSubscription = {
  onCreateFitness?:  {
    __typename: "Fitness",
    id: string,
    date: string,
    exerciseType: string,
    caloriesBurned?: number | null,
    description?: string | null,
    duration?: number | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFitnessSubscriptionVariables = {
  filter?: ModelSubscriptionFitnessFilterInput | null,
  userID?: string | null,
};

export type OnUpdateFitnessSubscription = {
  onUpdateFitness?:  {
    __typename: "Fitness",
    id: string,
    date: string,
    exerciseType: string,
    caloriesBurned?: number | null,
    description?: string | null,
    duration?: number | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFitnessSubscriptionVariables = {
  filter?: ModelSubscriptionFitnessFilterInput | null,
  userID?: string | null,
};

export type OnDeleteFitnessSubscription = {
  onDeleteFitness?:  {
    __typename: "Fitness",
    id: string,
    date: string,
    exerciseType: string,
    caloriesBurned?: number | null,
    description?: string | null,
    duration?: number | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNutritionSubscriptionVariables = {
  filter?: ModelSubscriptionNutritionFilterInput | null,
  userID?: string | null,
};

export type OnCreateNutritionSubscription = {
  onCreateNutrition?:  {
    __typename: "Nutrition",
    id: string,
    calories: number,
    macronutrients?: string | null,
    micronutrients?: string | null,
    description?: string | null,
    date: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNutritionSubscriptionVariables = {
  filter?: ModelSubscriptionNutritionFilterInput | null,
  userID?: string | null,
};

export type OnUpdateNutritionSubscription = {
  onUpdateNutrition?:  {
    __typename: "Nutrition",
    id: string,
    calories: number,
    macronutrients?: string | null,
    micronutrients?: string | null,
    description?: string | null,
    date: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNutritionSubscriptionVariables = {
  filter?: ModelSubscriptionNutritionFilterInput | null,
  userID?: string | null,
};

export type OnDeleteNutritionSubscription = {
  onDeleteNutrition?:  {
    __typename: "Nutrition",
    id: string,
    calories: number,
    macronutrients?: string | null,
    micronutrients?: string | null,
    description?: string | null,
    date: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    weight?: number | null,
    height?: number | null,
    gender?: Gender | null,
    goals?: string | null,
    age?: number | null,
    userNutrition?:  {
      __typename: "ModelNutritionConnection",
      nextToken?: string | null,
    } | null,
    Fitnesses?:  {
      __typename: "ModelNutritionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    weight?: number | null,
    height?: number | null,
    gender?: Gender | null,
    goals?: string | null,
    age?: number | null,
    userNutrition?:  {
      __typename: "ModelNutritionConnection",
      nextToken?: string | null,
    } | null,
    Fitnesses?:  {
      __typename: "ModelNutritionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    weight?: number | null,
    height?: number | null,
    gender?: Gender | null,
    goals?: string | null,
    age?: number | null,
    userNutrition?:  {
      __typename: "ModelNutritionConnection",
      nextToken?: string | null,
    } | null,
    Fitnesses?:  {
      __typename: "ModelNutritionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
