import {BrowserRouter as Router, Route} from "react-router-dom"
import Homepage from "./views/Homepage";
import News from "./views/News";
import NewsDetails from "./views/NewsDetails";
import SignIn from "./components/SignIn";
import Register from "./components/Register";

function App() {
    return (
        <Router>
            <Route exact path="/"> <Homepage/> </Route>
            <Route exact path="/news"> <News/> </Route>
            <Route path="/news/:id"> <NewsDetails/> </Route>
            <Route path="/auth"> <SignIn/> </Route>
            <Route path="/register"> <Register/> </Route>
        </Router>
    );
}

export default App;
