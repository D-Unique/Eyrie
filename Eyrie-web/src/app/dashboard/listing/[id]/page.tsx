import { listings } from '@/data/listingsData';
import { notFound } from 'next/navigation';
import ListingDetails from '@/components/ListingDetails';

type ListingParams = {
  params: {
    id: string;
  };
};

export default async function ListingDetailsPage({ params }: ListingParams) {
  // Await params to ensure it's resolved before accessing its properties
  const id = parseInt((await params).id, 10);
  const listing = listings.find((item) => item.id === id);

  // If listing is not found, return a 404 page
  if (!listing) return notFound();

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#F2F2F2]">
      <ListingDetails listing={listing} />
    </div>
  )
}
