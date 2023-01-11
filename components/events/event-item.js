import Link from 'next/link';
export default function EventItem(props) {
  const { title, location, date, image, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString('ja-jp', {
    daya: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;
  return (
    <li>
      <picture>
        <img src={'/' + image} alt={title} width={300} height={300} />
      </picture>
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}
