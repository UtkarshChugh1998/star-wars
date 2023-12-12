import React from 'react'

export class ErrorBoundary extends React.Component<any, { hasError: string }> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false } as any
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Something went wrong Please contact dev team.</h1>
          <button
            onClick={() => {
              // Refresh
              window.location.reload()
            }}
          >
            Restart Application
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
