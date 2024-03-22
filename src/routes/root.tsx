import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <main className="min-h-screen bg-primary flex items-center justify-center">
      <Outlet />
    </main>
  );
}
