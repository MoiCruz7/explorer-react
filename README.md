# Explorer App (React)

Interfaz adaptable para explorar países, construida con React, TypeScript, Vite y Tailwind CSS v4. Usa datos de demostración (sin API) y organiza los componentes con Atomic Design.

## Requisitos

- Node.js 20.19 o superior
- pnpm

## Ejecutar el proyecto

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # compilación de producción
pnpm preview    # sirve la compilación
```

## Organización (Atomic Design)

```
src/
├── components/
│   ├── atoms/        Heading, Input, Select, FlagImage, IconButton, NavLink, InfoRow
│   ├── molecules/    SearchField, RegionSelect, CountryCard, NavLinks, EmptyMessage
│   ├── organisms/    Header, FiltersBar, CountryGrid
│   └── templates/    ExplorerTemplate
├── data/             Países de demostración y regiones
├── types/            Interfaces y tipos
├── utils/            Filtrado y formateo
├── App.tsx           Estado compartido y composición
└── index.css         Design tokens con @theme
```

## Estado y comunicación

El estado (`search`, `region`, `isMenuOpen`) vive en `App.tsx`. Cada componente hijo recibe el valor por props y avisa los cambios con callbacks tipados (`onSearchChange`, `onRegionChange`, `onToggleMenu`, `onCloseMenu`). La lista visible se calcula a partir de ese estado.

## Funcionalidades

- Tarjetas con bandera, nombre, capital, región y población (4 por fila desde 1024 px, 2 en tablet y 1 en móvil)
- Búsqueda por nombre (sin distinguir mayúsculas ni acentos) que se actualiza al escribir
- Filtro por región combinado con la búsqueda
- Mensaje cuando no hay resultados
- Menú de navegación adaptable: horizontal en escritorio y desplegable en móvil (se cierra con Escape o al elegir un enlace)