import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/hackerhours">
            <a style={linkStyle}>Hackers</a>
        </Link>
        <Link href="/hustletime">
            <a style={linkStyle}>Hustlers</a>
        </Link>
    </div>
)

export default Header
