import { useEffect, useState } from "react";
import axios from "axios";

interface Partner {
  sNo: string;
  name: string;
  image_url: string;
  sort_order: string;
  display: boolean;
}

export default function TrustedPartners() {

  const [partners, setPartners] = useState<Partner[]>([]);

  const apiUrl =
    "https://script.google.com/macros/s/AKfycbzot9kAlEffXJTPdkV14FXOZ02KAAObuYbOhaiWnI1zoMQN2_loldD8xCPh4cNJmUxj/exec";

  useEffect(() => {

    const fetchPartners = async () => {

      const res = await axios.get(`${apiUrl}?type=trusted`);

      const filtered = res.data
        .filter((p: Partner) => p.display)
        .sort(
          (a: Partner, b: Partner) =>
            parseInt(a.sort_order) - parseInt(b.sort_order)
        );

      setPartners(filtered);

    };

    fetchPartners();

  }, []);

  return (

    <section className="relative py-15 px-10 md:px-20 overflow-hidden bg-gradient-to-b from-emerald-50 to-emerald-100/40">

      <div className="text-center mb-10">

      <h2 className="text-3xl font-serif text-emerald-900 mb-2">
          Trusted Partners
        </h2>

        <p className="text-emerald-900/60">
          Brands and companies who trust our fragrances
        </p>

      </div>

      {/* Fade edges */}

      <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-emerald-50 to-transparent z-10"/>

      {/* Slider */}

      <div className="overflow-hidden">

        <div className="trusted-slider flex gap-10">

          {[...partners, ...partners].map((partner, index) => (

            <div
              key={index}
              className="flex flex-col items-center min-w-[180px] group"
            >

              <div className="bg-amber-400/80 backdrop-blur-md shadow-xl rounded-xl px-1 py-1 transition duration-300 transform group-hover:-translate-y-2 group-hover:scale-105">

                <img
                  src={partner.image_url}
                  alt={partner.name}
                  className="h-14 object-contain"
                />

              </div>

              <span className="text-sm mt-2 text-emerald-900/70">
                {partner.name}
              </span>

            </div>

          ))}

        </div>

      </div>


      <style>

        {`

        .trusted-slider{
          animation: trustedScroll 40s linear infinite;
        }

        .trusted-slider:hover{
          animation-play-state: paused;
        }

        @keyframes trustedScroll {

          0%{
            transform: translateX(0);
          }

          100%{
            transform: translateX(-50%);
          }

        }

        `}

      </style>

    </section>

  );

}