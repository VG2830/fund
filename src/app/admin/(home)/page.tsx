
import { createTimeFrameExtractor } from "@/utils/timeframe-extractor";
import { CreditCard, IndianRupee, LineChart, TrendingUp } from "lucide-react"
import { DashboardCard } from "../../../components/DashboardCards/dashboard-card"
import { LineChartComponent, PieChartComponent } from "../../../components/DashboardCharts/dashboard-chart"


type PropsType = {
  searchParams: Promise<{
    selected_time_frame?: string;
  }>;
};

export default async function Home({ searchParams }: PropsType) {
  const { selected_time_frame } = await searchParams;
  const extractTimeFrame = createTimeFrameExtractor(selected_time_frame);

  return (
    <>
     

<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

<DashboardCard title="Total Investments" value="₹60,000" icon={IndianRupee} description="+20% from last month" />

        <DashboardCard title="Total Profit" value="₹15,000" icon={TrendingUp} description="+15% from last month" />
        <DashboardCard
          title="Total Value"
          value="₹75,000"
          icon={CreditCard}
          description="Combined value of investments"
        />
        <DashboardCard title="Total Units" value="1,500" icon={LineChart} description="Units across all employees" />
      </div>
      <div className="grid gap-4 md:grid-cols-5 mt-8">
        <LineChartComponent  />
        <PieChartComponent />
      </div>
    </>
  );
}
