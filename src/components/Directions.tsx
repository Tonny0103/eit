"use client";
import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import React, { useEffect, useState } from "react";

const Directions = () => {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService>();
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer>();
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex, setRouteIndex] = useState<number>(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  useEffect(() => {
    if (!map || !routesLibrary) return;

    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [map, routesLibrary]);

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;

    directionsService
      .route({
        origin: "Subway, R. Cel. Faria, 88 - Centro, Cáceres - MT, 78200-000",
        destination:
          "R. Tangará da Serra, 151 - Junco, Cáceres - MT, 78200-810",
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      })
      .then((res: google.maps.DirectionsResult) => {
        directionsRenderer.setDirections(res);
        setRoutes(res.routes);
      });
  }, [directionsService, directionsRenderer]);

  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);

  if (!leg) return null;

  return (
    <div className="absolute top-5 right-5 left-5 bg-slate-400 p-4 rounded-xl">
      {/* <h2 className="text-white">{selected.summary}</h2> */}
      <p className="text-white text-xl font-bold">
        {leg.start_address.split(", Cáceres")[0]} {"-> "}
        {leg.end_address.split(", Cáceres")[0]}
      </p>
      <p className="text-white">Distancia: {leg.distance?.text}</p>
      <p className="text-white">Duração: {leg.duration?.text}</p>
      <h2 className="text-white text-xl font-bold">Outras rotas</h2>
      <ul>
        {routes.map((route, index) => (
          <li key={route.summary} className="text-white">
            <button onClick={() => setRouteIndex(index)}>
              {route.summary}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Directions;
