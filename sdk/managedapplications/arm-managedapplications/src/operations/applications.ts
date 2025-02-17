/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Applications } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApplicationClient } from "../applicationClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Application,
  ApplicationsListByResourceGroupNextOptionalParams,
  ApplicationsListByResourceGroupOptionalParams,
  ApplicationsListBySubscriptionNextOptionalParams,
  ApplicationsListBySubscriptionOptionalParams,
  ApplicationsGetOptionalParams,
  ApplicationsGetResponse,
  ApplicationsDeleteOptionalParams,
  ApplicationsCreateOrUpdateOptionalParams,
  ApplicationsCreateOrUpdateResponse,
  ApplicationsUpdateOptionalParams,
  ApplicationsUpdateResponse,
  ApplicationsListByResourceGroupResponse,
  ApplicationsListBySubscriptionResponse,
  ApplicationsGetByIdOptionalParams,
  ApplicationsGetByIdResponse,
  ApplicationsDeleteByIdOptionalParams,
  ApplicationsCreateOrUpdateByIdOptionalParams,
  ApplicationsCreateOrUpdateByIdResponse,
  ApplicationsUpdateByIdOptionalParams,
  ApplicationsUpdateByIdResponse,
  ApplicationsListByResourceGroupNextResponse,
  ApplicationsListBySubscriptionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Applications operations. */
export class ApplicationsImpl implements Applications {
  private readonly client: ApplicationClient;

  /**
   * Initialize a new instance of the class Applications class.
   * @param client Reference to the service client
   */
  constructor(client: ApplicationClient) {
    this.client = client;
  }

  /**
   * Gets all the applications within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ApplicationsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Application> {
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
    options?: ApplicationsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Application[]> {
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
    options?: ApplicationsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Application> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all the applications within a subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: ApplicationsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<Application> {
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
    options?: ApplicationsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<Application[]> {
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
    options?: ApplicationsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<Application> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets the managed application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    applicationName: string,
    options?: ApplicationsGetOptionalParams
  ): Promise<ApplicationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, applicationName, options },
      getOperationSpec
    );
  }

  /**
   * Deletes the managed application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    applicationName: string,
    options?: ApplicationsDeleteOptionalParams
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
      { resourceGroupName, applicationName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes the managed application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    applicationName: string,
    options?: ApplicationsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      applicationName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Creates a new managed application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param parameters Parameters supplied to the create or update a managed application.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    applicationName: string,
    parameters: Application,
    options?: ApplicationsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ApplicationsCreateOrUpdateResponse>,
      ApplicationsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ApplicationsCreateOrUpdateResponse> => {
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
      { resourceGroupName, applicationName, parameters, options },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Creates a new managed application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param parameters Parameters supplied to the create or update a managed application.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    applicationName: string,
    parameters: Application,
    options?: ApplicationsCreateOrUpdateOptionalParams
  ): Promise<ApplicationsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      applicationName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an existing managed application. The only value that can be updated via PATCH currently is
   * the tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    applicationName: string,
    options?: ApplicationsUpdateOptionalParams
  ): Promise<ApplicationsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, applicationName, options },
      updateOperationSpec
    );
  }

  /**
   * Gets all the applications within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ApplicationsListByResourceGroupOptionalParams
  ): Promise<ApplicationsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Gets all the applications within a subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: ApplicationsListBySubscriptionOptionalParams
  ): Promise<ApplicationsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Gets the managed application.
   * @param applicationId The fully qualified ID of the managed application, including the managed
   *                      application name and the managed application resource type. Use the format,
   *                      /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
   * @param options The options parameters.
   */
  getById(
    applicationId: string,
    options?: ApplicationsGetByIdOptionalParams
  ): Promise<ApplicationsGetByIdResponse> {
    return this.client.sendOperationRequest(
      { applicationId, options },
      getByIdOperationSpec
    );
  }

  /**
   * Deletes the managed application.
   * @param applicationId The fully qualified ID of the managed application, including the managed
   *                      application name and the managed application resource type. Use the format,
   *                      /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
   * @param options The options parameters.
   */
  async beginDeleteById(
    applicationId: string,
    options?: ApplicationsDeleteByIdOptionalParams
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
      { applicationId, options },
      deleteByIdOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes the managed application.
   * @param applicationId The fully qualified ID of the managed application, including the managed
   *                      application name and the managed application resource type. Use the format,
   *                      /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
   * @param options The options parameters.
   */
  async beginDeleteByIdAndWait(
    applicationId: string,
    options?: ApplicationsDeleteByIdOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeleteById(applicationId, options);
    return poller.pollUntilDone();
  }

  /**
   * Creates a new managed application.
   * @param applicationId The fully qualified ID of the managed application, including the managed
   *                      application name and the managed application resource type. Use the format,
   *                      /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
   * @param parameters Parameters supplied to the create or update a managed application.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateById(
    applicationId: string,
    parameters: Application,
    options?: ApplicationsCreateOrUpdateByIdOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ApplicationsCreateOrUpdateByIdResponse>,
      ApplicationsCreateOrUpdateByIdResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ApplicationsCreateOrUpdateByIdResponse> => {
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
      { applicationId, parameters, options },
      createOrUpdateByIdOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Creates a new managed application.
   * @param applicationId The fully qualified ID of the managed application, including the managed
   *                      application name and the managed application resource type. Use the format,
   *                      /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
   * @param parameters Parameters supplied to the create or update a managed application.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateByIdAndWait(
    applicationId: string,
    parameters: Application,
    options?: ApplicationsCreateOrUpdateByIdOptionalParams
  ): Promise<ApplicationsCreateOrUpdateByIdResponse> {
    const poller = await this.beginCreateOrUpdateById(
      applicationId,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an existing managed application. The only value that can be updated via PATCH currently is
   * the tags.
   * @param applicationId The fully qualified ID of the managed application, including the managed
   *                      application name and the managed application resource type. Use the format,
   *                      /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
   * @param options The options parameters.
   */
  updateById(
    applicationId: string,
    options?: ApplicationsUpdateByIdOptionalParams
  ): Promise<ApplicationsUpdateByIdResponse> {
    return this.client.sendOperationRequest(
      { applicationId, options },
      updateByIdOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ApplicationsListByResourceGroupNextOptionalParams
  ): Promise<ApplicationsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: ApplicationsListBySubscriptionNextOptionalParams
  ): Promise<ApplicationsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Application
    },
    404: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.applicationName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.applicationName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Application
    },
    201: {
      bodyMapper: Mappers.Application
    },
    202: {
      bodyMapper: Mappers.Application
    },
    204: {
      bodyMapper: Mappers.Application
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.applicationName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Application
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.applicationName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Solutions/applications",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getByIdOperationSpec: coreClient.OperationSpec = {
  path: "/{applicationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Application
    },
    404: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.applicationId],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteByIdOperationSpec: coreClient.OperationSpec = {
  path: "/{applicationId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.applicationId],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateByIdOperationSpec: coreClient.OperationSpec = {
  path: "/{applicationId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Application
    },
    201: {
      bodyMapper: Mappers.Application
    },
    202: {
      bodyMapper: Mappers.Application
    },
    204: {
      bodyMapper: Mappers.Application
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.applicationId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateByIdOperationSpec: coreClient.OperationSpec = {
  path: "/{applicationId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Application
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.applicationId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
