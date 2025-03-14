import RegisterForm from "@/components/Fragments/RegisterForm";
import AuthLayout from "@/components/Layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout bgImg="/images/register-bg.jpg" type="register">
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
