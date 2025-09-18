"use client";

import { useQuery } from "@tanstack/react-query";
import { getJobPosts } from "@/services/getJobPosts";
import JobPostListItem, { JobPostListItemLoading } from "@/components/JobPostListItem";
import { JobPost } from "@/types/JobPost";
import { Card } from "@/components/ui/card";
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
            <Card className="gap-10 bg-slate-800 h-80 border-slate-700 flex justify-center items-center flex-col">
                <span className="text-3xl text-slate-400">Error: {message}</span>
                <Bug size={64} className="text-slate-400" />
            </Card>
        );
    }

    if (!data || data.length === 0) {
        return <span>No posts found!</span>;
    }

    return (
        <div className="flex flex-col gap-4">
            {data.map((post: JobPost) => (
                <JobPostListItem key={post.id} jobPost={post} />
            ))}
        </div>
    );
}


