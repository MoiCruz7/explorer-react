import { useCallback, useEffect, useState } from 'react'
import { fetchCountries } from '../api/countries'
import type { Country } from '../types/country'
import { toCountry } from '../utils/adaptCountry'

export type CountriesStatus = 'loading' | 'success' | 'error'

export function useCountries() {
  const [countries, setCountries] = useState<Country[]>([])
  const [status, setStatus] = useState<CountriesStatus>('loading')
  const [error, setError] = useState('')
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    fetchCountries(controller.signal)
      .then((data) => {
        setCountries(data.map(toCountry))
        setStatus('success')
      })
      .catch((err: unknown) => {
        if (controller.signal.aborted) return
        setError(err instanceof Error ? err.message : 'Error desconocido')
        setStatus('error')
      })

    return () => controller.abort()
  }, [attempt])

  const retry = useCallback(() => {
    setStatus('loading')
    setAttempt((n) => n + 1)
  }, [])

  return { countries, status, error, retry }
}