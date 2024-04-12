import { useRecoilState } from "recoil";
import {
  isAdminAtom,
  tokenAtom,
} from "../components/navigation/utils/navigation.recoil";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AdminGuard = ({ children }: any) => {
  const [token, setToken] = useRecoilState(tokenAtom);
  const [isAdmin, setIsAdmin] = useRecoilState(isAdminAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) return;
    if (!token) {
      setIsAdmin(false);
      return;
    }
    if (localStorage.getItem("idToken")) {
      if (token.expiresIn < Date.now()) {
        localStorage.removeItem("idToken");
        setIsAdmin(false);
        setToken({ token: null, expiresIn: 0 });
        alert("Session expired. Please login again.");
        navigate("/login");
        return;
      }
    }
  }, []);

  useEffect(() => {
    if (token.token && token.token !== "") {
      setIsAdmin(true);
    }
  }, [token]);

  return <>{children}</>;
};
