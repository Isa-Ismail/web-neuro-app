import Header from "./Header"
import SideNav from "./SideNav"

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
    return (
        <div className="flex flex-row w-full h-fit">
            <SideNav />
            <div className="flex flex-col justify-center items-center w-full min-h-screen">
                <Header />
                <main className="flex flex-col justify-center items-center w-full h-full relative">{children}</main>
            </div>
        </div>
    )
}

export default Layout