import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A floating point number that requires more precision than IEEE 754 binary 64 */
  BigFloat: any;
  /**
   * A signed eight-byte integer. The upper big integer values are greater than the
   * max value for a JavaScript number. Therefore all big integers will be output as
   * strings and not numbers.
   */
  BigInt: any;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** The day, does not include a time. */
  Date: any;
};

export enum AccountT {
  Asset = 'ASSET',
  Payables = 'PAYABLES',
  Receivables = 'RECEIVABLES',
  Inventories = 'INVENTORIES',
  Liability = 'LIABILITY',
  Revenue = 'REVENUE',
  CostOfGoodsSold = 'COST_OF_GOODS_SOLD',
  Expenses = 'EXPENSES',
  Equities = 'EQUITIES'
}



export type Bill = Node & {
   __typename?: 'Bill';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  billId: Scalars['Int'];
  status?: Maybe<BillStatus>;
  date?: Maybe<Scalars['Date']>;
  amount?: Maybe<Scalars['BigFloat']>;
  memo?: Maybe<Scalars['String']>;
  paymentDue?: Maybe<Scalars['Date']>;
  accountId?: Maybe<Scalars['BigInt']>;
  vendorId?: Maybe<Scalars['BigInt']>;
  poId?: Maybe<Scalars['BigInt']>;
  /** Reads a single `ChartOfAccount` that is related to this `Bill`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Vendor` that is related to this `Bill`. */
  vendorByVendorId?: Maybe<Vendor>;
  /** Reads a single `PurchaseOrder` that is related to this `Bill`. */
  purchaseOrderByPoId?: Maybe<PurchaseOrder>;
  /** Reads and enables pagination through a set of `BillPayment`. */
  billPaymentsByBillId: BillPaymentsConnection;
  /** Reads and enables pagination through a set of `SubBillPayment`. */
  subBillPaymentsByBillId: SubBillPaymentsConnection;
};


export type BillBillPaymentsByBillIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<BillPaymentsOrderBy>>;
  condition?: Maybe<BillPaymentCondition>;
};


export type BillSubBillPaymentsByBillIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<SubBillPaymentsOrderBy>>;
  condition?: Maybe<SubBillPaymentCondition>;
};

/** A condition to be used against `Bill` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type BillCondition = {
  /** Checks for equality with the object’s `billId` field. */
  billId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<BillStatus>;
  /** Checks for equality with the object’s `date` field. */
  date?: Maybe<Scalars['Date']>;
  /** Checks for equality with the object’s `amount` field. */
  amount?: Maybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `memo` field. */
  memo?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `paymentDue` field. */
  paymentDue?: Maybe<Scalars['Date']>;
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: Maybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `vendorId` field. */
  vendorId?: Maybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `poId` field. */
  poId?: Maybe<Scalars['BigInt']>;
};

/** An input for mutations affecting `Bill` */
export type BillInput = {
  billId?: Maybe<Scalars['Int']>;
  status?: Maybe<BillStatus>;
  date?: Maybe<Scalars['Date']>;
  amount?: Maybe<Scalars['BigFloat']>;
  memo?: Maybe<Scalars['String']>;
  paymentDue?: Maybe<Scalars['Date']>;
  accountId?: Maybe<Scalars['BigInt']>;
  vendorId?: Maybe<Scalars['BigInt']>;
  poId?: Maybe<Scalars['BigInt']>;
};

/** Represents an update to a `Bill`. Fields that are set will be updated. */
export type BillPatch = {
  billId?: Maybe<Scalars['Int']>;
  status?: Maybe<BillStatus>;
  date?: Maybe<Scalars['Date']>;
  amount?: Maybe<Scalars['BigFloat']>;
  memo?: Maybe<Scalars['String']>;
  paymentDue?: Maybe<Scalars['Date']>;
  accountId?: Maybe<Scalars['BigInt']>;
  vendorId?: Maybe<Scalars['BigInt']>;
  poId?: Maybe<Scalars['BigInt']>;
};

export type BillPayment = Node & {
   __typename?: 'BillPayment';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  billPaymentId: Scalars['Int'];
  date?: Maybe<Scalars['Date']>;
  amount?: Maybe<Scalars['BigFloat']>;
  memo?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['BigInt']>;
  billId?: Maybe<Scalars['BigInt']>;
  /** Reads a single `ChartOfAccount` that is related to this `BillPayment`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Bill` that is related to this `BillPayment`. */
  billByBillId?: Maybe<Bill>;
  /** Reads and enables pagination through a set of `SubBillPayment`. */
  subBillPaymentsByBillPaymentId: SubBillPaymentsConnection;
};


export type BillPaymentSubBillPaymentsByBillPaymentIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<SubBillPaymentsOrderBy>>;
  condition?: Maybe<SubBillPaymentCondition>;
};

/**
 * A condition to be used against `BillPayment` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type BillPaymentCondition = {
  /** Checks for equality with the object’s `billPaymentId` field. */
  billPaymentId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `date` field. */
  date?: Maybe<Scalars['Date']>;
  /** Checks for equality with the object’s `amount` field. */
  amount?: Maybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `memo` field. */
  memo?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `paymentMethod` field. */
  paymentMethod?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: Maybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `billId` field. */
  billId?: Maybe<Scalars['BigInt']>;
};

/** An input for mutations affecting `BillPayment` */
export type BillPaymentInput = {
  billPaymentId?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  amount?: Maybe<Scalars['BigFloat']>;
  memo?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['BigInt']>;
  billId?: Maybe<Scalars['BigInt']>;
};

/** Represents an update to a `BillPayment`. Fields that are set will be updated. */
export type BillPaymentPatch = {
  billPaymentId?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  amount?: Maybe<Scalars['BigFloat']>;
  memo?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['BigInt']>;
  billId?: Maybe<Scalars['BigInt']>;
};

/** A connection to a list of `BillPayment` values. */
export type BillPaymentsConnection = {
   __typename?: 'BillPaymentsConnection';
  /** A list of `BillPayment` objects. */
  nodes: Array<Maybe<BillPayment>>;
  /** A list of edges which contains the `BillPayment` and cursor to aid in pagination. */
  edges: Array<BillPaymentsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `BillPayment` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `BillPayment` edge in the connection. */
export type BillPaymentsEdge = {
   __typename?: 'BillPaymentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `BillPayment` at the end of the edge. */
  node?: Maybe<BillPayment>;
};

/** Methods to use when ordering `BillPayment`. */
export enum BillPaymentsOrderBy {
  Natural = 'NATURAL',
  BillPaymentIdAsc = 'BILL_PAYMENT_ID_ASC',
  BillPaymentIdDesc = 'BILL_PAYMENT_ID_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  MemoAsc = 'MEMO_ASC',
  MemoDesc = 'MEMO_DESC',
  PaymentMethodAsc = 'PAYMENT_METHOD_ASC',
  PaymentMethodDesc = 'PAYMENT_METHOD_DESC',
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  BillIdAsc = 'BILL_ID_ASC',
  BillIdDesc = 'BILL_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `Bill` values. */
export type BillsConnection = {
   __typename?: 'BillsConnection';
  /** A list of `Bill` objects. */
  nodes: Array<Maybe<Bill>>;
  /** A list of edges which contains the `Bill` and cursor to aid in pagination. */
  edges: Array<BillsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Bill` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Bill` edge in the connection. */
export type BillsEdge = {
   __typename?: 'BillsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Bill` at the end of the edge. */
  node?: Maybe<Bill>;
};

/** Methods to use when ordering `Bill`. */
export enum BillsOrderBy {
  Natural = 'NATURAL',
  BillIdAsc = 'BILL_ID_ASC',
  BillIdDesc = 'BILL_ID_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  MemoAsc = 'MEMO_ASC',
  MemoDesc = 'MEMO_DESC',
  PaymentDueAsc = 'PAYMENT_DUE_ASC',
  PaymentDueDesc = 'PAYMENT_DUE_DESC',
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  VendorIdAsc = 'VENDOR_ID_ASC',
  VendorIdDesc = 'VENDOR_ID_DESC',
  PoIdAsc = 'PO_ID_ASC',
  PoIdDesc = 'PO_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export enum BillStatus {
  Paid = 'PAID',
  NotPaid = 'NOT_PAID'
}

export type ChartOfAccount = Node & {
   __typename?: 'ChartOfAccount';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  accountId: Scalars['Int'];
  accountNumber?: Maybe<Scalars['String']>;
  accountName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  accountType?: Maybe<AccountT>;
  currency?: Maybe<Scalars['String']>;
  beginningBalance?: Maybe<Scalars['BigFloat']>;
  balance?: Maybe<Scalars['BigFloat']>;
  /** Reads and enables pagination through a set of `Product`. */
  productsByAccountId: ProductsConnection;
  /** Reads and enables pagination through a set of `Invoice`. */
  invoicesByAccountId: InvoicesConnection;
  /** Reads and enables pagination through a set of `Receipt`. */
  receiptsByAccountId: ReceiptsConnection;
  /** Reads and enables pagination through a set of `PurchaseOrder`. */
  purchaseOrdersByAccountId: PurchaseOrdersConnection;
  /** Reads and enables pagination through a set of `Bill`. */
  billsByAccountId: BillsConnection;
  /** Reads and enables pagination through a set of `BillPayment`. */
  billPaymentsByAccountId: BillPaymentsConnection;
  /** Reads and enables pagination through a set of `JournalEntry`. */
  journalEntriesByAccountId: JournalEntriesConnection;
};


export type ChartOfAccountProductsByAccountIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ProductsOrderBy>>;
  condition?: Maybe<ProductCondition>;
};


export type ChartOfAccountInvoicesByAccountIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<InvoicesOrderBy>>;
  condition?: Maybe<InvoiceCondition>;
};


export type ChartOfAccountReceiptsByAccountIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ReceiptsOrderBy>>;
  condition?: Maybe<ReceiptCondition>;
};


export type ChartOfAccountPurchaseOrdersByAccountIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PurchaseOrdersOrderBy>>;
  condition?: Maybe<PurchaseOrderCondition>;
};


export type ChartOfAccountBillsByAccountIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<BillsOrderBy>>;
  condition?: Maybe<BillCondition>;
};


export type ChartOfAccountBillPaymentsByAccountIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<BillPaymentsOrderBy>>;
  condition?: Maybe<BillPaymentCondition>;
};


export type ChartOfAccountJournalEntriesByAccountIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<JournalEntriesOrderBy>>;
  condition?: Maybe<JournalEntryCondition>;
};

/**
 * A condition to be used against `ChartOfAccount` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ChartOfAccountCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `accountNumber` field. */
  accountNumber?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `accountName` field. */
  accountName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `accountType` field. */
  accountType?: Maybe<AccountT>;
  /** Checks for equality with the object’s `currency` field. */
  currency?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `beginningBalance` field. */
  beginningBalance?: Maybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `balance` field. */
  balance?: Maybe<Scalars['BigFloat']>;
};

/** An input for mutations affecting `ChartOfAccount` */
export type ChartOfAccountInput = {
  accountId?: Maybe<Scalars['Int']>;
  accountNumber?: Maybe<Scalars['String']>;
  accountName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  accountType?: Maybe<AccountT>;
  currency?: Maybe<Scalars['String']>;
  beginningBalance?: Maybe<Scalars['BigFloat']>;
  balance?: Maybe<Scalars['BigFloat']>;
};

/** Represents an update to a `ChartOfAccount`. Fields that are set will be updated. */
export type ChartOfAccountPatch = {
  accountId?: Maybe<Scalars['Int']>;
  accountNumber?: Maybe<Scalars['String']>;
  accountName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  accountType?: Maybe<AccountT>;
  currency?: Maybe<Scalars['String']>;
  beginningBalance?: Maybe<Scalars['BigFloat']>;
  balance?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `ChartOfAccount` values. */
export type ChartOfAccountsConnection = {
   __typename?: 'ChartOfAccountsConnection';
  /** A list of `ChartOfAccount` objects. */
  nodes: Array<Maybe<ChartOfAccount>>;
  /** A list of edges which contains the `ChartOfAccount` and cursor to aid in pagination. */
  edges: Array<ChartOfAccountsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ChartOfAccount` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ChartOfAccount` edge in the connection. */
export type ChartOfAccountsEdge = {
   __typename?: 'ChartOfAccountsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ChartOfAccount` at the end of the edge. */
  node?: Maybe<ChartOfAccount>;
};

/** Methods to use when ordering `ChartOfAccount`. */
export enum ChartOfAccountsOrderBy {
  Natural = 'NATURAL',
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  AccountNumberAsc = 'ACCOUNT_NUMBER_ASC',
  AccountNumberDesc = 'ACCOUNT_NUMBER_DESC',
  AccountNameAsc = 'ACCOUNT_NAME_ASC',
  AccountNameDesc = 'ACCOUNT_NAME_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  AccountTypeAsc = 'ACCOUNT_TYPE_ASC',
  AccountTypeDesc = 'ACCOUNT_TYPE_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC',
  BeginningBalanceAsc = 'BEGINNING_BALANCE_ASC',
  BeginningBalanceDesc = 'BEGINNING_BALANCE_DESC',
  BalanceAsc = 'BALANCE_ASC',
  BalanceDesc = 'BALANCE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the create `Bill` mutation. */
export type CreateBillInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Bill` to be created by this mutation. */
  bill: BillInput;
};

/** The output of our create `Bill` mutation. */
export type CreateBillPayload = {
   __typename?: 'CreateBillPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Bill` that was created by this mutation. */
  bill?: Maybe<Bill>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChartOfAccount` that is related to this `Bill`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Vendor` that is related to this `Bill`. */
  vendorByVendorId?: Maybe<Vendor>;
  /** Reads a single `PurchaseOrder` that is related to this `Bill`. */
  purchaseOrderByPoId?: Maybe<PurchaseOrder>;
  /** An edge for our `Bill`. May be used by Relay 1. */
  billEdge?: Maybe<BillsEdge>;
};


/** The output of our create `Bill` mutation. */
export type CreateBillPayloadBillEdgeArgs = {
  orderBy?: Maybe<Array<BillsOrderBy>>;
};

/** All input for the create `BillPayment` mutation. */
export type CreateBillPaymentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `BillPayment` to be created by this mutation. */
  billPayment: BillPaymentInput;
};

/** The output of our create `BillPayment` mutation. */
export type CreateBillPaymentPayload = {
   __typename?: 'CreateBillPaymentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `BillPayment` that was created by this mutation. */
  billPayment?: Maybe<BillPayment>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChartOfAccount` that is related to this `BillPayment`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Bill` that is related to this `BillPayment`. */
  billByBillId?: Maybe<Bill>;
  /** An edge for our `BillPayment`. May be used by Relay 1. */
  billPaymentEdge?: Maybe<BillPaymentsEdge>;
};


/** The output of our create `BillPayment` mutation. */
export type CreateBillPaymentPayloadBillPaymentEdgeArgs = {
  orderBy?: Maybe<Array<BillPaymentsOrderBy>>;
};

/** All input for the create `ChartOfAccount` mutation. */
export type CreateChartOfAccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChartOfAccount` to be created by this mutation. */
  chartOfAccount: ChartOfAccountInput;
};

/** The output of our create `ChartOfAccount` mutation. */
export type CreateChartOfAccountPayload = {
   __typename?: 'CreateChartOfAccountPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChartOfAccount` that was created by this mutation. */
  chartOfAccount?: Maybe<ChartOfAccount>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `ChartOfAccount`. May be used by Relay 1. */
  chartOfAccountEdge?: Maybe<ChartOfAccountsEdge>;
};


/** The output of our create `ChartOfAccount` mutation. */
export type CreateChartOfAccountPayloadChartOfAccountEdgeArgs = {
  orderBy?: Maybe<Array<ChartOfAccountsOrderBy>>;
};

/** All input for the create `Customer` mutation. */
export type CreateCustomerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Customer` to be created by this mutation. */
  customer: CustomerInput;
};

/** The output of our create `Customer` mutation. */
export type CreateCustomerPayload = {
   __typename?: 'CreateCustomerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Customer` that was created by this mutation. */
  customer?: Maybe<Customer>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Region` that is related to this `Customer`. */
  regionByRegionId?: Maybe<Region>;
  /** Reads a single `Dealer` that is related to this `Customer`. */
  dealerByDealerId?: Maybe<Dealer>;
  /** An edge for our `Customer`. May be used by Relay 1. */
  customerEdge?: Maybe<CustomersEdge>;
};


/** The output of our create `Customer` mutation. */
export type CreateCustomerPayloadCustomerEdgeArgs = {
  orderBy?: Maybe<Array<CustomersOrderBy>>;
};

/** All input for the create `Dealer` mutation. */
export type CreateDealerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Dealer` to be created by this mutation. */
  dealer: DealerInput;
};

/** The output of our create `Dealer` mutation. */
export type CreateDealerPayload = {
   __typename?: 'CreateDealerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Dealer` that was created by this mutation. */
  dealer?: Maybe<Dealer>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Dealer`. May be used by Relay 1. */
  dealerEdge?: Maybe<DealersEdge>;
};


/** The output of our create `Dealer` mutation. */
export type CreateDealerPayloadDealerEdgeArgs = {
  orderBy?: Maybe<Array<DealersOrderBy>>;
};

/** All input for the create `Estimate` mutation. */
export type CreateEstimateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Estimate` to be created by this mutation. */
  estimate: EstimateInput;
};

/** The output of our create `Estimate` mutation. */
export type CreateEstimatePayload = {
   __typename?: 'CreateEstimatePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Estimate` that was created by this mutation. */
  estimate?: Maybe<Estimate>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Customer` that is related to this `Estimate`. */
  customerByCustomerId?: Maybe<Customer>;
  /** An edge for our `Estimate`. May be used by Relay 1. */
  estimateEdge?: Maybe<EstimatesEdge>;
};


/** The output of our create `Estimate` mutation. */
export type CreateEstimatePayloadEstimateEdgeArgs = {
  orderBy?: Maybe<Array<EstimatesOrderBy>>;
};

/** All input for the create `EstimateProduct` mutation. */
export type CreateEstimateProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `EstimateProduct` to be created by this mutation. */
  estimateProduct: EstimateProductInput;
};

/** The output of our create `EstimateProduct` mutation. */
export type CreateEstimateProductPayload = {
   __typename?: 'CreateEstimateProductPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `EstimateProduct` that was created by this mutation. */
  estimateProduct?: Maybe<EstimateProduct>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Estimate` that is related to this `EstimateProduct`. */
  estimateByEstimateId?: Maybe<Estimate>;
  /** Reads a single `Product` that is related to this `EstimateProduct`. */
  productByProductId?: Maybe<Product>;
  /** An edge for our `EstimateProduct`. May be used by Relay 1. */
  estimateProductEdge?: Maybe<EstimateProductsEdge>;
};


/** The output of our create `EstimateProduct` mutation. */
export type CreateEstimateProductPayloadEstimateProductEdgeArgs = {
  orderBy?: Maybe<Array<EstimateProductsOrderBy>>;
};

