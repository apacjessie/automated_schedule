export enum AccountType {
  ITM = 'itm',
  DEAN = 'dean',
  COMMITTE = 'committe',
}

interface Props {
  authenticated: boolean;
  accountType: AccountType;
}

const auth: Props = {
  authenticated: true,
  accountType: AccountType.DEAN,
};

export default auth;
