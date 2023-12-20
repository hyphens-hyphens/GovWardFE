/* tslint:disable */
/* eslint-disable */
import { Adsadvertisingpicture } from '../models/adsadvertisingpicture';
import { Adslocation } from '../models/adslocation';
export interface Adsadvertising {
  adsAddress?: string | null;
  adsLocation?: Adslocation;
  adsLocationId?: number | null;
  adsadvertisingpictures?: Array<Adsadvertisingpicture> | null;
  city?: string | null;
  comment?: string | null;
  companyAddress?: string | null;
  companyInfo?: string | null;
  createOnUtc?: string | null;
  createUserId?: number | null;
  description?: string | null;
  district?: string | null;
  email?: string | null;
  height?: number | null;
  hinhThucQuangCao?: number | null;
  id?: number;
  isActive?: boolean;
  khuVuc?: number | null;
  lastUpdateOnUtc?: string | null;
  latitute?: number | null;
  loaiViTri?: number | null;
  longtitute?: number | null;
  name?: string | null;
  ngayBatDauHd?: string | null;
  ngayKetThucHd?: string | null;
  phoneNumber?: string | null;
  processingStatus?: number | null;
  sizeUnit?: string | null;
  updateUserId?: number | null;
  ward?: string | null;
  width?: number | null;
}
