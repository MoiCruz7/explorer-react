import { BackLink } from '../components/molecules/BackLink'
import { EmptyMessage } from '../components/molecules/EmptyMessage'
import { AppHeader } from '../components/organisms/AppHeader'
import { ExplorerTemplate } from '../components/templates/ExplorerTemplate'

export function NotFoundPage() {
  return (
    <ExplorerTemplate header={<AppHeader />} title="Página no encontrada">
      <BackLink />
      <EmptyMessage
        title="Esta dirección no existe"
        description="La página que buscas no está disponible. Vuelve al listado de países."
      />
    </ExplorerTemplate>
  )
}