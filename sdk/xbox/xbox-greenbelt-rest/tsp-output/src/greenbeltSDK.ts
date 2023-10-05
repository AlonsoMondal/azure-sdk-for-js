// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { TokenCredential } from "@azure/core-auth";
import { GreenbeltSDKClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `GreenbeltSDKClient`
 * @param endpoint - Endpoint URL
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  credentials: TokenCredential,
  options: ClientOptions = {}
): GreenbeltSDKClient {
  const baseUrl = options.baseUrl ?? `https://${endpoint}`;
  options.apiVersion = options.apiVersion ?? "v1";
  options = {
    ...options,
    credentials: {
      scopes: options.credentials?.scopes ?? [
        "https://greenbeltdev.com/.default",
      ],
    },
  };

  const userAgentInfo = `azsdk-js-xbox-greenbelt-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
    loggingOptions: {
      logger: options.loggingOptions?.logger ?? logger.info,
    },
  };

  const client = getClient(baseUrl, credentials, options) as GreenbeltSDKClient;

  return client;
}
