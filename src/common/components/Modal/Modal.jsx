import React, { useEffect } from 'react';
import './modal.css';

/**
 * Componente Modal accesible y reutilizable.
 */
export const Modal = ({ isOpen, onClose, children, className = '' }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="ui-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className={`ui-modal-container ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="ui-modal-close"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
