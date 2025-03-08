import { Link } from "react-router";
import ProfileMenu from "./ProfileMenu";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center fixed shadow-md z-50 bg-[#181A1C] w-full py-[19px] md:py-[25px] px-[20px] md:px-[80px] text-white text-[10px] md:text-[18px]">
      <div className="flex flex-row justify-between items-center gap-[12px] md:gap-[80px]">
        <Link to={"/"}>
          <img
            src="/images/logo.png"
            alt="chill"
            className="w-[103.33px] hidden md:block"
          />
          <img
            src="/images/Vector.png"
            alt="chill"
            className="w-[20px] block md:hidden"
          />
        </Link>
        <Link to={"#topSeries"}>Series</Link>
        <Link to={"#film"}>Film</Link>
        <Link to={"#daftarSaya"}>Daftar Saya</Link>
      </div>
      <ProfileMenu photo="/images/profile.jpg" />
    </div>
  );
};

export default Navbar;