/** All input for the create `Invoice` mutation. */
export type CreateInvoiceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Invoice` to be created by this mutation. */
  invoice: InvoiceInput;
};

/** The output of our create `Invoice` mutation. */
export type CreateInvoicePayload = {
   __typename?: 'CreateInvoicePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Invoice` that was created by this mutation. */
  invoice?: Maybe<Invoice>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChartOfAccount` that is related to this `Invoice`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Customer` that is related to this `Invoice`. */
  customerByCustomerId?: Maybe<Customer>;
  /** Reads a single `Estimate` that is related to this `Invoice`. */
  estimateByEstimateId?: Maybe<Estimate>;
  /** An edge for our `Invoice`. May be used by Relay 1. */
  invoiceEdge?: Maybe<InvoicesEdge>;
};


/** The output of our create `Invoice` mutation. */
export type CreateInvoicePayloadInvoiceEdgeArgs = {
  orderBy?: Maybe<Array<InvoicesOrderBy>>;
};

/** All input for the create `InvoiceProduct` mutation. */
export type CreateInvoiceProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `InvoiceProduct` to be created by this mutation. */
  invoiceProduct: InvoiceProductInput;
};

/** The output of our create `InvoiceProduct` mutation. */
export type CreateInvoiceProductPayload = {
   __typename?: 'CreateInvoiceProductPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `InvoiceProduct` that was created by this mutation. */
  invoiceProduct?: Maybe<InvoiceProduct>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Invoice` that is related to this `InvoiceProduct`. */
  invoiceByInvoiceId?: Maybe<Invoice>;
  /** Reads a single `Product` that is related to this `InvoiceProduct`. */
  productByProductId?: Maybe<Product>;
  /** An edge for our `InvoiceProduct`. May be used by Relay 1. */
  invoiceProductEdge?: Maybe<InvoiceProductsEdge>;
};


/** The output of our create `InvoiceProduct` mutation. */
export type CreateInvoiceProductPayloadInvoiceProductEdgeArgs = {
  orderBy?: Maybe<Array<InvoiceProductsOrderBy>>;
};

/** All input for the create `JournalEntry` mutation. */
export type CreateJournalEntryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `JournalEntry` to be created by this mutation. */
  journalEntry: JournalEntryInput;
};

/** The output of our create `JournalEntry` mutation. */
export type CreateJournalEntryPayload = {
   __typename?: 'CreateJournalEntryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `JournalEntry` that was created by this mutation. */
  journalEntry?: Maybe<JournalEntry>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Transaction` that is related to this `JournalEntry`. */
  transactionByTransactionId?: Maybe<Transaction>;
  /** Reads a single `ChartOfAccount` that is related to this `JournalEntry`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** An edge for our `JournalEntry`. May be used by Relay 1. */
  journalEntryEdge?: Maybe<JournalEntriesEdge>;
};


/** The output of our create `JournalEntry` mutation. */
export type CreateJournalEntryPayloadJournalEntryEdgeArgs = {
  orderBy?: Maybe<Array<JournalEntriesOrderBy>>;
};

/** All input for the create `Product` mutation. */
export type CreateProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Product` to be created by this mutation. */
  product: ProductInput;
};

/** The output of our create `Product` mutation. */
export type CreateProductPayload = {
   __typename?: 'CreateProductPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Product` that was created by this mutation. */
  product?: Maybe<Product>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChartOfAccount` that is related to this `Product`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Tax` that is related to this `Product`. */
  taxByTaxId?: Maybe<Tax>;
  /** An edge for our `Product`. May be used by Relay 1. */
  productEdge?: Maybe<ProductsEdge>;
};


/** The output of our create `Product` mutation. */
export type CreateProductPayloadProductEdgeArgs = {
  orderBy?: Maybe<Array<ProductsOrderBy>>;
};

/** All input for the create `PurchaseOrder` mutation. */
export type CreatePurchaseOrderInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PurchaseOrder` to be created by this mutation. */
  purchaseOrder: PurchaseOrderInput;
};

/** The output of our create `PurchaseOrder` mutation. */
export type CreatePurchaseOrderPayload = {
   __typename?: 'CreatePurchaseOrderPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PurchaseOrder` that was created by this mutation. */
  purchaseOrder?: Maybe<PurchaseOrder>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChartOfAccount` that is related to this `PurchaseOrder`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Vendor` that is related to this `PurchaseOrder`. */
  vendorByVendorId?: Maybe<Vendor>;
  /** An edge for our `PurchaseOrder`. May be used by Relay 1. */
  purchaseOrderEdge?: Maybe<PurchaseOrdersEdge>;
};


/** The output of our create `PurchaseOrder` mutation. */
export type CreatePurchaseOrderPayloadPurchaseOrderEdgeArgs = {
  orderBy?: Maybe<Array<PurchaseOrdersOrderBy>>;
};

/** All input for the create `Receipt` mutation. */
export type CreateReceiptInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Receipt` to be created by this mutation. */
  receipt: ReceiptInput;
};

/** The output of our create `Receipt` mutation. */
export type CreateReceiptPayload = {
   __typename?: 'CreateReceiptPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Receipt` that was created by this mutation. */
  receipt?: Maybe<Receipt>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChartOfAccount` that is related to this `Receipt`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Invoice` that is related to this `Receipt`. */
  invoiceByInvoiceId?: Maybe<Invoice>;
  /** An edge for our `Receipt`. May be used by Relay 1. */
  receiptEdge?: Maybe<ReceiptsEdge>;
};


/** The output of our create `Receipt` mutation. */
export type CreateReceiptPayloadReceiptEdgeArgs = {
  orderBy?: Maybe<Array<ReceiptsOrderBy>>;
};

/** All input for the create `Region` mutation. */
export type CreateRegionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Region` to be created by this mutation. */
  region: RegionInput;
};

/** The output of our create `Region` mutation. */
export type CreateRegionPayload = {
   __typename?: 'CreateRegionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Region` that was created by this mutation. */
  region?: Maybe<Region>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Region`. May be used by Relay 1. */
  regionEdge?: Maybe<RegionsEdge>;
};


/** The output of our create `Region` mutation. */
export type CreateRegionPayloadRegionEdgeArgs = {
  orderBy?: Maybe<Array<RegionsOrderBy>>;
};

/** All input for the create `SubBillPayment` mutation. */
export type CreateSubBillPaymentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `SubBillPayment` to be created by this mutation. */
  subBillPayment: SubBillPaymentInput;
};

/** The output of our create `SubBillPayment` mutation. */
export type CreateSubBillPaymentPayload = {
   __typename?: 'CreateSubBillPaymentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `SubBillPayment` that was created by this mutation. */
  subBillPayment?: Maybe<SubBillPayment>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `BillPayment` that is related to this `SubBillPayment`. */
  billPaymentByBillPaymentId?: Maybe<BillPayment>;
  /** Reads a single `Bill` that is related to this `SubBillPayment`. */
  billByBillId?: Maybe<Bill>;
  /** An edge for our `SubBillPayment`. May be used by Relay 1. */
  subBillPaymentEdge?: Maybe<SubBillPaymentsEdge>;
};


/** The output of our create `SubBillPayment` mutation. */
export type CreateSubBillPaymentPayloadSubBillPaymentEdgeArgs = {
  orderBy?: Maybe<Array<SubBillPaymentsOrderBy>>;
};

/** All input for the create `SubReceipt` mutation. */
export type CreateSubReceiptInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `SubReceipt` to be created by this mutation. */
  subReceipt: SubReceiptInput;
};

/** The output of our create `SubReceipt` mutation. */
export type CreateSubReceiptPayload = {
   __typename?: 'CreateSubReceiptPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `SubReceipt` that was created by this mutation. */
  subReceipt?: Maybe<SubReceipt>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Receipt` that is related to this `SubReceipt`. */
  receiptByReceiptId?: Maybe<Receipt>;
  /** Reads a single `Invoice` that is related to this `SubReceipt`. */
  invoiceByInvoiceId?: Maybe<Invoice>;
  /** An edge for our `SubReceipt`. May be used by Relay 1. */
  subReceiptEdge?: Maybe<SubReceiptsEdge>;
};


/** The output of our create `SubReceipt` mutation. */
export type CreateSubReceiptPayloadSubReceiptEdgeArgs = {
  orderBy?: Maybe<Array<SubReceiptsOrderBy>>;
};

/** All input for the create `Tax` mutation. */
export type CreateTaxInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Tax` to be created by this mutation. */
  tax: TaxInput;
};

/** The output of our create `Tax` mutation. */
export type CreateTaxPayload = {
   __typename?: 'CreateTaxPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Tax` that was created by this mutation. */
  tax?: Maybe<Tax>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Tax`. May be used by Relay 1. */
  taxEdge?: Maybe<TaxesEdge>;
};


/** The output of our create `Tax` mutation. */
export type CreateTaxPayloadTaxEdgeArgs = {
  orderBy?: Maybe<Array<TaxesOrderBy>>;
};

/** All input for the create `Transaction` mutation. */
export type CreateTransactionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Transaction` to be created by this mutation. */
  transaction: TransactionInput;
};

/** The output of our create `Transaction` mutation. */
export type CreateTransactionPayload = {
   __typename?: 'CreateTransactionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Transaction` that was created by this mutation. */
  transaction?: Maybe<Transaction>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Transaction`. May be used by Relay 1. */
  transactionEdge?: Maybe<TransactionsEdge>;
};


/** The output of our create `Transaction` mutation. */
export type CreateTransactionPayloadTransactionEdgeArgs = {
  orderBy?: Maybe<Array<TransactionsOrderBy>>;
};

/** All input for the create `Vendor` mutation. */
export type CreateVendorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Vendor` to be created by this mutation. */
  vendor: VendorInput;
};

/** The output of our create `Vendor` mutation. */
export type CreateVendorPayload = {
   __typename?: 'CreateVendorPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Vendor` that was created by this mutation. */
  vendor?: Maybe<Vendor>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Vendor`. May be used by Relay 1. */
  vendorEdge?: Maybe<VendorsEdge>;
};


/** The output of our create `Vendor` mutation. */
export type CreateVendorPayloadVendorEdgeArgs = {
  orderBy?: Maybe<Array<VendorsOrderBy>>;
};


export type Customer = Node & {
   __typename?: 'Customer';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  customerId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  regionId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  dealerId: Scalars['Int'];
  customerCode?: Maybe<Scalars['String']>;
  /** Reads a single `Region` that is related to this `Customer`. */
  regionByRegionId?: Maybe<Region>;
  /** Reads a single `Dealer` that is related to this `Customer`. */
  dealerByDealerId?: Maybe<Dealer>;
  /** Reads and enables pagination through a set of `Estimate`. */
  estimatesByCustomerId: EstimatesConnection;
  /** Reads and enables pagination through a set of `Invoice`. */
  invoicesByCustomerId: InvoicesConnection;
};


export type CustomerEstimatesByCustomerIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<EstimatesOrderBy>>;
  condition?: Maybe<EstimateCondition>;
};


export type CustomerInvoicesByCustomerIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<InvoicesOrderBy>>;
  condition?: Maybe<InvoiceCondition>;
};

/**
 * A condition to be used against `Customer` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CustomerCondition = {
  /** Checks for equality with the object’s `customerId` field. */
  customerId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `address` field. */
  address?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `regionId` field. */
  regionId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `phone` field. */
  phone?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `note` field. */
  note?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `dealerId` field. */
  dealerId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `customerCode` field. */
  customerCode?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `Customer` */
export type CustomerInput = {
  customerId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  regionId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  dealerId: Scalars['Int'];
  customerCode?: Maybe<Scalars['String']>;
};

/** Represents an update to a `Customer`. Fields that are set will be updated. */
export type CustomerPatch = {
  customerId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  regionId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  dealerId?: Maybe<Scalars['Int']>;
  customerCode?: Maybe<Scalars['String']>;
};

/** A connection to a list of `Customer` values. */
export type CustomersConnection = {
   __typename?: 'CustomersConnection';
  /** A list of `Customer` objects. */
  nodes: Array<Maybe<Customer>>;
  /** A list of edges which contains the `Customer` and cursor to aid in pagination. */
  edges: Array<CustomersEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Customer` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Customer` edge in the connection. */
export type CustomersEdge = {
   __typename?: 'CustomersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Customer` at the end of the edge. */
  node?: Maybe<Customer>;
};

/** Methods to use when ordering `Customer`. */
export enum CustomersOrderBy {
  Natural = 'NATURAL',
  CustomerIdAsc = 'CUSTOMER_ID_ASC',
  CustomerIdDesc = 'CUSTOMER_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  RegionIdAsc = 'REGION_ID_ASC',
  RegionIdDesc = 'REGION_ID_DESC',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  NoteAsc = 'NOTE_ASC',
  NoteDesc = 'NOTE_DESC',
  DealerIdAsc = 'DEALER_ID_ASC',
  DealerIdDesc = 'DEALER_ID_DESC',
  CustomerCodeAsc = 'CUSTOMER_CODE_ASC',
  CustomerCodeDesc = 'CUSTOMER_CODE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}


export type Dealer = Node & {
   __typename?: 'Dealer';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  dealerId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `Customer`. */
  customersByDealerId: CustomersConnection;
};


export type DealerCustomersByDealerIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CustomersOrderBy>>;
  condition?: Maybe<CustomerCondition>;
};

/** A condition to be used against `Dealer` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type DealerCondition = {
  /** Checks for equality with the object’s `dealerId` field. */
  dealerId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `address` field. */
  address?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `phone` field. */
  phone?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `Dealer` */
export type DealerInput = {
  dealerId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** Represents an update to a `Dealer`. Fields that are set will be updated. */
export type DealerPatch = {
  dealerId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** A connection to a list of `Dealer` values. */
export type DealersConnection = {
   __typename?: 'DealersConnection';
  /** A list of `Dealer` objects. */
  nodes: Array<Maybe<Dealer>>;
  /** A list of edges which contains the `Dealer` and cursor to aid in pagination. */
  edges: Array<DealersEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Dealer` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Dealer` edge in the connection. */
export type DealersEdge = {
   __typename?: 'DealersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Dealer` at the end of the edge. */
  node?: Maybe<Dealer>;
};

/** Methods to use when ordering `Dealer`. */
export enum DealersOrderBy {
  Natural = 'NATURAL',
  DealerIdAsc = 'DEALER_ID_ASC',
  DealerIdDesc = 'DEALER_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the `deleteBillByBillId` mutation. */
export type DeleteBillByBillIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  billId: Scalars['Int'];
};

/** All input for the `deleteBill` mutation. */
export type DeleteBillInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Bill` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Bill` mutation. */
export type DeleteBillPayload = {
   __typename?: 'DeleteBillPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Bill` that was deleted by this mutation. */
  bill?: Maybe<Bill>;
  deletedBillId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChartOfAccount` that is related to this `Bill`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Vendor` that is related to this `Bill`. */
  vendorByVendorId?: Maybe<Vendor>;
  /** Reads a single `PurchaseOrder` that is related to this `Bill`. */
  purchaseOrderByPoId?: Maybe<PurchaseOrder>;
  /** An edge for our `Bill`. May be used by Relay 1. */
  billEdge?: Maybe<BillsEdge>;
};


/** The output of our delete `Bill` mutation. */
export type DeleteBillPayloadBillEdgeArgs = {
  orderBy?: Maybe<Array<BillsOrderBy>>;
};

/** All input for the `deleteBillPaymentByBillPaymentId` mutation. */
export type DeleteBillPaymentByBillPaymentIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  billPaymentId: Scalars['Int'];
};

/** All input for the `deleteBillPayment` mutation. */
export type DeleteBillPaymentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `BillPayment` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `BillPayment` mutation. */
export type DeleteBillPaymentPayload = {
   __typename?: 'DeleteBillPaymentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `BillPayment` that was deleted by this mutation. */
  billPayment?: Maybe<BillPayment>;
  deletedBillPaymentId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChartOfAccount` that is related to this `BillPayment`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Bill` that is related to this `BillPayment`. */
  billByBillId?: Maybe<Bill>;
  /** An edge for our `BillPayment`. May be used by Relay 1. */
  billPaymentEdge?: Maybe<BillPaymentsEdge>;
};


/** The output of our delete `BillPayment` mutation. */
export type DeleteBillPaymentPayloadBillPaymentEdgeArgs = {
  orderBy?: Maybe<Array<BillPaymentsOrderBy>>;
};

/** All input for the `deleteChartOfAccountByAccountId` mutation. */
export type DeleteChartOfAccountByAccountIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  accountId: Scalars['Int'];
};

/** All input for the `deleteChartOfAccount` mutation. */
export type DeleteChartOfAccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ChartOfAccount` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `ChartOfAccount` mutation. */
export type DeleteChartOfAccountPayload = {
   __typename?: 'DeleteChartOfAccountPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChartOfAccount` that was deleted by this mutation. */
  chartOfAccount?: Maybe<ChartOfAccount>;
  deletedChartOfAccountId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `ChartOfAccount`. May be used by Relay 1. */
  chartOfAccountEdge?: Maybe<ChartOfAccountsEdge>;
};


/** The output of our delete `ChartOfAccount` mutation. */
export type DeleteChartOfAccountPayloadChartOfAccountEdgeArgs = {
  orderBy?: Maybe<Array<ChartOfAccountsOrderBy>>;
};

/** All input for the `deleteCustomerByCustomerId` mutation. */
export type DeleteCustomerByCustomerIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  customerId: Scalars['Int'];
};

