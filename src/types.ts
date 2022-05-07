import { DocumentNode } from 'graphql';

export interface MockedProviderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  mocks?: ReadonlyArray<MockedResponse>;
  children?: React.ReactNode;
}

export type MockedProvider = React.FC<MockedProviderProps>;

export interface Parameters extends MockedProviderProps {
  MockedProvider: MockedProvider;
}

export interface MockedResponse {
  request: {
    operationName?: string;
    query: DocumentNode;
    variables: JSON;
    context?: JSON;
  };
  result?: JSON | (() => JSON);
  error?: Error;
}
