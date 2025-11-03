"use client";

import { useQuery } from "@tanstack/react-query";
import { getJobPosts } from "@/services/getJobPosts";
import JobPostListItem, { JobPostListItemLoading } from "@/components/JobPostListItem";
import { JobPost } from "@/types/JobPost";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bug } from "lucide-react";

export default function JobPostList() {
    const { isPending, isError, data, error } = useQuery<JobPost[]>({
        queryKey: ['posts'],
        staleTime: 100000 * 60,
        retry: 0,
        queryFn: () => getJobPosts('/jobposts/'),
    });

    if (isPending) return <JobPostListItemLoading />;

    if (isError) {
        const message = error instanceof Error ? error.message : String(error);
        return (
            <Card className="h-80 flex justify-center items-center">
                <CardContent className="flex flex-col items-center justify-center gap-10">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl text-slate-400">{message}</CardTitle>
                    </CardHeader>
                    <Bug size={64} className="text-slate-400" />
                </CardContent>
            </Card>
        );
    }

    if (!data || data.length === 0) {
        return <span>No posts found!</span>;
    }

    return (
        <div className="flex flex-col gap-4">
            {data.slice(0, 3).map((post: JobPost) => (
                <JobPostListItem key={post.id} jobPost={post} />
            ))}
        </div>
    );
}


