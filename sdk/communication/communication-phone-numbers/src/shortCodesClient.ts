// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/// <reference lib="esnext.asynciterable" />

import {
  parseClientArguments,
  isKeyCredential,
  createCommunicationAuthPolicy
} from "@azure/communication-common";
import { isTokenCredential, KeyCredential, TokenCredential } from "@azure/core-auth";
import {
  PipelineOptions,
  InternalPipelineOptions,
  createPipelineFromOptions,
  RestResponse,
  OperationOptions
} from "@azure/core-http";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { logger, createSpan, SDK_VERSION } from "./utils";
import { PhoneNumbersClient as PhoneNumbersGeneratedClient } from "./generated/src";
import { ShortCodes as ShortCodesGeneratedClient } from "./generated/src/operations";
import {
  ShortCode,
  ShortCodesUpsertUSProgramBriefOptionalParams,
  USProgramBrief
} from "./generated/src/models";
import {
  ListShortCodesOptions,
} from "./models";
import { ShortCodesCreateUSProgramBriefParams } from ".";

/**
 * Client options used to configure the ShortCodesClient API requests.
 */
export interface ShortCodesClientOptions extends PipelineOptions { }

const isShortCodesClientOptions = (options: any): options is ShortCodesClientOptions =>
  options && !isKeyCredential(options) && !isTokenCredential(options);

/**
 * Client class for interacting with Azure Communication Services Short Code and Program Brief Administration.
 */
export class ShortCodesClient {
  /**
   * A reference to the auto-generated ShortCodes HTTP client.
   */
  private readonly client: ShortCodesGeneratedClient;

  /**
   * Initializes a new instance of the ShortCodesClient class using a connection string.
   *
   * @param connectionString - Connection string to connect to an Azure Communication Service resource. (eg: endpoint=https://contoso.eastus.communications.azure.net/;accesskey=secret)
   * @param options - Optional. Options to configure the HTTP pipeline.
   */
  public constructor(connectionString: string, options?: ShortCodesClientOptions);

  /**
   * Initializes a new instance of the ShortCodesClient class using an Azure KeyCredential.
   *
   * @param url - The endpoint of the service (eg: https://contoso.eastus.communications.azure.net)
   * @param credential - An object that is used to authenticate requests to the service. Use the Azure KeyCredential or `@azure/identity` to create a credential.
   * @param options - Optional. Options to configure the HTTP pipeline.
   */
  public constructor(url: string, credential: KeyCredential, options?: ShortCodesClientOptions);

  /**
   * Initializes a new instance of the ShortCodesClient class using a TokenCredential.
   * @param url - The endpoint of the service (ex: https://contoso.eastus.communications.azure.net).
   * @param credential - TokenCredential that is used to authenticate requests to the service.
   * @param options - Optional. Options to configure the HTTP pipeline.
   */
  public constructor(url: string, credential: TokenCredential, options?: ShortCodesClientOptions);

  public constructor(
    connectionStringOrUrl: string,
    credentialOrOptions?: KeyCredential | TokenCredential | ShortCodesClientOptions,
    maybeOptions: ShortCodesClientOptions = {}
  ) {
    const { url, credential } = parseClientArguments(connectionStringOrUrl, credentialOrOptions);
    const options = isShortCodesClientOptions(credentialOrOptions)
      ? credentialOrOptions
      : maybeOptions;
    const libInfo = `azsdk-js-communication-phone-numbers/${SDK_VERSION}`;

    if (!options.userAgentOptions) {
      options.userAgentOptions = {};
    }

    if (options.userAgentOptions.userAgentPrefix) {
      options.userAgentOptions.userAgentPrefix = `${options.userAgentOptions.userAgentPrefix} ${libInfo}`;
    } else {
      options.userAgentOptions.userAgentPrefix = libInfo;
    }

    const internalPipelineOptions: InternalPipelineOptions = {
      ...options,
      ...{
        loggingOptions: {
          logger: logger.info
        }
      }
    };

    const authPolicy = createCommunicationAuthPolicy(credential);
    const pipeline = createPipelineFromOptions(internalPipelineOptions, authPolicy);
    this.client = new PhoneNumbersGeneratedClient(url, pipeline).shortCodes;
  }

  /**
   * Iterates the purchased Short codes.
   *
   * Example usage:
   * ```ts
   * let client = new ShortCodesClient(credentials);
   * for await (const shortcode of client.listShortCodes()) {
   *   console.log("phone number: ", shortcodes.number);
   * }
   * ```
   * List all purchased Short Codes.
   * @param options 
   * @returns 
   */
  public listShortCodes(
    options: ListShortCodesOptions = {}
  ): PagedAsyncIterableIterator<ShortCode> {
    const { span, updatedOptions } = createSpan(
      "ShortCodesClient-listShortCodes",
      options
    );
    const iter = this.client.listShortCodes(updatedOptions);
    span.end();
    return iter;
  }

