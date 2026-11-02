import { Card } from 'antd';
import { ArrowUpRight } from 'lucide-react';

// Reusable metric card for any future internal/admin dashboard.
export default function DashboardStatCard({ label, value, description, icon: Icon }) {
  return <Card className="dashboard-stat-card" bordered><div className="dashboard-stat-card__top"><span>{label}</span>{Icon ? <Icon size={18} /> : <ArrowUpRight size={18} />}</div><strong>{value}</strong>{description && <p>{description}</p>}</Card>;
}
