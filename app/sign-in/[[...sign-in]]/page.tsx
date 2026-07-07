import { SignIn } from "@clerk/nextjs";
import AuthLayout from "@/components/auth/AuthLayout";

export default function Page() {
  return (
    <AuthLayout>
      <SignIn
        appearance={{
          variables: {
            colorPrimary: "#2563EB",
          },
        }}
      />
    </AuthLayout>
  );
}