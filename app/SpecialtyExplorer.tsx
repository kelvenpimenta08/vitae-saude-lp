'use client';

import { useState } from 'react';

const specialties = [
  'Acupuntura', 'Alergologia', 'Anestesiologia', 'Angiologia', 'Cardiologia',
  'Cirurgia Geral', 'Cirurgia Vascular', 'Clínica Médica', 'Dermatologia',
  'Endocrinologia', 'Fisioterapia', 'Fonoaudiologia', 'Gastroenterologia',
  'Geriatria', 'Ginecologia', 'Ginecologia Infantil e Adolescente', 'Mastologia',
  'Medicina do Trabalho', 'Neurologia', 'Nutrição', 'Oftalmologia', 'Ortopedia',
  'Otorrinolaringologia', 'Pediatria', 'Pneumologia', 'Psicologia',
  'Psicopedagogia', 'Psiquiatria', 'Puericultura', 'Reumatologia', 'Traumatologia',
  'Urologia', 'Terapia ABA', 'RPG', 'Pilates', 'Vacinação',
];

export default function SpecialtyExplorer() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? specialties : specialties.slice(0, 9);

  return (
    <>
      <div className={`specialty-list${expanded ? ' is-expanded' : ''}`}>
        {visible.map((item, index) => (
          <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></div>
        ))}
      </div>
      <button className="specialty-toggle" type="button" onClick={() => setExpanded((current) => !current)} aria-expanded={expanded}>
        {expanded ? 'Mostrar menos' : 'Ver todas as especialidades'}
      </button>
    </>
  );
}
