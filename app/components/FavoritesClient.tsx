import Container from "./Container";
import Heading from "./Heading";
import ListingCard from "./listing/ListingCard";
import { SafeListing, SafeUser } from "../types";


type Props = {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
};

function FavoritesClient({ listings, currentUser }: Props) {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you favorites!" center={false} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
        {listings.map((listing) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
}

export default FavoritesClient;