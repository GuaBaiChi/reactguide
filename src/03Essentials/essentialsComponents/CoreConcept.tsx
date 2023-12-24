

type CoreConceptProps = {
  title: string,
  description: string,
  src: string
}

export function CoreConcept(props: CoreConceptProps) {
  return (
    <li>
      <img src={props.src} alt={props.description} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

export function CoreConceptObjectDestructuring({ description, title, src }: CoreConceptProps) {
  return (
    <li>
      <img src={src} alt={description} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

export function CoreConceptRestProperty({ ...concept }: CoreConceptProps) {
  return (
    <li>
      <img src={concept.src} alt={concept.description} />
      <h3>{concept.title}</h3>
      <p>{concept.description}</p>
    </li>
  )
}