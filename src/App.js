import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import Home from "./pages/Home";
import AdminRoute from "./routes/AdminRoute";

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <AdminRoute path="/dashboard" component={Dashboard} />
  </BrowserRouter>
);

export default App;
