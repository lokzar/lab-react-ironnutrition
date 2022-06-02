import {useState} from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {

    const [foodForm, setFoodForm] = useState(true)

    return (
        <div className="App">
            <AddFoodForm/>
            <div className='Orden'>
                {foods.map((foodName, index) => {
                    return (
                        <div key={index}>
                            <FoodBox
                                food={{
                                name: foodName.name,
                                calories: foodName.calories,
                                image: foodName.image,
                                servings: foodName.servings
                            }}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}
export default App;
