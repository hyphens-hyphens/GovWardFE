/* tslint:disable */
/* eslint-disable */
export interface UserRegistrationDto {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phoneNumber?: string | null;
  roles?: Array<string> | null;
  userName: string;
}
