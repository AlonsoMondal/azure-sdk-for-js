// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  AccountResponseOutput,
  ConnectorResponseOutput,
  BuildResponseOutput,
  DeviceResponseOutput,
  SessionResponseOutput,
  PoolResponseOutput,
  PlayerResponseOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface GetAccounts200Response extends HttpResponse {
  status: "200";
  body: Array<AccountResponseOutput>;
}

/** The request has succeeded. */
export interface ListConnectors200Response extends HttpResponse {
  status: "200";
  body: Array<ConnectorResponseOutput>;
}

/** The request has succeeded. */
export interface CreateConnector200Response extends HttpResponse {
  status: "200";
  body: ConnectorResponseOutput;
}

/** The request has succeeded. */
export interface QueryConnectors200Response extends HttpResponse {
  status: "200";
  body: Array<ConnectorResponseOutput>;
}

/** The request has succeeded. */
export interface GetConnectors200Response extends HttpResponse {
  status: "200";
  body: ConnectorResponseOutput;
}

/** The request has succeeded. */
export interface DeleteConnector200Response extends HttpResponse {
  status: "200";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteConnector204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface UpdateConnector200Response extends HttpResponse {
  status: "200";
  body: ConnectorResponseOutput;
}

/** The request has succeeded. */
export interface ListBuild200Response extends HttpResponse {
  status: "200";
  body: Array<BuildResponseOutput>;
}

/** The request has succeeded. */
export interface CreateBuild200Response extends HttpResponse {
  status: "200";
  body: BuildResponseOutput;
}

/** The request has succeeded. */
export interface GetBuild200Response extends HttpResponse {
  status: "200";
  body: BuildResponseOutput;
}

/** The request has succeeded. */
export interface DeleteBuild200Response extends HttpResponse {
  status: "200";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteBuild204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface UpdateBuild200Response extends HttpResponse {
  status: "200";
  body: BuildResponseOutput;
}

/** The request has succeeded. */
export interface ListDevices200Response extends HttpResponse {
  status: "200";
  body: Array<DeviceResponseOutput>;
}

/** The request has succeeded. */
export interface CreateDevice200Response extends HttpResponse {
  status: "200";
  body: DeviceResponseOutput;
}

/** The request has succeeded. */
export interface GetDevice200Response extends HttpResponse {
  status: "200";
  body: DeviceResponseOutput;
}

/** The request has succeeded. */
export interface UpdateDevice200Response extends HttpResponse {
  status: "200";
  body: DeviceResponseOutput;
}

/** The request has succeeded. */
export interface DeleteDevice200Response extends HttpResponse {
  status: "200";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteDevice204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface ListSessions200Response extends HttpResponse {
  status: "200";
  body: Array<SessionResponseOutput>;
}

/** The request has succeeded. */
export interface CreateSession200Response extends HttpResponse {
  status: "200";
  body: SessionResponseOutput;
}

/** The request has succeeded. */
export interface GetSession200Response extends HttpResponse {
  status: "200";
  body: SessionResponseOutput;
}

/** The request has succeeded. */
export interface DeleteSession200Response extends HttpResponse {
  status: "200";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteSession204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface PutSessionTerminate200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface GetSessionArtifacts200Response extends HttpResponse {
  status: "200";
  body: Record<string, Array<SessionArtifactOutput>>;
}

/** The request has succeeded. */
export interface ListPools200Response extends HttpResponse {
  status: "200";
  body: Array<PoolResponseOutput>;
}

/** The request has succeeded. */
export interface CreatePool200Response extends HttpResponse {
  status: "200";
  body: PoolResponseOutput;
}

/** The request has succeeded. */
export interface GetPool200Response extends HttpResponse {
  status: "200";
  body: PoolResponseOutput;
}

/** The request has succeeded. */
export interface UpdatePool200Response extends HttpResponse {
  status: "200";
  body: PoolResponseOutput;
}

/** The request has succeeded. */
export interface DeletePool200Response extends HttpResponse {
  status: "200";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeletePool204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface GetAccount200Response extends HttpResponse {
  status: "200";
  body: AccountResponseOutput;
}

/** The request has succeeded. */
export interface UpdateAccount200Response extends HttpResponse {
  status: "200";
  body: AccountResponseOutput;
}

/** The request has succeeded. */
export interface GetPlayers200Response extends HttpResponse {
  status: "200";
  body: Array<PlayerResponseOutput>;
}

/** The request has succeeded. */
export interface CreatePlayers200Response extends HttpResponse {
  status: "200";
  body: PlayerResponseOutput;
}

/** The request has succeeded. */
export interface GetPlayer200Response extends HttpResponse {
  status: "200";
  body: PlayerResponseOutput;
}

/** The request has succeeded. */
export interface DeletePlayer200Response extends HttpResponse {
  status: "200";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeletePlayer204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface UpdatePlayer200Response extends HttpResponse {
  status: "200";
  body: PlayerResponseOutput;
}
