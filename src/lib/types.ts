export interface User {
  id: number;
  name: string;
  email: string;
  role?: Role;
};

export interface Role {
  id: number;
  name: string;
  description: string;
  permissions: string[];
}
