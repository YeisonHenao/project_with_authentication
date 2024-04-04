import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
}

export const ContainerComponent = ({children}: ContainerProps) => {
  return(
    <div className="container mx-auto px-4">
      {children}
    </div>
  )
}