import Footer from "../Fragments/Footer";
import Navbar from "../Fragments/Navbar";

interface PropsTypes {
  children: React.ReactNode;
}

const AppLayout = (props: PropsTypes) => {
  const { children } = props;

  return (
    <div className="flex flex-col justify-center items-center bg-[#181A1C]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
