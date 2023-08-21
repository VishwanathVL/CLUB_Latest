import { Box, Card, CardActionArea, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import TTBanner from "../images/TTBanner.jpg";
import TT_01 from "../images/TT_01.jpg";
import TT_03 from "../images/TT_03.jpg";
import TennisCourt1 from "../images/TennisCourt1.jpg";
import billard from "../images/billard.jpg";
import billards from "../images/billards.jpg";
import carrom from "../images/carrom.jpg";
import chessBanner from "../images/chessBanner.jpg";
import swimmingPool from "../images/swimming-pool.jpg";
import tennisCourt from "../images/tennis-court.jpg";
import tennisCourtRMG from "../images/tennisCourt.jpg";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/skyblue";

// or only core styles
import "@splidejs/react-splide/css/core";
function Facility() {
  return (
    <>
      <Box className="facility">
        <h1>Outdoor Facilities</h1>

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
                <img src={tennisCourt} alt="Image 1" />
              </SplideSlide>
              <SplideSlide>
                <img src={TennisCourt1} alt="Image 3" />
              </SplideSlide>
              <SplideSlide>
                <img src={tennisCourtRMG} alt="Image 3" />
              </SplideSlide>
            </Splide>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tennis Court
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The tennis court, a focal point of sporting excitement, is a
                meticulously designed battleground where players showcase their
                skills and athleticism. With standardized dimensions regulated
                by the International Tennis Federation, it offers a challenging
                space measuring 78 feet in length and 27 feet (or 36 feet for
                doubles) in width. The surface type plays a crucial role in the
                game's dynamics, ranging from the fast-paced hard courts to the
                slower and strategic clay courts, and the lightning-fast grass
                courts. Regular maintenance of the court ensures optimal playing
                conditions, adding to the overall allure of this iconic sporting
                venue.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Swimming Pool
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                  Cool off and relax in our outdoor swimming pool, perfect for
                  both recreational swimming and training.
                </p>
                <b>Work in Progress, Expected functional in 2025</b>
              </Typography>
            </CardContent>
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
                <img src={swimmingPool} alt="Image 1" />
              </SplideSlide>
            </Splide>
          </CardActionArea>
        </Card>

        <h1>Indoor Facilities</h1>
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
                <img src={TT_01} alt="Image 1" />
              </SplideSlide>
              <SplideSlide>
                <img src={TT_03} alt="Image 2" />
              </SplideSlide>
              <SplideSlide>
                <img src={TTBanner} alt="Image 3" />
              </SplideSlide>
            </Splide>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Table Tennis
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                  Our indoor Table Tennis courts are perfect for TT enthusiasts
                  of all skill levels.
                </p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Billiards
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                  Our indoor Billiards are perfect for Billiards enthusiasts of
                  all skill levels.
                </p>
              </Typography>
            </CardContent>
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
                <img src={billards} alt="Image 1" />
              </SplideSlide>
              <SplideSlide>
                <img src={billard} alt="Image 2" />
              </SplideSlide>
              <SplideSlide>
                <img src={billards} alt="Image 3" />
              </SplideSlide>
            </Splide>
          </CardActionArea>
        </Card>

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
                <img src={chessBanner} alt="Image 1" />
              </SplideSlide>
              <SplideSlide>
                <img src={chessBanner} alt="Image 2" />
              </SplideSlide>
              <SplideSlide>
                <img src={chessBanner} alt="Image 3" />
              </SplideSlide>
            </Splide>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Chess
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                  Our indoor chess are perfect for chess enthusiasts of all
                  skill levels.
                </p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Carrom
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                  Our indoor Billiards are perfect for Carrom enthusiasts of all
                  skill levels.
                </p>
              </Typography>
            </CardContent>
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
                <img src={carrom} alt="Image 1" />
              </SplideSlide>
              <SplideSlide>
                <img src={carrom} alt="Image 2" />
              </SplideSlide>
              <SplideSlide>
                <img src={carrom} alt="Image 3" />
              </SplideSlide>
            </Splide>
          </CardActionArea>
        </Card>
        <Card>
          <CardContent>
            <h3>Gym</h3>
            <p>
              Our indoor Gym are perfect for Gym enthusiasts of all skill
              levels.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3>Badminton</h3>
            <p>
              Our indoor badminton are perfect for badminton enthusiasts of all
              skill levels.
            </p>
            <b>Work in Progress, Expected functional in 2025</b>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default Facility;
