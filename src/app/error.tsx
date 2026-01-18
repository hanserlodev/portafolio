'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error de página:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-red-500/10 rounded-full">
            <AlertTriangle size={48} className="text-red-500" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold mb-2">Error en la página</h1>
        <p className="text-muted-foreground mb-6">
          Lo sentimos, ocurrió un error al cargar esta página.
        </p>

        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="mb-6 p-4 bg-secondary rounded-lg text-left">
            <p className="text-sm font-mono text-red-500">
              {error.message}
            </p>
          </div>
        )}

        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all"
          >
            <RefreshCw size={20} />
            Reintentar
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-all"
          >
            <Home size={20} />
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
