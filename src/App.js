import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShowListItemScreen from './Screens/ShowListItemScreen';
import AddItemScreen from './Screens/AddItemScreen';
import DeleteItemScreen from './Screens/DeleteItemScreen';
import ItemDetailScreen from './Screens/ItemDetailScreen';


function App() {
	return (
		<Router>
		
			<main className="py-3">
          <Route path="/" exact component={ShowListItemScreen} />
          <Route path="/add" exact component={AddItemScreen} />
          <Route path="/delete/:id" exact component={DeleteItemScreen} />
          <Route path="/detail/:id" exact component={ItemDetailScreen} />

			</main>
		
		</Router>
	);
}

export default App;