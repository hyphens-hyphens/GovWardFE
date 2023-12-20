/* tslint:disable */
/* eslint-disable */
import { Adslocation } from '../models/adslocation';
export interface Adslocationupdate {
  adsLocation?: Adslocation;
  adsLocationId?: number | null;
  comment?: string | null;
  createOnUtc?: string | null;
  createUserId?: number | null;
  date?: string | null;
  id?: number;
  newStatus?: number | null;
  oldStatus?: number | null;
}
