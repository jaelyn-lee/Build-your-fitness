import { useNavigate } from 'react-router-dom'

interface Props {
  toggleMenu: () => void
}

export default function Nav(props: Props) {
  const navigate = useNavigate()

  function goTo(link: string) {
    props.toggleMenu()
    navigate(link)
  }

  return (
    <nav>
      <nav className="mt-10 pt-16 pl-4 flex">
        <ul className="text-3xl">
          <li>
            <button onClick={() => goTo('/')}>Home</button>
          </li>
          <li>
            <button onClick={() => goTo('/weight-tracker')}>
              Weight Tracker
            </button>
          </li>
        </ul>
      </nav>
    </nav>
  )
}
