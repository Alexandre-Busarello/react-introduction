import React from 'react';
import PropTypes from 'prop-types';

export default function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">Remover</button>
    </li>    
  )
}

TechItem.defaultProps = {
  tech: 'Oculto'
};

// Usado para gerar erro para o desenvolvedor para saber 
// que informação que está sendo passada ou nãp está incorreta
TechItem.PropTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
}