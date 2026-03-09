import Image from 'next/image';

interface AuthorCardProps {
  name: string;
  role: string;
  bio: string;
  photo: string;
  datePublished: string;
  dateModified: string;
}

const AuthorCard = ({ name, role, bio, photo, datePublished, dateModified }: AuthorCardProps) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <section className="bg-beige/50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-3xl border border-forest/10 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-5">
            <div className="flex-shrink-0 overflow-hidden rounded-full border-2 border-forest/20">
              <Image
                src={photo}
                alt={`${name}, ${role} chez Arbovert`}
                width={80}
                height={80}
                className="h-16 w-16 object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="font-heading text-lg text-forest">{name}</p>
              <p className="text-sm text-night/70">{role}</p>
              <p className="mt-1 text-sm text-night/60">{bio}</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 border-t border-forest/10 pt-4 text-xs text-night/50">
            <span>
              Publié le <time dateTime={datePublished}>{formatDate(datePublished)}</time>
            </span>
            {dateModified !== datePublished && (
              <span>
                Mis à jour le <time dateTime={dateModified}>{formatDate(dateModified)}</time>
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorCard;
