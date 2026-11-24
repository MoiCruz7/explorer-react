# Explorer App (React)

Aplicación web para explorar países: listado con bandera, capital, región y población, búsqueda por nombre, filtro por región y una página de detalle por país. Es la migración a React de mi versión en Vanilla TypeScript y el cierre del laboratorio de la Unidad 3.

- **Aplicación publicada:** [URL de Vercel]
- **Repositorio:** https://github.com/MoiCruz7/explorer-react
- **Pull Request del cierre:** [URL del PR]

## Stack

- React 19 y TypeScript
- Vite 8 (empaquetado y servidor de desarrollo)
- Tailwind CSS 4
- React Router (rutas del lado del cliente)
- oxlint (lint)
- pnpm (gestor de paquetes)
- Vercel (despliegue)

## Requisitos

- Node.js (versión LTS reciente)
- pnpm (`npm i -g pnpm`)
- Una clave de la API de restcountries

## Instalación y ejecución

```bash
pnpm install
```

Crea un archivo `.env.local` en la raíz (no se sube al repositorio):

```
VITE_RESTCOUNTRIES_API_KEY=tu_clave
```

Comandos disponibles:

```bash
pnpm dev       # servidor de desarrollo en http://localhost:5173
pnpm build     # comprobación de tipos (tsc -b) y build de producción
pnpm lint      # oxlint
pnpm preview   # sirve el build localmente
```

## Funcionalidades

- Listado de países con bandera, capital, región y población.
- Búsqueda por nombre con debounce de 300 ms, insensible a mayúsculas y acentos.
- Filtro por región, combinable con la búsqueda. Las regiones se obtienen de los datos cargados.
- Estados de interfaz: carga (tarjetas esqueleto), sin resultados y error con botón "Reintentar".
- Detalle de país en `/pais/:code` (nombre oficial, capital, región, población, idiomas y monedas).
- URL directa y recarga en el detalle, gracias a `vercel.json`.
- Mensaje comprensible para códigos inexistentes y para rutas que no existen.
- Diseño adaptable con menú móvil, y navegación por teclado.

## Organización del proyecto

```
src/
├── api/          # consumo de la API, validación y caché de sesión
├── components/
│   ├── atoms/        # Heading, Input, Select, FlagImage, InfoRow...
│   ├── molecules/    # CountryCard, SearchField, RegionSelect, ErrorMessage...
│   ├── organisms/    # Header, AppHeader, FiltersBar, CountryGrid, LoadingGrid
│   └── templates/    # ExplorerTemplate
├── hooks/        # useCountries, useDebouncedValue
├── pages/        # HomePage, CountryDetailPage, NotFoundPage
├── types/        # Country (interfaz de la app) y ApiCountry (respuesta de la API)
└── utils/        # filtros, regiones, adaptador API → Country, búsqueda por id
```

Rutas:

| Ruta | Página |
| --- | --- |
| `/` | Listado con búsqueda y filtro |
| `/pais/:code` | Detalle del país (`code` es el código alpha-3, por ejemplo `slv`) |
| `*` | Página no encontrada |

## Capturas

| Listado | Detalle |
| --- | --- |
| ![Listado](docs/evidencias/listado.png) | ![Detalle](docs/evidencias/detalle.png) |

Evidencias de los estados de UI (carga, vacío, error): carpeta [`docs/evidencias`](docs/evidencias).

## Migración de Vanilla TypeScript a React

**Reutilizado con cambios mínimos**

- `api/countries.ts`: la lógica de consumo es la misma (paginación, validación de la respuesta, `ApiError`, caché en `sessionStorage`). Solo cambió el nombre del tipo de la respuesta (`Country` pasó a `ApiCountry`) y su ruta de importación.
- Utilidades de filtrado (`normalizeText`, `filterCountries`): se conservó la idea, pero trabajan con el tipo plano `Country` de la app React, no con la estructura anidada de la API.

**Adaptado o reescrito**

- Tipos: la API devuelve objetos anidados (`names.common`, `codes.alpha_3`). Creé `ApiCountry` para la respuesta y `adaptCountry.ts` para convertirla al `Country` plano que usan los componentes. `Region` pasó a ser `string` porque las regiones salen de la API.
- Debounce: la función `debounce` de la versión Vanilla no se usa. En React se reimplementó como el hook `useDebouncedValue`.
- Estados de UI: en Vanilla eran funciones que construían nodos del DOM (`states.ts`). En React son componentes: `LoadingGrid`, `CountryCardSkeleton`, `EmptyMessage` y `ErrorMessage`.
- Detalle: antes se leía `?code=` con `URLSearchParams` en una página HTML aparte. Ahora se usa `useParams` con la ruta `/pais/:code` y `findCountryById`.
- Navegación: de varias páginas HTML a una sola aplicación con React Router.

## Refactor realizado

Saqué de `App.tsx` la carga de datos y la lógica de búsqueda:

- `useCountries` encapsula la carga, el estado (`loading`/`success`/`error`), la cancelación con `AbortController` y el reintento.
- `useDebouncedValue` encapsula el debounce de la búsqueda.
- `App.tsx` solo declara las rutas; el listado quedó en `HomePage` y el estado del menú en `AppHeader`.
- Se eliminaron los datos locales de demostración, que ya no se usan.

Esto no cambia lo que el usuario ve: se confirmó con `pnpm build`, `pnpm lint` y las pruebas manuales de la lista de verificación (búsqueda, filtro, detalle, URL directa y estados de UI).

## Medición inicial de Lighthouse

- URL: [URL de Vercel]
- Fecha: [fecha]
- Modo: [móvil / escritorio]

| Performance | Accessibility | Best Practices |
| --- | --- | --- |
| [valor] | [valor] | [valor] |

Informe: [`docs/evidencias/lighthouse.html`](docs/evidencias/lighthouse.html)

Interpretación: [2 o 3 frases sobre lo que más pesa en Performance y qué avisos aparecieron]. Esta medición es el punto de partida; la optimización se trabajará en la unidad correspondiente.

## Problemas pendientes

- No hay enlaces a países fronterizos: los campos que se piden a la API no incluyen esa información.
- Al volver del detalle al listado, la búsqueda y la región se reinician. Se podría resolver guardándolos en la URL con `useSearchParams`.
- La clave de la API (`VITE_RESTCOUNTRIES_API_KEY`) queda incluida en el código que descarga el navegador. Una solución real sería un proxy en el servidor.