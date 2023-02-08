import { BrowserRouter, Routes, Route} from "react-router-dom";
import Background from "./betaTest/Background";

// import Home from "./classEx5/Ex5/Home"

// import ReduxHooks from "./demoReduxHook/ReduxHooks";

// import CustomHooks from "./demoCustomHooks/CustomHooks";

// import DemoHooks from "./demoHooks/DemoHooks"
// import Effect from "./demoHooks/Effect";
// import State from "./demoHooks/State";
import HomeLayout from "./demoRouting/HomeLayout";

import HomeBooking from "./React-hw4/HomeBooking"
import Home from "./React-hw5/Home";

// import Home from "./classEx6/Home"
// import Home from "./classEx6/Home"
function App() {
  return (
    <BrowserRouter>
      {/* <div className="text-center bg-dark p-4">
      <Link to="/use-effect" className="me-2">Effect</Link>
      <Link to="/use-custom-hook" className="me-2">CustomHooks</Link>
      <Link to="/use-state">State</Link>
    </div> */}
      <Routes>
        <Route path="/" element={<HomeLayout />}>
        <Route path="/booking-ticket" element={<HomeBooking />} />
        <Route path="/user-form" element={<Home />} />
        <Route path="/beta-test" element={< Background />}/>
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
