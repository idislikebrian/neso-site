import '../../../src/styles/rules.scss'

export default function Rules() {
    return (
        <div className="rules">
            <div className="sectionhead">
                <h2>Rules</h2>
            </div>
            <div className="rules-block">
                <h3>Introduction</h3>
                        <p>This document provides the rules and regulations for the 2021 Non Existent Space Company challenge.</p>
                        <p>The NESO challenge is a fictional space race in which teams design and fly a rocket to meet a specified set of mission and performance goals, in order to win a mission contract.</p>
                        <p>The winner of this challenge will receive a trophy and an exclusive contract to fly rockets for NESO. In this competition you will enter your independent space company where you design, build, fly, and retrieve your model rocket. Each space company is scored on a variety of factors listed in this rule book.</p>
            </div>
            <div className="rules-block">
                <h3>Contest Rules</h3>
                    <h4>2.1 Safety</h4> 
                        <p>Watch yourself. Rockets will be inspected before launch and observed during flight by a NESO official, whose judgment on their compliance with the Safety Code and with these rules will be final. Teams are encouraged to consult with designated NESO officials who are running this event.</p>
                    <h4>2.2 Teams</h4>
                        <p>The minimum team size is 2 people, maximum is 10. Teams may obtain financing from any source. The application for a team must come from a single organization. There is no limit to the number of teams that may be entered from any single organization. No individual may be on more than one team.</p>
                        <p>Each member of the team must make a significant contribution to the design, building, and/or launching of the team’s entry. The challenge is open to the first 10 teams that submit a completed application, including payment, timestamped between [date] and [date].</p>
                    <h4>2.3 Propoganda</h4>
                        <p>Teams must submit three pieces of promotional materials for their “space program” including a team name/logo, and a video log entry no longer than two minutes that explains their rocket design and flight testing process.</p>
                    <h4>2.4 Rocket Design</h4>
                        <p>Rockets will be scored on their design creativity (paint job, decal design) and craftsmanship. Rockets will be inspected before launch and observed during flight by a NESO official, whose judgment on their aesthetics will be final.</p>
                    <h4>2.5 Rocket RequirementsS</h4>
                        <p>Rockets must not exceed [weight, ie 650 grams] gross weight at liftoff. The overall length of the rocket must be no less than [##] millimeters ([##]inches) as measured from the lowest to the highest points of the airframe structure (including fins) in launch configuration. They must use body tubes of two different diameters in their exterior structure. Adding a wrap to a body tube is not considered to make it a differ</p> 
                    <h4>2.6 Payload</h4>
                        <p>Rockets must contain and completely enclose two raw hen’s eggs of 55 to 61 grams weight, and a length of between 56 to 59 millimeters; and must return them from flight without any cracks or other external damage. Both eggs will be issued to the teams by event officials, during the event. The eggs and altimeter must be removed from the rocket at the end of the qualification flight in the presence of a designated NESO official and presented to that official, who will inspect the eggs for damage after their removal and will read the altimeter score. All coatings, padding, or other materials used to protect the eggs must be removed by the team before this inspection.</p>
                    <h4>2.7 Duration Scoring</h4>
                        <p>The duration score for each flight shall be based on the total flight duration of the rocket, measured from first motion at liftoff from the launch pad until the moment that the first part of the rocket touches the ground (or tree) or until it can no longer be seen due to distance or to an obstacle.</p>
                        <p>[will make GIF/MP4 from Golden Rocket launch]</p>
                        <p>Times must be measured independently by two people, not on the team, one of whom is the official NESO official, using separate electronic stopwatches that are accurate to 0.01 seconds or their iPhone Clock app. The official duration will be the average of the two times, rounded to the nearest 0.01 second, with .005 seconds being rounded up to the next highest 0.01 seconds. If one stopwatch malfunctions, the remaining single time will be used. The flight duration goal is a range of 41 to 44 seconds. Flights with a duration in the range of 41 to 44 seconds get a perfect duration score of zero. Duration scores for flights below 41 seconds will be computed by taking the absolute difference between 41 seconds and measured average flight duration to the nearest 1/100 second and multiplying this by 4.</p> 
                        <p><center>(41 secs - Average Flight Duration) * 4 = DURATION SCORE</center></p>
                        <p>Duration scores for flights with durations above 44 seconds will be computed by taking the absolute difference between 44 seconds and the measured average flight duration to the nearest 1/100 second and multiplying this by 4.</p> 
                        <p>(Average Flight Duration - 44 secs) * 4 = DURATION SCORE</p>
                        <p>These duration scores are always a positive number or zero. The target duration for flights at the finals will be 1 second less or 1 second more, with the order for these between first and second flights determined by a NESO official. Scoring for flights with durations above or below this revised range will be aligned to match the procedures for the 41-44 second range.</p>
                    <h4>2.8 Altitude Scoring</h4>
                        <p>Rockets must contain one electronic altimeter provided by NESO that will be the sole basis for the altitude score. The altimeter must be inspected by a NESO official both before and after the flight, and may not be modified in any manner. The altimeter must be confirmed by this official before the flight to not have been triggered and to be ready for flight. The peak altitude of the rocket as recorded by this altimeter will be the sole basis for judging the altitude score and this altimeter may be used for no other purpose. Other altimeters of other types may be used for flight control or other purposes. The altitude performance goal (APG) for qualification flights is 832 ft (254 meters). The altitude score (AS) will be the absolute difference in feet between the altitude performance goal in feet and the reported actual flight altitude (RAFA) in feet (always a positive number or 0).</p>
                        <p><br></br>APG - RAFA = AS<br></br></p>
                        <p>The altitude performance goal for flights at the finals will be 810 ft or 860 ft with the order for these between first and second flights determined by a coin toss at the team pre-flight briefing at finals. The altitude and duration goals will be set by a single coin toss with the 810 ft altitude going with a 42-43 seconds duration goal and the 860 ft altitude goal going with a 42-45 second duration goal.</p>
                    <h4>2.9 Flights</h4>
                        <p>Team members cannot be changed after the first flight. Only team members on record at NESO are eligible to receive prizes.</p> 
                    <h4>2.10 Safe Recovery</h4>
                        <p>Every portion of the rocket must return to earth safely and at a velocity that presents no hazard. An entry that has any heavy structural part or an expended motor casing separate from the rest and falls to earth without any form of recovery device will be disqualified. The rocket must be allowed to land at the end of the flight without human intervention (catching) and the flight will be disqualified if there is such intervention.</p>
                    <h4>2.11 Returns</h4>
                        <p>Return of the entire rocket is required by the deadline time on that same day that was established at the beginning of the days of flying. If the rocket cannot be returned after an otherwise safe and stable flight because it cannot be located or because it landed in a spot from which recovery would be hazardous (as determined by a NESO official), a replacement vehicle may be substituted for a replacement flight. Once a NESO official has declared that a rocket has landed in a place from which recovery would be hazardous, the results from the rocket’s flight may not subsequently be used even if it is recovered.</p>
                    <h4>2.12 Launch Systems</h4>
                        <p>Teams must use the electrical launch system and the launch pads provided by the event officials. All launches will be controlled by the event range safety officer and must occur from the ground.</p>
                    <h4>2.13 Flight Control</h4>
                        <p>Rockets may not use an externally generated signal such as radio or computer control (except GPS navigation satellite signals) for any purpose after liftoff. They may use autonomous onboard control systems or altimeters separate from the official scoring altimeter to control any aspect of flight as long as these do not involve the use of pyrotechnic charges.</p>
                    <h4>2.14 Places</h4>
                        <p>Places in the final fly-off of the competition will be determined based on the sum of the altitude and duration scores. At the fly-offs at least 10 teams will be invited to make a second flight based on the results of their first flights in the second flights, rockets with which have issues that would otherwise rate a replacement flight under the rules #2.7 or 2.9 will not receive a replacement flight. Prizes awarded to the top places will be awarded only to those teams that make a second flight. The top final places will be ranked based on the scores from the qualified flights made at the fly-off. The remaining places will be awarded based on the scores from their flight. Ties will be results in pooling and even splitting of the prizes for the affected places –- for example, a two-way tie for fourth place would result in a merger and even division of the prizes for 4th and 5th places. If there is a tie for first, second, or third place, the teams involved in the tie will be required to make a third flight to determine the final places. Non-Existent Space Organization reserves the right to make all last and final contest determinations.</p>
            </div>
            <div className="rules-block">
                <h3>NESO National Standards</h3>
                        <p>This document is an example of what a voluntary consensus standard might look like within the Aerospace industry. The Non-Existent Space Organization organizes and facilitates groups of experts to write approve and publish these standards that may contain requirements and best practices. Standards help to reduce costs and improve levels of fun, safety and design, manufacturing, and operations.</p>
            </div>
        </div>
    )
}
