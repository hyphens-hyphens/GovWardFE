/* tslint:disable */
/* eslint-disable */
import { Adslocation } from '../models/adslocation';
export interface AdslocationListBaseResponse {
  data?: Array<Adslocation> | null;
  errorMessage?: string | null;
  isError?: boolean;
  status?: number;
}
