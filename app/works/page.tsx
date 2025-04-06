import { Project } from '@/type';
import ProjectCard from '../components/ProjectCard';


export default function WorksPage() {
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Dashboard',
      imageUrl: '/dasbord.png',
      category: 'Web Development',
      link:  "https://admin-panel-henna-gamma.vercel.app/",
      description: 'A modern dashboard for an e-commerce platform with analytics and inventory management.'
    },
    {
      id: '2',
      title: 'E-commerce-Website',
      imageUrl: '/ecomerce.png',
      category: 'website',
      link: "https://hackathon-e-commerce-phlt.vercel.app/",
      description: 'A social networking app focused on connecting creative professionals.'
    },
    {
      id: '3',
      title: 'Portfolio Website',
      imageUrl: '/portfolio.png',
      category: 'Website',
      link: "https://portfolio-theta-orcin-81.vercel.app/",
      description: 'A minimalist portfolio website for a photographer with gallery features.'
    },
    {
      id: '4',
      title: 'Book Library',
      imageUrl: '/library.png',
      category: 'Mobile App',
      link: "https://fiza-personal-library.streamlit.app/",
      description: 'A fitness tracking application with workout plans and progress monitoring with python.'
    },
    {
      id: '5',
      title: 'Blog Website',
      imageUrl: '/blog.png',
      category: 'Website',
      link: "https://fppd-blog-post.vercel.app/",
      description: 'A blog website on food.'
    },
    {
      id: '6',
      title: 'Agentia website',
      imageUrl: '/agentia.png',
      category: 'Mobile App',
      link:"https://agentia-website.vercel.app/",
      description: 'A Agentia website about AI .'
    },
    {
      id: '7',
      title: 'Unit-Converter',
      imageUrl: '/unit-converter.png',
      category: 'Web App',
      link: "https://fizalangah-unit-converter-2-unitconverter-cuwyuc.streamlit.app/",
      description: 'A Unit-converter Express with diferent featuers with python .'
    },
    {
      id: '8',
      title: 'Strong Password Maneger',
      imageUrl: '/password.png',
      category: 'Web App',
      link: "https://fizalangah-strongpasword-app-lw8p2h.streamlit.app/",
      description: 'A Strong password maneger with python .'
    }
  ];

  return (
    <main className='font-sans font-semibold'>
      <section className="w-full px-6 py-10">
        <h1 className="text-xl font-bold mb-6">
          My <span className="text-[#00D9C0]">Works</span>
        </h1>
        
        <div className="flex mb-6 gap-4 text-sm">
          <button className="px-3 py-1 bg-[#00D9C0] text-black rounded-full">All</button>
          {/* <button className="px-3 py-1 bg-[#2A2A2A] rounded-full">Web Design</button>
          <button className="px-3 py-1 bg-[#2A2A2A] rounded-full">Mobile App</button> */}
        </div>
        
        <div className="grid  grid-cols-1 lg:grid-cols-2  md:grid-cols-2 gap-y-10 gap-x-4">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} detailed={true} />
          ))}
        </div>
      </section>
    </main>
  );
}