"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";

export default function ThemePage() {
  const { theme } = useTheme();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Theme Demo</h1>
      <p className="mb-4">Current theme: {theme}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Light/Dark Theme</CardTitle>
            <CardDescription>Chuyển đổi giữa light và dark theme</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Bạn có thể sử dụng nút bên dưới hoặc nút ở thanh bên để chuyển đổi theme.</p>
          </CardContent>
          <CardFooter>
            <ThemeToggle />
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Theme Test</CardTitle>
            <CardDescription>Kiểm tra hiển thị các thành phần</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
