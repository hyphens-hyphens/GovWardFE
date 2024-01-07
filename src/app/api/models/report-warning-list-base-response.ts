/* tslint:disable */
/* eslint-disable */
import { ReportWarning } from '../models/report-warning';
export interface ReportWarningListBaseResponse {
  data?: Array<ReportWarning> | null;
  errorMessage?: string | null;
  isError?: boolean;
  status?: number;
}
