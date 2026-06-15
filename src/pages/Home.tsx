import { CategoryCard } from "./games/CategoryCard.tsx";

export function Home() {
  const categories = [
    {
      id: 1,
      title: "Informatik",
      slug: "it",
      description: "Webdev",
      icon: "💻",
    },
    {
      id: 2,
      title: "Allgemeinwissen",
      slug: "general",
      description: "Quer durch die Welt",
      icon: "🌍",
    },
    {
      id: 3,
      title: "Popkultur",
      slug: "pop",
      description: "Filme, Serien & Musik",
      icon: "🎬",
    },
  ];

  return (
    <div className="">
      <div className="">
        <h1 className="">Willkommen beim Quiz!</h1>
        <p className="">
          Wähle eine Kategorie aus, um das Quiz zu starten. Du kannst später
          auch den Schwierigkeitsgrad anpassen!
        </p>
      </div>

      <div className="">
        {categories.map((categories) => (
          <CategoryCard
            key={categories.id}
            title={categories.title}
            description={categories.description}
            slug={categories.slug}
            icon={categories.icon}
          />
        ))}
      </div>
    </div>
  );
}
