import { DashboardProvider } from "@/context/dashboard-context";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS

export default function PriorAuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <DashboardProvider>
            <div className="w-full max-w-6xl mx-auto">{children}</div>
        </DashboardProvider>
    );
}
