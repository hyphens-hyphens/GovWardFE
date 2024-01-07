/* tslint:disable */
/* eslint-disable */
import { UserApp } from '../models/user-app';
export interface UserAppListBaseResponse {
  data?: Array<UserApp> | null;
  errorMessage?: string | null;
  isError?: boolean;
  status?: number;
}
