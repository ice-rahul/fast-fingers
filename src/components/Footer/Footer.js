import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom'
import { CrossIcon, HomeIcon } from '../../components';
import './Footer.css';

function Footer({ leftButton }) {
    const { url:path } = useRouteMatch();
    const browserHistory = useHistory();
    const goToHome = () => {
        browserHistory.push('/');
    }

    const stopGame = () => {
        let currentScore = {};
        let gameScores = [];
        currentScore.score = localStorage.getItem("gamescore");
        if (localStorage.getItem("scores") !== null) {
            gameScores = JSON.parse(localStorage.getItem("scores"));
        }
        gameScores.push(currentScore);
        localStorage.setItem("scores", JSON.stringify(gameScores));
        browserHistory.push(`/retry/${path.split('/')[2]}/${path.split('/')[3]}`);
    }

    const quitGame = () => {
        localStorage.removeItem("scores");
        browserHistory.push('/');
    }

    return (
        <div className="footerRow">
            <div className="footerSections" style={{ display: leftButton && leftButton === "quit" ? "none" : "inline-block" }}>
                <CrossIcon className="crossIcon" />
                <p className="closeGame" onClick={stopGame}>STOP GAME</p>
            </div>
            <div className="footerSections" style={{ display: leftButton && leftButton === "quit" ? "inline-block" : "none", "lineHeight": "3.4em" }}>
                <p className="closeGame" onClick={quitGame}>Quit</p>
            </div>
            <div className="footerSections footerAlignRight">
                <HomeIcon className="crossIcon" onClick={goToHome} />
            </div>
        </div>
    );
}

export default Footer;