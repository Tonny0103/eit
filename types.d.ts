type User = {
  name: string;
  email: string;
  password: string;
  role: string;
};

type Order = {
  name: string;
  cell: string;
  description: string;
  address: description;
  user: User;
};
