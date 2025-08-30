import type { ErrorInfo, ReactNode } from "react";
import { Component } from "react";
import "./ErrorBoundary.scss";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2>
            К сожалению, произошла ошибка в приложении.
          </h2>
          <button
            className="error__button"
            onClick={() => this.setState({ hasError: false })}
          >
            Назад
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
