// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Files Connector Reference Request */
export interface FileConnectorReferenceRequest {
  /** ConnectorId */
  connectorId: string;
  /** Location URI */
  locationUri: string;
}

/** Build Reference Request */
export interface BuildReferenceRequest {
  /** BuildId */
  buildId: string;
  /** aumId */
  aumId: string;
}

/** Folder Connector Reference Request */
export interface FolderConnectorReferenceRequest {
  /** ConnectorId */
  connectorId: string;
  /** Location URI */
  locationUri?: string;
}

/** Loose File Connector Reference Request */
export interface LooseFileConnectorReferenceRequest {
  /** ConnectorId */
  connectorId: string;
  /** Location URI */
  locationUri: string;
  /** Destination URI */
  destinationUri: string;
}
