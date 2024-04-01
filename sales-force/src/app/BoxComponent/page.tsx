import React from 'react';
import '../BoxComponent/BoxComponent.css'

interface CustomComponentProps {
 title: string;
 subtitle: string;
}

const BoxComponent: React.FC<CustomComponentProps> = ({ title, subtitle }) => {
 return (
    <div className="custom-component">
      <h1 className="custom-title">{title}</h1>
      <p className="custom-subtitle">{subtitle}</p>
      <button className="custom-button">Preencha nosso formulário</button>
    </div>
 );
};

export default BoxComponent;