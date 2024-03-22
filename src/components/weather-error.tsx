import { Droplets, ServerCrash, ThermometerSunIcon, Undo2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { CardContent, CardFooter } from "./ui/card";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function WeatherError({ error }: { error: any }) {
  const navigate = useNavigate();
  const goBack = () => navigate("/");

  return (
    <>
      <CardContent className="pt-5 flex flex-col gap-1 items-center justify-center">
        <div className="w-28 h-28 rounded-full flex justify-center items-center">
          <ServerCrash className="h-20 w-20 text-slate-300" />
        </div>

        <h2 className="text-4xl font-black font-mono pt-2">Oops</h2>

        <p className="font-medium mt-1 mb-2 capitalize">
          {error?.response?.data?.message}
        </p>

        <Button variant="secondary" onClick={goBack}>
          <Undo2 className="h-4 w-4 mr-2" />
          Go Back
        </Button>
      </CardContent>
      <CardFooter className="flex border-t p-0">
        <div className="flex-1  flex items-center justify-center border-r p-4">
          <div className="flex items-center gap-3">
            <ThermometerSunIcon className="h-8 w-8" />
            <div>
              <p className="font-semibold">
                0<span className="font-light">&deg;C</span>
              </p>

              <p className="text-xs font-medium text-slate-800">Feels Like</p>
            </div>
          </div>
        </div>
        <div className="flex-1  flex items-center justify-center p-4">
          <div className="flex items-center gap-3">
            <Droplets className="h-8 w-8" />
            <div>
              <p className="font-semibold">
                0<span className="font-light">&deg;C</span>
              </p>

              <p className="text-xs font-medium text-slate-800">Humidity</p>
            </div>
          </div>
        </div>
      </CardFooter>
    </>
  );
}
