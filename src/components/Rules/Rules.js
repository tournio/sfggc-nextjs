import styles from './Rules.module.scss';
import ReactMarkdown from "react-markdown";
import React from "react";
import Image from "next/image";
import dymk from '../../images/sponsors/dymk.jpg';

const Rules = () => {
  const sections = [
    {
      header: 'Sanctioning & Membership',
      markdown: `
* USBC-certified tournament; all participants need a USBC adult membership (purchase at https://bowl.com/).
*	IGBO membership required (purchase at https://www.igbo.org/).
`,
    },
    {
      header: 'Event Participation',
      markdown: `
* Mixed handicap tournament by invitation only.
* Events: Singles, Doubles, Team (3 games per event).
  *  Must bowl all 3 events but only once each event.
  *  Doubles partner must be from your team
* Teams consist of 4 members (any gender identity).
* Professional bowlers allowed, but only 1 per team.
  *  Identify yourself during registration or be subject to disqualification, loss of entry fee, and prizes.
`,
    },
    {
      header: 'Awards & Prizes',
      markdown: `
* Based on total pins plus handicap.
* Awards for highest scores in Singles, Doubles, and Team events (1:10 ratio).
* Prizes distributed within 30 days post-tournament.
`,
    },
    {
      header: 'Entering Averages',
      markdown: `
* Handicap: 90% of the difference between average and 220.
* The Highest of:
  * Composite League Average 2024-2025 as of 12/31/2024 (with at least 21 games bowled)
  * IGBO Tournament Avg (TAD) from 1/1/24 to 12/31/24 (min 9 games)
  * League Average 2024-2025 (min 21 games by 12/31/2025)
  * If none of the above applies, contact us as soon as possible (directors@goldengateclassic.org).
* Averages must be verified via credible websites or documents.
* Submitting an incorrect average will result in disqualification.
* The Tournament Director reserves the right to determine and adjust a bowler's entering average.
`,
    },
    {
      header: 'Attendance & Substitutes',
      markdown: `
* Bowlers must be on time; late arrivals score zeros for missed frames.
* Authorized substitutes allowed in cases of absence, illness, or injury but may not start in the middle of a game.
`,
    },
    {
      header: 'Entry Requirements',
      markdown: `
* Fees: **$119** on or before Jan 17, 2025, **$129** after Jan 17, 2025.
* Registration will not be considered complete until Entry Fees and Memberships are PAID IN FULL. 
* Deadline: January 31, 2025. No refunds except at director’s discretion.
`,
    },
    {
      header: 'Protests',
      markdown: `
* Errors must be reported within one-hour post-game. Decisions are final unless appealed under USBC rules.
`,
    },
    {
      header: 'Optional Events & General Rules',
      markdown: `
* Optional events handled separately; errors capped at entry cost.
* If you require special assistance, please contact us asap (directors@goldengateclassic.org).  
* Tournament Director reserves the right to make decisions necessary that will ensure fair play and uphold the integrity of the competition and the tournament.
`,
    },
  ];

  const scratchMarkdown = `
1. **Overview:** 
The Scratch Masters is an optional, mixed competition with a separate entry fee, open to all SFGGC participants.
1. **Divisions & Fees:**
    *  Division A: 208+ ($60)
    *  Division B: 190-207 ($55)
    *  Division C: 170-189 ($45)
    *  Division D: 0-169 ($40)
    *  Tournament Director(s) may adjust a bowler’s division before they bowl.
1. **Qualification:** 
Scratch scores from Doubles, Singles, and Team events determine the top 6 qualifiers and one alternate per division (no handicap). A tie for 6th is settled with a 9th-and-10th-frame roll-off.
1. **Competition Format:**
    * Qualifiers bowl 3 games each on rotating lanes. The two lowest scores are eliminated, and the remaining 4 advance. Ties are broken by a one-ball roll-off.
    * The top 4 bowlers compete in a head-to-head stepladder format, with previous scores discarded. Higher-seeded bowlers choose to finish first or last.
1. **Practice & Timing:** 
Qualifiers get 10 minutes of practice before competition. Bowlers must be checked in 30 minutes before the start or be replaced by the alternate.
1.  **Match Timing:** 
Matches begin approx. one hour after the Team event. Each division bowls on separate lanes.
1.  **Errors & Protests:**
Claims of error during a roll-off must be submitted before the next match begins. For the final match, any error must be reported within one (1) hour of its conclusion.
1.  **Payouts:**
100% of entry fees (less lineage) are paid out with a minimum 1:2 ratio and up to 6 places per division.
1.  **Participation:**
If fewer than 6 bowlers sign up in a division, they may move to a higher division or request a refund.
`;

  return (
    <div>
      <section className={styles.Rules}>
        <h3 className={`section-heading`}>
          Tournament Rules
        </h3>

        <p className={`text-md-center`}>
          (Pending finalization)
        </p>

        <p>
          <a href='#scratch_masters_rules'>
            (skip to Scratch Masters rules)
          </a>
        </p>

        <p>
          The 2025 San Francisco Golden Gate Classic shall be held from Friday, February 14, through Sunday, February
          16, 2025, at Classic Bowling Center, located at 900 King Dr., Daly City, CA 94015.
        </p>

        <ol>
          {sections.map((section, i) => (
            <li key={i}>
              <h4>
                {section.header}
              </h4>

              <ReactMarkdown>{section.markdown}</ReactMarkdown>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.Rules}>
        <h3 className={`section-heading`} id={'scratch_masters_rules'}>
          Scratch Masters Rules
        </h3>

        <p className={`text-md-center`}>
          (Also pending finalization)
        </p>

        <div className={`${styles.Sponsor} row`}>
          <div className={'col-8 col-sm-6 text-end'}>
            <span className={styles.Intro}>
              Scratch Masters sponsored by
            </span>
            <span className={styles.Name}>
              Does Your Mother Know
            </span>
            <address>
              <span className={styles.Line}>
                4141 18th St.
              </span>
              <span className={styles.Line}>
                San Francisco, CA 94114
              </span>
              <span className={styles.Line}>
                <a href={'tel:4158643160'}>
                  <i className={'bi bi-telephone-fill pe-2'} aria-hidden={true}/>
                  415-864-3160
                </a>
              </span>
              <span className={styles.Line}>
                <a href={'https://dymkmedia.wixsite.com/does-your-mother-k-1'}
                   target={'_blank'}>
                  <i className={'bi bi-globe2'} aria-hidden={true}/>
                  <span className={'visually-hidden'}>
                    website
                  </span>
                </a>
              </span>
            </address>
          </div>
          <div className={'col-4 col-sm-3'}>
            <a href={'https://dymkmedia.wixsite.com/does-your-mother-k-1'}
               target={'_blank'}>
              <Image src={dymk}
                     className={'img-fluid'}
                     alt={'Logo for Does Your Mother Know'}/>
            </a>
          </div>
        </div>

        <ReactMarkdown>{scratchMarkdown}</ReactMarkdown>

      </section>
    </div>
  );
}

export default Rules;
