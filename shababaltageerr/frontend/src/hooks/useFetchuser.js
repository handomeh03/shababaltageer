import { useEffect, useState } from "react";
import { UseUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export function useFetchuser() {
  const { token, userDispatch } = UseUser();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    async function fetchuser() {
      try {
        setLoader(true);

        const res = await fetch("http://localhost:8080/api/user/getuser", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          userDispatch({ type: "fetchuser", payload: data.user });
        } else {
          throw new Error(data.error); 
        }
      } catch (error) {
        if (error.message === "Invalid or expired token") {
          navigate("/login");
        }
      } finally {
        setLoader(false);
      }
    }

    fetchuser();
  }, [token, userDispatch, navigate]);

  return { loader };
}
