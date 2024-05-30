import Link from "next/link";
import {
  Bell,
  Home,
  Users,
  ClipboardList,
  FilePlus,
  PieChart,
  Settings,
  File,
  SquareGanttChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
              href='/dashboard'
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
            >
              <Home className='h-4 w-4' />
              Dashboard
            </Link>
            <Link
              href='dashboard/employees'
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
            >
              <Users className='h-4 w-4' />
              Employee Management
            </Link>
            <Link
              href='/leave-management'
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
            >
              <ClipboardList className='h-4 w-4' />
              Leave Management
            </Link>
            <Link
              href='/documents'
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
            >
              <File className='h-4 w-4' />
              Documents
            </Link>
            <Link
              href='/reports'
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
            >
              <PieChart className='h-4 w-4' />
              Reports
            </Link>
          </nav>
        </div>
        <div className='mt-auto py-4'>
          <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
            <Link
              href='/settings'
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
            >
              <Settings className='h-4 w-4' />
              Settings
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
