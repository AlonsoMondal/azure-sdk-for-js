// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import {
  FileConnectorReferenceRequest,
  BuildReferenceRequest,
  FolderConnectorReferenceRequest,
  LooseFileConnectorReferenceRequest,
} from "./models";

export interface GetAccountsHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface GetAccountsHeaderParam {
  headers: RawHttpHeadersInput & GetAccountsHeaders;
}

export type GetAccountsParameters = GetAccountsHeaderParam & RequestParameters;

export interface ListConnectorsHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface ListConnectorsHeaderParam {
  headers: RawHttpHeadersInput & ListConnectorsHeaders;
}

export type ListConnectorsParameters = ListConnectorsHeaderParam &
  RequestParameters;

export interface CreateConnectorHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface CreateConnectorBodyParam {
  body?: {
    name: string;
    connectorType: string;
    targetUri: string;
    username: string;
    password: string;
    uses: string[];
  };
}

export interface CreateConnectorHeaderParam {
  headers: RawHttpHeadersInput & CreateConnectorHeaders;
}

export type CreateConnectorParameters = CreateConnectorHeaderParam &
  CreateConnectorBodyParam &
  RequestParameters;

export interface QueryConnectorsHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface QueryConnectorsBodyParam {
  body?: { connectorTypes: string[]; connectorUses: string[] };
}

export interface QueryConnectorsHeaderParam {
  headers: RawHttpHeadersInput & QueryConnectorsHeaders;
}

export type QueryConnectorsParameters = QueryConnectorsHeaderParam &
  QueryConnectorsBodyParam &
  RequestParameters;

export interface GetConnectorsHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface GetConnectorsHeaderParam {
  headers: RawHttpHeadersInput & GetConnectorsHeaders;
}

export type GetConnectorsParameters = GetConnectorsHeaderParam &
  RequestParameters;

export interface DeleteConnectorHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface DeleteConnectorHeaderParam {
  headers: RawHttpHeadersInput & DeleteConnectorHeaders;
}

export type DeleteConnectorParameters = DeleteConnectorHeaderParam &
  RequestParameters;

export interface UpdateConnectorHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface UpdateConnectorBodyParam {
  body?: {
    name: string;
    targetUri: string;
    username: string;
    password: string;
    uses: string[];
  };
}

export interface UpdateConnectorHeaderParam {
  headers: RawHttpHeadersInput & UpdateConnectorHeaders;
}

export type UpdateConnectorParameters = UpdateConnectorHeaderParam &
  UpdateConnectorBodyParam &
  RequestParameters;

export interface ListBuildHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface ListBuildHeaderParam {
  headers: RawHttpHeadersInput & ListBuildHeaders;
}

export type ListBuildParameters = ListBuildHeaderParam & RequestParameters;

export interface CreateBuildHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface CreateBuildBodyParam {
  body?: {
    name: string;
    aumIds: string[];
    buildConnector: FileConnectorReferenceRequest;
  };
}

export interface CreateBuildHeaderParam {
  headers: RawHttpHeadersInput & CreateBuildHeaders;
}

export type CreateBuildParameters = CreateBuildHeaderParam &
  CreateBuildBodyParam &
  RequestParameters;

export interface GetBuildHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface GetBuildHeaderParam {
  headers: RawHttpHeadersInput & GetBuildHeaders;
}

export type GetBuildParameters = GetBuildHeaderParam & RequestParameters;

export interface DeleteBuildHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface DeleteBuildHeaderParam {
  headers: RawHttpHeadersInput & DeleteBuildHeaders;
}

export type DeleteBuildParameters = DeleteBuildHeaderParam & RequestParameters;

export interface UpdateBuildHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface UpdateBuildBodyParam {
  body?: {
    name: string;
    aumIds: string[];
    buildConnector: FileConnectorReferenceRequest;
  };
}

export interface UpdateBuildHeaderParam {
  headers: RawHttpHeadersInput & UpdateBuildHeaders;
}

export type UpdateBuildParameters = UpdateBuildHeaderParam &
  UpdateBuildBodyParam &
  RequestParameters;

export interface ListDevicesHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface ListDevicesHeaderParam {
  headers: RawHttpHeadersInput & ListDevicesHeaders;
}

export type ListDevicesParameters = ListDevicesHeaderParam & RequestParameters;

export interface CreateDeviceHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface CreateDeviceBodyParam {
  body?: { consoleId: string; name: string };
}

export interface CreateDeviceHeaderParam {
  headers: RawHttpHeadersInput & CreateDeviceHeaders;
}

export type CreateDeviceParameters = CreateDeviceHeaderParam &
  CreateDeviceBodyParam &
  RequestParameters;

export interface GetDeviceHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface GetDeviceHeaderParam {
  headers: RawHttpHeadersInput & GetDeviceHeaders;
}

export type GetDeviceParameters = GetDeviceHeaderParam & RequestParameters;

export interface UpdateDeviceHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface UpdateDeviceBodyParam {
  body?: { name: string };
}

export interface UpdateDeviceHeaderParam {
  headers: RawHttpHeadersInput & UpdateDeviceHeaders;
}

export type UpdateDeviceParameters = UpdateDeviceHeaderParam &
  UpdateDeviceBodyParam &
  RequestParameters;

export interface DeleteDeviceHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface DeleteDeviceHeaderParam {
  headers: RawHttpHeadersInput & DeleteDeviceHeaders;
}

export type DeleteDeviceParameters = DeleteDeviceHeaderParam &
  RequestParameters;

export interface ListSessionsHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface ListSessionsHeaderParam {
  headers: RawHttpHeadersInput & ListSessionsHeaders;
}

