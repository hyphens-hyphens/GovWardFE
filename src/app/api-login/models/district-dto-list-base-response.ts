/* tslint:disable */
/* eslint-disable */
import { DistrictDto } from '../models/district-dto';
export interface DistrictDtoListBaseResponse {
  data?: Array<DistrictDto> | null;
  error?: string | null;
  status?: number;
}
