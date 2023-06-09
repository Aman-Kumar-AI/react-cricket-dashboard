import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import styles from './CricketDashboard.module.css';

import batsmanIcon from './images/batsman-icon.jpg';
import dhoni from './images/dhoni.jpg';
import rohit from './images/rohit.jpg';
import kohli from './images/kohli.jpg';
import hardik from './images/hardik.jpg';
import jadeja from './images/jadeja.jpg';
import gabbar from './images/gabbar.jpg';
import shami from './images/shami.jpg';
import bhuvi from './images/bhuvi.jpg';
import boomrah from './images/boomrah.jpg';
import fakar from './images/fakar.jpg';
import hafeez from './images/hafeez.jpg';
import sarf from './images/sarf.jpg';
import karim from './images/afridi.jpg';
import kamran from './images/kamran.jpg';
import shaheen from './images/shaheen.jpg';
import shadab from './images/shadab.jpg';
import imad from './images/imad.jpg';
import shaheed from './images/shaheed.jpg';





import bowlerIcon from './images/bowler-icon.png';

const CricketDashboard = () => {
  const [team, setTeam] = useState('India');
  const [showBothTeams, setShowBothTeams] = useState(false);

  const data = [
    { over: '1', India: 8, Pakistan: 5 },
    { over: '2', India: 12, Pakistan: 9 },
    { over: '3', India: 20, Pakistan: 15 },
    { over: '4', India: 27, Pakistan: 23 },
    { over: '5', India: 30, Pakistan: 27 },
    { over: '6', India: 46, Pakistan: 40 },
    { over: '7', India: 51, Pakistan: 49 },
    { over: '8', India: 53, Pakistan: 59 },
    { over: '9', India: 60, Pakistan: 68 },
    { over: '10', India: 79, Pakistan: 73 },
    { over: '11', India: 90, Pakistan: 80 },
    { over: '12', India: 102, Pakistan: 95 },
    { over: '13', India: 107, Pakistan: 110 },
    { over: '14', India: 115, Pakistan: 122 },
    { over: '15', India: 135, Pakistan: 124 },
    { over: '16', India: 150, Pakistan: 132 },
    { over: '17', India: 167, Pakistan: 150 },
    { over: '18', India: 180, Pakistan: 159 },
    { over: '19', India: 192, Pakistan: 169},
    { over: '20', India: 211, Pakistan: 173 },

    // ... add more data for all 20 overs
  ];

  const indiaScorecardData = [
    { player: 'RoHit',balls:22, runs: 58,status:'b Shaheen',icon:rohit },
    { player: 'Gabbar',balls:18, runs: 13,status:'c hafeez b Shadab',icon:gabbar },
    { player: 'Kohli',balls:16, runs: 12 ,status:'b Imad',icon:kohli},
    { player: 'Hardik',balls:12, runs: 19,status:'c Sarfaraz b Imad',icon:hardik },
    { player: 'Dhoni c/w',balls:40, runs: 89,status:'Not out*',icon:dhoni },
    { player: 'jadeja',balls:9, runs: 20,status:'Not out*' ,icon:jadeja },
    // ... add more players
  ];

  const pakistanScorecardData = [
    { player: 'Fakar',balls:32, runs: 41,status:'lbw Jadeja',icon:fakar },
    { player: 'Haffez',balls:45, runs: 75,status:'c Dhoni b Jadeja' ,icon:hafeez},
    { player: 'sarf c/w',balls:3, runs: 0,status:'b Jadeja',icon:sarf },
    { player: 'Karim',balls:21, runs: 27 ,status:'Not out*',icon:karim },
    { player: 'Kamran',balls:19, runs: 30,status:'b Shami',icon:kamran },
    // ... add more players
  ];

  const scorecardData = team === 'India' ? indiaScorecardData : pakistanScorecardData;

  const bowlersDataIndia = [
    { bowler: 'Hardik', over: '4', economy: '15.5', wickets: 0,icon:hardik  },
    { bowler: 'Jadeja', over: '4', economy: '4.75', wickets: 3,icon:jadeja },
    { bowler: 'Shami', over: '4', economy: '7.00', wickets: 1,icon:shami },
    { bowler: 'Bhuvi', over: '4', economy: '8.5', wickets: 0,icon:bhuvi },
    { bowler: 'Boomrah', over: '4', economy: '5.25', wickets: 0 ,icon:boomrah},
    // ... add more bowlers' data for India
  ];

  const bowlersDataPakistan = [
    { bowler: 'Shaheen', over: '4', economy: '10.5', wickets: 1,icon:shaheen },
    { bowler: 'hafeez', over: '2', economy: '11.0', wickets: 0,icon:hafeez },
    { bowler: 'Imad', over: '4', economy: '7.50', wickets: 2,icon:imad },
    { bowler: 'Shadab', over: '4', economy: '7.00', wickets: 1,icon:shadab },
    { bowler: 'Kareem', over: '2', economy: '16', wickets: 0,icon:karim },
    { bowler: 'Shaheed', over: '4', economy: '12.75', wickets: 0,icon:shaheed },
    // ... add more bowlers' data for Pakistan
  ];

  const [economyFilter, setEconomyFilter] = useState('');
  const [wicketsFilter, setWicketsFilter] = useState('');

  const filteredBowlersIndia = bowlersDataIndia.filter(
    (data) =>
      data.economy.includes(economyFilter) && data.wickets.toString().includes(wicketsFilter)
  );

  const filteredBowlersPakistan = bowlersDataPakistan.filter(
    (data) =>
      data.economy.includes(economyFilter) && data.wickets.toString().includes(wicketsFilter)
  );

  const handleToggleTeam = () => {
    setTeam((prevTeam) => (prevTeam === 'India' ? 'Pakistan' : 'India'));
  };

  const handleToggleGraph = () => {
    setShowBothTeams((prevShowBothTeams) => !prevShowBothTeams);
  };

  return (
    <div className={styles['cricket-dashboard']}>
      <h1>Cricket Match Dashboard</h1>
      <h3>Batting Performances</h3>
      <div className={styles['scorecards']}>
        <div className={styles['scorecard-players']}>
          {scorecardData.map((player, index) => (
            <div key={index} className={styles['player-container']}>
              <div className={styles['player-icon']}>
                <img src={player.icon} alt="Batsman Icon" />
              </div>
              <div className={styles['player-name']}>{player.player}</div>
              <div className={styles['player-score']}>
                {player.runs}{" in "}{ player.balls}
              </div>
              <div className={styles['player-status']}>
                {player.status}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles['scorecard-toggle']}>
          <button className={styles['button']} onClick={handleToggleTeam}>
            {team}
          </button>
        </div>
      <div className={styles['graph-container']}>
        <LineChart width={720} height={360} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="over" />
          <YAxis />
          <Tooltip />
          <Legend />
          {showBothTeams && (
            <>
              <Line
                type="monotone"
                dataKey="Pakistan"
                stroke="#FF8042"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="India"
                stroke="#0088FE"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 6 }}
              />
            </>
          )}
          {!showBothTeams && (
            <Line
              type="monotone"
              dataKey={team}
              stroke="#0088FE"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 6 }}
            />
          )}
        </LineChart>
      </div>
      <div className={styles['toggle-buttons']}>
        <button
          className={`${styles['button']} ${showBothTeams ? styles['active'] : ''}`}
          onClick={handleToggleGraph}
        >
          Show Both Teams
        </button>
      </div>
      <div className={styles['filter-container']}>
      <div className={styles['filters']}>
        <div>
          <label>Economy:</label>
          <input
            type="text"
            value={economyFilter}
            placeholder="Enter economy"
            onChange={(e) => setEconomyFilter(e.target.value)}
            className={styles['filter-input']}
          />
        </div>
        <div>
          <label>Wickets:</label>
          <input
            type="text"
            value={wicketsFilter}
            placeholder="Enter wickets"
            onChange={(e) => setWicketsFilter(e.target.value)}
            className={styles['filter-input']}
          />
        </div>
      </div>
      <div className={styles['filtered-bowlers']}>
        <h3>Filtered Bowlers</h3>
        <div className={styles['bowlers-container']}>
          <div className={styles['bowlers-list']}>
            <h4>{team === 'India' ? 'Indian Bowlers' : 'Pakistani Bowlers'}</h4>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Bowler</th>
                  <th>Overs</th>
                  <th>Economy</th>
                  <th>Wickets</th>
                </tr>
              </thead>
              <tbody>
                {team === 'India' &&
                  filteredBowlersIndia.map((bowler, index) => (
                    <tr key={index}>
                      <td>
                        <div className={styles['bowler-icon']}>
                          <img src={bowler.icon} alt="Bowler Icon" />
                        </div>
                      </td>
                      <td>{bowler.bowler}</td>
                      <td>{bowler.over}</td>
                      <td>{bowler.economy}</td>
                      <td>{bowler.wickets}</td>
                    </tr>
                  ))}
                {team === 'Pakistan' &&
                  filteredBowlersPakistan.map((bowler, index) => (
                    <tr key={index}>
                      <td>
                        <div className={styles['bowler-icon']}>
                          <img src={bowler.icon} alt="Bowler Icon" />
                        </div>
                      </td>
                      <td>{bowler.bowler}</td>
                      <td>{bowler.over}</td>
                      <td>{bowler.economy}</td>
                      <td>{bowler.wickets}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CricketDashboard;
