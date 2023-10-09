// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** An account. */
export interface AccountResponseOutput {
  /** Access list. */
  accessList: string[];
  /** Created by. */
  createdBy: string;
  /** Created date. */
  createdDate: string;
  /** ID. */
  id: string;
  /** The pool name. */
  readonly name: string;
  /** Tenant ID. */
  tenantId: string;
  /** Updated by. */
  updatedBy: string;
  /** Updated date. */
  updatedDate: string;
}

/** Connector Response */
export interface ConnectorResponseOutput {
  /** id */
  id: string;
  /** Created By */
  createdBy: string;
  /** Created Date */
  createdDate: string;
  /** Updated by */
  updatedBy: string;
  /** Updated Date */
  updatedDate: string;
  /** Name */
  name: string;
  /**
   * Connector Type
   *
   * Possible values: None, SMB, AzureStorageContainer
   */
  connectorType: string;
  /** Target URI */
  targetUri: string;
  /** Uses */
  uses: string[];
}

/** Build information. */
export interface BuildResponseOutput {
  aumIds: string[];
  buildConnector: ConnectorReferenceResponseOutput;
  /** The user that created the build. */
  createdBy: string;
  /** Created date. */
  createdDate: string;
  /** The build ID. */
  readonly id: string;
  /** The name of the build. */
  name: string;
  /** Updated by. */
  updatedBy: string;
  /** Updated date. */
  updatedDate: string;
}

/** Connector Reference Response */
export interface ConnectorReferenceResponseOutput {
  /** Connector ID */
  connectorId: string;
  /** Name */
  name: string;
  /**
   * Connector Type
   *
   * Possible values: None, SMB, AzureStorageContainer
   */
  connectorType: string;
  /** Location URI */
  locationUri: string;
}

/** A Device. */
export interface DeviceResponseOutput {
  /** Created by. */
  createdBy?: string;
  /** Created date. */
  createdDate: string;
  /** The device type. */
  deviceType?: string;
  /** The host name. */
  hostname?: string;
  /** The device ID. */
  readonly id: string;
  /** The IP address. */
  ipAddress?: string;
  isCloudDevice: boolean;
  /** The device name. */
  name?: string;
  /** The OS version. */
  osVersion?: string;
  /** The pool ID. */
  poolId?: string;
  sessionId?: string;
  /**
   * Status code.
   *
   * Possible values: Offline, Idle, Active
   */
  status: string;
  /** Updated by. */
  updatedBy?: string;
  /** Updated date. */
  updatedDate: string;
  /** The up time. */
  uptime: number;
}

/** A Session. */
export interface SessionResponseOutput {
  /** Account ID. */
  accountId?: string;
  /** Allocated device IDs. */
  allocatedDeviceIds?: string[];
  artifactsConnector: ConnectorReferenceResponseOutput;
  build: BuildReferenceResponseOutput;
  /** Command line args. */
  cmdLineArgs?: string;
  /** Created by. */
  createdBy?: string;
  /** Created date. */
  createdDate: string;
  /**
   * Current stage.
   *
   * Possible values: Pending, WaitingForResources, Configuring, Deploying, Active, Terminating, Terminated
   */
  currentStage: string;
  /** The sesssion ID. */
  readonly id: string;
  /** Max runtime minutes. */
  maxRuntimeMinutes: number;
  name?: string;
  playerAllowlist?: string[];
  /** Pool ID. */
  poolId?: string;
  requestedDeviceCount: number;
  /** Sandbox ID. */
  sandboxId?: string;
  /** Session logs. */
  sessionLogs?: Array<SessionLogOutput>;
  /**
   * Session type.
   *
   * Possible values: Automated, Interactive
   */
  sessionType: string;
  startupFiles?: Array<LooseFileConnectorReferenceResponseOutput>;
  streamingSessionLink?: string;
  terminationRequestDate?: string;
  /** Updated by. */
  updatedBy?: string;
  /** Updated date. */
  updatedDate: string;
}

/** Build Reference Response */
export interface BuildReferenceResponseOutput {
  /** BuildId */
  buildId: string;
  /** Name */
  name: string;
  /** aumId */
  aumId: string;
  /** Location URI */
  locationUri: string;
}

/** Session log info. */
export interface SessionLogOutput {
  /** Console ID. */
  consoleId: string;
  /** Message. */
  message?: string;
  /** Timestamp. */
  timeStamp: string;
}

/** Loose File Connector Reference Response */
export interface LooseFileConnectorReferenceResponseOutput {
  /** Connector ID */
  connectorId: string;
  /**
   * Connector Type
   *
   * Possible values: None, SMB, AzureStorageContainer
   */
  connectorType: string;
  /** Location URI */
  locationUri: string;
  /** Device Location URI */
  deviceLocationUri: string;
}

/** Session Artifact */
export interface SessionArtifactOutput {
  /** Name */
  name: string;
  /** URI */
  uri: string;
  /** Last Modified Date */
  lastModifiedDate: string;
  /** Size in Bytes */
  sizeInBytes: number;
}

/** A Pool. */
export interface PoolResponseOutput {
  allowCloudDevices: boolean;
  /** Created by. */
  createdBy: string;
  /** Created date. */
  createdDate: string;
  /** The ID of the pool. */
  readonly id: string;
  /** The pool name. */
  readonly name: string;
  /** Updated by. */
  updatedBy: string;
  /** Updated date. */
  updatedDate: string;
}

/** Player info. */
export interface PlayerResponseOutput {
  /** Email address. */
  emailAddress?: string;
  /** Gamertag. */
  gamertag?: string;
  /** Console ID. */
  id: string;
}
