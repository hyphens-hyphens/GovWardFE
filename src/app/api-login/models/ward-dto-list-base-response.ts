/* tslint:disable */
/* eslint-disable */
import { WardDto } from '../models/ward-dto';
export interface WardDtoListBaseResponse {
  data?: Array<WardDto> | null;
  error?: string | null;
  status?: number;
}
