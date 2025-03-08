import { Link } from "react-router";
import InputLabel from "./InputLabel";
import { Button } from "../ui/button";

const LoginForm = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <form action=""> */}
      <div>
        <InputLabel
          type="text"
          name="username"
          placeholder="Masukkan Username"
          title="Username"
        />
        <InputLabel
          type="password"
          name="password"
          placeholder="Masukkan kata sandi"
          title="Kata Sandi"
        />
        <div className="flex justify-between items-center -mt-1 md:-mt-3">
          <p className="text-[#C1C2C4] text-[10px] md:text-[16px]">
            Belum punya akun?{" "}
            <Link
              to={"/register"}
              className="text-white cursor-pointer font-medium"
            >
              Daftar
            </Link>
          </p>
          <p className="text-white text-[10px] md:text-[16px] cursor-pointer">
            Lupa kata sandi?
          </p>
        </div>
        <Button
          variant={"outline"}
          className="w-[258px] md:w-[449px] text-[10px] md:text-[16px] mt-4 md:mt-8"
        >
          <Link to={"/"}>Masuk</Link>
        </Button>
        <p className="text-center my-1 md:my-2 text-[#9D9EA1] text-[10px] md:text-[14px]">
          Atau
        </p>
        <Button
          variant={"outline"}
          className="w-[258px] md:w-[449px] text-[10px] md:text-[16px] md:mb-5"
        >
          <img
            src="/images/google.png"
            alt="google"
            className="w-[10px] md:w-[18px]"
          />
          Masuk dengan Google
        </Button>
        {/* </form> */}
      </div>
    </div>
  );
};

export default LoginForm;