/** All input for the `deleteCustomer` mutation. */
export type DeleteCustomerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Customer` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Customer` mutation. */
export type DeleteCustomerPayload = {
   __typename?: 'DeleteCustomerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Customer` that was deleted by this mutation. */
  customer?: Maybe<Customer>;
  deletedCustomerId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Region` that is related to this `Customer`. */
  regionByRegionId?: Maybe<Region>;
  /** Reads a single `Dealer` that is related to this `Customer`. */
  dealerByDealerId?: Maybe<Dealer>;
  /** An edge for our `Customer`. May be used by Relay 1. */
  customerEdge?: Maybe<CustomersEdge>;
};


/** The output of our delete `Customer` mutation. */
export type DeleteCustomerPayloadCustomerEdgeArgs = {
  orderBy?: Maybe<Array<CustomersOrderBy>>;
};

/** All input for the `deleteDealerByDealerId` mutation. */
export type DeleteDealerByDealerIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  dealerId: Scalars['Int'];
};

/** All input for the `deleteDealer` mutation. */
export type DeleteDealerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Dealer` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Dealer` mutation. */
export type DeleteDealerPayload = {
   __typename?: 'DeleteDealerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Dealer` that was deleted by this mutation. */
  dealer?: Maybe<Dealer>;
  deletedDealerId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Dealer`. May be used by Relay 1. */
  dealerEdge?: Maybe<DealersEdge>;
};


/** The output of our delete `Dealer` mutation. */
export type DeleteDealerPayloadDealerEdgeArgs = {
  orderBy?: Maybe<Array<DealersOrderBy>>;
};

/** All input for the `deleteEstimateByEstimateId` mutation. */
export type DeleteEstimateByEstimateIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  estimateId: Scalars['Int'];
};

/** All input for the `deleteEstimate` mutation. */
export type DeleteEstimateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Estimate` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Estimate` mutation. */
export type DeleteEstimatePayload = {
   __typename?: 'DeleteEstimatePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Estimate` that was deleted by this mutation. */
  estimate?: Maybe<Estimate>;
  deletedEstimateId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Customer` that is related to this `Estimate`. */
  customerByCustomerId?: Maybe<Customer>;
  /** An edge for our `Estimate`. May be used by Relay 1. */
  estimateEdge?: Maybe<EstimatesEdge>;
};


/** The output of our delete `Estimate` mutation. */
export type DeleteEstimatePayloadEstimateEdgeArgs = {
  orderBy?: Maybe<Array<EstimatesOrderBy>>;
};

/** All input for the `deleteEstimateProductByEstimateIdAndProductId` mutation. */
export type DeleteEstimateProductByEstimateIdAndProductIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  estimateId: Scalars['Int'];
  productId: Scalars['Int'];
};

/** All input for the `deleteEstimateProduct` mutation. */
export type DeleteEstimateProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `EstimateProduct` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `EstimateProduct` mutation. */
export type DeleteEstimateProductPayload = {
   __typename?: 'DeleteEstimateProductPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `EstimateProduct` that was deleted by this mutation. */
  estimateProduct?: Maybe<EstimateProduct>;
  deletedEstimateProductId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Estimate` that is related to this `EstimateProduct`. */
  estimateByEstimateId?: Maybe<Estimate>;
  /** Reads a single `Product` that is related to this `EstimateProduct`. */
  productByProductId?: Maybe<Product>;
  /** An edge for our `EstimateProduct`. May be used by Relay 1. */
  estimateProductEdge?: Maybe<EstimateProductsEdge>;
};


/** The output of our delete `EstimateProduct` mutation. */
export type DeleteEstimateProductPayloadEstimateProductEdgeArgs = {
  orderBy?: Maybe<Array<EstimateProductsOrderBy>>;
};

/** All input for the `deleteInvoiceByInvoiceId` mutation. */
export type DeleteInvoiceByInvoiceIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  invoiceId: Scalars['Int'];
};

/** All input for the `deleteInvoice` mutation. */
export type DeleteInvoiceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Invoice` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Invoice` mutation. */
export type DeleteInvoicePayload = {
   __typename?: 'DeleteInvoicePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Invoice` that was deleted by this mutation. */
  invoice?: Maybe<Invoice>;
  deletedInvoiceId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChartOfAccount` that is related to this `Invoice`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Customer` that is related to this `Invoice`. */
  customerByCustomerId?: Maybe<Customer>;
  /** Reads a single `Estimate` that is related to this `Invoice`. */
  estimateByEstimateId?: Maybe<Estimate>;
  /** An edge for our `Invoice`. May be used by Relay 1. */
  invoiceEdge?: Maybe<InvoicesEdge>;
};


/** The output of our delete `Invoice` mutation. */
export type DeleteInvoicePayloadInvoiceEdgeArgs = {
  orderBy?: Maybe<Array<InvoicesOrderBy>>;
};

/** All input for the `deleteInvoiceProductByInvoiceIdAndProductId` mutation. */
export type DeleteInvoiceProductByInvoiceIdAndProductIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  invoiceId: Scalars['Int'];
  productId: Scalars['Int'];
};

/** All input for the `deleteInvoiceProduct` mutation. */
export type DeleteInvoiceProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `InvoiceProduct` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `InvoiceProduct` mutation. */
export type DeleteInvoiceProductPayload = {
   __typename?: 'DeleteInvoiceProductPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `InvoiceProduct` that was deleted by this mutation. */
  invoiceProduct?: Maybe<InvoiceProduct>;
  deletedInvoiceProductId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Invoice` that is related to this `InvoiceProduct`. */
  invoiceByInvoiceId?: Maybe<Invoice>;
  /** Reads a single `Product` that is related to this `InvoiceProduct`. */
  productByProductId?: Maybe<Product>;
  /** An edge for our `InvoiceProduct`. May be used by Relay 1. */
  invoiceProductEdge?: Maybe<InvoiceProductsEdge>;
};


/** The output of our delete `InvoiceProduct` mutation. */
export type DeleteInvoiceProductPayloadInvoiceProductEdgeArgs = {
  orderBy?: Maybe<Array<InvoiceProductsOrderBy>>;
};

/** All input for the `deleteJournalEntryByTransactionIdAndAccountId` mutation. */
export type DeleteJournalEntryByTransactionIdAndAccountIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  transactionId: Scalars['Int'];
  accountId: Scalars['Int'];
};

/** All input for the `deleteJournalEntry` mutation. */
export type DeleteJournalEntryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `JournalEntry` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `JournalEntry` mutation. */
export type DeleteJournalEntryPayload = {
   __typename?: 'DeleteJournalEntryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `JournalEntry` that was deleted by this mutation. */
  journalEntry?: Maybe<JournalEntry>;
  deletedJournalEntryId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Transaction` that is related to this `JournalEntry`. */
  transactionByTransactionId?: Maybe<Transaction>;
  /** Reads a single `ChartOfAccount` that is related to this `JournalEntry`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** An edge for our `JournalEntry`. May be used by Relay 1. */
  journalEntryEdge?: Maybe<JournalEntriesEdge>;
};


/** The output of our delete `JournalEntry` mutation. */
export type DeleteJournalEntryPayloadJournalEntryEdgeArgs = {
  orderBy?: Maybe<Array<JournalEntriesOrderBy>>;
};

/** All input for the `deleteProductByProductId` mutation. */
export type DeleteProductByProductIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
};

/** All input for the `deleteProduct` mutation. */
export type DeleteProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Product` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Product` mutation. */
export type DeleteProductPayload = {
   __typename?: 'DeleteProductPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Product` that was deleted by this mutation. */
  product?: Maybe<Product>;
  deletedProductId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChartOfAccount` that is related to this `Product`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Tax` that is related to this `Product`. */
  taxByTaxId?: Maybe<Tax>;
  /** An edge for our `Product`. May be used by Relay 1. */
  productEdge?: Maybe<ProductsEdge>;
};


/** The output of our delete `Product` mutation. */
export type DeleteProductPayloadProductEdgeArgs = {
  orderBy?: Maybe<Array<ProductsOrderBy>>;
};

/** All input for the `deletePurchaseOrderByPoId` mutation. */
export type DeletePurchaseOrderByPoIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  poId: Scalars['Int'];
};

/** All input for the `deletePurchaseOrder` mutation. */
export type DeletePurchaseOrderInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `PurchaseOrder` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `PurchaseOrder` mutation. */
export type DeletePurchaseOrderPayload = {
   __typename?: 'DeletePurchaseOrderPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PurchaseOrder` that was deleted by this mutation. */
  purchaseOrder?: Maybe<PurchaseOrder>;
  deletedPurchaseOrderId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChartOfAccount` that is related to this `PurchaseOrder`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Vendor` that is related to this `PurchaseOrder`. */
  vendorByVendorId?: Maybe<Vendor>;
  /** An edge for our `PurchaseOrder`. May be used by Relay 1. */
  purchaseOrderEdge?: Maybe<PurchaseOrdersEdge>;
};


/** The output of our delete `PurchaseOrder` mutation. */
export type DeletePurchaseOrderPayloadPurchaseOrderEdgeArgs = {
  orderBy?: Maybe<Array<PurchaseOrdersOrderBy>>;
};

/** All input for the `deleteReceiptByReceiptId` mutation. */
export type DeleteReceiptByReceiptIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  receiptId: Scalars['Int'];
};

/** All input for the `deleteReceipt` mutation. */
export type DeleteReceiptInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Receipt` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Receipt` mutation. */
export type DeleteReceiptPayload = {
   __typename?: 'DeleteReceiptPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Receipt` that was deleted by this mutation. */
  receipt?: Maybe<Receipt>;
  deletedReceiptId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChartOfAccount` that is related to this `Receipt`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Invoice` that is related to this `Receipt`. */
  invoiceByInvoiceId?: Maybe<Invoice>;
  /** An edge for our `Receipt`. May be used by Relay 1. */
  receiptEdge?: Maybe<ReceiptsEdge>;
};


/** The output of our delete `Receipt` mutation. */
export type DeleteReceiptPayloadReceiptEdgeArgs = {
  orderBy?: Maybe<Array<ReceiptsOrderBy>>;
};

/** All input for the `deleteRegionByRegionId` mutation. */
export type DeleteRegionByRegionIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  regionId: Scalars['Int'];
};

/** All input for the `deleteRegion` mutation. */
export type DeleteRegionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Region` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Region` mutation. */
export type DeleteRegionPayload = {
   __typename?: 'DeleteRegionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Region` that was deleted by this mutation. */
  region?: Maybe<Region>;
  deletedRegionId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Region`. May be used by Relay 1. */
  regionEdge?: Maybe<RegionsEdge>;
};


/** The output of our delete `Region` mutation. */
export type DeleteRegionPayloadRegionEdgeArgs = {
  orderBy?: Maybe<Array<RegionsOrderBy>>;
};

/** All input for the `deleteSubBillPaymentBySubBillPaymentId` mutation. */
export type DeleteSubBillPaymentBySubBillPaymentIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  subBillPaymentId: Scalars['Int'];
};

/** All input for the `deleteSubBillPayment` mutation. */
export type DeleteSubBillPaymentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SubBillPayment` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `SubBillPayment` mutation. */
export type DeleteSubBillPaymentPayload = {
   __typename?: 'DeleteSubBillPaymentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `SubBillPayment` that was deleted by this mutation. */
  subBillPayment?: Maybe<SubBillPayment>;
  deletedSubBillPaymentId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `BillPayment` that is related to this `SubBillPayment`. */
  billPaymentByBillPaymentId?: Maybe<BillPayment>;
  /** Reads a single `Bill` that is related to this `SubBillPayment`. */
  billByBillId?: Maybe<Bill>;
  /** An edge for our `SubBillPayment`. May be used by Relay 1. */
  subBillPaymentEdge?: Maybe<SubBillPaymentsEdge>;
};


/** The output of our delete `SubBillPayment` mutation. */
export type DeleteSubBillPaymentPayloadSubBillPaymentEdgeArgs = {
  orderBy?: Maybe<Array<SubBillPaymentsOrderBy>>;
};

/** All input for the `deleteSubReceiptBySubReceiptId` mutation. */
export type DeleteSubReceiptBySubReceiptIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  subReceiptId: Scalars['Int'];
};

/** All input for the `deleteSubReceipt` mutation. */
export type DeleteSubReceiptInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SubReceipt` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `SubReceipt` mutation. */
export type DeleteSubReceiptPayload = {
   __typename?: 'DeleteSubReceiptPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `SubReceipt` that was deleted by this mutation. */
  subReceipt?: Maybe<SubReceipt>;
  deletedSubReceiptId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Receipt` that is related to this `SubReceipt`. */
  receiptByReceiptId?: Maybe<Receipt>;
  /** Reads a single `Invoice` that is related to this `SubReceipt`. */
  invoiceByInvoiceId?: Maybe<Invoice>;
  /** An edge for our `SubReceipt`. May be used by Relay 1. */
  subReceiptEdge?: Maybe<SubReceiptsEdge>;
};


/** The output of our delete `SubReceipt` mutation. */
export type DeleteSubReceiptPayloadSubReceiptEdgeArgs = {
  orderBy?: Maybe<Array<SubReceiptsOrderBy>>;
};

/** All input for the `deleteTaxByTaxId` mutation. */
export type DeleteTaxByTaxIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  taxId: Scalars['Int'];
};

/** All input for the `deleteTax` mutation. */
export type DeleteTaxInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Tax` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Tax` mutation. */
export type DeleteTaxPayload = {
   __typename?: 'DeleteTaxPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Tax` that was deleted by this mutation. */
  tax?: Maybe<Tax>;
  deletedTaxId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Tax`. May be used by Relay 1. */
  taxEdge?: Maybe<TaxesEdge>;
};


/** The output of our delete `Tax` mutation. */
export type DeleteTaxPayloadTaxEdgeArgs = {
  orderBy?: Maybe<Array<TaxesOrderBy>>;
};

/** All input for the `deleteTransactionByTransactionId` mutation. */
export type DeleteTransactionByTransactionIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  transactionId: Scalars['Int'];
};

/** All input for the `deleteTransaction` mutation. */
export type DeleteTransactionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Transaction` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Transaction` mutation. */
export type DeleteTransactionPayload = {
   __typename?: 'DeleteTransactionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Transaction` that was deleted by this mutation. */
  transaction?: Maybe<Transaction>;
  deletedTransactionId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Transaction`. May be used by Relay 1. */
  transactionEdge?: Maybe<TransactionsEdge>;
};


/** The output of our delete `Transaction` mutation. */
export type DeleteTransactionPayloadTransactionEdgeArgs = {
  orderBy?: Maybe<Array<TransactionsOrderBy>>;
};

/** All input for the `deleteVendorByVendorId` mutation. */
export type DeleteVendorByVendorIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  vendorId: Scalars['Int'];
};

/** All input for the `deleteVendor` mutation. */
export type DeleteVendorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Vendor` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Vendor` mutation. */
export type DeleteVendorPayload = {
   __typename?: 'DeleteVendorPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Vendor` that was deleted by this mutation. */
  vendor?: Maybe<Vendor>;
  deletedVendorId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Vendor`. May be used by Relay 1. */
  vendorEdge?: Maybe<VendorsEdge>;
};


/** The output of our delete `Vendor` mutation. */
export type DeleteVendorPayloadVendorEdgeArgs = {
  orderBy?: Maybe<Array<VendorsOrderBy>>;
};

export type Estimate = Node & {
   __typename?: 'Estimate';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  estimateId: Scalars['Int'];
  status?: Maybe<EstimateStatus>;
  date?: Maybe<Scalars['Date']>;
  memo?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['Int']>;
  /** Reads a single `Customer` that is related to this `Estimate`. */
  customerByCustomerId?: Maybe<Customer>;
  /** Reads and enables pagination through a set of `EstimateProduct`. */
  estimateProductsByEstimateId: EstimateProductsConnection;
  /** Reads and enables pagination through a set of `Invoice`. */
  invoicesByEstimateId: InvoicesConnection;
};


export type EstimateEstimateProductsByEstimateIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<EstimateProductsOrderBy>>;
  condition?: Maybe<EstimateProductCondition>;
};


export type EstimateInvoicesByEstimateIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<InvoicesOrderBy>>;
  condition?: Maybe<InvoiceCondition>;
};

/**
 * A condition to be used against `Estimate` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type EstimateCondition = {
  /** Checks for equality with the object’s `estimateId` field. */
  estimateId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<EstimateStatus>;
  /** Checks for equality with the object’s `date` field. */
  date?: Maybe<Scalars['Date']>;
  /** Checks for equality with the object’s `memo` field. */
  memo?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `customerId` field. */
  customerId?: Maybe<Scalars['Int']>;
};

/** An input for mutations affecting `Estimate` */
export type EstimateInput = {
  estimateId?: Maybe<Scalars['Int']>;
  status?: Maybe<EstimateStatus>;
  date?: Maybe<Scalars['Date']>;
  memo?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `Estimate`. Fields that are set will be updated. */
export type EstimatePatch = {
  estimateId?: Maybe<Scalars['Int']>;
  status?: Maybe<EstimateStatus>;
  date?: Maybe<Scalars['Date']>;
  memo?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['Int']>;
};

export type EstimateProduct = Node & {
   __typename?: 'EstimateProduct';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  estimateId: Scalars['Int'];
  productId: Scalars['Int'];
  quantity?: Maybe<Scalars['Int']>;
  estimatePrice?: Maybe<Scalars['Int']>;
  /** Reads a single `Estimate` that is related to this `EstimateProduct`. */
  estimateByEstimateId?: Maybe<Estimate>;
  /** Reads a single `Product` that is related to this `EstimateProduct`. */
  productByProductId?: Maybe<Product>;
};

/**
 * A condition to be used against `EstimateProduct` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type EstimateProductCondition = {
  /** Checks for equality with the object’s `estimateId` field. */
  estimateId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `productId` field. */
  productId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `quantity` field. */
  quantity?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `estimatePrice` field. */
  estimatePrice?: Maybe<Scalars['Int']>;
};

/** An input for mutations affecting `EstimateProduct` */
export type EstimateProductInput = {
  estimateId: Scalars['Int'];
  productId: Scalars['Int'];
  quantity?: Maybe<Scalars['Int']>;
  estimatePrice?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `EstimateProduct`. Fields that are set will be updated. */
export type EstimateProductPatch = {
  estimateId?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  estimatePrice?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `EstimateProduct` values. */
export type EstimateProductsConnection = {
   __typename?: 'EstimateProductsConnection';
  /** A list of `EstimateProduct` objects. */
  nodes: Array<Maybe<EstimateProduct>>;
  /** A list of edges which contains the `EstimateProduct` and cursor to aid in pagination. */
  edges: Array<EstimateProductsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `EstimateProduct` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `EstimateProduct` edge in the connection. */
export type EstimateProductsEdge = {
   __typename?: 'EstimateProductsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `EstimateProduct` at the end of the edge. */
  node?: Maybe<EstimateProduct>;
};

/** Methods to use when ordering `EstimateProduct`. */
export enum EstimateProductsOrderBy {
  Natural = 'NATURAL',
  EstimateIdAsc = 'ESTIMATE_ID_ASC',
  EstimateIdDesc = 'ESTIMATE_ID_DESC',
  ProductIdAsc = 'PRODUCT_ID_ASC',
  ProductIdDesc = 'PRODUCT_ID_DESC',
  QuantityAsc = 'QUANTITY_ASC',
  QuantityDesc = 'QUANTITY_DESC',
  EstimatePriceAsc = 'ESTIMATE_PRICE_ASC',
  EstimatePriceDesc = 'ESTIMATE_PRICE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `Estimate` values. */
export type EstimatesConnection = {
   __typename?: 'EstimatesConnection';
  /** A list of `Estimate` objects. */
  nodes: Array<Maybe<Estimate>>;
  /** A list of edges which contains the `Estimate` and cursor to aid in pagination. */
  edges: Array<EstimatesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Estimate` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Estimate` edge in the connection. */
export type EstimatesEdge = {
   __typename?: 'EstimatesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Estimate` at the end of the edge. */
  node?: Maybe<Estimate>;
};

