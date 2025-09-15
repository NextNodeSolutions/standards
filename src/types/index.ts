/**
 * Type definitions for the library
 */

/**
 * Configuration options for the client
 */
export interface ClientConfig {
  /** API key for authentication */
  apiKey?: string
  /** Base URL for API requests */
  baseUrl?: string
  /** Request timeout in milliseconds */
  timeout?: number
}

/**
 * Response interface for API calls
 */
export interface ApiResponse<T = unknown> {
  /** Whether the request was successful */
  success: boolean
  /** Response data (if successful) */
  data?: T
  /** Error message (if failed) */
  error?: string
  /** HTTP status code */
  statusCode: number
}

/**
 * Generic error interface
 */
export interface LibraryError {
  /** Error code */
  code: string
  /** Human-readable error message */
  message: string
  /** Optional error details */
  details?: Record<string, unknown>
}