import gql from "graphql-tag";

const GetCustomers = gql`
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

export type Customer = {
  customerId: number;
  dealerId: number;
  dealerByDealerId: {
    name: string; // TODO: synchronize with database
  };
  address?: string;
  name: string;
  phone?: string;
  note?: string;
  regionId: number;
};

const GetDealersAndRegions = gql`
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

export { GetCustomers, GetDealersAndRegions };
