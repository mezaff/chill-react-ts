import Footer from "../Fragments/Footer";

interface PropsTypes {
  children: React.ReactNode;
}

const AppLayout = (props: PropsTypes) => {
  const { children } = props;

  return (
    <div className="flex flex-col justify-center items-center bg-[#181A1C]">
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
