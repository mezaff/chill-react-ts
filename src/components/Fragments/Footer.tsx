const Footer = () => {
  return (
    <>
      <div className="hidden lg:flex flex-row justify-between font-['Lato'] items-center gap-[215px] bg-[#181A1C] w-full py-[19px] md:py-[25px] px-[20px] md:px-[80px] text-white border-t-1 border-[#E7E3FC3B">
        <div className="flex flex-col gap-[26px]">
          <img src="/images/logo.png" alt="chill" className="w-[163px]" />
          <p className="text-[14px] text-[#E7E3FCAD] font-['Poppins']">
            @2025 Chill All Rights Reserved.
          </p>
        </div>
        <div className="flex justify-between w-full gap-[160px]">
          <div className="flex flex-col gap-[15px] text-[16px]">
            <p className="font-bold">Genre</p>
            <div className="flex justify-between gap-[28px] font-medium text-[#C1C2C4]">
              <ul>
                <li>Aksi</li>
                <li>Anak-anak</li>
                <li>Anime</li>
                <li>Britania</li>
              </ul>
              <ul>
                <li>Drama</li>
                <li>Fantasi Ilmiah & Fantasi</li>
                <li>Kejahatan</li>
                <li>KDrama</li>
              </ul>
              <ul>
                <li>Komedi</li>
                <li>Petualangan</li>
                <li>Perang</li>
                <li>Romantis</li>
              </ul>
              <ul>
                <li>Sains & Alam</li>
                <li>Thriller</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-[15px] text-[16px]">
            <p className="font-bold">Bantuan</p>
            <div className="flex justify-between gap-[28px] font-medium text-[#C1C2C4]">
              <ul>
                <li>Aksi</li>
                <li>Anak-anak</li>
                <li>Anime</li>
                <li>Britania</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden w-full flex-col gap-[40px] p-[20px] border-t-1 border-[#E7E3FC3B] ">
        <div className="flex flex-col gap-[16px]">
          <img src="/images/logo.png" alt="chill" className="w-[84px]" />
          <p className="text-[#C1C2C4] font-[12px]">
            @2025 Chill All Right Reserved
          </p>
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="flex justify-between items-center gap-[260.59px]">
            <p className="text-[16px] text-white font-medium">Genre</p>
            <img
              src="/images/Vector (1).png"
              alt="arrowDown"
              className="w-[7.41px] h-[12px]"
            />
          </div>
          <div className="flex justify-between items-center gap-[260.59px]">
            <p className="text-[16px] text-white font-medium">Bantuan</p>
            <img
              src="/images/Vector (1).png"
              alt="arrowDown"
              className="w-[7.41px] h-[12px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
