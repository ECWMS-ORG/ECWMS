"use client";
import SummaryCard from "@/app/components/SummaryCard";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [summaryData, setSummaryData] = useState({
    totalEmployees: 0,
    activeContracts: 0,
    pendingLeaveRequests: 0,
  });

  useEffect(() => {
    // Mock data
    const mockData = {
      totalEmployees: 100,
      activeContracts: 50,
      pendingLeaveRequests: 10,
    };

    // Simulate data fetching
    const fetchData = async () => {
      // Simulate a network request delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSummaryData(mockData);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='flex items-center'>
        <h1 className='text-lg font-semibold md:text-2xl'>Dashboard</h1>
      </div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        <SummaryCard
          title='Total Employees'
          value={summaryData.totalEmployees}
        />
        <SummaryCard
          title='Active Contracts'
          value={summaryData.activeContracts}
        />
        <SummaryCard
          title='Pending Leave Requests'
          value={summaryData.pendingLeaveRequests}
        />
      </div>
    </>
  );
}
