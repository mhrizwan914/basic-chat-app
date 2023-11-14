// Components
import Input from "../components/Input";
import Button from "../components/Button";
// React Router DOM
import { Link } from "react-router-dom";
// Hooks
import { useRef, useState } from "react";

let user;

const Home = () => {
    const [name, setName] = useState(null);
    const inputRef = useRef(null);

    const handleConnectRoom = () => {
        user = inputRef.current.value;
    }
    return (
        <main>
            <section>
                <div className="bg-primary-100 h-screen flex items-center">
                    <div className="container">
                        <div className="xs:w-[90%] sm:w-[60%] lg:w-[40%] bg-white rounded-sm m-auto p-5">
                            <img src="/logo.png" alt="logo" width={200} height={135} className="block mx-auto mb-5" />
                            <form className="grid gap-5 grid-cols-1">
                                <Input
                                    placeholder="Full Name"
                                    css="focus:border-secondary-100"
                                    handle={(e) => setName(e.target.value)}
                                    target={inputRef}
                                />
                                <Link to="/rooms" onClick={(e) => !name ? e.preventDefault() : null}>
                                    <Button
                                        text="Join Now"
                                        rounded="rounded-none"
                                        css="hover:bg-transparent hover:text-primary-100 hover:border-primary-100"
                                        handle={handleConnectRoom}
                                    />
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;
export { user };