// File: components/RecentWorks.tsx
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import { Project } from '@/type';

interface RecentWorksProps {
  showPreview?: boolean;
}

export default function RecentWorks({ showPreview = false }: RecentWorksProps) {
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Dashboard',
      imageUrl: '/images/project1.png',
      category: 'Web Design'
    },
    {
      id: '2',
      title: 'Social Media App',
      imageUrl: '/images/project2.png',
      category: 'Mobile App'
    },
    {
      id: '3',
      title: 'Portfolio Website',
      imageUrl: '/images/project3.png',
      category: 'Web Design'
    }
  ];

  return (
    <section className="w-full px-6 py-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-medium">
          My recent <span className="text-[#00D9C0]">works</span>
        </h2>
        
        {showPreview && (
          <Link href="/works" className="text-xs text-[#00D9C0]">
            View all →
          </Link>
        )}
      </div>
      
      <div className="grid grid-cols-3 gap-3">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}



