import LoginForm from "./LoginForm.jsx";

function Layout() {
    return(
        <>
            <header className="w-full h-[16%] bg-amber-500"></header>
            <main className="w-full h-[76%] bg-amber-300">
                <LoginForm />
            </main>
            <footer className="w-full h-[8%] bg-amber-600"></footer>
        </>
    );
}

export default Layout;