import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router";

interface ProfileMenuProps {
  photo: string;
}

const ProfileMenu = (props: ProfileMenuProps) => {
  const { photo } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer border-0">
        <div className="flex flex-row justify-between items-center gap-[8px] md:gap-[15px]">
          <img
            src={photo}
            alt="profile"
            className="w-[20px] md:w-[40px] rounded-full"
          />
          <img
            src="/images/arrowDown.png"
            alt="arrow"
            className="w-[8px] h-[4.94px] md:w-[14px] md:h-[8.65px]"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#181A1C] text-white w-[150px] md:w-[200px] rounded-lg shadow-lg border border-[#2B2C2F] mt-2">
        <DropdownMenuLabel className="text-center">
          Profil Menu
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profil Saya</DropdownMenuItem>
        <DropdownMenuItem>Ubah Ke Premium</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Link to={"/login"}>Keluar</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
