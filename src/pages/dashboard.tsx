// pages/dashboard.tsx
import jwt from "jsonwebtoken";
import { GetServerSideProps } from "next";

interface DashboardProps {
  userId: string;
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies?.token || "";

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
    return { props: { userId: decoded.userId } };
  } catch {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
};

export default function Dashboard({ userId }: DashboardProps) {
  return <h1>Welcome, user {userId}</h1>;
}
