import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import "leaflet/dist/leaflet.css";

const MapSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Coordenadas de exemplo - substitua pelas coordenadas reais da SEMOP
  const position: [number, number] = [-22.9068, -43.1729]; // Rio de Janeiro como exemplo

  useEffect(() => {
    if (!mapRef.current || mapLoaded) return;

    // Dynamic import to avoid SSR issues
    import("leaflet").then((L) => {
      // Fix for default marker icon
      const customIcon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      const map = L.map(mapRef.current!, {
        scrollWheelZoom: false,
      }).setView(position, 15);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(position, { icon: customIcon })
        .addTo(map)
        .bindPopup(
          `<div style="text-align: center;">
            <strong>SEMOP</strong><br/>
            <span style="font-size: 12px; color: #666;">Secretaria Municipal de Ordem Pública</span><br/>
            <span style="font-size: 11px; color: #888;">Av. Principal, 1000 - Centro</span>
          </div>`
        );

      setMapLoaded(true);

      return () => {
        map.remove();
      };
    });
  }, [mapLoaded]);

  return (
    <section id="mapa" className="section-spacing bg-secondary">
      <div className="container-semop">
        <SectionTitle
          title="Nossa Localização"
          subtitle="Encontre a sede da SEMOP e venha nos visitar"
        />

        <div className="animate-fade-in-up">
          <div className="bg-card rounded-xl card-shadow overflow-hidden">
            {/* Map Container */}
            <div 
              ref={mapRef} 
              className="h-[400px] md:h-[500px] w-full"
              style={{ zIndex: 0 }}
            />

            {/* Info Bar */}
            <div className="p-6 bg-primary">
              <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-primary-foreground font-medium">Endereço</p>
                    <p className="text-primary-foreground/70 text-sm">
                      Av. Principal, 1000 - Centro
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-primary-foreground font-medium">Horário</p>
                    <p className="text-primary-foreground/70 text-sm">
                      Seg - Sex: 8h às 17h
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-primary-foreground font-medium">Telefone</p>
                    <p className="text-primary-foreground/70 text-sm">
                      (00) 0000-0000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
