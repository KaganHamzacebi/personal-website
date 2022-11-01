import { gql } from '@apollo/client';

export const SAVE_MESSAGE = gql`
  mutation SaveMessage($message: IMessage!) {
    saveMessage(message: $message)
  }
`;
