import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Location, Weather } from "./definition";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchLocation(location: Location): Promise<Weather> {
  const searchQuery = location.city
    ? `q=${location.city}`
    : `lat=${location.lat}&lon=${location.lon}`;

  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?${searchQuery}&appid=${
      import.meta.env.VITE_WEATHER_API
    }&units=metric`
  );
  return response.data;
}
