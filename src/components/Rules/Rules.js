import styles from './Rules.module.scss';
import ReactMarkdown from "react-markdown";
import React from "react";

const Rules = () => {
  const placeholder = `
1. One
2. Two
3. Three
4. Four
5. Five
`;

  const sections = [
    {
      header: 'Sanctioning',
      markdown: `
1. The 2024 San Francisco Golden Gate Classic (SFGGC) is a USBC certified tournament, certification number [CERT NUMBER TBD]. All participants must be current members of the USBC.
1. SFGGC is a member of the International Gay Bowling Organization (IGBO).
    1.  All participants must be league associates (bowl as a regularly-rostered
member of an IGBO-member league – note that bowling as a substitute on an
IGBO-member league does not satisfy this requirement) or direct associates
(having paid the $25.00 direct associate fee within the 12 months immediately
preceding this tournament) of IGBO.
    1.  Those who do not meet the requirements above will be required to pay a
$25.00 IGBO direct associate fee. This fee entitles the bowler to participate in
any IGBO-affiliated tournament for a 12-month period.
      `,
    },
//     {
//       header: 'Fundamentals',
//       markdown: `
// `,
//     },
    // {
    //   header: 'Taxes',
    //   markdown: placeholder,
    // },
    {
      header: 'Event Participation',
      markdown: `
1. SFGGC is a mixed handicap competition.
1. The tournament is by invitation only. Entries can be denied.
1. The tournament shall consist of handicap events as follows: Singles, Doubles, and Team.
1. Each participant shall bowl three (3) games per event and must enter all three (3) events.
1. Teams will consist of four (4) members comprising any combination of genders and gender identities.
1. All participants will compete on an equal basis without regard to gender or gender identity.
1. Doubles partners must come from the same team.
1. Each participant may bowl only once in each event.
1. Professional bowlers may bowl in the SFGGC. However, only one (1) professional bowler per team will be allowed.
    1. A professional bowler is defined as any person who has been a &quot;card-carrying&quot; member of a professional bowling organization within the twelve (12) months immediately preceding the SFGGC.
    1. Professional bowlers must identify themselves as such at the time of registration.
    1. Failure to properly identify as a professional bowler prior to the start of the tournament shall be cause for disqualification and forfeiture of all entry fees and prize winnings.
`,
    },
    {
      header: 'Awards and Prizes',
      markdown: `
1. All cash awards shall be based on the total pins plus assigned handicap for each event except for optional events as defined below.
1. Awards will be given for the highest Singles, Doubles, and Team scores. The awards ratio for each event shall be at least 1:10.
1. A tie in any position will result in the sum of the prizes being aggregated for the tied positions and divided equally by the number of ties for that placement.
1. Prizes will be distributed via check or electronic payment payable in US currency within thirty (30) days of the completion of the tournament, barring any protests.
`,
    },
    {
      header: 'Entering Averages',
      markdown: `
1. SFGGC handicap is based on 90% of the difference between a bowler&apos;s entering average and the highest average for the 2023 SFGGC tournament.
1. All bowlers entering SFGGC must be able to provide proof of having an established ten-pin average acceptable to USBC. Proof of average is defined as:
    1. A credible website with free access (i.e., bowl.com, leaguesecretary.com) 
    1. A clear picture or scanned copy of a league standings sheet
    1. A hard copy of a league sheet with name and average highlighted
    1. A signed paper note with average from the League Secretary with their name and phone number.
1. Each bowler&apos;s entering average shall be determined by the following criteria, in priority order:
    1. The **highest** of:
        1. USBC Composite 2022-2023 average (minimum 21 games)
        1. IGBO Tournament Average (TAD) from January 1st, 2023, to December 31, 2023 (minimum 18 games). USBC rule #319 applies in its entirety.
    1. The USBC Composite 2021-2022 average (minimum 21 games)
    1. The USBC Composite 2023-2024 average as of January 1, 2024, if available.
    1. If none of the averages in the above rules is available, the bowler&apos;s entering average shall be 225 (USBC Rule #319b).
1. SPORT BOWLING or CHALLENGE SHOT average per USBC Rule #201c will be applied. Sport/challenge shot average will be converted per the USBC average adjustment scale (rule #201).
1. If no average from the above rules is available, but a bowler believes they have an average that can be used, they must submit any available information and documentation to the Tournament Director as soon as possible.
1. Failure to provide proper documentation upon request, or providing the wrong average, shall disqualify tournament scores if the submitted average is lower than the actual average. In this instance, the bowler will forfeit their entry fee and any other prizes and awards, and will be required to return all winnings from optional events.
1. Entries received whose average cannot be verified will be considered incomplete and not considered for tournament entry until verified.
1. The final decision regarding the determination of any bowler&apos;s entering average is at the sole discretion of the Tournament Director(s).
1. It is the bowler&apos;s responsibility to the accuracy of their own entering average, regardless of who may have submitted the average. Submitting an incorrect average shall be cause for disqualification and forfeiture of entry fees and prize winnings.
1. The entering average of any bowler may be adjusted at the discretion of the Tournament Director(s), and SFGGC reserves the right to take into account any specialty tournaments and events (i.e., 5, 8 &amp; 10 game tournaments, Vegas Pot Games, etc.) in adjusting a bowler&apos;s entering average.
`,
    },
    {
      header: 'Attendance and Substitutes',
      markdown: `
1. It is solely and entirely the bowler&apos;s responsibility to be present at the assigned lanes at the time of bowling.
1. There shall be ten (10) minutes of practice allowed before each event.
1. Complete Doubles and Team entrants must be present for bowling each event. If a team member or doubles partner is not present, an authorized substitute may be used. If no substitute is available, a zero score will be used for the missing bowler(s).
1. Late bowlers will begin bowling in the frame in which they are ready, with prior frames being scored as zero. No practice balls will be allowed for late bowlers.
1. Substitutes may bowl at the discretion of the Tournament Director. Their entering average must comply with SFGGC Rules.
1. In the event a bowler cannot participate in the tournament or complete any single event due to illness or injury, an authorized substitute may be used.
    1. Substitutes may not begin bowling mid-game. The entry of a substitute must be at the beginning of a game.
`,
    },
    {
      header: 'Entry Requirements',
      markdown: `
1. Entries shall be limited to two hundred sixteen (216) bowlers, across fifty-four (54) teams.
1. Entries must be paid in full, online, via the Tournio registration system, available at [https://tourn.io](https://tourn.io).
1. An entry will not be considered completed until the entry fee and any required IGBO Associate Fee is **paid in full**. Bowlers who are registered but have not paid in full by the end of the Standard period shall owe the Late fee.
1. There will be NO REFUNDS after acceptance of a completed entry by the tournament committee, except at the discretion of the Tournament Director(s).
1.  The entry deadline for the tournament is February 3, 2023, 12:00 AM PT. This includes payment of all fees.
1. Partial team entries will be accepted and the tournament committee will make every effort to fill vacancies.
1. Bowlers who have free entry codes must indicate such in their online entry, prior to completing any online payment.
    1. Free entry codes are subject to verification by the tournament committee.
    2. No refunds shall be issued for bowlers whose free entry codes cannot be verified. 
`,
    },
    {
      header: 'Entry Fee and Prize Distribution',
      markdown: `
5.  The Entry fee:

    *  $109 – Standard fee: Completed entries received at or before **Jan 19, 2024, 11:59pm PT**
    *  $119 – Late fee: Completed entries received at or after **Jan 20, 2024, 12:00am PT**
    
    Standard entry fee breakdown:
    
    * Lineage: $49.50
    * IGBO Donation: $1
    * Prize fund: $35
    * Awards / Food / Expenses: $23.50

16.  Cash prizes: A bowler may win only one (1) special awards prize. Each event has its own prize list, based on at least a 1:10 ratio. All prize fees collected for an event will be returned 100% to the participants of that event. This does not include optional events.
`,
    },
    {
      header: 'Protests',
      markdown: `
1.  All claims of error must be submitted, in writing, to the Tournament Director(s) within one (1) hour of the completion of a bowler or team&apos;s games in an event. In matters of dispute, the decision(s) of the Director(s) will be final, unless an appeal is made in accordance with UBSC Rule #329.
`,
    },
    {
      header: 'Optional Events',
      markdown: `
1. Optional events may be operated by entities other than the SFGGC committee. Bowlers are expected to follow all rules associated with each event. Any disqualification from the Tournament may result in disqualification from any or all optional events as well.
1. All optional events are scored on a best-effort basis; the maximum liability resulting from any error due to bowler(s) and/or operator(s) of an optional event shall be limited to the entry cost for that event.
`,
    },
    {
      header: 'General',
      markdown: `
1. The SFGGC and Classic Bowling Center bear no liability for potential exposure to COVID-19 during the tournament. The tournament and the bowling center will adhere to all federal, state, and local regulations regarding public health precautions. All bowlers, staff, and volunteers will be required to comply with relevant requirements.
1. Any person attending SFGGC who requires special assistance must notify the Tournament Director(s) in writing prior to the tournament weekend.
1. All bowlers will adhere to a one-lane courtesy.
`,
    },
  ];

  const scratchMarkdown = `
1.  The Scratch Masters, in conjunction with the SFGGC, is an optional mixed competition open to all tournament entrants. The Scratch Masters has a separate entry fee, and the amount is based on division. Prize money for each division consists of the total entry fees received in that division.
2.  The Scratch Masters divisions are defined as:
    *  Division A: 208+ &ndash; entry fee $60
    *  Division B: 190-207 &ndash; entry fee $50
    *  Division C: 170-189 &ndash; entry fee $45
    *  Division D: 0-169 &ndash; entry fee $40
4.  Tournament Director(s) may place a bowler into a higher division at their discretion. Any such adjustment will be made before the entrant bowls.
5.  The scratch scores from Team and Doubles events ONLY (scores from Singles are excluded) from the SFGGC will be used to determine the eight (8) qualifiers and one alternate in each division. Scores DO NOT carry over from the regular tournament. A tie for 8th position is broken by bowling one complete game prior to play to determine the qualifier.
6.  All scores bowled in Scratch Masters and all scores used to determine qualifiers are scratch (no handicap added at any time).
7.  All 8 qualifiers will get 10 minutes of practice on all lanes assigned to their division prior to the start of Scratch Masters.
8.  The top eight (8) qualifiers in each division will bowl 3 games each, 2 bowlers on one pair of lanes. After each game, bowlers will switch to a different set of lanes in their division (based on scratch masters lane schedule).
9.  The total scratch scores will be added after the first 3 games, then 4 bowlers will be dropped (ranked 5th-8th for final standings) and 4 bowlers will advance. In the event there is a tie after the 3 games, a **one-ball** roll-off will occur. If bowlers are still tied, they will continue to bowl one ball each until the tie is broken.
10.  The remaining 4 bowlers will bowl in a head-to-head, stepladder fashion and all previous scores will be discarded. The 4th place bowler will bowl the 3rd place bowler. The winner will advance and bowl the 2nd place bowler and the winner of that game will bowl the 1st place qualifier for the championship. In each of the stepladder games, the bowler seeded higher will get to choose to finish first or last.
11.  A lane schedule will be given to each division prior to the start of competition. No exceptions. The bowlers are responsible for checking if they have qualified.
12.  Bowlers must be physically present for check-in thirty (30) minutes prior to the scheduled start of the Scratch Masters competition. A bowler who does not check in as specified will be immediately disqualified and replaced by the alternate. If the alternate is not present, the spot will be filled by the next-highest ranking bowler in the division present at the time of check-in.
13.  The match game competition will begin within one hour of the end of the Singles event on Sunday, February 18, 2023. Each Division will bowl on a different set of eight (8) lanes.
14.  Any claims of error in the roll-off must be submitted before the start of the next match. Any claim of an error in the final match must be reported with one (1) hour of the completion of the final match.
15.  Payout for this optional Scratch Masters event will be 100% of the entry fees paid by participants by division. The award ratio for Scratch Masters by division shall be at a minimum of 1 in 2 entries, with a maximum of 6 places paid in each division.
16.  If fewer than 8 bowlers in any division sign up for Scratch Masters, they will be given the option of having their fee refunded or moving up to the next higher division.`;

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
          The 2024 San Francisco Golden Gate Classic shall be held from Friday, February 16, through Sunday, February 18, 2024, at Classic Bowling Center, located at 900 King Dr., Daly City, CA 94015.
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

        <ReactMarkdown>{scratchMarkdown}</ReactMarkdown>

      </section>
    </div>
  );
}

export default Rules;
