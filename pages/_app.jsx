import '../styles/globals.css'
import Layout from "../components/layout";
import {Press_Start_2P, Lexend} from '@next/font/google'


const pressPlayFont = Press_Start_2P({ subsets: ['latin'], weight: '400' })
const lexend = Lexend({subsets: 'latin', weight: '300'})


function MyApp({ Component, pageProps }) {
  return (
    <>
    <style jsx global>{`
    a {
      font-family: ${pressPlayFont.style.fontFamily};
    }
    p {
      font-family: ${lexend.style.fontFamily}
    }
  `}</style>
  <Component {...pageProps} />
  </>
  );
}

export default MyApp
