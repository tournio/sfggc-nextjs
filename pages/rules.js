import React from 'react';

import Layout from "../components/layout";

import styles from './rules.module.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const rules = () => {
  return (<Layout>
    <div className={styles.Rules}>
      <h1 className="display-4">
        Tournament Rules
      </h1>

      {/*<h4 className="my-2 text-muted">*/}
      {/*  (Pending finalization)*/}
      {/*</h4>*/}

      <p>
        <a href='#scratch_masters_rules'>
          (skip to Scratch Masters rules)
        </a>
      </p>

      <ol>
        <li> The San Francisco Golden Gate Classic (SFGGC) is a United States Bowling Congress (USBC) certified
          tournament and is affiliated with the International Gay Bowling Organization (IGBO). It is a mixed
          competition open to men and women by invitation only and entries can be denied. You must possess a current
          membership from both organizations. If membership is needed from either, you may purchase a USBC membership
          prior to the event at bowl.com for $27.00 (US) and an IGBO membership via the tournament’s online
          registration system for $25.00 (US). (Prices are current as of September 20, 2022). Active card-carrying
          members of the PBA must state so on their entry form. Maximum of 1 PBA member allowed per team. IN THE BEST
          INTEREST OF TOURNAMENT COMPETITION, THE DIRECTOR(S) RETAIN(S) THE RIGHT TO ACCEPT OR REJECT ANY TEAM OR
          INDIVIDUAL.
        </li>
        <li> All bowling events will be held at Classic Bowling Center, at 900 King Drive, Daly City, CA 94015.
        </li>
        <li> ENTERING AVERAGE: The tournament operates on the ideal of fair play. Should the Tournament Director(s)
          discover any evidence of violation of this ideal, a bowler may be disqualified at any time, at the
          discretion of the Tournament Director(s). Please, no cheating. All bowlers entering SFGGC mush show proof of
          having an established ten-pin average acceptable to USBC. Proof of average is defined as: 1) credible
          website with free access (i.e., bowl.com, leaguesecretary.com); 2) clear picture or scanned copy of your
          league sheet; 3) hard copy of a league sheet with name and average highlighted; 4) a signed paper with
          average from the League Secretary with their name and phone number. The following rules apply when
          submitting entering average. The highest of the following averages will be used:
        </li>
        <ol>
          <li>
            Submit the highest average from the following criteria:
          </li>
          <ol>
            <li>
              USBC 2021-2022 league average (minimum 21 games) (NOT COMPOSITE)
            </li>
            <li>
              January 1, 2023, highest league average (minimum 21 games)
            </li>
            <li>
              TOURNAMENT AVERAGE (TAD) composite from January 1st, 2022, to December 31, 2022 (minimum 18 games).
              USBC rule #319 applies in its entirety.
            </li>
            <li>
              SPORT BOWLING or CHALLENGE SHOT average per USBC Rule #201c will be applied. Sport average/challenge
              shot converted per the USBC average adjustment scale (rule #201).
            </li>
          </ol>
          <li>
            If no average from section A is available, but you believe you have an average that can be used, submit
            any available information and documentation to the Tournament Director as soon as possible.
          </li>
          <li>
            All others will enter at 225 (USBC Rule #319b) or the highest tournament entering average if it is
            higher.
          </li>
          <li>
            Failure to provide proper documentation, or providing the wrong average, shall disqualify tournament
            scores if the submitted average is lower than the actual average. In this instance, the bowler will forfeit
            their entry fee and any other prizes and awards and will be required to return all winnings from optional
            events.
          </li>
          <li>
            The final decision regarding the determination of any bowler’s entering average is at the sole discretion
            of the Tournament Director.
          </li>
          <li>
            Entries received whose average cannot be verified will be considered incomplete and not considered for
            tournament entry until verified.
          </li>
          <li>
            If a bowler has qualified for winnings of $600.00 or more in any tournament not including any side pots
            (such as brackets, mega brackets, etc.) in the previous 12 months, the actual scores and winnings from the
            tournament must be reported for possible re-rating. Re-rating must be done before the entrant bowls.
          </li>
          <li>
            It is the bowler’s responsibility to make sure SFGGC has their correct average based on the rules above
            regardless of who may have submitted the average for you. Submitting an incorrect average shall be cause for
            disqualification and forfeiture of entry fees and prize winnings.
          </li>
          <li>
            The average of any bowler may be adjusted at the discretion of the Tournament Director(s) and we reserve
            the right to utilize specialty tournaments and events (i.e., 5, 8 & 10 game tournaments, Vegas Pot Games,
            etc.) in adjusting a bowler's entering average.
          </li>
          <ol>
            <li>
              Any average adjustment must be made before the completion of the entrant's first game of competition. Any
              bowler unwilling to accept the average change will receive a refund, cease bowling and receive a zero
              score
              for all games if a qualified bowler cannot be found as a replacement. Team members will NOT receive a
              refund.
            </li>
          </ol>
          <li>
            SFGGC handicap is based on 90% of the difference between a bowler's entering average and the highest
            average for the 2023 SFGGC tournament.
          </li>
        </ol>
        <li> Entries must be paid in full, online, via the registration system, at https://tourn.io.
        </li>
        <li> Entry fee:
        </li>
        <ol>
          <li>
            $109 – Completed entries received on or before Dec 16, 2022
          </li>
          <li>
            $119 – Completed entries received between Dec 17, 2022, to Jan 20, 2023
          </li>
          <li>
            $129 – Completed entries received on or after Jan 21, 2023
          </li>
        </ol>
        <li> An entry will not be considered completed until the entry fee is paid in full.
        </li>
        <li> There will be NO REFUNDS after acceptance of an entry by the tournament committee, except at the
          discretion of the Tournament Director(s).
        </li>
        <li> The entry deadline for the tournament is February 4, 2023, 12:00 AM PST. This includes payment of all
          fees.
        </li>
        <li> Bowlers may bowl only once in each event. Each event consists of three (3) games, for a total of nine (9)
          games. Team and Doubles events will be bowled back-to-back on Saturday; the Singles event will be bowled on
          Sunday.
        </li>
        <li>
          All claims of error must be submitted, in writing, to the Tournament Director(s) within one (1) hour
          after the bowler or team has bowled. In matters of dispute, the decision(s) of the Director(s) will be
          final, unless an appeal is made in accordance with UBSC Rule #329.
        </li>
        <li>
          Optional events may be operated by entities other than the SFGGC committee. Bowlers are expected to
          follow all rules associated with each event. Any disqualification from the Tournament may result in
          disqualification from any or all optional events as well. All optional events are scored on a best-effort
          basis; the maximum liability resulting from any error due to bowler(s) and/or operator(s) of an optional
          event shall be limited to the entry cost for that event.
        </li>
        <li>
          Substitutes may bowl with the Director(s) approval. Substitutes must bowl in the same line-up position
          as the bowler they are replacing.
        </li>
        <li>
          Late bowlers will start bowling in the frame they are ready to bowl; prior frames will be scored zero
          (0). Absent bowlers will be scored zero (0).
        </li>
        <li>
          Cash prizes: A bowler may win only one (1) special awards prize. Each event has its own prize list,
          based on at least a 1:10 ratio. All prize fees collected for an event will be returned 100% to the
          participants of that event. This does not include optional events.
        </li>
        <li>
          Captains must check their teams in at least thirty (30) minutes prior to the start of competition.
        </li>
        <li>
          Bowlers will be allowed 10 minutes of practice before the start of each of the three (3) events.
        </li>
        <li>
          The San Francisco Golden Gate Classic and Classic Bowling Center bear no liability for potential
          exposure to COVID-19 during the tournament. The tournament and the bowling center will adhere to all
          federal, state, and local regulations regarding public health precautions. All bowlers, staff, and
          volunteers will be required to comply with relevant requirements.
        </li>
      </ol>

      <h2 id={'scratch_masters_rules'}>
        Scratch Masters Rules
      </h2>

      <ol>
        <li>
          The Scratch Masters, in conjunction with the SFGGC, is an optional mixed competition open to all tournament
          entrants. The Scratch Masters has a separate entry fee, and the amount is based on division. Prize money for
          each division consists of the total entry fees received in that division.
        </li>
        <li>
          The Scratch Masters divisions are defined as:
          <ol>
            <li>
              Top 25% of All Entering Averages
            </li>
            <li>
              2nd Highest 25% of All Entering Averages
            </li>
            <li>
              3rd Highest 25% of All Entering Averages
            </li>
            <li>
              Lowest 25% of All Entering Averages
            </li>
          </ol>
        </li>
        <li>
          The divisions will be announced once registration has closed, and all averages have been verified.
        </li>
        <li>
          Tournament Director(s) may place a bowler into a higher division at their discretion. Any such adjustment will
          be made before the entrant bowls.
        </li>
        <li>
          The scratch scores from Team and Doubles events ONLY (scores from Singles are excluded) from the SFGGC will be
          used to determine the eight (8) qualifiers and one alternate in each division. Scores DO NOT carry over from
          the regular tournament. A tie for 8th position is broken by bowling one complete game prior to play to
          determine the qualifier.
        </li>
        <li>
          All scores bowled in Scratch Masters and all scores used to determine qualifiers are scratch (no handicap
          added at any time).
        </li>
        <li>
          All 8 qualifiers will get 10 minutes of practice on all lanes assigned to their division prior to the start of
          Scratch Masters.
        </li>
        <li>
          The top eight (8) qualifiers in each division will bowl 3 games each, 2 bowlers on one pair of lanes. After
          each game, bowlers will switch to a different set of lanes in their division (based on scratch masters lane
          schedule).
        </li>
        <li>
          The total scratch scores will be added after the first 3 games, then 4 bowlers will be dropped (ranked 5th-8th
          for final standings) and 4 bowlers will advance. In the event there is a tie after the 3 games, a one-ball
          roll-off will occur. If bowlers are still tied, they will continue to bowl one ball each until the tie is
          broken.
        </li>
        <li>
          The remaining 4 bowlers will bowl in a head-to-head, stepladder fashion and all previous scores will be
          discarded. The 4th place bowler will bowl the 3rd place bowler. The winner will advance and bowl the 2nd place
          bowler and the winner of that game will bowl the 1st place qualifier for the championship. In each of the
          stepladder games, the bowler seeded higher will get to choose to finish first or last.
        </li>
        <li>
          A lane schedule will be given to each division prior to the start of competition. No exceptions. The bowlers
          are responsible for checking if they have qualified.
        </li>
        <li>
          Bowlers must be physically present for check-in thirty (30) minutes prior to the scheduled start of the
          Scratch Masters competition. A bowler who does not check in as specified will be immediately disqualified and
          replaced by the alternate. If the alternate is not present, the spot will be filled by the next-highest
          ranking bowler in the division present at the time of check-in.
        </li>
        <li>
          The match game competition will begin within one hour of the end of the Singles event on Sunday, February 19,
          2023. Each Division will bowl on a different set of eight (8) lanes.
        </li>
        <li>
          Any claims of error in the roll-off must be submitted before the start of the next match. Any claim of an
          error in the final match must be reported with one (1) hour of the completion of the final match.
        </li>
        <li>
          Payout for this optional Scratch Masters event will be 100% of the entry fees paid by participants by
          division. The award ratio for Scratch Masters by division shall be at a minimum of 1 in 2 entries, with a
          maximum of 6 places paid in each division.
        </li>
        <li>
          If fewer than 8 bowlers in any division sign up for Scratch Masters, they will be given the option of having
          their fee refunded or moving up to the next higher division.
        </li>

      </ol>
    </div>
  </Layout>);
};

export default rules;
