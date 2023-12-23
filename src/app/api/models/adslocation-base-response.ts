/* tslint:disable */
/* eslint-disable */
import { Adslocation } from '../models/adslocation';
export interface AdslocationBaseResponse {
  data?: Adslocation;
  errorMessage?: string | null;
  isError?: boolean;
  status?: number;
}
