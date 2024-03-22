import * as React from "react";
import WeatherSkeleton from "@/components/skeletons/weather-skeleton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const WeatherError = React.lazy(() => import("@/components/weather-error"));

import useFetchWeather from "@/hooks/useFetchWeather";
import { Location } from "@/lib/definition";

import { ArrowLeft, Droplets, MapPin, ThermometerSun } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Weather() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const location = {
    city: searchParams.get("city"),
    lat: searchParams.get("lat"),
    lon: searchParams.get("lon"),
  } as Location;

  const { data, error, isLoading } = useFetchWeather(location);

  function goBack() {
    navigate("/");
  }

  return (
    <>
      <Card className="w-[350px]">
        <CardHeader className="border-b py-4">
          <CardTitle className="text-primary flex items-center gap-2">
            <Button
              aria-label="go back"
              size="icon"
              variant="ghost"
              onClick={goBack}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            Weather App
          </CardTitle>
        </CardHeader>

        {error && (
          <React.Suspense fallback={<WeatherSkeleton />}>
            <WeatherError error={error} />
          </React.Suspense>
        )}

        {isLoading && <WeatherSkeleton />}
        {!isLoading && !error && (
          <>
            <CardContent className="pt-5 flex flex-col gap-1 items-center justify-center">
              <div className="w-28 h-28 rounded-full flex justify-center items-center">
                <img
                  src={`http://openweathermap.org/img/w/${data?.weather[0]?.icon}.png`}
                  alt={data?.weather[0]?.description}
                  width={112}
                  height={112}
                />
              </div>

              <h2 className="text-4xl font-black font-mono pt-2">
                {data?.main?.temp}&deg;C
              </h2>

              <p className="font-medium">{data?.weather[0]?.main}</p>
              <p className="text-sm flex items-center gap-2 font-medium">
                <MapPin className="h-3 w-3" />
                {data?.name}
              </p>
            </CardContent>
            <CardFooter className="flex border-t p-0">
              <div className="flex-1  flex items-center justify-center border-r p-4">
                <div className="flex items-center gap-3">
                  <ThermometerSun className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">
                      {data?.main?.feels_like}
                      <span className="font-light">&deg;C</span>
                    </p>

                    <p className="text-xs font-medium text-slate-800">
                      Feels Like
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1  flex items-center justify-center p-4">
                <div className="flex items-center gap-3">
                  <Droplets className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">
                      {data?.main?.humidity}
                      <span className="font-light">&deg;C</span>
                    </p>

                    <p className="text-xs font-medium text-slate-800">
                      Humidity
                    </p>
                  </div>
                </div>
              </div>
            </CardFooter>
          </>
        )}
      </Card>
    </>
  );
}
