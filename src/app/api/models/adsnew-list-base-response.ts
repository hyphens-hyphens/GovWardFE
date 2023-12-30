/* tslint:disable */
/* eslint-disable */
import { Adsnew } from '../models/adsnew';
export interface AdsnewListBaseResponse {
  data?: Array<Adsnew> | null;
  errorMessage?: string | null;
  isError?: boolean;
  status?: number;
}
