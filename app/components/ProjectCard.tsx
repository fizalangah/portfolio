// // File: components/ProjectCard.tsx
// import { Project } from '@/type';
// import Image from 'next/image';
// import Link from 'next/link';

// interface ProjectCardProps {
//   project: Project;
//   detailed?: boolean;
// }

// export default function ProjectCard({ project, detailed = false }: ProjectCardProps) {
//   return (
//     <Link href={`/works/${project.id}`} className="block">
//       <div className="bg-[#2A2A2A] rounded-lg overflow-hidden w-full h-full">
//         <div className="relative h-32 w-full">
//           <Image 
//             src={project.imageUrl} 
//             alt={project.title}
//             fill
//             className="object-cover"
//           />
//         </div>
        
//         {detailed && (
//           <div className="p-3">
//             <h3 className="text-sm font-medium">{project.title}</h3>
//             <p className="text-xs text-[#00D9C0]">{project.category}</p>
//             {project.description && (
//               <p className="text-xs opacity-70 mt-2">{project.description}</p>
//             )}
//           </div>
//         )}
//       </div>
//     </Link>
//   );
// }





import Image from 'next/image';
import { Project } from '@/type';

interface Props {
  project: Project;
  detailed?: boolean; // You can remove this if not needed
}

export default function ProjectCard({ project }: Props) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-[#1c1c1c] rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
    >
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 text-white">{project.title}</h2>
        <p className="text-sm text-gray-400 mb-2">{project.category}</p>
        <p className="text-sm text-gray-300">{project.description}</p>
      </div>
    </a>
  );
}
