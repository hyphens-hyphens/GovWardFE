/* tslint:disable */
/* eslint-disable */

/**
 * Dto để đăng ký user
 */
export interface UserRegistrationDto {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phoneNumber?: string | null;
  roles?: Array<string> | null;
  userName: string;
}
