import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const AIAnalytics = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-10">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">
            AI Analytics Overview
          </h1>
          <p className="text-muted-foreground text-lg">
            Monitor and understand user behavior with advanced AI-driven insights.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="flex justify-center flex-wrap gap-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card className="transition hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Realtime Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold">1,245</p>
                  <p className="text-sm text-muted-foreground">
                    Active users in the last 5 minutes.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Page Views</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold">5,832</p>
                  <p className="text-sm text-muted-foreground">
                    Total page views today.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="insights">
            <div className="mt-6 space-y-4">
              <Card className="transition hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Behavioral Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Users are engaging more with product pages during the evening hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Drop-off Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    60% of users leave after visiting only one page. Consider improving landing page content.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="activity">
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="transition hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Latest Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>User A signed up</li>
                    <li>User B viewed pricing page</li>
                    <li>User C started a free trial</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="transition hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Engagement Scores</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold">7.8/10</p>
                  <p className="text-sm text-muted-foreground">
                    Average engagement score from session analysis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center pt-10">
          <Button variant="default" className="text-base px-6 py-3 rounded-xl flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Generate AI Report
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIAnalytics;
