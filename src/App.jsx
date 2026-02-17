import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WhoWatching from './pages/WhoWatching'
import Browse from './pages/Browse'
import EraPage from './pages/EraPage'

import IntroScreen from './components/IntroScreen';
import TransitionWrapper from './components/TransitionWrapper';

function App() {
    const [appReady, setAppReady] = useState(false);

    return (
        <>
            {!appReady && <IntroScreen onComplete={() => setAppReady(true)} />}

            <div className={`transition-opacity duration-700 ${appReady ? 'opacity-100' : 'opacity-0'}`}>
                <Router>
                    <div className="min-h-screen w-full bg-netflix-black text-white">
                        <TransitionWrapper>
                            <Routes>
                                <Route path="/" element={<WhoWatching />} />
                                <Route path="/browse" element={<Browse />} />
                                <Route path="/era/:id" element={<EraPage />} />
                            </Routes>
                        </TransitionWrapper>
                    </div>
                </Router>
            </div>
        </>
    )
}

export default App
