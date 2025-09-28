"use client";

import { CalendarClock, MapPin } from "lucide-react";
import { JobPost } from "@/types/JobPost";
import { getJobpostType } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type JobPostListItemProps = {
  jobPost: JobPost;
};

export const JobPostListItem = ({ jobPost }: JobPostListItemProps) => {
  const formatDeadline = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "numeric",
      month: "short",
    };
    const formattedDate = date.toLocaleDateString("nb-NO", options);
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };

  const deadline = jobPost.is_continuously_hiring
    ? "Fortløpende"
    : formatDeadline(jobPost.deadline);

  const classRange =
    jobPost.class_start === jobPost.class_end
      ? `${jobPost.class_start}. klasse`
      : `${jobPost.class_start}. - ${jobPost.class_end}. klasse`;

  return (
    <Card className="p-0 sm:p-0">
      <div className="flex flex-col lg:flex-row h-full rounded-l-lg">
        <div className="w-full lg:w-1/2 rounded-l-lg h-full">
          <Image
            alt={jobPost.image_alt || jobPost.title}
            className="w-full h-full !object-cover aspect-[16/10] sm:aspect-[16/7] rounded-t-lg lg:rounded-l-lg lg:rounded-r-none"
            width={672}
            height={294}
            src={jobPost.image}
            onError={(e) => (e.currentTarget.src = "/img/TihldeBackground.jpg")}
          />
        </div>
        <CardContent className="flex p-4 flex-col md:w-1/2 sm:p-4 space-y-2">
          <CardHeader className="p-0">
            <CardTitle className="text-lg sm:text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
              {jobPost.title}
            </CardTitle>
          </CardHeader>

          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <div className="border border-accent text-sm font-medium px-3 py-1 rounded-full w-fit">
                {getJobpostType(jobPost.job_type)}
              </div>
              <div className="border border-accent text-sm font-medium px-3 py-1 rounded-full w-fit">
                {jobPost.company}
              </div>
              <div className="border border-accent text-sm font-medium px-3 py-1 rounded-full w-fit">
                {classRange}
              </div>
            </div>

            <div className="mt-4 gap-y-2 gap-x-4 md:space-y-2 flex flex-wrap md:flex-col md:space-x-0 items-start">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <span>{jobPost.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CalendarClock className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <span>{deadline}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default JobPostListItem;

export const JobPostListItemLoading = () => (
  <div className="space-y-4">
    {Array.from({ length: 3 }).map((_, index) => (
      <div
        className="rounded-lg overflow-hidden shadow-sm flex flex-col sm:flex-row h-full bg-slate-800"
        key={index}
      >
        <div className="w-full sm:w-2/5">
          <Skeleton className="w-full h-[220px]" />
        </div>

        <div className="flex-1 p-4 flex flex-col justify-between">
          <div className="space-y-3">
            <Skeleton className="h-7 w-3/4" />

            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-6 w-28 rounded-full" />
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-5 w-36" />
          </div>
        </div>
      </div>
    ))}
  </div>
);
