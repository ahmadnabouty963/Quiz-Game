import { Link } from "@tanstack/react-router";

type CategoryCardProps = {
  title: string;
  description: string;
  slug: string;
  icon: string;
};

export function CategoryCard({
  title,
  description,
  slug,
  icon,
}: CategoryCardProps) {
  return (
    <div>
      <div>
        <span>{icon}</span>
        <h2> {title} </h2>
        <p> {description} </p>
        <div>
          <Link
            to="/quiz/$categoryId"
            params={{ categoryId: slug }}
            search={{ difficulty: "easy", category: slug }}
          >
            Quiz Starten
          </Link>
        </div>
      </div>
    </div>
  );
}
