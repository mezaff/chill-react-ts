import LoginForm from "@/components/Fragments/LoginForm";
import AuthLayout from "@/components/Layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout bgImg="/images/login-bg.jpg" type="login">
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
