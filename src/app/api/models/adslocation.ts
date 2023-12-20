/* tslint:disable */
/* eslint-disable */
import { Adsadvertising } from '../models/adsadvertising';
import { Adslocationpicture } from '../models/adslocationpicture';
import { Adslocationupdate } from '../models/adslocationupdate';
import { Reportwarning } from '../models/reportwarning';
export interface Adslocation {
  adsAddress?: string | null;
  adsadvertisings?: Array<Adsadvertising> | null;
  adslocationpictures?: Array<Adslocationpicture> | null;
  adslocationupdates?: Array<Adslocationupdate> | null;
  createOnUtc?: string | null;
  createUserId?: number | null;
  endDate?: string | null;
  height?: number | null;
  id?: number;
  isActive?: boolean;
  lastUpdateOnUtc?: string | null;
  latitute?: number | null;
  longtitute?: number | null;
  quantity?: number | null;
  reportwarnings?: Array<Reportwarning> | null;
  sizeUnit?: string | null;
  status?: number | null;
  typeAds?: number | null;
  updateUserId?: number | null;
  width?: number | null;
}
