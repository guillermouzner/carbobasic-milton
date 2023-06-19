interface Props {
  year: number;
  project: string;
}
export function ProjectRecord({year, project}: Props) {
  return (
    <div className="bg-zinc-300 w-[300px] p-3 rounded-lg text-sm">
      <p>
        <span className="font-black text-blue-900">{year}</span> {project}
      </p>
    </div>
  );
}
