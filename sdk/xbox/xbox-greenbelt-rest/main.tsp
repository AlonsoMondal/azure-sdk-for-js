import "@typespec/rest";
import "@typespec/openapi3";
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;

@service({
  title: "Xbox.Greenbelt",
  version: "v1",
})
@server(
  "https://{endpoint}",
  "Xbox.Greenbelt Endpoint",
  {
    @doc("Endpoint URL")
    endpoint: string,
  }
)
@doc("OAuth2 authentication.")
@useAuth(OAuth2Auth<[MyFlow]>)
namespace Greenbelt;

model MyFlow {
  type: OAuth2FlowType.implicit;
  authorizationUrl: "https://login.microsoftonline.com/common/oauth2/authorize";
  scopes: ["https://greenbeltdev.com/.default"];
}

// Models

@doc("Session Artifact")
@resource("SessionArtifact")
model SessionArtifact {
  @key("name")
  @doc("Name")
  name: string;

  @doc("URI")
  uri: string;

  @doc("Last Modified Date")
  lastModifiedDate: string;

  @doc("Size in Bytes")
  sizeInBytes: int64;
}

@doc("Connector Response")
@resource("ConnectorResponse")
model ConnectorResponse {
  @key("id")
  @doc("id")
  id: string;

  @doc("Created By")
  createdBy: string;

  @doc("Created Date")
  createdDate: string;

  @doc("Updated by")
  updatedBy: string;

  @doc("Updated Date")
  updatedDate: string;

  @doc("Name")
  name: string;

  @doc("Connector Type")
  connectorType: ConnectorType;

  @doc("Target URI")
  targetUri: string;

  @doc("Uses")
  uses: ConnectorUse[];
}

@doc("Connector Reference Response")
@resource("ConnectorReferenceResponse")
model ConnectorReferenceResponse {
  @doc("Connector ID")
  connectorId: string;

  @key("name")
  @doc("Name")
  name: string;

  @doc("Connector Type")
  connectorType: ConnectorType;

  @doc("Location URI")
  locationUri: string;
}

@doc("Build Reference Response")
@resource("BuildReferenceResponse")
model BuildReferenceResponse {
  @key("buildId")
  @doc("BuildId")
  buildId: string;

  @doc("Name")
  name: string;

  @doc("aumId")
  aumId: string;

  @doc("Location URI")
  locationUri: string;
}

@doc("Build Reference Request")
@resource("BuildReferenceRequest")
model BuildReferenceRequest {
  @key("buildId")
  @doc("BuildId")
  buildId: string;

  @doc("aumId")
  aumId: string;
}

@doc("Files Connector Reference Request")
@resource("FileConnectorReferenceRequest")
model FileConnectorReferenceRequest {
  @key("connectorId")
  @doc("ConnectorId")
  connectorId: string;

  @doc("Location URI")
  locationUri: string;
}

@doc("Folder Connector Reference Request")
@resource("FolderConnectorReferenceRequest")
model FolderConnectorReferenceRequest {
  @key("connectorId")
  @doc("ConnectorId")
  connectorId: string;

  @doc("Location URI")
  locationUri?: string;
}

@doc("Loose File Connector Reference Request")
@resource("LooseFileConnectorReferenceRequest")
model LooseFileConnectorReferenceRequest {
  @key("connectorId")
  @doc("ConnectorId")
  connectorId: string;

  @doc("Location URI")
  locationUri: string;

  @doc("Destination URI")
  destinationUri: string;
}

@doc("Loose File Connector Reference Response")
@resource("LooseFileConnectorReferenceResponse")
model LooseFileConnectorReferenceResponse {
  @doc("Connector ID")
  connectorId: string;

  @doc("Connector Type")
  connectorType: ConnectorType;

  @key("locationUri")
  @doc("Location URI")
  locationUri: string;

  @doc("Device Location URI")
  deviceLocationUri: string;
}

