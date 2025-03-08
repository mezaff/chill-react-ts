import { Link } from "react-router";
import InputLabel from "./InputLabel";
import { Button } from "../ui/button";

const RegisterForm = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <form action="">
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
        <InputLabel
          type="password"
          name="passwordConfirm"
          placeholder="Masukkan kata sandi"
          title="Konfirmasi Kata Sandi"
        />
        <div className="flex justify-between items-center -mt-1 md:-mt-3">
          <p className="text-[#C1C2C4] text-[10px] md:text-[16px]">
            Sudah punya akun?{" "}
            <Link
              to={"/login"}
              className="text-white cursor-pointer font-medium"
            >
              Masuk
            </Link>
          </p>
        </div>
        <Link to={"/login"}>
          <Button
            variant={"outline"}
            className="w-[258px] md:w-[449px] text-[10px] md:text-[16px] mt-4 md:mt-8"
          >
            Daftar
          </Button>
        </Link>
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
          Daftar dengan Google
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
