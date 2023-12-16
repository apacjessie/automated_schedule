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
  authenticated: false,
  accountType: AccountType.ITM,
};

export default auth;
