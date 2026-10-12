import { Outlet } from "react-router"

const AuthLayOut = () => {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center">
            <div className="w-full max-w-sm md:max-w-3xl">
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayOut
