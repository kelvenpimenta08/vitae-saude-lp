'use client';

import { useState } from 'react';

const locations = [
  {
    id: 'volta-redonda',
    city: 'Volta Redonda',
    short: 'Unidade Volta Redonda',
    address: 'Rua 33, nº 65, loja 4 — Vila Santa Cecília',
    query: 'Vitae Saúde Volta Redonda RJ',
  },
  {
    id: 'barra-mansa',
    city: 'Barra Mansa',
    short: 'Unidade Barra Mansa',
    address: 'Rua Rio Branco, nº 60 — Centro',
    query: 'Vitae Saúde Barra Mansa RJ',
  },
];

export default function LocationExplorer() {
  const [activeId, setActiveId] = useState(locations[0].id);
  const active = locations.find((location) => location.id === activeId) ?? locations[0];
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(active.query)}&output=embed`;
  const profileUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(active.query)}`;

  return (
    <section id="unidades" className="locations section-shell" aria-labelledby="locations-title">
      <div className="locations-copy">
        <p className="kicker"><span /> Encontre a Vitae</p>
        <h2 id="locations-title">Escolha a unidade mais perto de você.</h2>
        <p>Selecione uma cidade para conferir o endereço, visualizar a localização e abrir o perfil da unidade no Google.</p>
        <div className="location-tabs" role="tablist" aria-label="Unidades Vitae">
          {locations.map((location) => (
            <button key={location.id} type="button" role="tab" aria-selected={active.id === location.id} aria-controls="location-panel" className={active.id === location.id ? 'active' : ''} onClick={() => setActiveId(location.id)}>
              <span>{location.short}</span><b>{location.city}</b><i aria-hidden="true">↗</i>
            </button>
          ))}
        </div>
      </div>
      <div className="location-panel" id="location-panel" role="tabpanel">
        <div className="location-content" key={active.id}>
          <div className="location-map">
            <iframe src={mapUrl} title={`Google Maps — ${active.short}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <span>Google Maps</span>
          </div>
          <div className="location-details">
            <div><small>Unidade selecionada</small><strong>{active.city}</strong><address>{active.address}</address></div>
            <a href={profileUrl} target="_blank" rel="noreferrer">Ver localização e fotos no Google <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
