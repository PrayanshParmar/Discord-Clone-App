import { Skeleton } from "@/components/ui/skeleton";


export const SkeletonLoader = () => {

    return (
        <div className="flex items-center space-x-4 ">
      <Skeleton className="h-12 w-12 rounded-full bg-zinc-200 dark:bg-zinc-700" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]  bg-zinc-200 dark:bg-zinc-700 " />
        <Skeleton className="h-4 w-[200px]  bg-zinc-200 dark:bg-zinc-700 " />
      </div>
    </div>
    )
}