export type ListSessionsParameters = ListSessionsHeaderParam &
  RequestParameters;

export interface CreateSessionHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface CreateSessionBodyParam {
  body?: {
    cmdLineArgs: string;
    maxRuntimeMinutes: number;
    name: string;
    playerAllowlist: string[];
    poolId: string;
    requestedDeviceCount: number;
    sandboxId: string;
    sessionType: string;
    build: BuildReferenceRequest;
    artifactsConnector: FolderConnectorReferenceRequest;
    startupFiles: Array<LooseFileConnectorReferenceRequest>;
  };
}

export interface CreateSessionHeaderParam {
  headers: RawHttpHeadersInput & CreateSessionHeaders;
}

export type CreateSessionParameters = CreateSessionHeaderParam &
  CreateSessionBodyParam &
  RequestParameters;

export interface GetSessionHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface GetSessionQueryParamProperties {
  includeSessionLogs?: boolean;
}

export interface GetSessionQueryParam {
  queryParameters?: GetSessionQueryParamProperties;
}

export interface GetSessionHeaderParam {
  headers: RawHttpHeadersInput & GetSessionHeaders;
}

export type GetSessionParameters = GetSessionQueryParam &
  GetSessionHeaderParam &
  RequestParameters;

export interface DeleteSessionHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface DeleteSessionHeaderParam {
  headers: RawHttpHeadersInput & DeleteSessionHeaders;
}

export type DeleteSessionParameters = DeleteSessionHeaderParam &
  RequestParameters;

export interface PutSessionTerminateHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface PutSessionTerminateHeaderParam {
  headers: RawHttpHeadersInput & PutSessionTerminateHeaders;
}

export type PutSessionTerminateParameters = PutSessionTerminateHeaderParam &
  RequestParameters;

export interface GetSessionArtifactsHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface GetSessionArtifactsHeaderParam {
  headers: RawHttpHeadersInput & GetSessionArtifactsHeaders;
}

export type GetSessionArtifactsParameters = GetSessionArtifactsHeaderParam &
  RequestParameters;

export interface ListPoolsHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface ListPoolsHeaderParam {
  headers: RawHttpHeadersInput & ListPoolsHeaders;
}

export type ListPoolsParameters = ListPoolsHeaderParam & RequestParameters;

export interface CreatePoolHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface CreatePoolBodyParam {
  body?: { name: string };
}

export interface CreatePoolHeaderParam {
  headers: RawHttpHeadersInput & CreatePoolHeaders;
}

export type CreatePoolParameters = CreatePoolHeaderParam &
  CreatePoolBodyParam &
  RequestParameters;

export interface GetPoolHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface GetPoolHeaderParam {
  headers: RawHttpHeadersInput & GetPoolHeaders;
}

export type GetPoolParameters = GetPoolHeaderParam & RequestParameters;

export interface UpdatePoolHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface UpdatePoolBodyParam {
  body?: { name: string };
}

export interface UpdatePoolHeaderParam {
  headers: RawHttpHeadersInput & UpdatePoolHeaders;
}

export type UpdatePoolParameters = UpdatePoolHeaderParam &
  UpdatePoolBodyParam &
  RequestParameters;

export interface DeletePoolHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface DeletePoolHeaderParam {
  headers: RawHttpHeadersInput & DeletePoolHeaders;
}

export type DeletePoolParameters = DeletePoolHeaderParam & RequestParameters;

export interface GetAccountHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface GetAccountHeaderParam {
  headers: RawHttpHeadersInput & GetAccountHeaders;
}

export type GetAccountParameters = GetAccountHeaderParam & RequestParameters;

export interface UpdateAccountHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface UpdateAccountBodyParam {
  body?: { accessList: string[]; name: string };
}

export interface UpdateAccountHeaderParam {
  headers: RawHttpHeadersInput & UpdateAccountHeaders;
}

export type UpdateAccountParameters = UpdateAccountHeaderParam &
  UpdateAccountBodyParam &
  RequestParameters;

export interface GetPlayersHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface GetPlayersHeaderParam {
  headers: RawHttpHeadersInput & GetPlayersHeaders;
}

export type GetPlayersParameters = GetPlayersHeaderParam & RequestParameters;

export interface CreatePlayersHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface CreatePlayersBodyParam {
  body?: { emailAddress: string; gamertag: string; password: string };
}

export interface CreatePlayersHeaderParam {
  headers: RawHttpHeadersInput & CreatePlayersHeaders;
}

export type CreatePlayersParameters = CreatePlayersHeaderParam &
  CreatePlayersBodyParam &
  RequestParameters;

export interface GetPlayerHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface GetPlayerHeaderParam {
  headers: RawHttpHeadersInput & GetPlayerHeaders;
}

export type GetPlayerParameters = GetPlayerHeaderParam & RequestParameters;

export interface DeletePlayerHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface DeletePlayerHeaderParam {
  headers: RawHttpHeadersInput & DeletePlayerHeaders;
}

export type DeletePlayerParameters = DeletePlayerHeaderParam &
  RequestParameters;

export interface UpdatePlayerHeaders {
  "x-ms-useragent": "GreenbeltSDK";
}

export interface UpdatePlayerBodyParam {
  body?: { emailAddress: string; gamertag: string; password: string };
}

export interface UpdatePlayerHeaderParam {
  headers: RawHttpHeadersInput & UpdatePlayerHeaders;
}

export type UpdatePlayerParameters = UpdatePlayerHeaderParam &
  UpdatePlayerBodyParam &
  RequestParameters;
