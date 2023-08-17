import { Link } from 'react-router-dom'

interface Props {
  toggleMenu: () => void
}

function Logo(props: Props) {
  function handleLogoClick() {
    props.toggleMenu()
  }

  return (
    <Link to="/">
      <button onClick={handleLogoClick}>
        <img src="/images/logo-no-background.png" alt="Logo" className="w-44" />
      </button>
    </Link>
  )
}

export default Logo
