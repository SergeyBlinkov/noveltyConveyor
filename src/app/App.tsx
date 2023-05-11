import React from 'react';
import './App.css';
import NewsBlock from '../Components/NewsBlock/NewsBlock';
import ItemBlock from '../Components/ItemBlock/ItemBlock';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function App() {
    return (
        <div className='App'>
            <Header />
            <NewsBlock />
            <main className={'mainItems'}>
                <h3 className={'App_allItems'}>
                    Все наши кондитерские изделия
                </h3>
                <ItemBlock />
            </main>
            <Footer />
        </div>
    );
}

export default App;
