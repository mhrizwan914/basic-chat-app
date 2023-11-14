// Components
import Room from "../components/Room";

const Rooms = () => {
    return (
        <main>
            <section>
                <div className="bg-primary-100 h-screen flex items-center">
                    <div className="container">
                        <div className="xs:w-[100%] sm:w-[70%] lg:w-[80%] bg-white rounded-sm m-auto">
                            <Room />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Rooms;