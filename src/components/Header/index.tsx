import logo from '../../assets/logo.svg'

export function Header() {
  return(
    <header>
      <img src={logo} alt="dt money" />
      <button type="button">
        Nova transação
      </button>
    </header>
  )
}