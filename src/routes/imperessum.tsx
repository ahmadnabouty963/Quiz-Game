import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/imperessum')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/imperessum"!</div>
}
