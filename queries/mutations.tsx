import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const CREATE_CUSTOMER = gql`
  mutation CreateCustomer(
    $name: String!
    $address: String
    $phone: String
    $regionId: BigInt
    $dealerId: BigInt!
    $note: String
    $shippingCompany: Int
    $shippingCustomer: Int
  ) {
    createCustomer(
      input: {
        customer: {
          name: $name
          address: $address
          phone: $phone
          regionId: $regionId
          dealerId: $dealerId
          note: $note
          shippingCompany: $shippingCompany
          shippingCustomer: $shippingCustomer
        }
      }
    ) {
      customer {
        name
        address
        phone
        regionId
        dealerId
        note
        shippingCompany
        shippingCustomer
      }
    }
  }
`;

const DELETE_CUSTOMER = gql`
  mutation($customerId: Int!) {
    deleteCustomerByCustomerId(input: { customerId: $customerId }) {
      customer {
        customerId
      }
    }
  }
`;

const UPDATE_CUSTOMER = gql`
  mutation(
    $customerId: Int!
    $name: String!
    $address: String
    $phone: String
    $regionId: BigInt
    $dealerId: BigInt!
    $note: String
    $shippingCompany: Int
    $shippingCustomer: Int
  ) {
    updateCustomerByCustomerId(
      input: {
        customerPatch: {
          name: $name
          address: $address
          phone: $phone
          regionId: $regionId
          dealerId: $dealerId
          note: $note
          shippingCompany: $shippingCompany
          shippingCustomer: $shippingCustomer
        }
        customerId: $customerId
      }
    ) {
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
        shippingCompany
        shippingCustomer
      }
    }
  }
`;
export { CREATE_CUSTOMER, DELETE_CUSTOMER, UPDATE_CUSTOMER };
