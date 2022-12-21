export type UserImage = {
  id: string;
  url: string;
  user: {
    profile_image: string;
  };
};

export type FormValues = {
  name: string;
  email: string;
  birthDate: string;
  favColor: string;
  salary: number;
};
