// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetAccountsParameters,
  ListConnectorsParameters,
  CreateConnectorParameters,
  QueryConnectorsParameters,
  GetConnectorsParameters,
  DeleteConnectorParameters,
  UpdateConnectorParameters,
  ListBuildParameters,
  CreateBuildParameters,
  GetBuildParameters,
  DeleteBuildParameters,
  UpdateBuildParameters,
  ListDevicesParameters,
  CreateDeviceParameters,
  GetDeviceParameters,
  UpdateDeviceParameters,
  DeleteDeviceParameters,
  ListSessionsParameters,
  CreateSessionParameters,
  GetSessionParameters,
  DeleteSessionParameters,
  PutSessionTerminateParameters,
  GetSessionArtifactsParameters,
  ListPoolsParameters,
  CreatePoolParameters,
  GetPoolParameters,
  UpdatePoolParameters,
  DeletePoolParameters,
  GetAccountParameters,
  UpdateAccountParameters,
  GetPlayersParameters,
  CreatePlayersParameters,
  GetPlayerParameters,
  DeletePlayerParameters,
  UpdatePlayerParameters,
} from "./parameters";
import {
  GetAccounts200Response,
  ListConnectors200Response,
  CreateConnector200Response,
  QueryConnectors200Response,
  GetConnectors200Response,
  DeleteConnector200Response,
  DeleteConnector204Response,
  UpdateConnector200Response,
  ListBuild200Response,
  CreateBuild200Response,
  GetBuild200Response,
  DeleteBuild200Response,
  DeleteBuild204Response,
  UpdateBuild200Response,
  ListDevices200Response,
  CreateDevice200Response,
  GetDevice200Response,
  UpdateDevice200Response,
  DeleteDevice200Response,
  DeleteDevice204Response,
  ListSessions200Response,
  CreateSession200Response,
  GetSession200Response,
  DeleteSession200Response,
  DeleteSession204Response,
  PutSessionTerminate200Response,
  GetSessionArtifacts200Response,
  ListPools200Response,
  CreatePool200Response,
  GetPool200Response,
  UpdatePool200Response,
  DeletePool200Response,
  DeletePool204Response,
  GetAccount200Response,
  UpdateAccount200Response,
  GetPlayers200Response,
  CreatePlayers200Response,
  GetPlayer200Response,
  DeletePlayer200Response,
  DeletePlayer204Response,
  UpdatePlayer200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetAccounts {
  get(options: GetAccountsParameters): StreamableMethod<GetAccounts200Response>;
}

export interface ListConnectors {
  get(
    options: ListConnectorsParameters
  ): StreamableMethod<ListConnectors200Response>;
  post(
    options: CreateConnectorParameters
  ): StreamableMethod<CreateConnector200Response>;
}

export interface QueryConnectors {
  post(
    options: QueryConnectorsParameters
  ): StreamableMethod<QueryConnectors200Response>;
}

export interface GetConnectors {
  get(
    options: GetConnectorsParameters
  ): StreamableMethod<GetConnectors200Response>;
  delete(
    options: DeleteConnectorParameters
  ): StreamableMethod<DeleteConnector200Response | DeleteConnector204Response>;
  put(
    options: UpdateConnectorParameters
  ): StreamableMethod<UpdateConnector200Response>;
}

export interface ListBuild {
  get(options: ListBuildParameters): StreamableMethod<ListBuild200Response>;
  post(
    options: CreateBuildParameters
  ): StreamableMethod<CreateBuild200Response>;
}

export interface GetBuild {
  get(options: GetBuildParameters): StreamableMethod<GetBuild200Response>;
  delete(
    options: DeleteBuildParameters
  ): StreamableMethod<DeleteBuild200Response | DeleteBuild204Response>;
  put(options: UpdateBuildParameters): StreamableMethod<UpdateBuild200Response>;
}

export interface ListDevices {
  get(options: ListDevicesParameters): StreamableMethod<ListDevices200Response>;
  post(
    options: CreateDeviceParameters
  ): StreamableMethod<CreateDevice200Response>;
}

export interface GetDevice {
  get(options: GetDeviceParameters): StreamableMethod<GetDevice200Response>;
  put(
    options: UpdateDeviceParameters
  ): StreamableMethod<UpdateDevice200Response>;
  delete(
    options: DeleteDeviceParameters
  ): StreamableMethod<DeleteDevice200Response | DeleteDevice204Response>;
}

export interface ListSessions {
  get(
    options: ListSessionsParameters
  ): StreamableMethod<ListSessions200Response>;
  post(
    options: CreateSessionParameters
  ): StreamableMethod<CreateSession200Response>;
}

export interface GetSession {
  get(options: GetSessionParameters): StreamableMethod<GetSession200Response>;
  delete(
    options: DeleteSessionParameters
  ): StreamableMethod<DeleteSession200Response | DeleteSession204Response>;
}

export interface PutSessionTerminate {
  put(
    options: PutSessionTerminateParameters
  ): StreamableMethod<PutSessionTerminate200Response>;
}

export interface GetSessionArtifacts {
  get(
    options: GetSessionArtifactsParameters
  ): StreamableMethod<GetSessionArtifacts200Response>;
}

export interface ListPools {
  get(options: ListPoolsParameters): StreamableMethod<ListPools200Response>;
  post(options: CreatePoolParameters): StreamableMethod<CreatePool200Response>;
}

export interface GetPool {
  get(options: GetPoolParameters): StreamableMethod<GetPool200Response>;
  put(options: UpdatePoolParameters): StreamableMethod<UpdatePool200Response>;
  delete(
    options: DeletePoolParameters
  ): StreamableMethod<DeletePool200Response | DeletePool204Response>;
}

export interface GetAccount {
  get(options: GetAccountParameters): StreamableMethod<GetAccount200Response>;
  put(
    options: UpdateAccountParameters
  ): StreamableMethod<UpdateAccount200Response>;
}

export interface GetPlayers {
  get(options: GetPlayersParameters): StreamableMethod<GetPlayers200Response>;
  post(
    options: CreatePlayersParameters
  ): StreamableMethod<CreatePlayers200Response>;
}

export interface GetPlayer {
  get(options: GetPlayerParameters): StreamableMethod<GetPlayer200Response>;
}

export interface DeletePlayer {
  delete(
    options: DeletePlayerParameters
  ): StreamableMethod<DeletePlayer200Response | DeletePlayer204Response>;
  put(
    options: UpdatePlayerParameters
  ): StreamableMethod<UpdatePlayer200Response>;
}

export interface Routes {
  /** Resource for '/api/Accounts' has methods for the following verbs: get */
  (path: "/api/Accounts"): GetAccounts;
  /** Resource for '/api/accounts/\{accountId\}/Connectors' has methods for the following verbs: get, post */
  (
    path: "/api/accounts/{accountId}/Connectors",
    accountId: string
  ): ListConnectors;
  /** Resource for '/api/accounts/\{accountId\}/Connectors/query' has methods for the following verbs: post */
  (
    path: "/api/accounts/{accountId}/Connectors/query",
    accountId: string
  ): QueryConnectors;
  /** Resource for '/api/accounts/\{accountId\}/Connectors/\{connectorId\}' has methods for the following verbs: get, delete, put */
  (
    path: "/api/accounts/{accountId}/Connectors/{connectorId}",
    accountId: string,
    connectorId: string
  ): GetConnectors;
  /** Resource for '/api/accounts/\{accountId\}/Builds' has methods for the following verbs: get, post */
  (path: "/api/accounts/{accountId}/Builds", accountId: string): ListBuild;
  /** Resource for '/api/accounts/\{accountId\}/Builds/\{buildId\}' has methods for the following verbs: get, delete, put */
  (
    path: "/api/accounts/{accountId}/Builds/{buildId}",
    accountId: string,
    buildId: string
  ): GetBuild;
  /** Resource for '/api/accounts/\{accountId\}/pools/\{poolId\}/Devices' has methods for the following verbs: get, post */
  (
    path: "/api/accounts/{accountId}/pools/{poolId}/Devices",
    accountId: string,
    poolId: string
  ): ListDevices;
  /** Resource for '/api/accounts/\{accountId\}/pools/\{poolId\}/Devices/\{deviceId\}' has methods for the following verbs: get, put, delete */
  (
    path: "/api/accounts/{accountId}/pools/{poolId}/Devices/{deviceId}",
    accountId: string,
    poolId: string,
    deviceId: string
  ): GetDevice;
  /** Resource for '/api/accounts/\{accountId\}/Sessions' has methods for the following verbs: get, post */
  (path: "/api/accounts/{accountId}/Sessions", accountId: string): ListSessions;
  /** Resource for '/api/accounts/\{accountId\}/Sessions/\{sessionId\}' has methods for the following verbs: get, delete */
  (
    path: "/api/accounts/{accountId}/Sessions/{sessionId}",
    accountId: string,
    sessionId: string
  ): GetSession;
  /** Resource for '/api/accounts/\{accountId\}/Sessions/\{sessionId\}/terminate' has methods for the following verbs: put */
  (
    path: "/api/accounts/{accountId}/Sessions/{sessionId}/terminate",
    accountId: string,
    sessionId: string
  ): PutSessionTerminate;
  /** Resource for '/api/accounts/\{accountId\}/Sessions/\{sessionId\}/artifacts' has methods for the following verbs: get */
  (
    path: "/api/accounts/{accountId}/Sessions/{sessionId}/artifacts",
    accountId: string,
    sessionId: string
  ): GetSessionArtifacts;
  /** Resource for '/api/accounts/\{accountId\}/Pools' has methods for the following verbs: get, post */
  (path: "/api/accounts/{accountId}/Pools", accountId: string): ListPools;
  /** Resource for '/api/accounts/\{accountId\}/Pools/\{poolId\}' has methods for the following verbs: get, put, delete */
  (
    path: "/api/accounts/{accountId}/Pools/{poolId}",
    accountId: string,
    poolId: string
  ): GetPool;
  /** Resource for '/api/Accounts/\{accountId\}' has methods for the following verbs: get, put */
  (path: "/api/Accounts/{accountId}", accountId: string): GetAccount;
  /** Resource for '/api/accounts/\{accountId\}/Players' has methods for the following verbs: get, post */
  (path: "/api/accounts/{accountId}/Players", accountId: string): GetPlayers;
  /** Resource for '/api/accounts/\{accountId\}/Players/\{id\}' has methods for the following verbs: get */
  (
    path: "/api/accounts/{accountId}/Players/{id}",
    accountId: string,
    id: string
  ): GetPlayer;
  /** Resource for '/api/accounts/\{accountId\}/Players/\{playerId\}' has methods for the following verbs: delete, put */
  (
    path: "/api/accounts/{accountId}/Players/{playerId}",
    accountId: string,
    playerId: string
  ): DeletePlayer;
}

export type GreenbeltSDKClient = Client & {
  path: Routes;
};