@doc("Build information.")
@resource("BuildResponse")
model BuildResponse {
  aumIds: string[];
  buildConnector: ConnectorReferenceResponse;

  @doc("The user that created the build.")
  createdBy: string;

  @doc("Created date.")
  createdDate: string;

  @key("id")
  @doc("The build ID.")
  @visibility("read")
  id: string;

  @doc("The name of the build.")
  name: string;

  @doc("Updated by.")
  updatedBy: string;

  @doc("Updated date.")
  updatedDate: string;
}

@doc("Provides enumerated constants that identify the type of storage connector.\r\nDeveloper Guidance: if the connector requires credentials or provides for\r\na richer experience (e.g., reading the list of files in a container so\r\nthat a list of possible choices for a file) then define a unique value in\r\nthis enumeration; otherwise use None.")
enum ConnectorType {
  @doc("None")
  None,

  @doc("SMB")
  SMB,

  @doc("AzureStorageContainer")
  AzureStorageContainer,
}

@doc("Defines enumerated constants that specify the use for a\r\nstorage connector. A connector can support multiple\r\nuses at the same time.")
enum ConnectorUse {
  @doc("Download")
  Download,

  @doc("Upload")
  Upload,
}

@route("/api/Accounts")
@get
op getAccounts(@header `X-MS-Useragent`: "GreenbeltSDK"): AccountResponse[];

@route("/api/accounts/{accountId}/Connectors")
@get
op listConnectors(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
): ConnectorResponse[];

@route("/api/accounts/{accountId}/Connectors")
@post
op createConnector(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  name: string,
  connectorType: ConnectorType,
  targetUri: string,
  username?: string,
  password?: string,
  uses: ConnectorUse[],
): ConnectorResponse;

@route("/api/accounts/{accountId}/Connectors/query")
@post
op queryConnectors(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  connectorTypes?: ConnectorType[],
  connectorUses?: ConnectorUse[],
): ConnectorResponse[];

@route("/api/accounts/{accountId}/Connectors/{connectorId}")
@get
op getConnectors(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  @path connectorId: string,
): ConnectorResponse;

@route("/api/accounts/{accountId}/Connectors/{connectorId}")
@delete
op deleteConnector(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  @path connectorId: string,
): {
  @doc("Delete build successfully.")
  @statusCode
  statusCode: 200 | 204;
};

@route("/api/accounts/{accountId}/Connectors/{connectorId}")
@put
op updateConnector(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  @path connectorId: string,
  name: string,
  targetUri: string,
  username?: string,
  password?: string,
  uses: ConnectorUse[],
): ConnectorResponse;

@route("/api/accounts/{accountId}/Builds")
@get
op listBuild(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
): BuildResponse[];

@route("/api/accounts/{accountId}/Builds")
@post
op createBuild(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  name: string,
  aumIds?: string[],
  buildConnector: FileConnectorReferenceRequest,
): BuildResponse;

@route("/api/accounts/{accountId}/Builds/{buildId}")
@get
op getBuild(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  @path buildId: string,
): BuildResponse;

@route("/api/accounts/{accountId}/Builds/{buildId}")
@delete
op deleteBuild(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  @path buildId: string,
): {
  @doc("Delete build successfully.")
  @statusCode
  statusCode: 200 | 204;
};

@route("/api/accounts/{accountId}/Builds/{buildId}")
@put
op updateBuild(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  @path buildId: string,
  name: string,
  aumIds?: string[],
  buildConnector: FileConnectorReferenceRequest,
): BuildResponse;

@doc("Device status enum.")
enum DeviceStatus {
  @doc("Offline.")
  Offline,

  @doc("Idle.")
  Idle,

  @doc("Active.")
  Active,
}

@doc("Cloud type enum.")
enum Cloud {
  @doc("Public.")
  Public,

  @doc("Private.")
  Private,

  @doc("Hybrid.")
  Hybrid,
}

@doc("Session type.")
enum SessionType {
  @doc("Automated.")
  Automated,

  @doc("Interactive.")
  Interactive,
}

@doc("Session stage.")
enum SessionStage {
  @doc("Pending.")
  Pending,

  @doc("Waiting for resources.")
  WaitingForResources,

  @doc("Configuring.")
  Configuring,

  @doc("Deploying.")
  Deploying,

