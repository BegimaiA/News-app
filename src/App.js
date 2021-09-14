import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Homepage from "./views/Homepage";
import News from "./views/News";
import NewsDetails from "./views/NewsDetails";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import NoMatch from "./components/NoMatch";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/"> <Homepage/> </Route>
                <Route exact path="/news"> <News/> </Route>
                <Route path="/news/:id"> <NewsDetails/> </Route>
                <Route exact path="/auth"> <SignIn/> </Route>
                <Route exact path="/register"> <Register/> </Route>
                <Route exact path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
