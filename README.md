# Karsha Admin Dashboard

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- **Admin Dashboard**: Overview of key metrics with interactive UI
- **User Management**: View and manage user profiles and permissions
- **Content Moderation**: Review and moderate reported posts
- **Supplier Approval**: Process pending supplier applications
- **Event Management**: Approve or reject pending events

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Custom components based on shadcn/ui
- **State Management**: Custom stores with Zustand
- **Authentication**: Built-in auth system

## Project Structure

- `app/`: Next.js app router pages and layouts
- `components/`: Reusable UI components
  - `ui/`: Base UI components (buttons, cards, etc.)
- `hooks/`: Custom React hooks
- `lib/`: Utility functions and services
  - `store/`: State management
  - `validations/`: Form validation schemas

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

# Bảng Điều Khiển Quản Trị Karsha

Dự án này là một bảng điều khiển quản trị được xây dựng bằng Next.js và các thành phần UI hiện đại. Nó cung cấp giao diện cho quản trị viên để quản lý người dùng, nhà cung cấp, sự kiện và nội dung.

## Tính Năng

- **Bảng Điều Khiển Quản Trị**: Tổng quan về các chỉ số quan trọng với giao diện tương tác
- **Quản Lý Người Dùng**: Xem và quản lý hồ sơ và quyền của người dùng
- **Kiểm Duyệt Nội Dung**: Xem xét và kiểm duyệt các bài đăng bị báo cáo
- **Phê Duyệt Nhà Cung Cấp**: Xử lý các đơn đăng ký nhà cung cấp đang chờ xử lý
- **Quản Lý Sự Kiện**: Phê duyệt hoặc từ chối các sự kiện đang chờ xử lý

## Công Nghệ Sử Dụng

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Các component tùy chỉnh dựa trên shadcn/ui
- **State Management**: Custom stores với Zustand
- **Authentication**: Hệ thống xác thực tích hợp

## Bắt Đầu

### Yêu Cầu

- Node.js 18+
- npm hoặc yarn

### Cài Đặt

1. Clone repository
2. Cài đặt các phụ thuộc:
```bash
npm install
# hoặc
yarn install
```

3. Chạy máy chủ phát triển:
```bash
npm run dev
# hoặc
yarn dev
```

4. Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt của bạn để xem ứng dụng

## Cấu Trúc Dự Án

- `app/`: Các trang và layout Next.js app router
- `components/`: Các thành phần UI có thể tái sử dụng
  - `ui/`: Các thành phần UI cơ bản (buttons, cards, v.v.)
- `hooks/`: Custom React hooks
- `lib/`: Các hàm tiện ích và dịch vụ
  - `store/`: Quản lý trạng thái
  - `validations/`: Schema xác thực biểu mẫu

## Ảnh Chụp Màn Hình

Bảng điều khiển quản trị bao gồm:
- Tổng quan thống kê với các chỉ số quan trọng
- Phần nhà cung cấp đang chờ duyệt
- Phần sự kiện đang chờ duyệt
- Phần bài đăng bị báo cáo
