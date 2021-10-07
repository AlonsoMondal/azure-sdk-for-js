// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure/core-http";
import { ContentType, MessageType, NumberType, PhoneNumberSearchRequest, ProgramSignUpType, Recurrence } from "./generated/src/models/";

/**
 * The result of the phone numbers purchase operation.
 */
export interface PurchasePhoneNumbersResult { }

/**
 * The result of the phone number release operation.
 */
export interface ReleasePhoneNumberResult { }

/**
 * Additional options for the get phone number request.
 */
export type GetPurchasedPhoneNumberOptions = OperationOptions;

/**
 * Additional options that can be passed to the list phone numbers request.
 */
export interface ListPurchasedPhoneNumbersOptions extends OperationOptions { }

/**
 * Additional options that can be passed to the list short codes request.
 */
export interface ListShortCodesOptions extends OperationOptions { }

/**
 * Represents a phone number search request to find phone numbers.
 * Found phone numbers are temporarily held for a following purchase.
 */
export interface SearchAvailablePhoneNumbersRequest extends PhoneNumberSearchRequest {
  /**
   * The ISO 3166-2 country code, e.g. US, representing the location of the search.
   */
  countryCode: string;
}

export interface ShortCodesCreateUSProgramBriefParams extends OperationOptions {
  body: CreateUSProgramBrief;
}

/**
 * Represents a version of US Program Brief for acquiring a short code in the United States
 * that is specific to creating a new Program Brief and therefore has all required fields as non-optional
 * and all read-only fields omitted.
 * 
 * A Program Brief provides vital information to the carriers about a messaging program or campaign that would be associated with a short code or alpha sender number.
 * A Program Brief also provides specifics about the use case, the purpose and the consumer experience receiving the message.
 */
 export interface CreateUSProgramBrief {
  /** Program Brief Id. */
  id: string;
  programDetails: CreateProgramDetails;
  companyInformation: CreateCompanyInformation;
  messageDetails: CreateMessageDetails;
  trafficDetails: CreateTrafficDetails;
}

export interface CreateProgramDetails {
  /** Set to true if the request is for a vanity number. */
  isVanity: boolean;
  /**
   * Priority ordered list of preferred vanity numbers.
   * Vanity numbers should be 5 or 6 digit when number type is ShortCode.
   * e.g. 555555, 222222.
   */
  preferredVanityNumbers?: string[];
  /** Type for desired numbers e.g. 'shortCode' or 'alphaId'. */
  numberType: NumberType;
  /** Indicates whether the number will be used for political campaigns or not. */
  isPoliticalCampaign: boolean;
  /**
   * A program name that indicates the purpose of filling the Program Brief and how the number will be used for messaging.
   * e.g. 'CONTOSO Shipping'
   */
  name: string;
  /** Describes how and why the number will be used for messaging as part of the program. */
  description: string;
  /** URL for the program or company. */
  url: string;
  /** Indicates how the consumer can sign up to the program e.g. 'website', 'pointOfSale' and/or 'sms'. */
  signUpTypes: ProgramSignUpType[];
  /**
   * Call to action description for the program.
   * e.g. 'This program will allow for consumers to receive a one-time passcode to validate their
   * authenticity when making a purchase online.  Through a verification process, they will have an
   * option to validate using a passcode sent via SMS, amongst the options. If they choose to have
   * the passcode sent over SMS they will receive this one-time message.  If they chose to opt out,
   * they may select \"STOP\" rather than continuing.'.
   */
  signUp: string;
  /** URL for program terms of service. */
  termsOfServiceUrl: string;
  /** URL for privacy policy. */
  privacyPolicyUrl: string;
  /**
   * Date in which SMS messages will start to be sent out.
   * Should follow ISO 8601 internet format for datetimes.
   * e.g. 2021-08-17T22:02:51.316Z, 2021-08-17T16:39:57-08:00, etc.
   */
  expectedDateOfService?: Date;
}

export interface CreateCompanyInformation {
  /** Legal entity name for customer submitting Program Brief. */
  name: string;
  /** Company URL for customer submitting Program Brief. */
  url: string;
  /** Company's address for the customer submitting the Program Brief. */
  address: string;
  /** Contact Information */
  contactInformation: CreateContactInformation;
  /** Customer Care Information */
  customerCareInformation: CreateCustomerCareInformation;
}

export interface CreateContactInformation {
  /** Name of authorized user for purposes of submitting the Program Brief. */
  name: string;
  /** Contact phone number for the authorized user for the customer. Use E164 format. e.g. +14086111111. */
  phone: string;
  /** Contact email address number for the authorized user for the customer. */
  email: string;
}

export interface CreateCustomerCareInformation {
  /** Customer support phone number for the customer submitting the Program Brief. Use E164 format. e.g. +18005551212 */
  tollFreeNumber: string;
  /** Customer support email address for the customer submitting the Program Brief. */
  email: string;
}

export interface CreateMessageDetails {
  /** Applicable message types used in the program e.g. SMS, MMS. */
  types: MessageType[];
  /** Indicates the nature of the messaging associated with the program e.g. 'subscription', 'transaction'. */
  recurrence: Recurrence;
  /** Indicates the messaging content types used in the program e.g. 'ringTones', 'smsChat', 'video', 'loyaltyProgramPointsPrizes', 'gifting', 'inApplicationBilling', 'textToScreen', etc. */
  contentTypes: ContentType[];
  optInMessage: string;
  /** Keyword used to confirm double Opt-In method e.g. 'JOIN'. */
  optInReply: string;
  confirmationMessage: string;
  /** Messaging use case description. */
  useCase?: string;
}

export interface CreateTrafficDetails {
  /** Estimated total messages per month. */
  estimatedVolume: number;
  /** Estimated number of Mobile-Originated messages likely to be received from a user per month. */
  monthlyAverageMessagesFromUser: number;
  /** Estimated number of Mobile-Terminated messages likely to be sent per user per month. */
  monthlyAverageMessagesToUser: number;
  /** Indicates if the nature of the messaging traffic will be bursty. */
  isSpiky: boolean;
  /**
   * If isSpiky=true, then explain additional details about the traffic pattern
   * e.g. 'Higher traffic expected during holiday season and Black Friday.'.
   */
  spikeDetails?: string;
}

export {
  PurchasedPhoneNumber,
  PhoneNumberAssignmentType,
  PhoneNumberCapabilities,
  PhoneNumberCapabilitiesRequest,
  PhoneNumberCapabilityType,
  PhoneNumberCost,
  PhoneNumberSearchResult,
  PhoneNumberSearchRequest,
  PhoneNumberType,
  BillingFrequency,
  ShortCode,
  USProgramBrief,
  NumberType,
  ShortCodesUpsertUSProgramBriefOptionalParams,
  ProgramBriefStatus,
  Note,
  ShortCodeCost,
  ProgramDetails,
  CompanyInformation,
  MessageDetails,
  TrafficDetails,
  ProgramSignUpType,
  ContactInformation,
  CustomerCareInformation,
  MessageType,
  Recurrence,
  ContentType,
} from "./generated/src/models/";
