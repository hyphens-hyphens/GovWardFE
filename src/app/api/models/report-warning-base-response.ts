/* tslint:disable */
/* eslint-disable */
import { ReportWarning } from '../models/report-warning';
export interface ReportWarningBaseResponse {
  data?: ReportWarning;
  errorMessage?: string | null;
  isError?: boolean;
  status?: number;
}
