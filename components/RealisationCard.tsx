import Image from 'next/image';

export type RealisationCardProps = {
  title: string;
  location: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  highlights?: string[];
  footer?: string;
};

const RealisationCard = ({ title, location, description, beforeImage, afterImage, highlights, footer }: RealisationCardProps) => {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-forest/10 bg-white shadow-sm">
      <div className="flex flex-grow flex-col gap-4 p-6">
        <div>
          <p className="text-xs uppercase tracking-widest text-forest/70">{location}</p>
          <h3 className="mt-1 font-heading text-2xl text-forest">{title}</h3>
        </div>
        <div className="flex-grow">
          <p className="mt-2 text-night/80">{description}</p>
          {highlights?.length ? (
            <ul className="mt-3 space-y-1 text-sm text-night/80">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-leaf">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {footer ? <p className="mt-3 text-xs uppercase tracking-wide text-night/60">{footer}</p> : null}
        </div>
        <div className="mt-auto grid grid-cols-2 gap-3 pt-4 text-sm">
          <div>
            <p className="mb-2 font-semibold text-night">Avant</p>
            <div className="overflow-hidden rounded-xl border border-forest/10">
              <Image
                src={beforeImage}
                alt={`Avant - ${title}`}
                width={400}
                height={320}
                className="h-[324px] w-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="mb-2 font-semibold text-night">Après</p>
            <div className="overflow-hidden rounded-xl border border-forest/10">
              <Image
                src={afterImage}
                alt={`Après - ${title}`}
                width={400}
                height={320}
                className="h-[324px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RealisationCard;
