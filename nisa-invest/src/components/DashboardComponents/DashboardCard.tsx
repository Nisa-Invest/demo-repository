interface DashboardCardProps {
title: string;
description: string;
} 

export function DashboardCard({title, description}: DashboardCardProps){

    return (
          <div className="bg-accent-light-purple p-6 rounded-lg hover:bg-accent-light-purple/80 transition-colors cursor-pointer">
            <h3 className="text-xl font-heading text-primary-purple mb-2">
              {title}
            </h3>
            <p className="text-secondary-green">
              {description}
            </p>
          </div>
          );
}