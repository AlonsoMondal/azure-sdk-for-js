/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SystemTopics } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventGridManagementClient } from "../eventGridManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  SystemTopic,
  SystemTopicsListBySubscriptionNextOptionalParams,
  SystemTopicsListBySubscriptionOptionalParams,
  SystemTopicsListByResourceGroupNextOptionalParams,
  SystemTopicsListByResourceGroupOptionalParams,
  SystemTopicsGetOptionalParams,
  SystemTopicsGetResponse,
  SystemTopicsCreateOrUpdateOptionalParams,
  SystemTopicsCreateOrUpdateResponse,
  SystemTopicsDeleteOptionalParams,
  SystemTopicUpdateParameters,
  SystemTopicsUpdateOptionalParams,
  SystemTopicsUpdateResponse,
  SystemTopicsListBySubscriptionResponse,
  SystemTopicsListByResourceGroupResponse,
  SystemTopicsListBySubscriptionNextResponse,
  SystemTopicsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SystemTopics operations. */
export class SystemTopicsImpl implements SystemTopics {
  private readonly client: EventGridManagementClient;

  /**
   * Initialize a new instance of the class SystemTopics class.
   * @param client Reference to the service client
   */
  constructor(client: EventGridManagementClient) {
    this.client = client;
  }

  /**
   * List all the system topics under an Azure subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: SystemTopicsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<SystemTopic> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: SystemTopicsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<SystemTopic[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: SystemTopicsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<SystemTopic> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List all the system topics under a resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: SystemTopicsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<SystemTopic> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: SystemTopicsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<SystemTopic[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: SystemTopicsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<SystemTopic> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get properties of a system topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param systemTopicName Name of the system topic.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    systemTopicName: string,
    options?: SystemTopicsGetOptionalParams
  ): Promise<SystemTopicsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, systemTopicName, options },
      getOperationSpec
    );
  }

  /**
   * Asynchronously creates a new system topic with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param systemTopicName Name of the system topic.
   * @param systemTopicInfo System Topic information.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    systemTopicName: string,
    systemTopicInfo: SystemTopic,
    options?: SystemTopicsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SystemTopicsCreateOrUpdateResponse>,
      SystemTopicsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SystemTopicsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, systemTopicName, systemTopicInfo, options },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Asynchronously creates a new system topic with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param systemTopicName Name of the system topic.
   * @param systemTopicInfo System Topic information.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    systemTopicName: string,
    systemTopicInfo: SystemTopic,
    options?: SystemTopicsCreateOrUpdateOptionalParams
  ): Promise<SystemTopicsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      systemTopicName,
      systemTopicInfo,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete existing system topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param systemTopicName Name of the system topic.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    systemTopicName: string,
    options?: SystemTopicsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, systemTopicName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Delete existing system topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param systemTopicName Name of the system topic.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    systemTopicName: string,
    options?: SystemTopicsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      systemTopicName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Asynchronously updates a system topic with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param systemTopicName Name of the system topic.
   * @param systemTopicUpdateParameters SystemTopic update information.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    systemTopicName: string,
    systemTopicUpdateParameters: SystemTopicUpdateParameters,
    options?: SystemTopicsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SystemTopicsUpdateResponse>,
      SystemTopicsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SystemTopicsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        systemTopicName,
        systemTopicUpdateParameters,
        options
      },
      updateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Asynchronously updates a system topic with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param systemTopicName Name of the system topic.
   * @param systemTopicUpdateParameters SystemTopic update information.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    systemTopicName: string,
    systemTopicUpdateParameters: SystemTopicUpdateParameters,
    options?: SystemTopicsUpdateOptionalParams
  ): Promise<SystemTopicsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      systemTopicName,
      systemTopicUpdateParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List all the system topics under an Azure subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: SystemTopicsListBySubscriptionOptionalParams
  ): Promise<SystemTopicsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * List all the system topics under a resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: SystemTopicsListByResourceGroupOptionalParams
  ): Promise<SystemTopicsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: SystemTopicsListBySubscriptionNextOptionalParams
  ): Promise<SystemTopicsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: SystemTopicsListByResourceGroupNextOptionalParams
  ): Promise<SystemTopicsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/systemTopics/{systemTopicName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SystemTopic
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.systemTopicName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/systemTopics/{systemTopicName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SystemTopic
    },
    201: {
      bodyMapper: Mappers.SystemTopic
    },
    202: {
      bodyMapper: Mappers.SystemTopic
    },
    204: {
      bodyMapper: Mappers.SystemTopic
    },
    default: {}
  },
  requestBody: Parameters.systemTopicInfo,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.systemTopicName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/systemTopics/{systemTopicName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.systemTopicName
  ],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/systemTopics/{systemTopicName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SystemTopic
    },
    201: {
      bodyMapper: Mappers.SystemTopic
    },
    202: {
      bodyMapper: Mappers.SystemTopic
    },
    204: {
      bodyMapper: Mappers.SystemTopic
    },
    default: {}
  },
  requestBody: Parameters.systemTopicUpdateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.systemTopicName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/systemTopics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SystemTopicsListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/systemTopics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SystemTopicsListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SystemTopicsListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SystemTopicsListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
