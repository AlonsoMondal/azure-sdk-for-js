/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  Enum0,
  Enum1,
  ClusterExtensionTypeGetOptionalParams,
  ClusterExtensionTypeGetResponse
} from "../models";

/** Interface representing a ClusterExtensionType. */
export interface ClusterExtensionType {
  /**
   * Get Extension Type details
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - either Microsoft.ContainerService (for AKS clusters) or
   *                  Microsoft.Kubernetes (for OnPrem K8S clusters).
   * @param clusterResourceName The Kubernetes cluster resource name - either managedClusters (for AKS
   *                            clusters) or connectedClusters (for OnPrem K8S clusters).
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionTypeName Extension type name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterRp: Enum0,
    clusterResourceName: Enum1,
    clusterName: string,
    extensionTypeName: string,
    options?: ClusterExtensionTypeGetOptionalParams
  ): Promise<ClusterExtensionTypeGetResponse>;
}
