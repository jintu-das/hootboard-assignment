import { CardContent, CardFooter } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function WeatherSkeleton() {
  return (
    <>
      <CardContent className="pt-5 flex flex-col gap-1 items-center justify-center">
        <Skeleton className="w-28 h-28 rounded-full" />
        <Skeleton className="w-20 h-9 mt-2" />
        <Skeleton className="w-40 h-5 my-1" />
        <Skeleton className="w-32 h-3" />
      </CardContent>
      <CardFooter className="flex border-t p-0">
        <div className="flex-1  flex items-center justify-center border-r p-4">
          <div className="flex items-center gap-2">
            <Skeleton className="w-8 h-8 rounded-full" />
            <div>
              <Skeleton className="w-11 h-3 mb-1" />
              <Skeleton className="w-9 h-2" />
            </div>
          </div>
        </div>
        <div className="flex-1  flex items-center justify-center p-4">
          <div className="flex items-center gap-2">
            <Skeleton className="w-8 h-8 rounded-full" />
            <div>
              <Skeleton className="w-11 h-3 mb-1" />
              <Skeleton className="w-9 h-2" />
            </div>
          </div>
        </div>
      </CardFooter>
    </>
  );
}
