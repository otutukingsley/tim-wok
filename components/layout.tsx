import Head from "next/head"
import AddBtn from "./addBtn"
import AddLogModal from "./addLogModal"
import SearchBar from "./searchbar"
import ViewLogModal from "./viewLogModal"
import EditLogsModal from "./editLogsModal"
import DeleteLogModal from "./deleteLogModal"

export const siteTitle = "IT-Logger"
const name = "Otutu Chinedu Kingsley"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="IT-Logger" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header
        style={{
          marginBottom: "100px",
          display: "block",
          width: "100%",
        }}
      >
        <SearchBar />
      </header>
      <main className="container">
        {children}
        <AddBtn />
        <AddLogModal />
        <ViewLogModal />
        <EditLogsModal />
        <DeleteLogModal />
      </main>
    </>
  )
}
export default Layout
