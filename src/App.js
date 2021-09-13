import {BrowserRouter as Router, Route} from "react-router-dom"
import Homepage from "./views/Homepage";
import News from "./views/News";
import NewsDetails from "./views/NewsDetails";

function App() {
    return (
        <Router>
            <Route exact path="/"> <Homepage/> </Route>
            <Route exact path="/news"> <News/> </Route>
            <Route path="/news/:id"> <NewsDetails/> </Route>
        </Router>
    );
}

export default App;