  /**
   * Creates a Program Brief.
   *
   * Example usage:
   * ```ts
   * let client = new ShortCodesClient(credentials);
   * const programbrief = client.createUSProgramBrief();
   * console.log(programbrief);
   * ```
   * @param programBriefId 
   * @param options 
   * @returns 
   */
   public async createUSProgramBrief(
    programBriefId: string,
    options: ShortCodesCreateUSProgramBriefParams
  ): Promise<RestResponse> {
    const { span, updatedOptions } = createSpan(
      "ShortCodesClient-createUSProgramBrief",
      options
    );
    const promise = await this.client.upsertUSProgramBrief(programBriefId, updatedOptions);
    span.end();
    return promise;
  }

  /**
   * Creates or updates a Program Brief.
   *
   * Example usage:
   * ```ts
   * let client = new PhoneNumbersClient(credentials);
   * const programbrief = client.upsertUSProgramBrief();
   * console.log(programbrief);
   * ```
   * @param programBriefId 
   * @param options 
   * @returns 
   */
  public async upsertUSProgramBrief(
    programBriefId: string,
    options: ShortCodesUpsertUSProgramBriefOptionalParams = {}
  ): Promise<RestResponse> {
    const { span, updatedOptions } = createSpan(
      "ShortCodesClient-upsertUSProgramBrief",
      options
    );
    const promise = await this.client.upsertUSProgramBrief(programBriefId, updatedOptions);
    span.end();
    return promise;
  }

  /**
   * Deletes a Program Brief.
   *
   * Example usage:
   * ```ts
   * let client = new ShortCodesClient(credentials);
   * const response of client.deleteUSProgramBrief();
   * console.log(response);
   * ```
   * 
   * @param programBriefId 
   * @param options 
   * @returns 
   */
  public async deleteUSProgramBrief(
    programBriefId: string,
    options?: OperationOptions
  ): Promise<RestResponse> {
    const { span, updatedOptions } = createSpan(
      "ShortCodesClient-deleteUSProgramBrief",
      options
    );
    const promise = await this.client.deleteUSProgramBrief(programBriefId, updatedOptions);
    span.end();
    return promise;
  }

  /**
   * Gets a Program Brief.
   *
   * Example usage:
   * ```ts
   * let client = new ShortCodesClient(credentials);
   * const programbrief of client.getUSProgramBrief();
   * console.log("phone number: ", shortcodes.number);
   * ```
   * @param programBriefId 
   * @param options 
   * @returns 
   */
  public async getUSProgramBrief(
    programBriefId: string,
    options?: OperationOptions
  ): Promise<USProgramBrief> {
    const { span, updatedOptions } = createSpan(
      "ShortCodesClient-getUSProgramBrief",
      options
    );
    const promise = await this.client.getUSProgramBrief(programBriefId, updatedOptions);
    span.end();
    return promise;
  }

  /**
   * Lists all owned Program Briefs.
   *
   * Example usage:
   * ```ts
   * let client = new PhoneNumbersClient(credentials);
   * for await (const programbrief of client.listUSProgramBriefs()) {
   *   console.log("phone number: ", shortcodes.number);
   * }
   * ```
   * @param options 
   * @returns 
   */
   public listUSProgramBriefs(): PagedAsyncIterableIterator<USProgramBrief> {
    const { span, updatedOptions } = createSpan(
      "ShortCodesClient-listUSProgramBriefs",
      undefined
    );
    const iter = this.client.listUSProgramBriefs(updatedOptions)
    span.end();
    return iter;
  }

  /**
   * Submits a Program Brief to be reviewed for a Short Code approval.
   *
   * Example usage:
   * ```ts
   * let client = new PhoneNumbersClient(credentials);
   * const result = client.submitUSProgramBrief());
   * console.log(result);
   * ```
   * @param programBriefId
   * @param options 
   * @returns 
   */
  public async submitUSProgramBrief(
    programBriefId: string,
    options?: OperationOptions
  ): Promise<RestResponse> {
    const { span, updatedOptions } = createSpan(
      "ShortCodesClient-submitUSProgramBrief",
      options
    );
    const promise = await this.client.submitUSProgramBrief(programBriefId, updatedOptions);
    span.end();
    return promise;
  }
}
