export default function GithubStats() {
  return (
    <section className="py-24 px-8 text-center">
      <h2 className="text-5xl font-bold mb-12">
        Coding Activity & Open Source
      </h2>

      <div className="flex flex-col gap-8 items-center">

        <img
          src="https://github-readme-stats.vercel.app/api?username=ayeshasiddiqa04&show_icons=true&theme=tokyonight"
          alt=""
        />

        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=ayeshasiddiqa04&theme=tokyonight"
          alt=""
        />

      </div>
    </section>
  );
}