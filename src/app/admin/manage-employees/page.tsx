// "use client"

// import { useState } from "react"
// import { Eye, Pencil } from "lucide-react"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Badge } from "@/components/ui/badge"
// import { useEffect } from "react";
// import { Input } from "@/components/ui/input"
// // Sample employee data
// const employees = [
//   {
//     id: "1",
//     name: "Rahul ",
//     status: "Paid",
//     date: "2025-04-15",
//     time: "10:30 AM",
//   },
//   {
//     id: "2",
//     name: "Priya ",
//     status: "Not Paid",
//     date: "2025-04-10",
//     time: "09:15 AM",
//   },
//   {
//     id: "3",
//     name: "John",
//     status: "Paid",
//     date: "2025-04-05",
//     time: "11:45 AM",
//   },
//   {
//     id: "4",
//     name: "Sandeep",
//     status: "Paid",
//     date: "2025-04-01",
//     time: "02:30 PM",
//   },
//   {
//     id: "5",
//     name: "Harsh",
//     status: "Not Paid",
//     date: "2025-03-28",
//     time: "03:45 PM",
//   },
//   {
//     id: "6",
//     name: " Ajay",
//     status: "Paid",
//     date: "2025-03-25",
//     time: "10:00 AM",
//   },
//   {
//     id: "7",
//     name: "Chirag",
//     status: "Not Paid",
//     date: "2025-03-20",
//     time: "01:15 PM",
//   },
// ]

// export default function EmployeesPage() {
//   const [searchTerm, setSearchTerm] = useState("")

//   const filteredEmployees = employees.filter((employee) =>
//     employee.name.toLowerCase().includes(searchTerm.toLowerCase()),
//   )
//   const [monthValue, setMonthValue] = useState("");

//   useEffect(() => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = String(today.getMonth() + 1).padStart(2, "0"); // pad with 0
//     setMonthValue(`${year}-${month}`); // format: "YYYY-MM"
//   }, []);
//   return (
//     <div className="flex-1 space-y-4">
    
//   <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 bg-white dark:bg-gray-800">
//     <div className="flex items-center justify-between">
//       <h2 className="text-3xl font-bold tracking-tight">Manage Employees & Track</h2>
//       <input
//       type="month"
//       value={monthValue}
//       onChange={(e) => setMonthValue(e.target.value)}
//       className="rounded border-2 border-gray-300 dark:border-gray-500 p-2"
//     />
//       {/* <input type="month" value={}  className="rounded border-2 border-grey dark:border-light-500"/> */}
//       {/* <input
//        type="date"
//          className="rounded border-2 border-[#2bc8d3] dark:border-blue-500"
//        /> */}

//     </div>
//     <div className="flex items-center justify-between">
//       <div className="w-full max-w-sm">
//         <Input placeholder="Search employees..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
//       </div>
//     </div>
//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             <TableRow>+
//               <TableHead>Name</TableHead>
//               <TableHead>Payment Status</TableHead>
//               <TableHead>Date</TableHead>
//               <TableHead>Time</TableHead>
//               <TableHead className="text-center">Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody >

//             {filteredEmployees.map((employee) => (
//               <TableRow key={employee.id} className={employee.status === "Paid" ? "bg-green-100 dark:bg-gray-800" : "bg-red-100 dark:bg-gray-800"}>
//                 <TableCell className="font-medium ">{employee.name}</TableCell>
//                 <TableCell className="text-white ">
//                   <Badge variant={employee.status === "Paid" ? "default" : "destructive"}>{employee.status}</Badge>
//                 </TableCell>
//                 <TableCell >{employee.date}</TableCell>
//                 <TableCell >{employee.time}</TableCell>
//                 <TableCell className="text-right ">
//                   <div className="px-6 py-4 whitespace-nowrap flex justify-center items-center gap-4">
//                     <div className="flex items-center text-black-600 hover:text-blue-900 text-sm "><Eye className="mr-2 h-4 w-4 " /> View</div>
//                     <div className="flex items-center text-black-600 hover:text-gray-900 text-sm "> <Pencil className="mr-2 h-4 w-4" /><a href="/admin/add-employee" className="dark:text-white-300" >Edit</a></div>
//                   </div>
          
                 
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//     </div>
//   )
// }
"use client";
 
