import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Analytics Services | Symbiosis AI',
  description: 'Transform your data into actionable insights with our advanced analytics solutions',
};

export default function DataAnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}