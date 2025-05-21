"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Admin</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
          <Button variant="outline" asChild>
            <a href="/dashboard/setting">View Profile</a>
          </Button>
        </div>

        {/* Stats Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="p-6 bg-card border rounded-lg shadow-sm flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">8</span>
            <span className="text-muted-foreground">Submissions</span>
          </div>
          <div className="p-6 bg-card border rounded-lg shadow-sm flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">150</span>
            <span className="text-muted-foreground">Total Users</span>
          </div>
          <div className="p-6 bg-card border rounded-lg shadow-sm flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">24</span>
            <span className="text-muted-foreground">Active Posts</span>
          </div>
          <div className="p-6 bg-card border rounded-lg shadow-sm flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">2</span>
            <span className="text-muted-foreground">Reported Content</span>
          </div>
        </div>

        {/* Pending Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Pending Suppliers */}
          <div>
            <h2 className="text-xl font-bold mb-4">Pending Suppliers</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Supplier Name</h3>
                  <Button variant="outline">Approve</Button>
                </div>
                <div className="bg-muted h-2 rounded-full w-3/4" />
              </div>
              <div className="p-4 border rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Supplier Name</h3>
                  <Button variant="outline">Approve</Button>
                </div>
                <div className="bg-muted h-2 rounded-full w-3/4" />
              </div>
            </div>
          </div>

          {/* Pending Events */}
          <div>
            <h2 className="text-xl font-bold mb-4">Pending Events</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Event Name</h3>
                  <Button variant="outline">Approve</Button>
                </div>
                <div className="bg-muted h-2 rounded-full w-3/4" />
              </div>
              <div className="p-4 border rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Event Name</h3>
                  <Button variant="outline">Reject</Button>
                </div>
                <div className="bg-muted h-2 rounded-full w-3/4" />
              </div>
            </div>
          </div>
        </div>

        {/* Reported Posts */}
        <div>
          <h2 className="text-xl font-bold mb-4">Reported Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Post Title</h3>
                <Button variant="outline">View</Button>
              </div>
              <div className="space-y-2">
                <div className="bg-muted h-2 rounded-full w-3/4" />
                <div className="bg-muted h-2 rounded-full w-1/2" />
              </div>
            </div>
            <div className="p-4 border rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Post Title</h3>
                <Button variant="outline">View</Button>
              </div>
              <div className="space-y-2">
                <div className="bg-muted h-2 rounded-full w-3/4" />
                <div className="bg-muted h-2 rounded-full w-1/2" />
              </div>
            </div>
            <div className="p-4 border rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Post Title</h3>
                <Button variant="outline">View</Button>
              </div>
              <div className="space-y-2">
                <div className="bg-muted h-2 rounded-full w-3/4" />
                <div className="bg-muted h-2 rounded-full w-1/2" />
              </div>
            </div>
            <div className="p-4 border rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Post Title</h3>
                <Button variant="outline">View</Button>
              </div>
              <div className="space-y-2">
                <div className="bg-muted h-2 rounded-full w-3/4" />
                <div className="bg-muted h-2 rounded-full w-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarInset>
  );
}