  @doc("Active.")
  Active,

  @doc("Terminating.")
  Terminating,

  @doc("Terminated.")
  Terminated,
}

@doc("A Device.")
@resource("DeviceResponse")
model DeviceResponse {
  @doc("Created by.")
  createdBy?: string;

  @doc("Created date.")
  createdDate: string;

  @doc("The device type.")
  deviceType?: string;

  @doc("The host name.")
  hostname?: string;

  @key("id")
  @doc("The device ID.")
  @visibility("read")
  id: string;

  @doc("The IP address.")
  ipAddress?: string;

  isCloudDevice: boolean;

  @doc("The device name.")
  name?: string;

  @doc("The OS version.")
  osVersion?: string;

  @doc("The pool ID.")
  poolId?: string;

  sessionId?: string;

  @doc("Status code.")
  status: DeviceStatus;

  @doc("Updated by.")
  updatedBy?: string;

  @doc("Updated date.")
  updatedDate: string;

  @doc("The up time.")
  uptime: int64;
}

@route("/api/accounts/{accountId}/pools/{poolId}/Devices")
@get
op listDevices(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  @path poolId: string,
): DeviceResponse[];

@route("/api/accounts/{accountId}/pools/{poolId}/Devices")
@post
op createDevice(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  @path poolId: string,
  consoleId: string,
  name: string,
): DeviceResponse;

@route("/api/accounts/{accountId}/pools/{poolId}/Devices/{deviceId}")
@get
op getDevice(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  @path poolId: string,
  @path deviceId: string,
): DeviceResponse;

@route("/api/accounts/{accountId}/pools/{poolId}/Devices/{deviceId}")
@put
op updateDevice(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  @path poolId: string,
  @path deviceId: string,
  name: string,
): DeviceResponse;

@route("/api/accounts/{accountId}/pools/{poolId}/Devices/{deviceId}")
@delete
op deleteDevice(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  @path poolId: string,
  @path deviceId: string,
): {
  @doc("Delete device successfully.")
  @statusCode
  statusCode: 200 | 204;
};

@doc("A Session.")
@resource("SessionResponse")
model SessionResponse {
  @doc("Account ID.")
  accountId?: string;

  @doc("Allocated device IDs.")
  allocatedDeviceIds?: string[];

  artifactsConnector: ConnectorReferenceResponse;
  build: BuildReferenceResponse;

  @doc("Command line args.")
  cmdLineArgs?: string;

  @doc("Created by.")
  createdBy?: string;

  @doc("Created date.")
  createdDate: string;

  @doc("Current stage.")
  currentStage: SessionStage;

  @key("id")
  @doc("The sesssion ID.")
  @visibility("read")
  id: string;

  @doc("Max runtime minutes.")
  maxRuntimeMinutes: int64;

  name?: string;
  playerAllowlist?: string[];

  @doc("Pool ID.")
  poolId?: string;

  requestedDeviceCount: int64;

  @doc("Sandbox ID.")
  sandboxId?: string;

  @doc("Session logs.")
  sessionLogs?: SessionLog[];

  @doc("Session type.")
  sessionType: SessionType;

  startupFiles?: LooseFileConnectorReferenceResponse[];
  streamingSessionLink?: string;
  terminationRequestDate?: string;

  @doc("Updated by.")
  updatedBy?: string;

  @doc("Updated date.")
  updatedDate: string;
}

@route("/api/accounts/{accountId}/Sessions")
@get
op listSessions(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
): SessionResponse[];

@route("/api/accounts/{accountId}/Sessions")
@post
op createSession(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  cmdLineArgs?: string,
  maxRuntimeMinutes: int64,
  name: string,
  playerAllowlist?: string[],
  poolId: string,
  requestedDeviceCount: int64,
  sandboxId?: string,
  sessionType: SessionType,
  build: BuildReferenceRequest,
  artifactsConnector: FolderConnectorReferenceRequest,
  startupFiles?: LooseFileConnectorReferenceRequest[],
): SessionResponse;

@route("/api/accounts/{accountId}/Sessions/{sessionId}")
@get
op getSession(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  @path sessionId: string,
  @query includeSessionLogs?: boolean,
): SessionResponse;

