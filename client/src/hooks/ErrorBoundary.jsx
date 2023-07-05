import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to display an error UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render an error UI or fallback component
      return (
        <div className="flex justify-center h-screen w-screen items-center text-lg sm:text-3xl text-green-600 text-center">
          Working on Version 2 <br />
          Will be back soon
        </div>
      );
    }

    // Render the regular component tree if no error occurred
    return this.props.children;
  }
}

export default ErrorBoundary; // Add this line to export the component as default
