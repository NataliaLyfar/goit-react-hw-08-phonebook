import { toast } from "react-toastify";

export const errorCatcher = (register=true, error) => {
    if (error?.status === 400) {
        if(error?.data?.name === "MongoError") toast.error(`User already exists! Try again!`);
        if(error?.data?.message) toast.error(`${error?.data?.message}`);
        if(!register)toast.error(`Incorrect email or password. Try again!`);
      };
      if (error?.status === 404) toast.error(`Сonnection error 404! Try later!`);
      if (error?.status === 500) toast.error(`Server error! Try again!`);
};