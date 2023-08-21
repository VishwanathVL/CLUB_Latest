import { Card, CardActionArea, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import clubHouse from "../images/clubHouse.jpg";
import clubHouse01 from "../images/clubHouse01.jpg";
import clubHouseFrontView from "../images/clubHouseFrontView.jpg";
function Legacy() {
  return (
    <>
      <section className="legacy">
        <Card>
          <CardActionArea>
            <Splide
              options={{
                rewind: true,
                width: "50%",
                height: 500,
                gap: "1rem",
                autoplay: true, // Enable autoplay
                interval: 3000, // Set the time delay between each slide transition (in milliseconds)
              }}
              aria-label="My Favorite Images"
            >
              <SplideSlide>
                <img src={clubHouse} alt="Image 1" />
              </SplideSlide>
              <SplideSlide>
                <img src={clubHouseFrontView} alt="Image 2" />
              </SplideSlide>
              <SplideSlide>
                <img src={clubHouse01} alt="Image 3" />
              </SplideSlide>
            </Splide>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Malojirao Club
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                  Malojirao Club is one of the oldest clubs in Mudhol. The
                  favorite part of any game is the "Opportunity to Play." Be a
                  part of RMGSC and grab the opportunities that keep unfolding
                  in front of you.
                </p>
                <p>
                  The esteemed "Raja Malojirao Sports Club" of Mudhol was
                  started in the year 1927, under the visionary leadership of
                  the then King of Princely State of Mudhol, H. H. Shri Raja
                  Malojirao Ghorpade Saheb.
                </p>
                <p>
                  With the unflinching determination to provide the best
                  possible sporting facilities, to people and coming generations
                  of the Mudhol, several noble families joined the cause and
                  have been taking active participation till date for the
                  improvement of facilities at the club.
                </p>
                <p>
                  Initially, the sports club served for Tennis aspirants, but
                  recently under the dynamic collective leadership and a group
                  young, restless members, the Club expanded its facilities and
                  added up one more tennis court, Billiards, Table Tennis,
                  Carrom, Chess, a separate room for Ladies Recreational
                  Activity, and very soon a fully equipped Gym.
                </p>
                <p>
                  The youngsters associated with this Club, know no rest, which
                  they have proven by continuously organising events spanning
                  from Regional Chess Tournament, Table Tennis Tournament,
                  Inter-Club Tennis Tournament, Dandiya Night, Family
                  Get-togethers, and a lot more to mention.
                </p>
                <p>
                  And in the coming days, the dynamic collective leadership of
                  the club has come up with a project to build a Badminton
                  Court, a Swimming Pool, well equipped Meeting Hall,
                  Mini-Auditorium and Suite Rooms.
                </p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <h1>Upcoming Events</h1>
        <Card>
          <CardContent>
            <ul>
              <li>Event 1 - Date and Time</li>
              <li>Event 2 - Date and Time</li>
              <li>Event 3 - Date and Time</li>
            </ul>
          </CardContent>
        </Card>

        <h1>Featured Athlete</h1>
        <Card>
          <CardContent>
            <div className="athlete-profile">
              <img src="athlete.jpg" alt="Athlete Name" />
              <p>Athlete Name</p>
              <p>Position: Forward</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}

export default Legacy;
