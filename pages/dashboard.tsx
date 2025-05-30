// pages/dashboard.tsx
import jwt from "jsonwebtoken";

export async function getServerSideProps({ req }) {
  const token = req.cookies.token || "";
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return { props: { userId: decoded.userId } };
  } catch (err) {
    return { redirect: { destination: "/login", permanent: false } };
  }
}

export default function Dashboard({ userId }) {
  return <h1>Welcome, user {userId}</h1>;
}
