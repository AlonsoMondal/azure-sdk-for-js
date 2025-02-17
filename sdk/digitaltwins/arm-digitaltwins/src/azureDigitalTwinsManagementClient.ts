/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import {
  DigitalTwinsImpl,
  DigitalTwinsEndpointImpl,
  OperationsImpl,
  PrivateLinkResourcesImpl,
  PrivateEndpointConnectionsImpl
} from "./operations";
import {
  DigitalTwins,
  DigitalTwinsEndpoint,
  Operations,
  PrivateLinkResources,
  PrivateEndpointConnections
} from "./operationsInterfaces";
import { AzureDigitalTwinsManagementClientOptionalParams } from "./models";

export class AzureDigitalTwinsManagementClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the AzureDigitalTwinsManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The subscription identifier.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: AzureDigitalTwinsManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: AzureDigitalTwinsManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-digitaltwins/3.0.0`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2020-12-01";
    this.digitalTwins = new DigitalTwinsImpl(this);
    this.digitalTwinsEndpoint = new DigitalTwinsEndpointImpl(this);
    this.operations = new OperationsImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
  }

  digitalTwins: DigitalTwins;
  digitalTwinsEndpoint: DigitalTwinsEndpoint;
  operations: Operations;
  privateLinkResources: PrivateLinkResources;
  privateEndpointConnections: PrivateEndpointConnections;
}
