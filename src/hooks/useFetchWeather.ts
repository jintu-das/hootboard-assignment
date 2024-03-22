import { Location } from "@/lib/definition";
import { fetchLocation } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

export default function useFetchWeather(location: Location) {
  return useQuery({
    queryKey: [location.city, location.lat, location.lon],
    queryFn: () => fetchLocation(location),
    retry: 1,
    refetchOnWindowFocus: false,
  });
}
