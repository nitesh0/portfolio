// import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
  className?: string;
  repoUrl?: string;
}

const ProjectCard = ({
  repoUrl,
  src,
  title,
  description,
  className = "",
}: Props) => {
  return (
    <a
      href={repoUrl} // pass repoUrl as a prop
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:cursor-pointer"
    >
      <div
    className={`relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transform transition duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-purple-500/50 ${className}`}
  >
        <img
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full hover:cursor-pointer object-contain"
        />

        <div className="relative hover:cursor-pointer p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
