import Card from "./components/Card";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import data from "./data";

function App() {
    const cards = data.map((item) => {
        return <Card key={item.title} {...item} />;
    });
    return (
        <div className="container">
            <Nav />
            {cards}
            <Footer />
        </div>
    );
}

export default App;