/** Methods to use when ordering `Estimate`. */
export enum EstimatesOrderBy {
  Natural = 'NATURAL',
  EstimateIdAsc = 'ESTIMATE_ID_ASC',
  EstimateIdDesc = 'ESTIMATE_ID_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  MemoAsc = 'MEMO_ASC',
  MemoDesc = 'MEMO_DESC',
  CustomerIdAsc = 'CUSTOMER_ID_ASC',
  CustomerIdDesc = 'CUSTOMER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export enum EstimateStatus {
  Invoiced = 'INVOICED',
  NotInvoiced = 'NOT_INVOICED'
}

export type Invoice = Node & {
   __typename?: 'Invoice';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  invoiceId: Scalars['Int'];
  status?: Maybe<InvoiceStatus>;
  date?: Maybe<Scalars['Date']>;
  amount?: Maybe<Scalars['BigFloat']>;
  memo?: Maybe<Scalars['String']>;
  paymentDue?: Maybe<Scalars['Date']>;
  accountId?: Maybe<Scalars['Int']>;
  customerId?: Maybe<Scalars['Int']>;
  estimateId?: Maybe<Scalars['Int']>;
  /** Reads a single `ChartOfAccount` that is related to this `Invoice`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Customer` that is related to this `Invoice`. */
  customerByCustomerId?: Maybe<Customer>;
  /** Reads a single `Estimate` that is related to this `Invoice`. */
  estimateByEstimateId?: Maybe<Estimate>;
  /** Reads and enables pagination through a set of `InvoiceProduct`. */
  invoiceProductsByInvoiceId: InvoiceProductsConnection;
  /** Reads and enables pagination through a set of `Receipt`. */
  receiptsByInvoiceId: ReceiptsConnection;
  /** Reads and enables pagination through a set of `SubReceipt`. */
  subReceiptsByInvoiceId: SubReceiptsConnection;
};


export type InvoiceInvoiceProductsByInvoiceIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<InvoiceProductsOrderBy>>;
  condition?: Maybe<InvoiceProductCondition>;
};


export type InvoiceReceiptsByInvoiceIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ReceiptsOrderBy>>;
  condition?: Maybe<ReceiptCondition>;
};


export type InvoiceSubReceiptsByInvoiceIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<SubReceiptsOrderBy>>;
  condition?: Maybe<SubReceiptCondition>;
};

/** A condition to be used against `Invoice` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type InvoiceCondition = {
  /** Checks for equality with the object’s `invoiceId` field. */
  invoiceId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<InvoiceStatus>;
  /** Checks for equality with the object’s `date` field. */
  date?: Maybe<Scalars['Date']>;
  /** Checks for equality with the object’s `amount` field. */
  amount?: Maybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `memo` field. */
  memo?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `paymentDue` field. */
  paymentDue?: Maybe<Scalars['Date']>;
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `customerId` field. */
  customerId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `estimateId` field. */
  estimateId?: Maybe<Scalars['Int']>;
};

/** An input for mutations affecting `Invoice` */
export type InvoiceInput = {
  invoiceId?: Maybe<Scalars['Int']>;
  status?: Maybe<InvoiceStatus>;
  date?: Maybe<Scalars['Date']>;
  amount?: Maybe<Scalars['BigFloat']>;
  memo?: Maybe<Scalars['String']>;
  paymentDue?: Maybe<Scalars['Date']>;
  accountId?: Maybe<Scalars['Int']>;
  customerId?: Maybe<Scalars['Int']>;
  estimateId?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `Invoice`. Fields that are set will be updated. */
export type InvoicePatch = {
  invoiceId?: Maybe<Scalars['Int']>;
  status?: Maybe<InvoiceStatus>;
  date?: Maybe<Scalars['Date']>;
  amount?: Maybe<Scalars['BigFloat']>;
  memo?: Maybe<Scalars['String']>;
  paymentDue?: Maybe<Scalars['Date']>;
  accountId?: Maybe<Scalars['Int']>;
  customerId?: Maybe<Scalars['Int']>;
  estimateId?: Maybe<Scalars['Int']>;
};

export type InvoiceProduct = Node & {
   __typename?: 'InvoiceProduct';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  invoiceId: Scalars['Int'];
  productId: Scalars['Int'];
  quantity?: Maybe<Scalars['Int']>;
  invoicePrice?: Maybe<Scalars['Int']>;
  /** Reads a single `Invoice` that is related to this `InvoiceProduct`. */
  invoiceByInvoiceId?: Maybe<Invoice>;
  /** Reads a single `Product` that is related to this `InvoiceProduct`. */
  productByProductId?: Maybe<Product>;
};

/**
 * A condition to be used against `InvoiceProduct` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type InvoiceProductCondition = {
  /** Checks for equality with the object’s `invoiceId` field. */
  invoiceId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `productId` field. */
  productId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `quantity` field. */
  quantity?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `invoicePrice` field. */
  invoicePrice?: Maybe<Scalars['Int']>;
};

