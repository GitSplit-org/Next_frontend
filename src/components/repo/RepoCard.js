import Link from "next/link";

const RepoCard = ({ repo }) => {
  return (
    <Link href={`/repos/${repo.full_name}`} passHref>
      <a>
        <div className="bg-white rounded-md shadow-md p-4 m-4 cursor-pointer">
          <h3 className="text-xl font-bold">{repo.name}</h3>
          <p className="text-gray-600">{repo.description}</p>
        </div>
      </a>
    </Link>
  );
};
