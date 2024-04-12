import {
  Button,
  Flex,
  Spinner,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { Formiz, useForm, useFormFields } from "@formiz/core";
import InputField from "../components/ui/forms/inputField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Page from "../components/ui/page";
import { ICONS_SIZE } from "../lib/consts";
import Header from "../components/ui/header";
import Footer from "../components/footer/footer.organism";
import Logo from "../components/ui/logo";
import { Login } from "../components/competitions/core/competitions.service";
import useAxios from "../lib/axios/useAxios";
import { useEffect } from "react";
import { displayToast } from "../components/ui/toast";
import { useRecoilState } from "recoil";
import { tokenAtom } from "../components/navigation/utils/navigation.recoil";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const toast = useToast();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const loginForm = useForm();
  const [, setToken] = useRecoilState(tokenAtom);
  const navigate = useNavigate();

  const values = useFormFields({
    connect: loginForm,
    selector: (field) => field.value,
  });

  const { data, isLoading, error, loadData } = useAxios({
    fetchFn: Login,
    paramsOfFetch: { username: values.username, password: values.password },
  });

  const handleLogin = () => {
    loadData({ username: values.username, password: values.password });
  };

  useEffect(() => {
    if (error) {
      displayToast({
        id: "loginError",
        type: "error",
        text: "The username or password is incorrect. Please try again.",
        toast,
      });
    }
    if (data) {
      displayToast({
        id: "loginSuccess",
        type: "success",
        text: "Login successful. You will be redirected to the homepage.",
        toast,
      });
      setToken({ token: data, expiresIn: Date.now() + 60 * 60 * 1000 });
      navigate("/");
    }
  }, [data, error]);

  return (
    <Page>
      <Header title="Login" />
      <Flex
        flexDir={"column"}
        p={8}
        gap={4}
        bg={"gray.900"}
        borderRadius={"md"}
        w={isMobile ? "90%" : "50%"}
        margin={"0 auto"}
        color={"white"}
        my={8}
        h={"54vh"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <Logo width={96} height={36} />{" "}
        <Formiz connect={loginForm}>
          <Flex flexDir={"column"} w={"100%"} gap={4}>
            <InputField
              name="username"
              type="text"
              leftEl={<FontAwesomeIcon fontSize={ICONS_SIZE} icon={faUser} />}
              placeholder="Username"
              isReadonly={isLoading}
            />
            <InputField
              name="password"
              type="password"
              leftEl={<FontAwesomeIcon fontSize={ICONS_SIZE} icon={faLock} />}
              placeholder="Password"
              isReadonly={isLoading}
            />
            <Button
              onClick={handleLogin}
              isDisabled={isLoading}
              _hover={{ color: "black", bg: "white", borderColor: "white" }}
            >
              {isLoading ? <Spinner /> : `Login`}
            </Button>
          </Flex>
        </Formiz>
      </Flex>
      <Footer />
    </Page>
  );
};

export default LoginPage;
