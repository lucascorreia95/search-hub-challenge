import { useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/github";

export const User = () => {
  let { login } = useParams();

  useEffect(() => {
    const getResults = async () => {
      const response = await api.get("/users/" + login);

      console.log(response);
    };

    getResults();
  }, [login]);

  return (
    <div>
      <h1>{login} User page!</h1>
    </div>
  );
};

export default User;
