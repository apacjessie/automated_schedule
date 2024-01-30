import auth, { AccountType } from '@/utils/auth';
import DeanRoute from './type/dean';
import CommitteRoute from './type/committe';
import ItmRoute from './type/itm';

const TypeRoute: { [key: string]: any[] } = {
  [AccountType.DEAN]: DeanRoute,
  [AccountType.COMMITTE]: CommitteRoute,
  [AccountType.ITM]: ItmRoute,
};

const privateRoutes = TypeRoute[auth.accountType];

export default privateRoutes;
