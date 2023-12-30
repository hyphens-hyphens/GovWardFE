/* tslint:disable */
/* eslint-disable */
import { Reportwarning } from '../models/reportwarning';
export interface ReportwarningListBaseResponse {
  data?: Array<Reportwarning> | null;
  errorMessage?: string | null;
  isError?: boolean;
  status?: number;
}
