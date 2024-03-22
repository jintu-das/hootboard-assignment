import * as React from "react";
import { toast } from "sonner";

export default function useGeolocation() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [coords, setCoords] = React.useState<GeolocationCoordinates | null>(
    null
  );

  function fetchLocation() {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords(position.coords);
        setIsLoading(false);
      },
      (error) => {
        toast.error(error.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, fetchLocation, coords };
}
