interface DashboardCardProps {
title: string;
description: string;
} 

export function DashboardCard({title, description}: DashboardCardProps){

    return (
      <div className="bg-accent-light-purple p-6 rounded-lg hover:bg-accent-light-purple/80 transition-colors cursor-pointer">
        <h3 className="text-xl font-heading text-slate-grey font-semibold mb-2">{title}</h3>
        <p className="text-lightest-grey">{description}</p>
      </div>
    );
}