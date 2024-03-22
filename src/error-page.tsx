import { ServerCrash } from "lucide-react";
import { useNavigate, useRouteError } from "react-router-dom";
import { Button } from "./components/ui/button";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  function goBack() {
    navigate("/");
  }

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <ServerCrash className="h-20 w-20 text-red-500" />
      <h2 className="mt-4 pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0">
        OOPS
      </h2>
      <p className="text-md text-slate-500">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-xl font-medium mb-3">
        <i>
          {(error as { statusText?: string; message?: string })?.statusText ||
            (error as { statusText?: string; message?: string })?.message}
        </i>
      </p>
      <Button onClick={goBack}>Go Back</Button>
    </main>
  );
}
