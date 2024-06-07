"use client";
import Directions from "@/components/Directions";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const queryClient = new QueryClient();

type Props = {
  addresses: string[];
};

export default function Delivery({ addresses }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY!}>
        <Map
          style={{ width: "100vw", height: "100vh", position: "static" }}
          defaultCenter={{ lat: -16.0817841, lng: -57.6783666 }}
          defaultZoom={15}
          gestureHandling={"greedy"}
          disableDefaultUI={false}
          fullscreenControl={false}
        >
          <Directions addresses={addresses} />
        </Map>
      </APIProvider>
    </QueryClientProvider>
  );
}