import { useEffect, useState } from "react";
import { Eye, Pencil } from "lucide-react";
 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
 
const employees = [
  { id: "1", name: "Rahul Sharma", status: "Paid", date: "15-05-2025", time: "10:30 AM" },
  { id: "2", name: "Priya Patel", status: "Not Paid", date: "10-05-2025", time: "09:15 AM" },
  { id: "3", name: "Amit Kumar", status: "Paid", date: "06-05-2025", time: "11:45 AM" },
  { id: "4", name: "Neha Singh", status: "Paid", date: "20-05-2025", time: "02:30 PM" },
  { id: "8", name: "Nikita Singh", status: "Paid", date: "20-05-2024", time: "02:30 PM" },

  { id: "5", name: "Vikram Malhotra", status: "Not Paid", date: "28-05-2024", time: "03:45 PM" },
  { id: "6", name: "Ananya Desai", status: "Paid", date: "25-04-2025", time: "10:00 AM" },
  { id: "7", name: "Rajesh Gupta", status: "Not Paid", date: "06-03-2025", time: "01:15 PM" },
];
 
export default function EmployeesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
 
  useEffect(() => {
    const today = new Date();
    setSelectedMonth(String(today.getMonth() + 1).padStart(2, "0"));
    setSelectedYear(String(today.getFullYear()));
  }, []);
 
  const filteredEmployees = employees
    .filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((employee) => {
      const [day, month, year] = employee.date.split("-");
      return (
        (!selectedMonth || month === selectedMonth) &&
        (!selectedYear || year === selectedYear)
      );
    });
 
  // For dynamic dropdowns (can be hardcoded if preferred)
  const uniqueYears = [...new Set(employees.map((e) => e.date.split("-")[2]))];
  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];
 
  return (
    <div className="flex-1 space-y-4">
      {/* <Breadcrumb pageName="Manage Employee" /> */}
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-3xl font-bold tracking-tight">Manage Employees </h2>
          <div className="flex gap-2 items-center">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="border border-gray-300 rounded p-2"
            >
              <option value="">All Months</option>
              {months.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="border border-gray-300 rounded p-2"
            >
              <option value="">All Years</option>
              {uniqueYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
 
        <div className="flex items-center justify-between mt-4">
          <div className="w-full max-w-sm">
            <Input
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
 
        <div className="rounded-md border">
          <Table className="dark:bg-gray-800">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Payment Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((employee) => (
                  <TableRow
                    key={employee.id}
                    className={
                      employee.status === "Paid"
                        ? "bg-green-100 dark:bg-gray-800"
                        : "bg-red-100 dark:bg-gray-800"
                    }
                  >
                    <TableCell className="font-medium">{employee.name}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          employee.status === "Paid"
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                        }
                      >
                        {employee.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{employee.date}</TableCell>
                    <TableCell>{employee.time}</TableCell>
                    <TableCell className="text-right">
                      <div className="px-6 py-4 whitespace-nowrap flex justify-center items-center gap-4">
                        <div className="flex items-center text-blue-600 hover:text-blue-900 text-sm">
                          <Eye className="mr-2 h-4 w-4" /><a href="#" className="dark:text-white"> View</a>
                        </div>
                        <div className="flex items-center text-gray-600 hover:text-gray-900 text-sm">
                          <Pencil className="mr-2 h-4 w-4" />
                          <a href="/admin/add-employee" className="dark:text-white">Edit</a>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center p-4 text-gray-500">
                    No employees found for selected month/year.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
 