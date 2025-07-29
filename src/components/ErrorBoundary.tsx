'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react';
import ErrorPage from './ErrorPage';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    // Aktualisiert den State, damit beim nächsten Rendern die Fallback-UI angezeigt wird
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Protokolliert den Fehler und kann optional an einen Error-Reporting-Service gesendet werden
    console.error("Nicht behandelter Fehler:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Zeigt die benutzerdefinierte Fehlerseite an
      return <ErrorPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

