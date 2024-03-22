import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useGeolocation from "@/hooks/useGeolocation";

import { LoaderCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [city, setCity] = React.useState<string>("");

  const navigate = useNavigate();
  const { coords, fetchLocation, isLoading } = useGeolocation();

  function searchHandler() {
    if (!city) return;
    navigate({
      pathname: "/weather",
      search: `?city=${city}`,
    });
  }

  function keyDownHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      searchHandler();
    }
  }

  React.useEffect(() => {
    if (coords) {
      navigate({
        pathname: "/weather",
        search: `?lat=${coords.latitude}&lon=${coords.longitude}`,
      });
    }
  }, [coords]);

  return (
    <Card className="w-[350px]">
      <CardHeader className="border-b py-4">
        <CardTitle className="text-primary">Weather App</CardTitle>
      </CardHeader>
      <CardContent className="pt-5">
        <Input
          placeholder="Enter city name"
          className="text-center"
          autoFocus
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={keyDownHandler}
        />

        <div className="relative mt-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">or</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={fetchLocation} disabled={isLoading}>
          {isLoading && (
            <LoaderCircle className="h-4 w-4 mr-2 animate-spin spi" />
          )}
          {isLoading ? "Loading..." : "Get Device Location"}
        </Button>
      </CardFooter>
    </Card>
  );
}
