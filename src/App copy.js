import { fetchUsers } from "./Api/User";
import { useEffect, useState } from "react";
import DetailsPage from "./Components/DetailsPage";
import Cards from "./Components/Cards";
import { Route } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((users) => {
        setData(users);
        console.log("users", users);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      hi
      {/* <Route exact path="/" component={<Cards data={data} />} /> */}
      <Route exact path="/user/:userId" component={DetailsPage} />
    </div>
  );
}

export default App;
