import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from "./MovieList";

<h1>Rush Hour Ratings!</h1>
function App() {
    
    const movies = [
        {
            id: 1,
            title:"Rush Hour",
            poster:"https://i.etsystatic.com/18242346/r/il/45e377/3022342507/il_794xN.3022342507_9y60.jpg",
            rating:"PG-13",
            runTime:"1h 38m",
            synopsis:'When kidnappers grab a Chinese officials daughter, Hong Kong chief inspector Lee (Chan) is all over the case until LAPD detective James Carter (Tucker) gets in his way. Cultures clash until these unlikely partners realize they both want to nail the crooks. Between Lees high-flying kicks and Carters rapid-fire wit, the bad guys wont know what hit them!',
            reviews: [
                {
                    stars: null,
                    review:""
                }
            ]

        },
        {
            id: 2,
            title:"Rush Hour 2",
            poster:"https://images.moviesanywhere.com/0bf84aaeb2bb5c17c14834a0d0575e87/17a13bf5-e6af-46ca-aaf4-8051416bbac0.webp?h=375&resize=fit&w=250",
            rating:"PG-13",
            runTime:"1h 30m",
            synopsis:'After an explosion at the US Embassy in Hong Kong kills two customs agents investigating currency smuggling, Inspector Lee (Jackie Chan) and James Carter (Chris Tucker) search for the mastermind. Ricky Tan (John Lone), head of the Fu-Cang-Long Triad, sends out his minions to insure that Carter and Lee dont solve the case.',
            reviews: [
                {
                    stars: null,
                    review:""
                }
            ]

        },
        {
            id: 3,
            title:"Rush Hour 3",
            poster:"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Rush_Hour_3_poster.png/220px-Rush_Hour_3_poster.png",
            rating:"PG-13",
            runTime:"1h 31m",
            synopsis:'East meets West again when the assassination of Ambassador Han leads to the reunion of Lee (Jackie Chan) and Carter (Chris Tucker). In Paris, the pair must stay one step ahead of Chinese gangsters, and Lees childhood friend (Hiroyuki Sanada), as they track down an envelope containing the identity of a powerful crime lord.',
            reviews: [
                {
                    stars: null,
                    review:""
                }
            ]

        }
    ]

// Movies are the array but as the property "movies" to use in MovieList

    return (
    <>
    <MovieList movies={movies} />
    </>
    );
}


export default App;