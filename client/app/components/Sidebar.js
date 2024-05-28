import Link from "next/link";
import {
  Bell,
  Home,
  Users,
  FileText,
  ClipboardList,
  FilePlus,
  FileMinus,
  PieChart,
  Settings,
  File,
  UserPlus,
  SquareGanttChart,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Sidebar = () => {
  return (
    <div className='hidden border-r bg-muted/40 md:block'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
          <Link href='/' className='flex items-center gap-2 font-semibold'>
            <SquareGanttChart className='h-6 w-6' />
            <span className=''>ECWMS</span>
          </Link>
          <Button variant='outline' size='icon' className='ml-auto h-8 w-8'>
            <Bell className='h-4 w-4' />
            <span className='sr-only'>Toggle notifications</span>
          </Button>
        </div>
        <div className='flex-1'>
          <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
            <Link
              href='#'
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
            >
              <Home className='h-4 w-4' />
              Dashboard
            </Link>
            <div className='mt-4'>
              <h2 className='px-3 text-xs font-semibold text-muted-foreground'>
                Employee Management
              </h2>
              <Link
                href='#'
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
              >
                <Users className='h-4 w-4' />
                View Employees
              </Link>
              <Link
                href='#'
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
              >
                <UserPlus className='h-4 w-4' />
                Add Employee
              </Link>
            </div>
            <div className='mt-4'>
              <h2 className='px-3 text-xs font-semibold text-muted-foreground'>
                Contract Management
              </h2>
              <Link
                href='#'
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
              >
                <FileText className='h-4 w-4' />
                View Contract Workers
              </Link>
              <Link
                href='#'
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
              >
                <FilePlus className='h-4 w-4' />
                Add Contract Worker
              </Link>
            </div>
            <div className='mt-4'>
              <h2 className='px-3 text-xs font-semibold text-muted-foreground'>
                Leave Management
              </h2>
              <Link
                href='#'
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
              >
                <ClipboardList className='h-4 w-4' />
                Submit Leave Request
              </Link>
              <Link
                href='#'
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
              >
                <FileMinus className='h-4 w-4' />
                Approve Leave Requests
              </Link>
            </div>
            <div className='mt-4'>
              <h2 className='px-3 text-xs font-semibold text-muted-foreground'>
                Documents
              </h2>
              <Link
                href='#'
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
              >
                <File className='h-4 w-4' />
                View Documents
              </Link>
              <Link
                href='#'
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
              >
                <FilePlus className='h-4 w-4' />
                Upload Document
              </Link>
            </div>
            <div className='mt-4'>
              <h2 className='px-3 text-xs font-semibold text-muted-foreground'>
                Reports
              </h2>
              <Link
                href='#'
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
              >
                <PieChart className='h-4 w-4' />
                Performance Metrics
              </Link>
              <Link
                href='#'
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
              >
                <PieChart className='h-4 w-4' />
                Attendance Trends
              </Link>
              <Link
                href='#'
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
              >
                <PieChart className='h-4 w-4' />
                Contract Status
              </Link>
            </div>
          </nav>
        </div>
        <div className='mt-auto p-4'>
          <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
            <Link
              href='#'
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
            >
              <Settings className='h-4 w-4' />
              User Management
            </Link>
            <Link
              href='#'
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
            >
              <Settings className='h-4 w-4' />
              System Configuration
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
