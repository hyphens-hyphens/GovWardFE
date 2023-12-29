/* tslint:disable */
/* eslint-disable */
export interface AdminRegistrationDto {
  district?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phoneNumber?: string | null;
  roles?: Array<string> | null;
  userName: string;
  ward?: string | null;
}