@route("/api/accounts/{accountId}/Sessions/{sessionId}")
@delete
op deleteSession(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  @path sessionId: string,
): {
  @doc("Delete session successfully.")
  @statusCode
  statusCode: 200 | 204;
};

@route("/api/accounts/{accountId}/Sessions/{sessionId}/terminate")
@put
op putSessionTerminate(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  @path sessionId: string,
): string;

@route("/api/accounts/{accountId}/Sessions/{sessionId}/artifacts")
@get
op getSessionArtifacts(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  @path sessionId: string,
): Record<SessionArtifact[]>;

@doc("A Pool.")
@resource("PoolResponse")
model PoolResponse {
  allowCloudDevices: boolean;

  @doc("Created by.")
  createdBy: string;

  @doc("Created date.")
  createdDate: string;

  @doc("The ID of the pool.")
  @visibility("read")
  id: string;

  @key("name")
  @doc("The pool name.")
  @visibility("read")
  name: string;

  @doc("Updated by.")
  updatedBy: string;

  @doc("Updated date.")
  updatedDate: string;
}

@route("/api/accounts/{accountId}/Pools")
@get
op listPools(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
): PoolResponse[];

@route("/api/accounts/{accountId}/Pools")
@post
op createPool(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  name: string,
): PoolResponse;

@route("/api/accounts/{accountId}/Pools/{poolId}")
@get
op getPool(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  @path poolId: string,
): PoolResponse;

@route("/api/accounts/{accountId}/Pools/{poolId}")
@put
op updatePool(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  @path poolId: string,
  name: string,
): PoolResponse;

@route("/api/accounts/{accountId}/Pools/{poolId}")
@delete
op deletePool(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  @path poolId: string,
): {
  @doc("Delete pool successfully.")
  @statusCode
  statusCode: 200 | 204;
};

@doc("An account.")
@resource("AccountResponse")
model AccountResponse {
  @doc("Access list.")
  accessList: string[];

  @doc("Created by.")
  createdBy: string;

  @doc("Created date.")
  createdDate: string;

  @doc("ID.")
  id: string;

  @key("name")
  @doc("The pool name.")
  @visibility("read")
  name: string;

  @doc("Tenant ID.")
  tenantId: string;

  @doc("Updated by.")
  updatedBy: string;

  @doc("Updated date.")
  updatedDate: string;
}

@doc("Session log info.")
@resource("SessionLog")
model SessionLog {
  @key
  @doc("Console ID.")
  consoleId: string;

  @doc("Message.")
  message?: string;

  @doc("Timestamp.")
  timeStamp: string;
}

@route("/api/Accounts/{accountId}")
@get
op getAccount(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
): AccountResponse;

@route("/api/Accounts/{accountId}")
@put
op updateAccount(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  accessList: string[],
  name: string,
): AccountResponse;

@doc("Player info.")
@resource("PlayerResponse")
model PlayerResponse {
  @doc("Email address.")
  emailAddress?: string;

  @doc("Gamertag.")
  gamertag?: string;

  @key
  @doc("Console ID.")
  id: string;
}

@route("/api/accounts/{accountId}/Players")
@get
op getPlayers(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
): PlayerResponse[];

@route("/api/accounts/{accountId}/Players")
@post
op createPlayers(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  emailAddress: string,
  gamertag: string,
  password: string,
): PlayerResponse;

@route("/api/accounts/{accountId}/Players/{id}")
@get
op getPlayer(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  @path id: string,
): PlayerResponse;

@route("/api/accounts/{accountId}/Players/{playerId}")
@delete
op deletePlayer(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  @path playerId: string,
): {
  @doc("Delete player successfully.")
  @statusCode
  statusCode: 200 | 204;
};

@route("/api/accounts/{accountId}/Players/{playerId}")
@put
op updatePlayer(
  @header `X-MS-Useragent`: "GreenbeltSDK",
  @path accountId: string,
  @path playerId: string,
  emailAddress: string,
  gamertag: string,
  password: string,
): PlayerResponse;
