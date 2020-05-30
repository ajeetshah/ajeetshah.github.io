import { lazy, LazyExoticComponent } from 'react'

interface PathComponent {
  path: string
  component: LazyExoticComponent<(props: any) => JSX.Element>
}
