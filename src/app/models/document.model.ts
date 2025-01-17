export class DocumentModel {
  DocumentNumber: string;
  Phone?: string;
}

export class DocumentStatus {
  Number: string;
  Redelivery?: string;
  RedeliverySum?: string;
  RedeliveryNum?: string;
  RedeliveryPayer?: string;
  OwnerDocumentType?: string;
  LastCreatedOnTheBasisDocumentType?: string;
  LastCreatedOnTheBasisPayerType?: string;
  LastCreatedOnTheBasisDateTime?: string;
  LastTransactionStatusGM?: string;
  LastTransactionDateTimeGM?: string;
  DateCreated?: string;
  DocumentWeight?: string;
  CheckWeight?: string;
  DocumentCost?: string;
  SumBeforeCheckWeight?: string;
  PayerType?: string;
  RecipientFullName?: string;
  RecipientDateTime?: string;
  ScheduledDeliveryDate?: string;
  PaymentMethod?: string;
  CargoDescriptionString?: string;
  CargoType?: string;
  CitySender?: string;
  CityRecipient?: string;
  WarehouseRecipient?: string;
  CounterpartyType?: string;
  AfterpaymentOnGoodsCost?: string;
  ServiceType?: string;
  UndeliveryReasonsSubtypeDescription?: string;
  WarehouseRecipientNumber?: string;
  LastCreatedOnTheBasisNumber?: string;
  PhoneRecipient?: string;
  RecipientFullNameEW?: string;
  WarehouseRecipientInternetAddressRef?: string;
  MarketplacePartnerToken?: string;
  ClientBarcode?: string;
  RecipientAddress?: string;
  CounterpartyRecipientDescription?: string;
  CounterpartySenderType?: string;
  DateScan?: string;
  PaymentStatus?: string;
  PaymentStatusDate?: string;
  AmountToPay?: string;
  AmountPaid?: string;
  Status?: string;
  StatusCode?: string;
  RefEW?: string;
  BackwardDeliverySubTypesServices?: string;
  BackwardDeliverySubTypesActions?: string;
  UndeliveryReasons?: string;
}
