import Link from 'next/link'
import Header from './Header'

const Layout = (props) => (
    <div>
        <Header />
        {props.children}
        <style jsx global>
        {`
            h1 {
                text-align: center;
            }

            * {
                font-family: sans-serif;
                color: white;
            }

            body {
                background-color: #101D2F;
            }
        `}  
        </style>
    </div>
)

export default Layout;