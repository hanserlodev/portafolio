'use client';

import { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Error Boundary para capturar errores en componentes hijos.
 * 
 * Características:
 * - Captura errores de renderizado
 * - Muestra interfaz de error amigable
 * - Permite reintentar
 * - Registra errores en consola
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error capturado por ErrorBoundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-red-500/10 rounded-full">
                <AlertTriangle size={48} className="text-red-500" />
              </div>
            </div>
            
            <h1 className="text-2xl font-bold mb-2">Algo salió mal</h1>
            <p className="text-muted-foreground mb-6">
              Lo sentimos, ocurrió un error inesperado. Por favor, intenta nuevamente.
            </p>

            {this.state.error && process.env.NODE_ENV === 'development' && (
              <div className="mb-6 p-4 bg-secondary rounded-lg text-left">
                <p className="text-sm font-mono text-red-500">
                  {this.state.error.message}
                </p>
              </div>
            )}

            <button
              onClick={this.handleReset}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all"
            >
              <RefreshCw size={20} />
              Reintentar
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
