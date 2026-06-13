import { Card, CardContent, CardHeader } from "@workspace/ui/components/card";
import { Skeleton } from "@workspace/ui/components/skeleton";

interface SettingsCardSkeletonProps {
  gridClasses: string;
  itemCount?: number;
}

export const SettingsCardSkeleton = ({
  gridClasses,
  itemCount = 3,
}: SettingsCardSkeletonProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0">
      <div className="w-full space-y-2">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-4 w-48 max-w-full" />
      </div>

      <div className="shrink-0 md:hidden">
        <Skeleton className="h-9 w-[130px] rounded-md" />
      </div>
    </CardHeader>

    <CardContent className="hidden md:block">
      <div className={gridClasses}>
        {[...new Array(itemCount)].map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: Skeletons don't need unique keys
          <div className="flex flex-col gap-3" key={i}>
            <Skeleton className="aspect-video rounded-lg" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);
