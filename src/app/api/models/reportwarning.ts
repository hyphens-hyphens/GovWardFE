/* tslint:disable */
/* eslint-disable */
import { Adslocation } from '../models/adslocation';
import { Reportwarningurl } from '../models/reportwarningurl';
export interface Reportwarning {
  adsLocation?: Adslocation;
  adsLocationId?: number | null;
  comment?: string | null;
  createOnUtc?: string | null;
  createUserId?: number | null;
  email?: string | null;
  fullName?: string | null;
  id?: number;
  isActive?: boolean;
  lastUpdateOnUtc?: string | null;
  phoneNumber?: string | null;
  reportwarningurls?: Array<Reportwarningurl> | null;
  status?: number | null;
  updateUserId?: number | null;
  warmType?: number | null;
}