/** An input for mutations affecting `InvoiceProduct` */
export type InvoiceProductInput = {
  invoiceId: Scalars['Int'];
  productId: Scalars['Int'];
  quantity?: Maybe<Scalars['Int']>;
  invoicePrice?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `InvoiceProduct`. Fields that are set will be updated. */
export type InvoiceProductPatch = {
  invoiceId?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  invoicePrice?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `InvoiceProduct` values. */
export type InvoiceProductsConnection = {
   __typename?: 'InvoiceProductsConnection';
  /** A list of `InvoiceProduct` objects. */
  nodes: Array<Maybe<InvoiceProduct>>;
  /** A list of edges which contains the `InvoiceProduct` and cursor to aid in pagination. */
  edges: Array<InvoiceProductsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `InvoiceProduct` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `InvoiceProduct` edge in the connection. */
export type InvoiceProductsEdge = {
   __typename?: 'InvoiceProductsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `InvoiceProduct` at the end of the edge. */
  node?: Maybe<InvoiceProduct>;
};

/** Methods to use when ordering `InvoiceProduct`. */
export enum InvoiceProductsOrderBy {
  Natural = 'NATURAL',
  InvoiceIdAsc = 'INVOICE_ID_ASC',
  InvoiceIdDesc = 'INVOICE_ID_DESC',
  ProductIdAsc = 'PRODUCT_ID_ASC',
  ProductIdDesc = 'PRODUCT_ID_DESC',
  QuantityAsc = 'QUANTITY_ASC',
  QuantityDesc = 'QUANTITY_DESC',
  InvoicePriceAsc = 'INVOICE_PRICE_ASC',
  InvoicePriceDesc = 'INVOICE_PRICE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `Invoice` values. */
export type InvoicesConnection = {
   __typename?: 'InvoicesConnection';
  /** A list of `Invoice` objects. */
  nodes: Array<Maybe<Invoice>>;
  /** A list of edges which contains the `Invoice` and cursor to aid in pagination. */
  edges: Array<InvoicesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Invoice` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Invoice` edge in the connection. */
export type InvoicesEdge = {
   __typename?: 'InvoicesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Invoice` at the end of the edge. */
  node?: Maybe<Invoice>;
};

/** Methods to use when ordering `Invoice`. */
export enum InvoicesOrderBy {
  Natural = 'NATURAL',
  InvoiceIdAsc = 'INVOICE_ID_ASC',
  InvoiceIdDesc = 'INVOICE_ID_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  MemoAsc = 'MEMO_ASC',
  MemoDesc = 'MEMO_DESC',
  PaymentDueAsc = 'PAYMENT_DUE_ASC',
  PaymentDueDesc = 'PAYMENT_DUE_DESC',
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  CustomerIdAsc = 'CUSTOMER_ID_ASC',
  CustomerIdDesc = 'CUSTOMER_ID_DESC',
  EstimateIdAsc = 'ESTIMATE_ID_ASC',
  EstimateIdDesc = 'ESTIMATE_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export enum InvoiceStatus {
  Paid = 'PAID',
  NotPaid = 'NOT_PAID'
}

/** A connection to a list of `JournalEntry` values. */
export type JournalEntriesConnection = {
   __typename?: 'JournalEntriesConnection';
  /** A list of `JournalEntry` objects. */
  nodes: Array<Maybe<JournalEntry>>;
  /** A list of edges which contains the `JournalEntry` and cursor to aid in pagination. */
  edges: Array<JournalEntriesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `JournalEntry` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `JournalEntry` edge in the connection. */
export type JournalEntriesEdge = {
   __typename?: 'JournalEntriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `JournalEntry` at the end of the edge. */
  node?: Maybe<JournalEntry>;
};

/** Methods to use when ordering `JournalEntry`. */
export enum JournalEntriesOrderBy {
  Natural = 'NATURAL',
  TransactionIdAsc = 'TRANSACTION_ID_ASC',
  TransactionIdDesc = 'TRANSACTION_ID_DESC',
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type JournalEntry = Node & {
   __typename?: 'JournalEntry';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  transactionId: Scalars['Int'];
  accountId: Scalars['Int'];
  /** Reads a single `Transaction` that is related to this `JournalEntry`. */
  transactionByTransactionId?: Maybe<Transaction>;
  /** Reads a single `ChartOfAccount` that is related to this `JournalEntry`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
};

/**
 * A condition to be used against `JournalEntry` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type JournalEntryCondition = {
  /** Checks for equality with the object’s `transactionId` field. */
  transactionId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: Maybe<Scalars['Int']>;
};

/** An input for mutations affecting `JournalEntry` */
export type JournalEntryInput = {
  transactionId: Scalars['Int'];
  accountId: Scalars['Int'];
};

/** Represents an update to a `JournalEntry`. Fields that are set will be updated. */
export type JournalEntryPatch = {
  transactionId?: Maybe<Scalars['Int']>;
  accountId?: Maybe<Scalars['Int']>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
   __typename?: 'Mutation';
  /** Creates a single `Bill`. */
  createBill?: Maybe<CreateBillPayload>;
  /** Creates a single `BillPayment`. */
  createBillPayment?: Maybe<CreateBillPaymentPayload>;
  /** Creates a single `ChartOfAccount`. */
  createChartOfAccount?: Maybe<CreateChartOfAccountPayload>;
  /** Creates a single `Customer`. */
  createCustomer?: Maybe<CreateCustomerPayload>;
  /** Creates a single `Dealer`. */
  createDealer?: Maybe<CreateDealerPayload>;
  /** Creates a single `Estimate`. */
  createEstimate?: Maybe<CreateEstimatePayload>;
  /** Creates a single `EstimateProduct`. */
  createEstimateProduct?: Maybe<CreateEstimateProductPayload>;
  /** Creates a single `Invoice`. */
  createInvoice?: Maybe<CreateInvoicePayload>;
  /** Creates a single `InvoiceProduct`. */
  createInvoiceProduct?: Maybe<CreateInvoiceProductPayload>;
  /** Creates a single `JournalEntry`. */
  createJournalEntry?: Maybe<CreateJournalEntryPayload>;
  /** Creates a single `Product`. */
  createProduct?: Maybe<CreateProductPayload>;
  /** Creates a single `PurchaseOrder`. */
  createPurchaseOrder?: Maybe<CreatePurchaseOrderPayload>;
  /** Creates a single `Receipt`. */
  createReceipt?: Maybe<CreateReceiptPayload>;
  /** Creates a single `Region`. */
  createRegion?: Maybe<CreateRegionPayload>;
  /** Creates a single `SubBillPayment`. */
  createSubBillPayment?: Maybe<CreateSubBillPaymentPayload>;
  /** Creates a single `SubReceipt`. */
  createSubReceipt?: Maybe<CreateSubReceiptPayload>;
  /** Creates a single `Tax`. */
  createTax?: Maybe<CreateTaxPayload>;
  /** Creates a single `Transaction`. */
  createTransaction?: Maybe<CreateTransactionPayload>;
  /** Creates a single `Vendor`. */
  createVendor?: Maybe<CreateVendorPayload>;
  /** Updates a single `Bill` using its globally unique id and a patch. */
  updateBill?: Maybe<UpdateBillPayload>;
  /** Updates a single `Bill` using a unique key and a patch. */
  updateBillByBillId?: Maybe<UpdateBillPayload>;
  /** Updates a single `BillPayment` using its globally unique id and a patch. */
  updateBillPayment?: Maybe<UpdateBillPaymentPayload>;
  /** Updates a single `BillPayment` using a unique key and a patch. */
  updateBillPaymentByBillPaymentId?: Maybe<UpdateBillPaymentPayload>;
  /** Updates a single `ChartOfAccount` using its globally unique id and a patch. */
  updateChartOfAccount?: Maybe<UpdateChartOfAccountPayload>;
  /** Updates a single `ChartOfAccount` using a unique key and a patch. */
  updateChartOfAccountByAccountId?: Maybe<UpdateChartOfAccountPayload>;
  /** Updates a single `Customer` using its globally unique id and a patch. */
  updateCustomer?: Maybe<UpdateCustomerPayload>;
  /** Updates a single `Customer` using a unique key and a patch. */
  updateCustomerByCustomerId?: Maybe<UpdateCustomerPayload>;
  /** Updates a single `Dealer` using its globally unique id and a patch. */
  updateDealer?: Maybe<UpdateDealerPayload>;
  /** Updates a single `Dealer` using a unique key and a patch. */
  updateDealerByDealerId?: Maybe<UpdateDealerPayload>;
  /** Updates a single `Estimate` using its globally unique id and a patch. */
  updateEstimate?: Maybe<UpdateEstimatePayload>;
  /** Updates a single `Estimate` using a unique key and a patch. */
  updateEstimateByEstimateId?: Maybe<UpdateEstimatePayload>;
  /** Updates a single `EstimateProduct` using its globally unique id and a patch. */
  updateEstimateProduct?: Maybe<UpdateEstimateProductPayload>;
  /** Updates a single `EstimateProduct` using a unique key and a patch. */
  updateEstimateProductByEstimateIdAndProductId?: Maybe<UpdateEstimateProductPayload>;
  /** Updates a single `Invoice` using its globally unique id and a patch. */
  updateInvoice?: Maybe<UpdateInvoicePayload>;
  /** Updates a single `Invoice` using a unique key and a patch. */
  updateInvoiceByInvoiceId?: Maybe<UpdateInvoicePayload>;
  /** Updates a single `InvoiceProduct` using its globally unique id and a patch. */
  updateInvoiceProduct?: Maybe<UpdateInvoiceProductPayload>;
  /** Updates a single `InvoiceProduct` using a unique key and a patch. */
  updateInvoiceProductByInvoiceIdAndProductId?: Maybe<UpdateInvoiceProductPayload>;
  /** Updates a single `JournalEntry` using its globally unique id and a patch. */
  updateJournalEntry?: Maybe<UpdateJournalEntryPayload>;
  /** Updates a single `JournalEntry` using a unique key and a patch. */
  updateJournalEntryByTransactionIdAndAccountId?: Maybe<UpdateJournalEntryPayload>;
  /** Updates a single `Product` using its globally unique id and a patch. */
  updateProduct?: Maybe<UpdateProductPayload>;
  /** Updates a single `Product` using a unique key and a patch. */
  updateProductByProductId?: Maybe<UpdateProductPayload>;
  /** Updates a single `PurchaseOrder` using its globally unique id and a patch. */
  updatePurchaseOrder?: Maybe<UpdatePurchaseOrderPayload>;
  /** Updates a single `PurchaseOrder` using a unique key and a patch. */
  updatePurchaseOrderByPoId?: Maybe<UpdatePurchaseOrderPayload>;
  /** Updates a single `Receipt` using its globally unique id and a patch. */
  updateReceipt?: Maybe<UpdateReceiptPayload>;
  /** Updates a single `Receipt` using a unique key and a patch. */
  updateReceiptByReceiptId?: Maybe<UpdateReceiptPayload>;
  /** Updates a single `Region` using its globally unique id and a patch. */
  updateRegion?: Maybe<UpdateRegionPayload>;
  /** Updates a single `Region` using a unique key and a patch. */
  updateRegionByRegionId?: Maybe<UpdateRegionPayload>;
  /** Updates a single `SubBillPayment` using its globally unique id and a patch. */
  updateSubBillPayment?: Maybe<UpdateSubBillPaymentPayload>;
  /** Updates a single `SubBillPayment` using a unique key and a patch. */
  updateSubBillPaymentBySubBillPaymentId?: Maybe<UpdateSubBillPaymentPayload>;
  /** Updates a single `SubReceipt` using its globally unique id and a patch. */
  updateSubReceipt?: Maybe<UpdateSubReceiptPayload>;
  /** Updates a single `SubReceipt` using a unique key and a patch. */
  updateSubReceiptBySubReceiptId?: Maybe<UpdateSubReceiptPayload>;
  /** Updates a single `Tax` using its globally unique id and a patch. */
  updateTax?: Maybe<UpdateTaxPayload>;
  /** Updates a single `Tax` using a unique key and a patch. */
  updateTaxByTaxId?: Maybe<UpdateTaxPayload>;
  /** Updates a single `Transaction` using its globally unique id and a patch. */
  updateTransaction?: Maybe<UpdateTransactionPayload>;
  /** Updates a single `Transaction` using a unique key and a patch. */
  updateTransactionByTransactionId?: Maybe<UpdateTransactionPayload>;
  /** Updates a single `Vendor` using its globally unique id and a patch. */
  updateVendor?: Maybe<UpdateVendorPayload>;
  /** Updates a single `Vendor` using a unique key and a patch. */
  updateVendorByVendorId?: Maybe<UpdateVendorPayload>;
  /** Deletes a single `Bill` using its globally unique id. */
  deleteBill?: Maybe<DeleteBillPayload>;
  /** Deletes a single `Bill` using a unique key. */
  deleteBillByBillId?: Maybe<DeleteBillPayload>;
  /** Deletes a single `BillPayment` using its globally unique id. */
  deleteBillPayment?: Maybe<DeleteBillPaymentPayload>;
  /** Deletes a single `BillPayment` using a unique key. */
  deleteBillPaymentByBillPaymentId?: Maybe<DeleteBillPaymentPayload>;
  /** Deletes a single `ChartOfAccount` using its globally unique id. */
  deleteChartOfAccount?: Maybe<DeleteChartOfAccountPayload>;
  /** Deletes a single `ChartOfAccount` using a unique key. */
  deleteChartOfAccountByAccountId?: Maybe<DeleteChartOfAccountPayload>;
  /** Deletes a single `Customer` using its globally unique id. */
  deleteCustomer?: Maybe<DeleteCustomerPayload>;
  /** Deletes a single `Customer` using a unique key. */
  deleteCustomerByCustomerId?: Maybe<DeleteCustomerPayload>;
  /** Deletes a single `Dealer` using its globally unique id. */
  deleteDealer?: Maybe<DeleteDealerPayload>;
  /** Deletes a single `Dealer` using a unique key. */
  deleteDealerByDealerId?: Maybe<DeleteDealerPayload>;
  /** Deletes a single `Estimate` using its globally unique id. */
  deleteEstimate?: Maybe<DeleteEstimatePayload>;
  /** Deletes a single `Estimate` using a unique key. */
  deleteEstimateByEstimateId?: Maybe<DeleteEstimatePayload>;
  /** Deletes a single `EstimateProduct` using its globally unique id. */
  deleteEstimateProduct?: Maybe<DeleteEstimateProductPayload>;
  /** Deletes a single `EstimateProduct` using a unique key. */
  deleteEstimateProductByEstimateIdAndProductId?: Maybe<DeleteEstimateProductPayload>;
  /** Deletes a single `Invoice` using its globally unique id. */
  deleteInvoice?: Maybe<DeleteInvoicePayload>;
  /** Deletes a single `Invoice` using a unique key. */
  deleteInvoiceByInvoiceId?: Maybe<DeleteInvoicePayload>;
  /** Deletes a single `InvoiceProduct` using its globally unique id. */
  deleteInvoiceProduct?: Maybe<DeleteInvoiceProductPayload>;
  /** Deletes a single `InvoiceProduct` using a unique key. */
  deleteInvoiceProductByInvoiceIdAndProductId?: Maybe<DeleteInvoiceProductPayload>;
  /** Deletes a single `JournalEntry` using its globally unique id. */
  deleteJournalEntry?: Maybe<DeleteJournalEntryPayload>;
  /** Deletes a single `JournalEntry` using a unique key. */
  deleteJournalEntryByTransactionIdAndAccountId?: Maybe<DeleteJournalEntryPayload>;
  /** Deletes a single `Product` using its globally unique id. */
  deleteProduct?: Maybe<DeleteProductPayload>;
  /** Deletes a single `Product` using a unique key. */
  deleteProductByProductId?: Maybe<DeleteProductPayload>;
  /** Deletes a single `PurchaseOrder` using its globally unique id. */
  deletePurchaseOrder?: Maybe<DeletePurchaseOrderPayload>;
  /** Deletes a single `PurchaseOrder` using a unique key. */
  deletePurchaseOrderByPoId?: Maybe<DeletePurchaseOrderPayload>;
  /** Deletes a single `Receipt` using its globally unique id. */
  deleteReceipt?: Maybe<DeleteReceiptPayload>;
  /** Deletes a single `Receipt` using a unique key. */
  deleteReceiptByReceiptId?: Maybe<DeleteReceiptPayload>;
  /** Deletes a single `Region` using its globally unique id. */
  deleteRegion?: Maybe<DeleteRegionPayload>;
  /** Deletes a single `Region` using a unique key. */
  deleteRegionByRegionId?: Maybe<DeleteRegionPayload>;
  /** Deletes a single `SubBillPayment` using its globally unique id. */
  deleteSubBillPayment?: Maybe<DeleteSubBillPaymentPayload>;
  /** Deletes a single `SubBillPayment` using a unique key. */
  deleteSubBillPaymentBySubBillPaymentId?: Maybe<DeleteSubBillPaymentPayload>;
  /** Deletes a single `SubReceipt` using its globally unique id. */
  deleteSubReceipt?: Maybe<DeleteSubReceiptPayload>;
  /** Deletes a single `SubReceipt` using a unique key. */
  deleteSubReceiptBySubReceiptId?: Maybe<DeleteSubReceiptPayload>;
  /** Deletes a single `Tax` using its globally unique id. */
  deleteTax?: Maybe<DeleteTaxPayload>;
  /** Deletes a single `Tax` using a unique key. */
  deleteTaxByTaxId?: Maybe<DeleteTaxPayload>;
  /** Deletes a single `Transaction` using its globally unique id. */
  deleteTransaction?: Maybe<DeleteTransactionPayload>;
  /** Deletes a single `Transaction` using a unique key. */
  deleteTransactionByTransactionId?: Maybe<DeleteTransactionPayload>;
  /** Deletes a single `Vendor` using its globally unique id. */
  deleteVendor?: Maybe<DeleteVendorPayload>;
  /** Deletes a single `Vendor` using a unique key. */
  deleteVendorByVendorId?: Maybe<DeleteVendorPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBillArgs = {
  input: CreateBillInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBillPaymentArgs = {
  input: CreateBillPaymentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateChartOfAccountArgs = {
  input: CreateChartOfAccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateDealerArgs = {
  input: CreateDealerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateEstimateArgs = {
  input: CreateEstimateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateEstimateProductArgs = {
  input: CreateEstimateProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateInvoiceArgs = {
  input: CreateInvoiceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateInvoiceProductArgs = {
  input: CreateInvoiceProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateJournalEntryArgs = {
  input: CreateJournalEntryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePurchaseOrderArgs = {
  input: CreatePurchaseOrderInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateReceiptArgs = {
  input: CreateReceiptInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRegionArgs = {
  input: CreateRegionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSubBillPaymentArgs = {
  input: CreateSubBillPaymentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSubReceiptArgs = {
  input: CreateSubReceiptInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTaxArgs = {
  input: CreateTaxInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTransactionArgs = {
  input: CreateTransactionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateVendorArgs = {
  input: CreateVendorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBillArgs = {
  input: UpdateBillInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBillByBillIdArgs = {
  input: UpdateBillByBillIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBillPaymentArgs = {
  input: UpdateBillPaymentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBillPaymentByBillPaymentIdArgs = {
  input: UpdateBillPaymentByBillPaymentIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateChartOfAccountArgs = {
  input: UpdateChartOfAccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateChartOfAccountByAccountIdArgs = {
  input: UpdateChartOfAccountByAccountIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCustomerByCustomerIdArgs = {
  input: UpdateCustomerByCustomerIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDealerArgs = {
  input: UpdateDealerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDealerByDealerIdArgs = {
  input: UpdateDealerByDealerIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEstimateArgs = {
  input: UpdateEstimateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEstimateByEstimateIdArgs = {
  input: UpdateEstimateByEstimateIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEstimateProductArgs = {
  input: UpdateEstimateProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEstimateProductByEstimateIdAndProductIdArgs = {
  input: UpdateEstimateProductByEstimateIdAndProductIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateInvoiceArgs = {
  input: UpdateInvoiceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateInvoiceByInvoiceIdArgs = {
  input: UpdateInvoiceByInvoiceIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateInvoiceProductArgs = {
  input: UpdateInvoiceProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateInvoiceProductByInvoiceIdAndProductIdArgs = {
  input: UpdateInvoiceProductByInvoiceIdAndProductIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateJournalEntryArgs = {
  input: UpdateJournalEntryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateJournalEntryByTransactionIdAndAccountIdArgs = {
  input: UpdateJournalEntryByTransactionIdAndAccountIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProductByProductIdArgs = {
  input: UpdateProductByProductIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePurchaseOrderArgs = {
  input: UpdatePurchaseOrderInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePurchaseOrderByPoIdArgs = {
  input: UpdatePurchaseOrderByPoIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateReceiptArgs = {
  input: UpdateReceiptInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateReceiptByReceiptIdArgs = {
  input: UpdateReceiptByReceiptIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRegionArgs = {
  input: UpdateRegionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRegionByRegionIdArgs = {
  input: UpdateRegionByRegionIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSubBillPaymentArgs = {
  input: UpdateSubBillPaymentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSubBillPaymentBySubBillPaymentIdArgs = {
  input: UpdateSubBillPaymentBySubBillPaymentIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSubReceiptArgs = {
  input: UpdateSubReceiptInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSubReceiptBySubReceiptIdArgs = {
  input: UpdateSubReceiptBySubReceiptIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTaxArgs = {
  input: UpdateTaxInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTaxByTaxIdArgs = {
  input: UpdateTaxByTaxIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTransactionArgs = {
  input: UpdateTransactionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTransactionByTransactionIdArgs = {
  input: UpdateTransactionByTransactionIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateVendorArgs = {
  input: UpdateVendorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateVendorByVendorIdArgs = {
  input: UpdateVendorByVendorIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBillArgs = {
  input: DeleteBillInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBillByBillIdArgs = {
  input: DeleteBillByBillIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBillPaymentArgs = {
  input: DeleteBillPaymentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBillPaymentByBillPaymentIdArgs = {
  input: DeleteBillPaymentByBillPaymentIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteChartOfAccountArgs = {
  input: DeleteChartOfAccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteChartOfAccountByAccountIdArgs = {
  input: DeleteChartOfAccountByAccountIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCustomerArgs = {
  input: DeleteCustomerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCustomerByCustomerIdArgs = {
  input: DeleteCustomerByCustomerIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDealerArgs = {
  input: DeleteDealerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDealerByDealerIdArgs = {
  input: DeleteDealerByDealerIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEstimateArgs = {
  input: DeleteEstimateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEstimateByEstimateIdArgs = {
  input: DeleteEstimateByEstimateIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEstimateProductArgs = {
  input: DeleteEstimateProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEstimateProductByEstimateIdAndProductIdArgs = {
  input: DeleteEstimateProductByEstimateIdAndProductIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteInvoiceArgs = {
  input: DeleteInvoiceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteInvoiceByInvoiceIdArgs = {
  input: DeleteInvoiceByInvoiceIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteInvoiceProductArgs = {
  input: DeleteInvoiceProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteInvoiceProductByInvoiceIdAndProductIdArgs = {
  input: DeleteInvoiceProductByInvoiceIdAndProductIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteJournalEntryArgs = {
  input: DeleteJournalEntryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteJournalEntryByTransactionIdAndAccountIdArgs = {
  input: DeleteJournalEntryByTransactionIdAndAccountIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProductArgs = {
  input: DeleteProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProductByProductIdArgs = {
  input: DeleteProductByProductIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePurchaseOrderArgs = {
  input: DeletePurchaseOrderInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePurchaseOrderByPoIdArgs = {
  input: DeletePurchaseOrderByPoIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteReceiptArgs = {
  input: DeleteReceiptInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteReceiptByReceiptIdArgs = {
  input: DeleteReceiptByReceiptIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRegionArgs = {
  input: DeleteRegionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRegionByRegionIdArgs = {
  input: DeleteRegionByRegionIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSubBillPaymentArgs = {
  input: DeleteSubBillPaymentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSubBillPaymentBySubBillPaymentIdArgs = {
  input: DeleteSubBillPaymentBySubBillPaymentIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSubReceiptArgs = {
  input: DeleteSubReceiptInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSubReceiptBySubReceiptIdArgs = {
  input: DeleteSubReceiptBySubReceiptIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTaxArgs = {
  input: DeleteTaxInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTaxByTaxIdArgs = {
  input: DeleteTaxByTaxIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTransactionArgs = {
  input: DeleteTransactionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTransactionByTransactionIdArgs = {
  input: DeleteTransactionByTransactionIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteVendorArgs = {
  input: DeleteVendorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteVendorByVendorIdArgs = {
  input: DeleteVendorByVendorIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
   __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
};

export enum PoStatus {
  Billed = 'BILLED',
  NotBilled = 'NOT_BILLED'
}

export type Product = Node & {
   __typename?: 'Product';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  productId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  productPrice?: Maybe<Scalars['BigFloat']>;
  accountId?: Maybe<Scalars['Int']>;
  taxId?: Maybe<Scalars['Int']>;
  /** Reads a single `ChartOfAccount` that is related to this `Product`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Tax` that is related to this `Product`. */
  taxByTaxId?: Maybe<Tax>;
  /** Reads and enables pagination through a set of `EstimateProduct`. */
  estimateProductsByProductId: EstimateProductsConnection;
  /** Reads and enables pagination through a set of `InvoiceProduct`. */
  invoiceProductsByProductId: InvoiceProductsConnection;
};


export type ProductEstimateProductsByProductIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<EstimateProductsOrderBy>>;
  condition?: Maybe<EstimateProductCondition>;
};


export type ProductInvoiceProductsByProductIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<InvoiceProductsOrderBy>>;
  condition?: Maybe<InvoiceProductCondition>;
};

/** A condition to be used against `Product` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ProductCondition = {
  /** Checks for equality with the object’s `productId` field. */
  productId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `productPrice` field. */
  productPrice?: Maybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `taxId` field. */
  taxId?: Maybe<Scalars['Int']>;
};

/** An input for mutations affecting `Product` */
export type ProductInput = {
  productId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  productPrice?: Maybe<Scalars['BigFloat']>;
  accountId?: Maybe<Scalars['Int']>;
  taxId?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `Product`. Fields that are set will be updated. */
export type ProductPatch = {
  productId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  productPrice?: Maybe<Scalars['BigFloat']>;
  accountId?: Maybe<Scalars['Int']>;
  taxId?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `Product` values. */
export type ProductsConnection = {
   __typename?: 'ProductsConnection';
  /** A list of `Product` objects. */
  nodes: Array<Maybe<Product>>;
  /** A list of edges which contains the `Product` and cursor to aid in pagination. */
  edges: Array<ProductsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Product` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Product` edge in the connection. */
export type ProductsEdge = {
   __typename?: 'ProductsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Product` at the end of the edge. */
  node?: Maybe<Product>;
};

/** Methods to use when ordering `Product`. */
export enum ProductsOrderBy {
  Natural = 'NATURAL',
  ProductIdAsc = 'PRODUCT_ID_ASC',
  ProductIdDesc = 'PRODUCT_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  ProductPriceAsc = 'PRODUCT_PRICE_ASC',
  ProductPriceDesc = 'PRODUCT_PRICE_DESC',
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  TaxIdAsc = 'TAX_ID_ASC',
  TaxIdDesc = 'TAX_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type PurchaseOrder = Node & {
   __typename?: 'PurchaseOrder';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  poId: Scalars['Int'];
  status?: Maybe<PoStatus>;
  date?: Maybe<Scalars['Date']>;
  amount?: Maybe<Scalars['BigFloat']>;
  memo?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['Int']>;
  vendorId?: Maybe<Scalars['Int']>;
  /** Reads a single `ChartOfAccount` that is related to this `PurchaseOrder`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Vendor` that is related to this `PurchaseOrder`. */
  vendorByVendorId?: Maybe<Vendor>;
  /** Reads and enables pagination through a set of `Bill`. */
  billsByPoId: BillsConnection;
};


export type PurchaseOrderBillsByPoIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<BillsOrderBy>>;
  condition?: Maybe<BillCondition>;
};

/**
 * A condition to be used against `PurchaseOrder` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PurchaseOrderCondition = {
  /** Checks for equality with the object’s `poId` field. */
  poId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<PoStatus>;
  /** Checks for equality with the object’s `date` field. */
  date?: Maybe<Scalars['Date']>;
  /** Checks for equality with the object’s `amount` field. */
  amount?: Maybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `memo` field. */
  memo?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `vendorId` field. */
  vendorId?: Maybe<Scalars['Int']>;
};

/** An input for mutations affecting `PurchaseOrder` */
export type PurchaseOrderInput = {
  poId?: Maybe<Scalars['Int']>;
  status?: Maybe<PoStatus>;
  date?: Maybe<Scalars['Date']>;
  amount?: Maybe<Scalars['BigFloat']>;
  memo?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['Int']>;
  vendorId?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `PurchaseOrder`. Fields that are set will be updated. */
export type PurchaseOrderPatch = {
  poId?: Maybe<Scalars['Int']>;
  status?: Maybe<PoStatus>;
  date?: Maybe<Scalars['Date']>;
  amount?: Maybe<Scalars['BigFloat']>;
  memo?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['Int']>;
  vendorId?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `PurchaseOrder` values. */
export type PurchaseOrdersConnection = {
   __typename?: 'PurchaseOrdersConnection';
  /** A list of `PurchaseOrder` objects. */
  nodes: Array<Maybe<PurchaseOrder>>;
  /** A list of edges which contains the `PurchaseOrder` and cursor to aid in pagination. */
  edges: Array<PurchaseOrdersEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PurchaseOrder` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `PurchaseOrder` edge in the connection. */
export type PurchaseOrdersEdge = {
   __typename?: 'PurchaseOrdersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `PurchaseOrder` at the end of the edge. */
  node?: Maybe<PurchaseOrder>;
};

/** Methods to use when ordering `PurchaseOrder`. */
export enum PurchaseOrdersOrderBy {
  Natural = 'NATURAL',
  PoIdAsc = 'PO_ID_ASC',
  PoIdDesc = 'PO_ID_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  MemoAsc = 'MEMO_ASC',
  MemoDesc = 'MEMO_DESC',
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  VendorIdAsc = 'VENDOR_ID_ASC',
  VendorIdDesc = 'VENDOR_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
   __typename?: 'Query';
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** Reads and enables pagination through a set of `Bill`. */
  allBills?: Maybe<BillsConnection>;
  /** Reads and enables pagination through a set of `BillPayment`. */
  allBillPayments?: Maybe<BillPaymentsConnection>;
  /** Reads and enables pagination through a set of `ChartOfAccount`. */
  allChartOfAccounts?: Maybe<ChartOfAccountsConnection>;
  /** Reads and enables pagination through a set of `Customer`. */
  allCustomers?: Maybe<CustomersConnection>;
  /** Reads and enables pagination through a set of `Dealer`. */
  allDealers?: Maybe<DealersConnection>;
  /** Reads and enables pagination through a set of `Estimate`. */
  allEstimates?: Maybe<EstimatesConnection>;
  /** Reads and enables pagination through a set of `EstimateProduct`. */
  allEstimateProducts?: Maybe<EstimateProductsConnection>;
  /** Reads and enables pagination through a set of `Invoice`. */
  allInvoices?: Maybe<InvoicesConnection>;
  /** Reads and enables pagination through a set of `InvoiceProduct`. */
  allInvoiceProducts?: Maybe<InvoiceProductsConnection>;
  /** Reads and enables pagination through a set of `JournalEntry`. */
  allJournalEntries?: Maybe<JournalEntriesConnection>;
  /** Reads and enables pagination through a set of `Product`. */
  allProducts?: Maybe<ProductsConnection>;
  /** Reads and enables pagination through a set of `PurchaseOrder`. */
  allPurchaseOrders?: Maybe<PurchaseOrdersConnection>;
  /** Reads and enables pagination through a set of `Receipt`. */
  allReceipts?: Maybe<ReceiptsConnection>;
  /** Reads and enables pagination through a set of `Region`. */
  allRegions?: Maybe<RegionsConnection>;
  /** Reads and enables pagination through a set of `SubBillPayment`. */
  allSubBillPayments?: Maybe<SubBillPaymentsConnection>;
  /** Reads and enables pagination through a set of `SubReceipt`. */
  allSubReceipts?: Maybe<SubReceiptsConnection>;
  /** Reads and enables pagination through a set of `Tax`. */
  allTaxes?: Maybe<TaxesConnection>;
  /** Reads and enables pagination through a set of `Transaction`. */
  allTransactions?: Maybe<TransactionsConnection>;
  /** Reads and enables pagination through a set of `Vendor`. */
  allVendors?: Maybe<VendorsConnection>;
  billByBillId?: Maybe<Bill>;
  billPaymentByBillPaymentId?: Maybe<BillPayment>;
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  customerByCustomerId?: Maybe<Customer>;
  dealerByDealerId?: Maybe<Dealer>;
  estimateByEstimateId?: Maybe<Estimate>;
  estimateProductByEstimateIdAndProductId?: Maybe<EstimateProduct>;
  invoiceByInvoiceId?: Maybe<Invoice>;
  invoiceProductByInvoiceIdAndProductId?: Maybe<InvoiceProduct>;
  journalEntryByTransactionIdAndAccountId?: Maybe<JournalEntry>;
  productByProductId?: Maybe<Product>;
  purchaseOrderByPoId?: Maybe<PurchaseOrder>;
  receiptByReceiptId?: Maybe<Receipt>;
  regionByRegionId?: Maybe<Region>;
  subBillPaymentBySubBillPaymentId?: Maybe<SubBillPayment>;
  subReceiptBySubReceiptId?: Maybe<SubReceipt>;
  taxByTaxId?: Maybe<Tax>;
  transactionByTransactionId?: Maybe<Transaction>;
  vendorByVendorId?: Maybe<Vendor>;
  /** Reads a single `Bill` using its globally unique `ID`. */
  bill?: Maybe<Bill>;
  /** Reads a single `BillPayment` using its globally unique `ID`. */
  billPayment?: Maybe<BillPayment>;
  /** Reads a single `ChartOfAccount` using its globally unique `ID`. */
  chartOfAccount?: Maybe<ChartOfAccount>;
  /** Reads a single `Customer` using its globally unique `ID`. */
  customer?: Maybe<Customer>;
  /** Reads a single `Dealer` using its globally unique `ID`. */
  dealer?: Maybe<Dealer>;
  /** Reads a single `Estimate` using its globally unique `ID`. */
  estimate?: Maybe<Estimate>;
  /** Reads a single `EstimateProduct` using its globally unique `ID`. */
  estimateProduct?: Maybe<EstimateProduct>;
  /** Reads a single `Invoice` using its globally unique `ID`. */
  invoice?: Maybe<Invoice>;
  /** Reads a single `InvoiceProduct` using its globally unique `ID`. */
  invoiceProduct?: Maybe<InvoiceProduct>;
  /** Reads a single `JournalEntry` using its globally unique `ID`. */
  journalEntry?: Maybe<JournalEntry>;
  /** Reads a single `Product` using its globally unique `ID`. */
  product?: Maybe<Product>;
  /** Reads a single `PurchaseOrder` using its globally unique `ID`. */
  purchaseOrder?: Maybe<PurchaseOrder>;
  /** Reads a single `Receipt` using its globally unique `ID`. */
  receipt?: Maybe<Receipt>;
  /** Reads a single `Region` using its globally unique `ID`. */
  region?: Maybe<Region>;
  /** Reads a single `SubBillPayment` using its globally unique `ID`. */
  subBillPayment?: Maybe<SubBillPayment>;
  /** Reads a single `SubReceipt` using its globally unique `ID`. */
  subReceipt?: Maybe<SubReceipt>;
  /** Reads a single `Tax` using its globally unique `ID`. */
  tax?: Maybe<Tax>;
  /** Reads a single `Transaction` using its globally unique `ID`. */
  transaction?: Maybe<Transaction>;
  /** Reads a single `Vendor` using its globally unique `ID`. */
  vendor?: Maybe<Vendor>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAllBillsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<BillsOrderBy>>;
  condition?: Maybe<BillCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllBillPaymentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<BillPaymentsOrderBy>>;
  condition?: Maybe<BillPaymentCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllChartOfAccountsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ChartOfAccountsOrderBy>>;
  condition?: Maybe<ChartOfAccountCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCustomersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CustomersOrderBy>>;
  condition?: Maybe<CustomerCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllDealersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<DealersOrderBy>>;
  condition?: Maybe<DealerCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllEstimatesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<EstimatesOrderBy>>;
  condition?: Maybe<EstimateCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllEstimateProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<EstimateProductsOrderBy>>;
  condition?: Maybe<EstimateProductCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllInvoicesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<InvoicesOrderBy>>;
  condition?: Maybe<InvoiceCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllInvoiceProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<InvoiceProductsOrderBy>>;
  condition?: Maybe<InvoiceProductCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllJournalEntriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<JournalEntriesOrderBy>>;
  condition?: Maybe<JournalEntryCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ProductsOrderBy>>;
  condition?: Maybe<ProductCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPurchaseOrdersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PurchaseOrdersOrderBy>>;
  condition?: Maybe<PurchaseOrderCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllReceiptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ReceiptsOrderBy>>;
  condition?: Maybe<ReceiptCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllRegionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<RegionsOrderBy>>;
  condition?: Maybe<RegionCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllSubBillPaymentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<SubBillPaymentsOrderBy>>;
  condition?: Maybe<SubBillPaymentCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllSubReceiptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<SubReceiptsOrderBy>>;
  condition?: Maybe<SubReceiptCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllTaxesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TaxesOrderBy>>;
  condition?: Maybe<TaxCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllTransactionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TransactionsOrderBy>>;
  condition?: Maybe<TransactionCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllVendorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<VendorsOrderBy>>;
  condition?: Maybe<VendorCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryBillByBillIdArgs = {
  billId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBillPaymentByBillPaymentIdArgs = {
  billPaymentId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryChartOfAccountByAccountIdArgs = {
  accountId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCustomerByCustomerIdArgs = {
  customerId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDealerByDealerIdArgs = {
  dealerId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEstimateByEstimateIdArgs = {
  estimateId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEstimateProductByEstimateIdAndProductIdArgs = {
  estimateId: Scalars['Int'];
  productId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryInvoiceByInvoiceIdArgs = {
  invoiceId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryInvoiceProductByInvoiceIdAndProductIdArgs = {
  invoiceId: Scalars['Int'];
  productId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryJournalEntryByTransactionIdAndAccountIdArgs = {
  transactionId: Scalars['Int'];
  accountId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProductByProductIdArgs = {
  productId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPurchaseOrderByPoIdArgs = {
  poId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryReceiptByReceiptIdArgs = {
  receiptId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRegionByRegionIdArgs = {
  regionId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySubBillPaymentBySubBillPaymentIdArgs = {
  subBillPaymentId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySubReceiptBySubReceiptIdArgs = {
  subReceiptId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTaxByTaxIdArgs = {
  taxId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTransactionByTransactionIdArgs = {
  transactionId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryVendorByVendorIdArgs = {
  vendorId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBillArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBillPaymentArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryChartOfAccountArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCustomerArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDealerArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEstimateArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEstimateProductArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryInvoiceArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryInvoiceProductArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryJournalEntryArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProductArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPurchaseOrderArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryReceiptArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRegionArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySubBillPaymentArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySubReceiptArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTaxArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTransactionArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryVendorArgs = {
  nodeId: Scalars['ID'];
};

export type Receipt = Node & {
   __typename?: 'Receipt';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  receiptId: Scalars['Int'];
  date?: Maybe<Scalars['Date']>;
  amount?: Maybe<Scalars['BigFloat']>;
  memo?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['Int']>;
  invoiceId?: Maybe<Scalars['Int']>;
  /** Reads a single `ChartOfAccount` that is related to this `Receipt`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Invoice` that is related to this `Receipt`. */
  invoiceByInvoiceId?: Maybe<Invoice>;
  /** Reads and enables pagination through a set of `SubReceipt`. */
  subReceiptsByReceiptId: SubReceiptsConnection;
};


export type ReceiptSubReceiptsByReceiptIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<SubReceiptsOrderBy>>;
  condition?: Maybe<SubReceiptCondition>;
};

/** A condition to be used against `Receipt` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ReceiptCondition = {
  /** Checks for equality with the object’s `receiptId` field. */
  receiptId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `date` field. */
  date?: Maybe<Scalars['Date']>;
  /** Checks for equality with the object’s `amount` field. */
  amount?: Maybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `memo` field. */
  memo?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `paymentMethod` field. */
  paymentMethod?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `invoiceId` field. */
  invoiceId?: Maybe<Scalars['Int']>;
};

/** An input for mutations affecting `Receipt` */
export type ReceiptInput = {
  receiptId?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  amount?: Maybe<Scalars['BigFloat']>;
  memo?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['Int']>;
  invoiceId?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `Receipt`. Fields that are set will be updated. */
export type ReceiptPatch = {
  receiptId?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  amount?: Maybe<Scalars['BigFloat']>;
  memo?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['Int']>;
  invoiceId?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `Receipt` values. */
export type ReceiptsConnection = {
   __typename?: 'ReceiptsConnection';
  /** A list of `Receipt` objects. */
  nodes: Array<Maybe<Receipt>>;
  /** A list of edges which contains the `Receipt` and cursor to aid in pagination. */
  edges: Array<ReceiptsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Receipt` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Receipt` edge in the connection. */
export type ReceiptsEdge = {
   __typename?: 'ReceiptsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Receipt` at the end of the edge. */
  node?: Maybe<Receipt>;
};

/** Methods to use when ordering `Receipt`. */
export enum ReceiptsOrderBy {
  Natural = 'NATURAL',
  ReceiptIdAsc = 'RECEIPT_ID_ASC',
  ReceiptIdDesc = 'RECEIPT_ID_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  MemoAsc = 'MEMO_ASC',
  MemoDesc = 'MEMO_DESC',
  PaymentMethodAsc = 'PAYMENT_METHOD_ASC',
  PaymentMethodDesc = 'PAYMENT_METHOD_DESC',
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  InvoiceIdAsc = 'INVOICE_ID_ASC',
  InvoiceIdDesc = 'INVOICE_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Region = Node & {
   __typename?: 'Region';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  regionId: Scalars['Int'];
  name: Scalars['String'];
  shippingAmount?: Maybe<Scalars['Int']>;
  /** Reads and enables pagination through a set of `Customer`. */
  customersByRegionId: CustomersConnection;
};


export type RegionCustomersByRegionIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CustomersOrderBy>>;
  condition?: Maybe<CustomerCondition>;
};

/** A condition to be used against `Region` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RegionCondition = {
  /** Checks for equality with the object’s `regionId` field. */
  regionId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `shippingAmount` field. */
  shippingAmount?: Maybe<Scalars['Int']>;
};

/** An input for mutations affecting `Region` */
export type RegionInput = {
  regionId?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  shippingAmount?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `Region`. Fields that are set will be updated. */
export type RegionPatch = {
  regionId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  shippingAmount?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `Region` values. */
export type RegionsConnection = {
   __typename?: 'RegionsConnection';
  /** A list of `Region` objects. */
  nodes: Array<Maybe<Region>>;
  /** A list of edges which contains the `Region` and cursor to aid in pagination. */
  edges: Array<RegionsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Region` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Region` edge in the connection. */
export type RegionsEdge = {
   __typename?: 'RegionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Region` at the end of the edge. */
  node?: Maybe<Region>;
};

/** Methods to use when ordering `Region`. */
export enum RegionsOrderBy {
  Natural = 'NATURAL',
  RegionIdAsc = 'REGION_ID_ASC',
  RegionIdDesc = 'REGION_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ShippingAmountAsc = 'SHIPPING_AMOUNT_ASC',
  ShippingAmountDesc = 'SHIPPING_AMOUNT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type SubBillPayment = Node & {
   __typename?: 'SubBillPayment';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  subBillPaymentId: Scalars['Int'];
  billPaymentId?: Maybe<Scalars['Int']>;
  billId?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['BigFloat']>;
  /** Reads a single `BillPayment` that is related to this `SubBillPayment`. */
  billPaymentByBillPaymentId?: Maybe<BillPayment>;
  /** Reads a single `Bill` that is related to this `SubBillPayment`. */
  billByBillId?: Maybe<Bill>;
};

/**
 * A condition to be used against `SubBillPayment` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type SubBillPaymentCondition = {
  /** Checks for equality with the object’s `subBillPaymentId` field. */
  subBillPaymentId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `billPaymentId` field. */
  billPaymentId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `billId` field. */
  billId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `amount` field. */
  amount?: Maybe<Scalars['BigFloat']>;
};

/** An input for mutations affecting `SubBillPayment` */
export type SubBillPaymentInput = {
  subBillPaymentId: Scalars['Int'];
  billPaymentId?: Maybe<Scalars['Int']>;
  billId?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['BigFloat']>;
};

/** Represents an update to a `SubBillPayment`. Fields that are set will be updated. */
export type SubBillPaymentPatch = {
  subBillPaymentId?: Maybe<Scalars['Int']>;
  billPaymentId?: Maybe<Scalars['Int']>;
  billId?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `SubBillPayment` values. */
export type SubBillPaymentsConnection = {
   __typename?: 'SubBillPaymentsConnection';
  /** A list of `SubBillPayment` objects. */
  nodes: Array<Maybe<SubBillPayment>>;
  /** A list of edges which contains the `SubBillPayment` and cursor to aid in pagination. */
  edges: Array<SubBillPaymentsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SubBillPayment` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `SubBillPayment` edge in the connection. */
export type SubBillPaymentsEdge = {
   __typename?: 'SubBillPaymentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `SubBillPayment` at the end of the edge. */
  node?: Maybe<SubBillPayment>;
};

/** Methods to use when ordering `SubBillPayment`. */
export enum SubBillPaymentsOrderBy {
  Natural = 'NATURAL',
  SubBillPaymentIdAsc = 'SUB_BILL_PAYMENT_ID_ASC',
  SubBillPaymentIdDesc = 'SUB_BILL_PAYMENT_ID_DESC',
  BillPaymentIdAsc = 'BILL_PAYMENT_ID_ASC',
  BillPaymentIdDesc = 'BILL_PAYMENT_ID_DESC',
  BillIdAsc = 'BILL_ID_ASC',
  BillIdDesc = 'BILL_ID_DESC',
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type SubReceipt = Node & {
   __typename?: 'SubReceipt';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  subReceiptId: Scalars['Int'];
  receiptId?: Maybe<Scalars['Int']>;
  invoiceId?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['BigFloat']>;
  /** Reads a single `Receipt` that is related to this `SubReceipt`. */
  receiptByReceiptId?: Maybe<Receipt>;
  /** Reads a single `Invoice` that is related to this `SubReceipt`. */
  invoiceByInvoiceId?: Maybe<Invoice>;
};

/**
 * A condition to be used against `SubReceipt` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type SubReceiptCondition = {
  /** Checks for equality with the object’s `subReceiptId` field. */
  subReceiptId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `receiptId` field. */
  receiptId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `invoiceId` field. */
  invoiceId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `amount` field. */
  amount?: Maybe<Scalars['BigFloat']>;
};

/** An input for mutations affecting `SubReceipt` */
export type SubReceiptInput = {
  subReceiptId?: Maybe<Scalars['Int']>;
  receiptId?: Maybe<Scalars['Int']>;
  invoiceId?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['BigFloat']>;
};

/** Represents an update to a `SubReceipt`. Fields that are set will be updated. */
export type SubReceiptPatch = {
  subReceiptId?: Maybe<Scalars['Int']>;
  receiptId?: Maybe<Scalars['Int']>;
  invoiceId?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `SubReceipt` values. */
export type SubReceiptsConnection = {
   __typename?: 'SubReceiptsConnection';
  /** A list of `SubReceipt` objects. */
  nodes: Array<Maybe<SubReceipt>>;
  /** A list of edges which contains the `SubReceipt` and cursor to aid in pagination. */
  edges: Array<SubReceiptsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SubReceipt` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `SubReceipt` edge in the connection. */
export type SubReceiptsEdge = {
   __typename?: 'SubReceiptsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `SubReceipt` at the end of the edge. */
  node?: Maybe<SubReceipt>;
};

/** Methods to use when ordering `SubReceipt`. */
export enum SubReceiptsOrderBy {
  Natural = 'NATURAL',
  SubReceiptIdAsc = 'SUB_RECEIPT_ID_ASC',
  SubReceiptIdDesc = 'SUB_RECEIPT_ID_DESC',
  ReceiptIdAsc = 'RECEIPT_ID_ASC',
  ReceiptIdDesc = 'RECEIPT_ID_DESC',
  InvoiceIdAsc = 'INVOICE_ID_ASC',
  InvoiceIdDesc = 'INVOICE_ID_DESC',
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Tax = Node & {
   __typename?: 'Tax';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  taxId: Scalars['Int'];
  taxCode?: Maybe<Scalars['String']>;
  taxName?: Maybe<Scalars['String']>;
  taxRate?: Maybe<Scalars['BigFloat']>;
  /** Reads and enables pagination through a set of `Product`. */
  productsByTaxId: ProductsConnection;
};


export type TaxProductsByTaxIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ProductsOrderBy>>;
  condition?: Maybe<ProductCondition>;
};

/** A condition to be used against `Tax` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TaxCondition = {
  /** Checks for equality with the object’s `taxId` field. */
  taxId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `taxCode` field. */
  taxCode?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `taxName` field. */
  taxName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `taxRate` field. */
  taxRate?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Tax` values. */
export type TaxesConnection = {
   __typename?: 'TaxesConnection';
  /** A list of `Tax` objects. */
  nodes: Array<Maybe<Tax>>;
  /** A list of edges which contains the `Tax` and cursor to aid in pagination. */
  edges: Array<TaxesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Tax` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Tax` edge in the connection. */
export type TaxesEdge = {
   __typename?: 'TaxesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Tax` at the end of the edge. */
  node?: Maybe<Tax>;
};

/** Methods to use when ordering `Tax`. */
export enum TaxesOrderBy {
  Natural = 'NATURAL',
  TaxIdAsc = 'TAX_ID_ASC',
  TaxIdDesc = 'TAX_ID_DESC',
  TaxCodeAsc = 'TAX_CODE_ASC',
  TaxCodeDesc = 'TAX_CODE_DESC',
  TaxNameAsc = 'TAX_NAME_ASC',
  TaxNameDesc = 'TAX_NAME_DESC',
  TaxRateAsc = 'TAX_RATE_ASC',
  TaxRateDesc = 'TAX_RATE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** An input for mutations affecting `Tax` */
export type TaxInput = {
  taxId?: Maybe<Scalars['Int']>;
  taxCode?: Maybe<Scalars['String']>;
  taxName?: Maybe<Scalars['String']>;
  taxRate?: Maybe<Scalars['BigFloat']>;
};

/** Represents an update to a `Tax`. Fields that are set will be updated. */
export type TaxPatch = {
  taxId?: Maybe<Scalars['Int']>;
  taxCode?: Maybe<Scalars['String']>;
  taxName?: Maybe<Scalars['String']>;
  taxRate?: Maybe<Scalars['BigFloat']>;
};

export type Transaction = Node & {
   __typename?: 'Transaction';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  transactionId: Scalars['Int'];
  date?: Maybe<Scalars['Date']>;
  transactionType?: Maybe<TransactionT>;
  amount?: Maybe<Scalars['BigFloat']>;
  /** Reads and enables pagination through a set of `JournalEntry`. */
  journalEntriesByTransactionId: JournalEntriesConnection;
};


export type TransactionJournalEntriesByTransactionIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<JournalEntriesOrderBy>>;
  condition?: Maybe<JournalEntryCondition>;
};

/**
 * A condition to be used against `Transaction` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type TransactionCondition = {
  /** Checks for equality with the object’s `transactionId` field. */
  transactionId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `date` field. */
  date?: Maybe<Scalars['Date']>;
  /** Checks for equality with the object’s `transactionType` field. */
  transactionType?: Maybe<TransactionT>;
  /** Checks for equality with the object’s `amount` field. */
  amount?: Maybe<Scalars['BigFloat']>;
};

/** An input for mutations affecting `Transaction` */
export type TransactionInput = {
  transactionId?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  transactionType?: Maybe<TransactionT>;
  amount?: Maybe<Scalars['BigFloat']>;
};

/** Represents an update to a `Transaction`. Fields that are set will be updated. */
export type TransactionPatch = {
  transactionId?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  transactionType?: Maybe<TransactionT>;
  amount?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Transaction` values. */
export type TransactionsConnection = {
   __typename?: 'TransactionsConnection';
  /** A list of `Transaction` objects. */
  nodes: Array<Maybe<Transaction>>;
  /** A list of edges which contains the `Transaction` and cursor to aid in pagination. */
  edges: Array<TransactionsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Transaction` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Transaction` edge in the connection. */
export type TransactionsEdge = {
   __typename?: 'TransactionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Transaction` at the end of the edge. */
  node?: Maybe<Transaction>;
};

/** Methods to use when ordering `Transaction`. */
export enum TransactionsOrderBy {
  Natural = 'NATURAL',
  TransactionIdAsc = 'TRANSACTION_ID_ASC',
  TransactionIdDesc = 'TRANSACTION_ID_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  TransactionTypeAsc = 'TRANSACTION_TYPE_ASC',
  TransactionTypeDesc = 'TRANSACTION_TYPE_DESC',
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export enum TransactionT {
  Deposit = 'DEPOSIT',
  Withdrawal = 'WITHDRAWAL'
}

/** All input for the `updateBillByBillId` mutation. */
export type UpdateBillByBillIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Bill` being updated. */
  billPatch: BillPatch;
  billId: Scalars['Int'];
};

/** All input for the `updateBill` mutation. */
export type UpdateBillInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Bill` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Bill` being updated. */
  billPatch: BillPatch;
};

/** The output of our update `Bill` mutation. */
export type UpdateBillPayload = {
   __typename?: 'UpdateBillPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Bill` that was updated by this mutation. */
  bill?: Maybe<Bill>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChartOfAccount` that is related to this `Bill`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Vendor` that is related to this `Bill`. */
  vendorByVendorId?: Maybe<Vendor>;
  /** Reads a single `PurchaseOrder` that is related to this `Bill`. */
  purchaseOrderByPoId?: Maybe<PurchaseOrder>;
  /** An edge for our `Bill`. May be used by Relay 1. */
  billEdge?: Maybe<BillsEdge>;
};


/** The output of our update `Bill` mutation. */
export type UpdateBillPayloadBillEdgeArgs = {
  orderBy?: Maybe<Array<BillsOrderBy>>;
};

/** All input for the `updateBillPaymentByBillPaymentId` mutation. */
export type UpdateBillPaymentByBillPaymentIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `BillPayment` being updated. */
  billPaymentPatch: BillPaymentPatch;
  billPaymentId: Scalars['Int'];
};

/** All input for the `updateBillPayment` mutation. */
export type UpdateBillPaymentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `BillPayment` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `BillPayment` being updated. */
  billPaymentPatch: BillPaymentPatch;
};

/** The output of our update `BillPayment` mutation. */
export type UpdateBillPaymentPayload = {
   __typename?: 'UpdateBillPaymentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `BillPayment` that was updated by this mutation. */
  billPayment?: Maybe<BillPayment>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChartOfAccount` that is related to this `BillPayment`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Bill` that is related to this `BillPayment`. */
  billByBillId?: Maybe<Bill>;
  /** An edge for our `BillPayment`. May be used by Relay 1. */
  billPaymentEdge?: Maybe<BillPaymentsEdge>;
};


/** The output of our update `BillPayment` mutation. */
export type UpdateBillPaymentPayloadBillPaymentEdgeArgs = {
  orderBy?: Maybe<Array<BillPaymentsOrderBy>>;
};

/** All input for the `updateChartOfAccountByAccountId` mutation. */
export type UpdateChartOfAccountByAccountIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `ChartOfAccount` being updated. */
  chartOfAccountPatch: ChartOfAccountPatch;
  accountId: Scalars['Int'];
};

/** All input for the `updateChartOfAccount` mutation. */
export type UpdateChartOfAccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ChartOfAccount` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ChartOfAccount` being updated. */
  chartOfAccountPatch: ChartOfAccountPatch;
};

/** The output of our update `ChartOfAccount` mutation. */
export type UpdateChartOfAccountPayload = {
   __typename?: 'UpdateChartOfAccountPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChartOfAccount` that was updated by this mutation. */
  chartOfAccount?: Maybe<ChartOfAccount>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `ChartOfAccount`. May be used by Relay 1. */
  chartOfAccountEdge?: Maybe<ChartOfAccountsEdge>;
};


/** The output of our update `ChartOfAccount` mutation. */
export type UpdateChartOfAccountPayloadChartOfAccountEdgeArgs = {
  orderBy?: Maybe<Array<ChartOfAccountsOrderBy>>;
};

/** All input for the `updateCustomerByCustomerId` mutation. */
export type UpdateCustomerByCustomerIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Customer` being updated. */
  customerPatch: CustomerPatch;
  customerId: Scalars['Int'];
};

/** All input for the `updateCustomer` mutation. */
export type UpdateCustomerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Customer` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Customer` being updated. */
  customerPatch: CustomerPatch;
};

/** The output of our update `Customer` mutation. */
export type UpdateCustomerPayload = {
   __typename?: 'UpdateCustomerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Customer` that was updated by this mutation. */
  customer?: Maybe<Customer>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Region` that is related to this `Customer`. */
  regionByRegionId?: Maybe<Region>;
  /** Reads a single `Dealer` that is related to this `Customer`. */
  dealerByDealerId?: Maybe<Dealer>;
  /** An edge for our `Customer`. May be used by Relay 1. */
  customerEdge?: Maybe<CustomersEdge>;
};


/** The output of our update `Customer` mutation. */
export type UpdateCustomerPayloadCustomerEdgeArgs = {
  orderBy?: Maybe<Array<CustomersOrderBy>>;
};

/** All input for the `updateDealerByDealerId` mutation. */
export type UpdateDealerByDealerIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Dealer` being updated. */
  dealerPatch: DealerPatch;
  dealerId: Scalars['Int'];
};

/** All input for the `updateDealer` mutation. */
export type UpdateDealerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Dealer` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Dealer` being updated. */
  dealerPatch: DealerPatch;
};

/** The output of our update `Dealer` mutation. */
export type UpdateDealerPayload = {
   __typename?: 'UpdateDealerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Dealer` that was updated by this mutation. */
  dealer?: Maybe<Dealer>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Dealer`. May be used by Relay 1. */
  dealerEdge?: Maybe<DealersEdge>;
};


/** The output of our update `Dealer` mutation. */
export type UpdateDealerPayloadDealerEdgeArgs = {
  orderBy?: Maybe<Array<DealersOrderBy>>;
};

/** All input for the `updateEstimateByEstimateId` mutation. */
export type UpdateEstimateByEstimateIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Estimate` being updated. */
  estimatePatch: EstimatePatch;
  estimateId: Scalars['Int'];
};

/** All input for the `updateEstimate` mutation. */
export type UpdateEstimateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Estimate` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Estimate` being updated. */
  estimatePatch: EstimatePatch;
};

/** The output of our update `Estimate` mutation. */
export type UpdateEstimatePayload = {
   __typename?: 'UpdateEstimatePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Estimate` that was updated by this mutation. */
  estimate?: Maybe<Estimate>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Customer` that is related to this `Estimate`. */
  customerByCustomerId?: Maybe<Customer>;
  /** An edge for our `Estimate`. May be used by Relay 1. */
  estimateEdge?: Maybe<EstimatesEdge>;
};


/** The output of our update `Estimate` mutation. */
export type UpdateEstimatePayloadEstimateEdgeArgs = {
  orderBy?: Maybe<Array<EstimatesOrderBy>>;
};

/** All input for the `updateEstimateProductByEstimateIdAndProductId` mutation. */
export type UpdateEstimateProductByEstimateIdAndProductIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `EstimateProduct` being updated. */
  estimateProductPatch: EstimateProductPatch;
  estimateId: Scalars['Int'];
  productId: Scalars['Int'];
};

/** All input for the `updateEstimateProduct` mutation. */
export type UpdateEstimateProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `EstimateProduct` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `EstimateProduct` being updated. */
  estimateProductPatch: EstimateProductPatch;
};

/** The output of our update `EstimateProduct` mutation. */
export type UpdateEstimateProductPayload = {
   __typename?: 'UpdateEstimateProductPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `EstimateProduct` that was updated by this mutation. */
  estimateProduct?: Maybe<EstimateProduct>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Estimate` that is related to this `EstimateProduct`. */
  estimateByEstimateId?: Maybe<Estimate>;
  /** Reads a single `Product` that is related to this `EstimateProduct`. */
  productByProductId?: Maybe<Product>;
  /** An edge for our `EstimateProduct`. May be used by Relay 1. */
  estimateProductEdge?: Maybe<EstimateProductsEdge>;
};


/** The output of our update `EstimateProduct` mutation. */
export type UpdateEstimateProductPayloadEstimateProductEdgeArgs = {
  orderBy?: Maybe<Array<EstimateProductsOrderBy>>;
};

/** All input for the `updateInvoiceByInvoiceId` mutation. */
export type UpdateInvoiceByInvoiceIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Invoice` being updated. */
  invoicePatch: InvoicePatch;
  invoiceId: Scalars['Int'];
};

/** All input for the `updateInvoice` mutation. */
export type UpdateInvoiceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Invoice` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Invoice` being updated. */
  invoicePatch: InvoicePatch;
};

/** The output of our update `Invoice` mutation. */
export type UpdateInvoicePayload = {
   __typename?: 'UpdateInvoicePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Invoice` that was updated by this mutation. */
  invoice?: Maybe<Invoice>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChartOfAccount` that is related to this `Invoice`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Customer` that is related to this `Invoice`. */
  customerByCustomerId?: Maybe<Customer>;
  /** Reads a single `Estimate` that is related to this `Invoice`. */
  estimateByEstimateId?: Maybe<Estimate>;
  /** An edge for our `Invoice`. May be used by Relay 1. */
  invoiceEdge?: Maybe<InvoicesEdge>;
};


/** The output of our update `Invoice` mutation. */
export type UpdateInvoicePayloadInvoiceEdgeArgs = {
  orderBy?: Maybe<Array<InvoicesOrderBy>>;
};

/** All input for the `updateInvoiceProductByInvoiceIdAndProductId` mutation. */
export type UpdateInvoiceProductByInvoiceIdAndProductIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `InvoiceProduct` being updated. */
  invoiceProductPatch: InvoiceProductPatch;
  invoiceId: Scalars['Int'];
  productId: Scalars['Int'];
};

/** All input for the `updateInvoiceProduct` mutation. */
export type UpdateInvoiceProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `InvoiceProduct` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `InvoiceProduct` being updated. */
  invoiceProductPatch: InvoiceProductPatch;
};

/** The output of our update `InvoiceProduct` mutation. */
export type UpdateInvoiceProductPayload = {
   __typename?: 'UpdateInvoiceProductPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `InvoiceProduct` that was updated by this mutation. */
  invoiceProduct?: Maybe<InvoiceProduct>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Invoice` that is related to this `InvoiceProduct`. */
  invoiceByInvoiceId?: Maybe<Invoice>;
  /** Reads a single `Product` that is related to this `InvoiceProduct`. */
  productByProductId?: Maybe<Product>;
  /** An edge for our `InvoiceProduct`. May be used by Relay 1. */
  invoiceProductEdge?: Maybe<InvoiceProductsEdge>;
};


/** The output of our update `InvoiceProduct` mutation. */
export type UpdateInvoiceProductPayloadInvoiceProductEdgeArgs = {
  orderBy?: Maybe<Array<InvoiceProductsOrderBy>>;
};

/** All input for the `updateJournalEntryByTransactionIdAndAccountId` mutation. */
export type UpdateJournalEntryByTransactionIdAndAccountIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `JournalEntry` being updated. */
  journalEntryPatch: JournalEntryPatch;
  transactionId: Scalars['Int'];
  accountId: Scalars['Int'];
};

/** All input for the `updateJournalEntry` mutation. */
export type UpdateJournalEntryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `JournalEntry` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `JournalEntry` being updated. */
  journalEntryPatch: JournalEntryPatch;
};

/** The output of our update `JournalEntry` mutation. */
export type UpdateJournalEntryPayload = {
   __typename?: 'UpdateJournalEntryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `JournalEntry` that was updated by this mutation. */
  journalEntry?: Maybe<JournalEntry>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Transaction` that is related to this `JournalEntry`. */
  transactionByTransactionId?: Maybe<Transaction>;
  /** Reads a single `ChartOfAccount` that is related to this `JournalEntry`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** An edge for our `JournalEntry`. May be used by Relay 1. */
  journalEntryEdge?: Maybe<JournalEntriesEdge>;
};


/** The output of our update `JournalEntry` mutation. */
export type UpdateJournalEntryPayloadJournalEntryEdgeArgs = {
  orderBy?: Maybe<Array<JournalEntriesOrderBy>>;
};

/** All input for the `updateProductByProductId` mutation. */
export type UpdateProductByProductIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Product` being updated. */
  productPatch: ProductPatch;
  productId: Scalars['Int'];
};

/** All input for the `updateProduct` mutation. */
export type UpdateProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Product` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Product` being updated. */
  productPatch: ProductPatch;
};

/** The output of our update `Product` mutation. */
export type UpdateProductPayload = {
   __typename?: 'UpdateProductPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Product` that was updated by this mutation. */
  product?: Maybe<Product>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChartOfAccount` that is related to this `Product`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Tax` that is related to this `Product`. */
  taxByTaxId?: Maybe<Tax>;
  /** An edge for our `Product`. May be used by Relay 1. */
  productEdge?: Maybe<ProductsEdge>;
};


/** The output of our update `Product` mutation. */
export type UpdateProductPayloadProductEdgeArgs = {
  orderBy?: Maybe<Array<ProductsOrderBy>>;
};

/** All input for the `updatePurchaseOrderByPoId` mutation. */
export type UpdatePurchaseOrderByPoIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `PurchaseOrder` being updated. */
  purchaseOrderPatch: PurchaseOrderPatch;
  poId: Scalars['Int'];
};

/** All input for the `updatePurchaseOrder` mutation. */
export type UpdatePurchaseOrderInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `PurchaseOrder` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `PurchaseOrder` being updated. */
  purchaseOrderPatch: PurchaseOrderPatch;
};

/** The output of our update `PurchaseOrder` mutation. */
export type UpdatePurchaseOrderPayload = {
   __typename?: 'UpdatePurchaseOrderPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PurchaseOrder` that was updated by this mutation. */
  purchaseOrder?: Maybe<PurchaseOrder>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChartOfAccount` that is related to this `PurchaseOrder`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Vendor` that is related to this `PurchaseOrder`. */
  vendorByVendorId?: Maybe<Vendor>;
  /** An edge for our `PurchaseOrder`. May be used by Relay 1. */
  purchaseOrderEdge?: Maybe<PurchaseOrdersEdge>;
};


/** The output of our update `PurchaseOrder` mutation. */
export type UpdatePurchaseOrderPayloadPurchaseOrderEdgeArgs = {
  orderBy?: Maybe<Array<PurchaseOrdersOrderBy>>;
};

/** All input for the `updateReceiptByReceiptId` mutation. */
export type UpdateReceiptByReceiptIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Receipt` being updated. */
  receiptPatch: ReceiptPatch;
  receiptId: Scalars['Int'];
};

/** All input for the `updateReceipt` mutation. */
export type UpdateReceiptInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Receipt` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Receipt` being updated. */
  receiptPatch: ReceiptPatch;
};

/** The output of our update `Receipt` mutation. */
export type UpdateReceiptPayload = {
   __typename?: 'UpdateReceiptPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Receipt` that was updated by this mutation. */
  receipt?: Maybe<Receipt>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChartOfAccount` that is related to this `Receipt`. */
  chartOfAccountByAccountId?: Maybe<ChartOfAccount>;
  /** Reads a single `Invoice` that is related to this `Receipt`. */
  invoiceByInvoiceId?: Maybe<Invoice>;
  /** An edge for our `Receipt`. May be used by Relay 1. */
  receiptEdge?: Maybe<ReceiptsEdge>;
};


/** The output of our update `Receipt` mutation. */
export type UpdateReceiptPayloadReceiptEdgeArgs = {
  orderBy?: Maybe<Array<ReceiptsOrderBy>>;
};

/** All input for the `updateRegionByRegionId` mutation. */
export type UpdateRegionByRegionIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Region` being updated. */
  regionPatch: RegionPatch;
  regionId: Scalars['Int'];
};

/** All input for the `updateRegion` mutation. */
export type UpdateRegionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Region` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Region` being updated. */
  regionPatch: RegionPatch;
};

/** The output of our update `Region` mutation. */
export type UpdateRegionPayload = {
   __typename?: 'UpdateRegionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Region` that was updated by this mutation. */
  region?: Maybe<Region>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Region`. May be used by Relay 1. */
  regionEdge?: Maybe<RegionsEdge>;
};


/** The output of our update `Region` mutation. */
export type UpdateRegionPayloadRegionEdgeArgs = {
  orderBy?: Maybe<Array<RegionsOrderBy>>;
};

/** All input for the `updateSubBillPaymentBySubBillPaymentId` mutation. */
export type UpdateSubBillPaymentBySubBillPaymentIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `SubBillPayment` being updated. */
  subBillPaymentPatch: SubBillPaymentPatch;
  subBillPaymentId: Scalars['Int'];
};

/** All input for the `updateSubBillPayment` mutation. */
export type UpdateSubBillPaymentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SubBillPayment` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `SubBillPayment` being updated. */
  subBillPaymentPatch: SubBillPaymentPatch;
};

/** The output of our update `SubBillPayment` mutation. */
export type UpdateSubBillPaymentPayload = {
   __typename?: 'UpdateSubBillPaymentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `SubBillPayment` that was updated by this mutation. */
  subBillPayment?: Maybe<SubBillPayment>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `BillPayment` that is related to this `SubBillPayment`. */
  billPaymentByBillPaymentId?: Maybe<BillPayment>;
  /** Reads a single `Bill` that is related to this `SubBillPayment`. */
  billByBillId?: Maybe<Bill>;
  /** An edge for our `SubBillPayment`. May be used by Relay 1. */
  subBillPaymentEdge?: Maybe<SubBillPaymentsEdge>;
};


/** The output of our update `SubBillPayment` mutation. */
export type UpdateSubBillPaymentPayloadSubBillPaymentEdgeArgs = {
  orderBy?: Maybe<Array<SubBillPaymentsOrderBy>>;
};

/** All input for the `updateSubReceiptBySubReceiptId` mutation. */
export type UpdateSubReceiptBySubReceiptIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `SubReceipt` being updated. */
  subReceiptPatch: SubReceiptPatch;
  subReceiptId: Scalars['Int'];
};

/** All input for the `updateSubReceipt` mutation. */
export type UpdateSubReceiptInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SubReceipt` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `SubReceipt` being updated. */
  subReceiptPatch: SubReceiptPatch;
};

/** The output of our update `SubReceipt` mutation. */
export type UpdateSubReceiptPayload = {
   __typename?: 'UpdateSubReceiptPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `SubReceipt` that was updated by this mutation. */
  subReceipt?: Maybe<SubReceipt>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Receipt` that is related to this `SubReceipt`. */
  receiptByReceiptId?: Maybe<Receipt>;
  /** Reads a single `Invoice` that is related to this `SubReceipt`. */
  invoiceByInvoiceId?: Maybe<Invoice>;
  /** An edge for our `SubReceipt`. May be used by Relay 1. */
  subReceiptEdge?: Maybe<SubReceiptsEdge>;
};


/** The output of our update `SubReceipt` mutation. */
export type UpdateSubReceiptPayloadSubReceiptEdgeArgs = {
  orderBy?: Maybe<Array<SubReceiptsOrderBy>>;
};

/** All input for the `updateTaxByTaxId` mutation. */
export type UpdateTaxByTaxIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Tax` being updated. */
  taxPatch: TaxPatch;
  taxId: Scalars['Int'];
};

/** All input for the `updateTax` mutation. */
export type UpdateTaxInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Tax` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Tax` being updated. */
  taxPatch: TaxPatch;
};

/** The output of our update `Tax` mutation. */
export type UpdateTaxPayload = {
   __typename?: 'UpdateTaxPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Tax` that was updated by this mutation. */
  tax?: Maybe<Tax>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Tax`. May be used by Relay 1. */
  taxEdge?: Maybe<TaxesEdge>;
};


/** The output of our update `Tax` mutation. */
export type UpdateTaxPayloadTaxEdgeArgs = {
  orderBy?: Maybe<Array<TaxesOrderBy>>;
};

/** All input for the `updateTransactionByTransactionId` mutation. */
export type UpdateTransactionByTransactionIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Transaction` being updated. */
  transactionPatch: TransactionPatch;
  transactionId: Scalars['Int'];
};

/** All input for the `updateTransaction` mutation. */
export type UpdateTransactionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Transaction` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Transaction` being updated. */
  transactionPatch: TransactionPatch;
};

/** The output of our update `Transaction` mutation. */
export type UpdateTransactionPayload = {
   __typename?: 'UpdateTransactionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Transaction` that was updated by this mutation. */
  transaction?: Maybe<Transaction>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Transaction`. May be used by Relay 1. */
  transactionEdge?: Maybe<TransactionsEdge>;
};


/** The output of our update `Transaction` mutation. */
export type UpdateTransactionPayloadTransactionEdgeArgs = {
  orderBy?: Maybe<Array<TransactionsOrderBy>>;
};

/** All input for the `updateVendorByVendorId` mutation. */
export type UpdateVendorByVendorIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Vendor` being updated. */
  vendorPatch: VendorPatch;
  vendorId: Scalars['Int'];
};

/** All input for the `updateVendor` mutation. */
export type UpdateVendorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Vendor` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Vendor` being updated. */
  vendorPatch: VendorPatch;
};

/** The output of our update `Vendor` mutation. */
export type UpdateVendorPayload = {
   __typename?: 'UpdateVendorPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Vendor` that was updated by this mutation. */
  vendor?: Maybe<Vendor>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Vendor`. May be used by Relay 1. */
  vendorEdge?: Maybe<VendorsEdge>;
};


/** The output of our update `Vendor` mutation. */
export type UpdateVendorPayloadVendorEdgeArgs = {
  orderBy?: Maybe<Array<VendorsOrderBy>>;
};

export type Vendor = Node & {
   __typename?: 'Vendor';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  vendorId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `PurchaseOrder`. */
  purchaseOrdersByVendorId: PurchaseOrdersConnection;
  /** Reads and enables pagination through a set of `Bill`. */
  billsByVendorId: BillsConnection;
};


export type VendorPurchaseOrdersByVendorIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PurchaseOrdersOrderBy>>;
  condition?: Maybe<PurchaseOrderCondition>;
};


export type VendorBillsByVendorIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<BillsOrderBy>>;
  condition?: Maybe<BillCondition>;
};

/** A condition to be used against `Vendor` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type VendorCondition = {
  /** Checks for equality with the object’s `vendorId` field. */
  vendorId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `address` field. */
  address?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `city` field. */
  city?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `province` field. */
  province?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `country` field. */
  country?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `phone` field. */
  phone?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `note` field. */
  note?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `Vendor` */
export type VendorInput = {
  vendorId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

/** Represents an update to a `Vendor`. Fields that are set will be updated. */
export type VendorPatch = {
  vendorId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

/** A connection to a list of `Vendor` values. */
export type VendorsConnection = {
   __typename?: 'VendorsConnection';
  /** A list of `Vendor` objects. */
  nodes: Array<Maybe<Vendor>>;
  /** A list of edges which contains the `Vendor` and cursor to aid in pagination. */
  edges: Array<VendorsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Vendor` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Vendor` edge in the connection. */
export type VendorsEdge = {
   __typename?: 'VendorsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Vendor` at the end of the edge. */
  node?: Maybe<Vendor>;
};

/** Methods to use when ordering `Vendor`. */
export enum VendorsOrderBy {
  Natural = 'NATURAL',
  VendorIdAsc = 'VENDOR_ID_ASC',
  VendorIdDesc = 'VENDOR_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  ProvinceAsc = 'PROVINCE_ASC',
  ProvinceDesc = 'PROVINCE_DESC',
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  NoteAsc = 'NOTE_ASC',
  NoteDesc = 'NOTE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type CreateCustomerMutationVariables = {
  name: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  regionId?: Maybe<Scalars['Int']>;
  dealerId: Scalars['Int'];
  note?: Maybe<Scalars['String']>;
};


export type CreateCustomerMutation = (
  { __typename?: 'Mutation' }
  & { createCustomer?: Maybe<(
    { __typename?: 'CreateCustomerPayload' }
    & { customer?: Maybe<(
      { __typename?: 'Customer' }
      & Pick<Customer, 'name' | 'address' | 'phone' | 'regionId' | 'dealerId' | 'note'>
    )> }
  )> }
);

export type DeleteCustomerMutationVariables = {
  customerId: Scalars['Int'];
};


export type DeleteCustomerMutation = (
  { __typename?: 'Mutation' }
  & { deleteCustomerByCustomerId?: Maybe<(
    { __typename?: 'DeleteCustomerPayload' }
    & { customer?: Maybe<(
      { __typename?: 'Customer' }
      & Pick<Customer, 'customerId'>
    )> }
  )> }
);

export type UpdateCustomerMutationVariables = {
  customerId: Scalars['Int'];
  name: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  regionId?: Maybe<Scalars['Int']>;
  dealerId: Scalars['Int'];
  note?: Maybe<Scalars['String']>;
};


export type UpdateCustomerMutation = (
  { __typename?: 'Mutation' }
  & { updateCustomerByCustomerId?: Maybe<(
    { __typename?: 'UpdateCustomerPayload' }
    & { customer?: Maybe<(
      { __typename?: 'Customer' }
      & Pick<Customer, 'customerId' | 'dealerId' | 'address' | 'name' | 'phone' | 'note' | 'regionId'>
      & { dealerByDealerId?: Maybe<(
        { __typename?: 'Dealer' }
        & Pick<Dealer, 'name'>
      )> }
    )> }
  )> }
);

export type GetDealersAndRegionsQueryVariables = {};


export type GetDealersAndRegionsQuery = (
  { __typename?: 'Query' }
  & { allRegions?: Maybe<(
    { __typename?: 'RegionsConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'Region' }
      & Pick<Region, 'regionId' | 'name'>
    )>> }
  )>, allDealers?: Maybe<(
    { __typename?: 'DealersConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'Dealer' }
      & Pick<Dealer, 'dealerId' | 'name' | 'address' | 'phone'>
    )>> }
  )> }
);

export type GetCustomersQueryVariables = {};


export type GetCustomersQuery = (
  { __typename?: 'Query' }
  & { allCustomers?: Maybe<(
    { __typename?: 'CustomersConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'Customer' }
      & Pick<Customer, 'customerId' | 'dealerId' | 'address' | 'name' | 'phone' | 'note' | 'regionId'>
      & { dealerByDealerId?: Maybe<(
        { __typename?: 'Dealer' }
        & Pick<Dealer, 'name'>
      )> }
    )>> }
  )> }
);

export type GetEstimatesQueryVariables = {};


export type GetEstimatesQuery = (
  { __typename?: 'Query' }
  & { allEstimates?: Maybe<(
    { __typename?: 'EstimatesConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'Estimate' }
      & Pick<Estimate, 'estimateId' | 'status' | 'customerId'>
    )>> }
  )> }
);

export type GetEstimateByIdQueryVariables = {};


export type GetEstimateByIdQuery = (
  { __typename?: 'Query' }
  & { estimateByEstimateId?: Maybe<(
    { __typename?: 'Estimate' }
    & Pick<Estimate, 'estimateId' | 'date'>
    & { customerByCustomerId?: Maybe<(
      { __typename?: 'Customer' }
      & Pick<Customer, 'customerId' | 'name' | 'address'>
      & { regionByRegionId?: Maybe<(
        { __typename?: 'Region' }
        & Pick<Region, 'regionId' | 'name' | 'shippingAmount'>
      )> }
    )>, estimateProductsByEstimateId: (
      { __typename?: 'EstimateProductsConnection' }
      & { nodes: Array<Maybe<(
        { __typename?: 'EstimateProduct' }
        & Pick<EstimateProduct, 'estimatePrice' | 'quantity'>
        & { productByProductId?: Maybe<(
          { __typename?: 'Product' }
          & Pick<Product, 'productId' | 'name' | 'productPrice'>
        )> }
      )>> }
    ) }
  )> }
);


export const CreateCustomerDocument = gql`
    mutation CreateCustomer($name: String!, $address: String, $phone: String, $regionId: Int, $dealerId: Int!, $note: String) {
  createCustomer(input: {customer: {name: $name, address: $address, phone: $phone, regionId: $regionId, dealerId: $dealerId, note: $note}}) {
    customer {
      name
      address
      phone
      regionId
      dealerId
      note
    }
  }
}
    `;
export type CreateCustomerMutationFn = ApolloReactCommon.MutationFunction<CreateCustomerMutation, CreateCustomerMutationVariables>;

/**
 * __useCreateCustomerMutation__
 *
 * To run a mutation, you first call `useCreateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomerMutation, { data, loading, error }] = useCreateCustomerMutation({
 *   variables: {
 *      name: // value for 'name'
 *      address: // value for 'address'
 *      phone: // value for 'phone'
 *      regionId: // value for 'regionId'
 *      dealerId: // value for 'dealerId'
 *      note: // value for 'note'
 *   },
 * });
 */
export function useCreateCustomerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCustomerMutation, CreateCustomerMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateCustomerMutation, CreateCustomerMutationVariables>(CreateCustomerDocument, baseOptions);
      }
export type CreateCustomerMutationHookResult = ReturnType<typeof useCreateCustomerMutation>;
export type CreateCustomerMutationResult = ApolloReactCommon.MutationResult<CreateCustomerMutation>;
export type CreateCustomerMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateCustomerMutation, CreateCustomerMutationVariables>;
export const DeleteCustomerDocument = gql`
    mutation DeleteCustomer($customerId: Int!) {
  deleteCustomerByCustomerId(input: {customerId: $customerId}) {
    customer {
      customerId
    }
  }
}
    `;
export type DeleteCustomerMutationFn = ApolloReactCommon.MutationFunction<DeleteCustomerMutation, DeleteCustomerMutationVariables>;

/**
 * __useDeleteCustomerMutation__
 *
 * To run a mutation, you first call `useDeleteCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCustomerMutation, { data, loading, error }] = useDeleteCustomerMutation({
 *   variables: {
 *      customerId: // value for 'customerId'
 *   },
 * });
 */
export function useDeleteCustomerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteCustomerMutation, DeleteCustomerMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteCustomerMutation, DeleteCustomerMutationVariables>(DeleteCustomerDocument, baseOptions);
      }
export type DeleteCustomerMutationHookResult = ReturnType<typeof useDeleteCustomerMutation>;
export type DeleteCustomerMutationResult = ApolloReactCommon.MutationResult<DeleteCustomerMutation>;
export type DeleteCustomerMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteCustomerMutation, DeleteCustomerMutationVariables>;
export const UpdateCustomerDocument = gql`
    mutation UpdateCustomer($customerId: Int!, $name: String!, $address: String, $phone: String, $regionId: Int, $dealerId: Int!, $note: String) {
  updateCustomerByCustomerId(input: {customerPatch: {name: $name, address: $address, phone: $phone, regionId: $regionId, dealerId: $dealerId, note: $note}, customerId: $customerId}) {
    customer {
      customerId
      dealerId
      dealerByDealerId {
        name
      }
      address
      name
      phone
      note
      regionId
    }
  }
}
    `;
export type UpdateCustomerMutationFn = ApolloReactCommon.MutationFunction<UpdateCustomerMutation, UpdateCustomerMutationVariables>;

/**
 * __useUpdateCustomerMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomerMutation, { data, loading, error }] = useUpdateCustomerMutation({
 *   variables: {
 *      customerId: // value for 'customerId'
 *      name: // value for 'name'
 *      address: // value for 'address'
 *      phone: // value for 'phone'
 *      regionId: // value for 'regionId'
 *      dealerId: // value for 'dealerId'
 *      note: // value for 'note'
 *   },
 * });
 */
export function useUpdateCustomerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateCustomerMutation, UpdateCustomerMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateCustomerMutation, UpdateCustomerMutationVariables>(UpdateCustomerDocument, baseOptions);
      }
export type UpdateCustomerMutationHookResult = ReturnType<typeof useUpdateCustomerMutation>;
export type UpdateCustomerMutationResult = ApolloReactCommon.MutationResult<UpdateCustomerMutation>;
export type UpdateCustomerMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateCustomerMutation, UpdateCustomerMutationVariables>;
export const GetDealersAndRegionsDocument = gql`
    query GetDealersAndRegions {
  allRegions {
    nodes {
      regionId
      name
    }
  }
  allDealers {
    nodes {
      dealerId
      name
      dealerId
      address
      phone
    }
  }
}
    `;

/**
 * __useGetDealersAndRegionsQuery__
 *
 * To run a query within a React component, call `useGetDealersAndRegionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDealersAndRegionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDealersAndRegionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDealersAndRegionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetDealersAndRegionsQuery, GetDealersAndRegionsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetDealersAndRegionsQuery, GetDealersAndRegionsQueryVariables>(GetDealersAndRegionsDocument, baseOptions);
      }
export function useGetDealersAndRegionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetDealersAndRegionsQuery, GetDealersAndRegionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetDealersAndRegionsQuery, GetDealersAndRegionsQueryVariables>(GetDealersAndRegionsDocument, baseOptions);
        }
export type GetDealersAndRegionsQueryHookResult = ReturnType<typeof useGetDealersAndRegionsQuery>;
export type GetDealersAndRegionsLazyQueryHookResult = ReturnType<typeof useGetDealersAndRegionsLazyQuery>;
export type GetDealersAndRegionsQueryResult = ApolloReactCommon.QueryResult<GetDealersAndRegionsQuery, GetDealersAndRegionsQueryVariables>;
export const GetCustomersDocument = gql`
    query GetCustomers {
  allCustomers {
    nodes {
      customerId
      dealerId
      dealerByDealerId {
        name
      }
      address
      name
      phone
      note
      regionId
    }
  }
}
    `;

/**
 * __useGetCustomersQuery__
 *
 * To run a query within a React component, call `useGetCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCustomersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, baseOptions);
      }
export function useGetCustomersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, baseOptions);
        }
export type GetCustomersQueryHookResult = ReturnType<typeof useGetCustomersQuery>;
export type GetCustomersLazyQueryHookResult = ReturnType<typeof useGetCustomersLazyQuery>;
export type GetCustomersQueryResult = ApolloReactCommon.QueryResult<GetCustomersQuery, GetCustomersQueryVariables>;
export const GetEstimatesDocument = gql`
    query GetEstimates {
  allEstimates {
    nodes {
      estimateId
      status
      customerId
    }
  }
}
    `;

/**
 * __useGetEstimatesQuery__
 *
 * To run a query within a React component, call `useGetEstimatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEstimatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEstimatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEstimatesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetEstimatesQuery, GetEstimatesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetEstimatesQuery, GetEstimatesQueryVariables>(GetEstimatesDocument, baseOptions);
      }
export function useGetEstimatesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetEstimatesQuery, GetEstimatesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetEstimatesQuery, GetEstimatesQueryVariables>(GetEstimatesDocument, baseOptions);
        }
export type GetEstimatesQueryHookResult = ReturnType<typeof useGetEstimatesQuery>;
export type GetEstimatesLazyQueryHookResult = ReturnType<typeof useGetEstimatesLazyQuery>;
export type GetEstimatesQueryResult = ApolloReactCommon.QueryResult<GetEstimatesQuery, GetEstimatesQueryVariables>;
export const GetEstimateByIdDocument = gql`
    query GetEstimateById {
  estimateByEstimateId(estimateId: 1) {
    estimateId
    date
    customerByCustomerId {
      customerId
      name
      address
      regionByRegionId {
        regionId
        name
        shippingAmount
      }
    }
    estimateProductsByEstimateId {
      nodes {
        productByProductId {
          productId
          name
          productPrice
        }
        estimatePrice
        quantity
      }
    }
  }
}
    `;

/**
 * __useGetEstimateByIdQuery__
 *
 * To run a query within a React component, call `useGetEstimateByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEstimateByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEstimateByIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEstimateByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetEstimateByIdQuery, GetEstimateByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetEstimateByIdQuery, GetEstimateByIdQueryVariables>(GetEstimateByIdDocument, baseOptions);
      }
export function useGetEstimateByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetEstimateByIdQuery, GetEstimateByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetEstimateByIdQuery, GetEstimateByIdQueryVariables>(GetEstimateByIdDocument, baseOptions);
        }
export type GetEstimateByIdQueryHookResult = ReturnType<typeof useGetEstimateByIdQuery>;
export type GetEstimateByIdLazyQueryHookResult = ReturnType<typeof useGetEstimateByIdLazyQuery>;
export type GetEstimateByIdQueryResult = ApolloReactCommon.QueryResult<GetEstimateByIdQuery, GetEstimateByIdQueryVariables>;