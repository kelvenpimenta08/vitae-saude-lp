'use client';

import Image from 'next/image';
import { useRef } from 'react';

const clinics = [
  {
    city: 'Volta Redonda',
    name: 'Renascer',
    photos: [
      { src: '/rede-real/renascer-fachada-v2.jpg', alt: 'Fachada do Centro de Saúde Renascer' },
      { src: '/rede-real/renascer-recepcao.jpg', alt: 'Recepção do Centro de Saúde Renascer' },
    ],
  },
  {
    city: 'Volta Redonda',
    name: 'Vie Santé',
    photos: [{ src: '/rede-real/viesante-fachada-v2.jpg', alt: 'Fachada da clínica Vie Santé' }],
  },
  {
    city: 'Volta Redonda',
    name: 'Villa Medical Center',
    photos: [
      { src: '/rede-real/villa-entrada.jpg', alt: 'Entrada do Villa Medical Center' },
      { src: '/rede-real/villa-recepcao.jpg', alt: 'Recepção do Villa Medical Center' },
    ],
  },
  {
    city: 'Barra Mansa',
    name: 'Padre Pio',
    photos: [{ src: '/rede-real/padre-pio-recepcao.jpg', alt: 'Recepção da clínica Padre Pio' }],
  },
  {
    city: 'Barra Mansa',
    name: 'Centro Médico Santa Maria',
    photos: [
      { src: '/rede-real/santa-maria-fachada.jpg', alt: 'Fachada do Centro Médico Santa Maria' },
      { src: '/rede-real/santa-maria-recepcao.jpg', alt: 'Recepção do Centro Médico Santa Maria' },
    ],
  },
];

export default function ClinicGallery() {
  const rail = useRef<HTMLDivElement>(null);
  const move = (direction: number) => rail.current?.scrollBy({ left: direction * 430, behavior: 'smooth' });

  return (
    <div className="clinic-gallery">
      <div className="clinic-gallery-head">
        <p><strong>5 unidades parceiras</strong><span>Arraste para conhecer a rede real</span></p>
        <div className="clinic-gallery-controls" aria-label="Navegação das unidades">
          <button type="button" onClick={() => move(-1)} aria-label="Ver unidade anterior">←</button>
          <button type="button" onClick={() => move(1)} aria-label="Ver próxima unidade">→</button>
        </div>
      </div>
      <div className="clinic-rail" ref={rail}>
        {clinics.map((clinic, index) => (
          <article className="clinic-proof-card" key={clinic.name}>
            <div className={`clinic-collage clinic-collage-${clinic.photos.length}`}>
              {clinic.photos.map((photo, photoIndex) => (
                <figure key={photo.src}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 680px) 82vw, 430px"
                    className={`clinic-image clinic-image-${index + 1}-${photoIndex + 1}`}
                  />
                </figure>
              ))}
            </div>
            <div className="clinic-proof-copy">
              <div><small>{clinic.city}</small><h3>{clinic.name}</h3></div>
              <span>{String(index + 1).padStart(2, '0')} / 05</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
