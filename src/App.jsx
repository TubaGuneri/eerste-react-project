import './App.css'

function App() {
    return ( <>
    <header>
            <h1>Fruit perfection</h1>
             <button>Shop nu</button>
        <img
            src="/assets/header-background.jpg"
            alt= "Citroen"
        />
    </header>
        <main>
        <article className="product">

            <img
                src="/assets/citroenen.jpeg"
                alt="Citroen"
                />
            <h2 className= "product-name">Citroen</h2>
            <p className= "product-description">
                Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten.
                Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het
                sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel.
            </p>
        </article>
            <article className="product">
                <img
                    src="/assets/limoenen.png"
                    alt="limoenen"
                />
                <h2 className="product-name">Limoen</h2>
                <p className= "product-description">
                    Limoen is familie van de citroen en de sinaasappel en behoort tot de citrusvruchten
                    (Wijnruitfamilie). Limoenen zijn rond en kleiner dan citroenen. De schil is dun, vrij glad en
                    groen.
                </p>
            </article>

        </main>
)
}

export default App