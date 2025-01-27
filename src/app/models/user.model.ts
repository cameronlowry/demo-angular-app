/**
 * @interface User
 * @description Represents a user in the system.
 * Used to identify and manage users, including their profile details.
 */
export interface User {
  /**
   * URL or path to the user's avatar image.
   * This is typically displayed as the user's profile picture.
   * Example: 'https://example.com/images/avatar.png'.
   */
  avatar: string;

  /**
   * Unique identifier for the user.
   * Example: 'user-12345'.
   */
  id: string;

  /**
   * Full name of the user.
   * Example: 'John Doe'.
   */
  name: string;
}
