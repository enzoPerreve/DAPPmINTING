import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";

const content1 = (
  <Fragment>
    <Typography variant="h6" paragraph>
    What is the interest to get AlpsHunks 1st generation ?
    </Typography>
    <Typography paragraph>
      All 1st generation AlpsHunks owners will share 30% of the total amount of the 2nd generation mint distributed by sales level of the second generation.

      This will make 2.61 $AVAX / AlpsHunks because there will be 9 000 Alpshunks V2 of which 300 will be reserved for the Airdrop at a price of 1 $AVAX.
    </Typography>
    <Typography paragraph>
    In addition, each address that owns 1st generation AlpsHunks with a rarity higher than Rare will get an Airdrop of 2nd generation AlpsHunks.

    Once both generations are sold out the marketplace will be unveiled and each sale will earn a 4% fee distributed to the holders of both generations
    </Typography>
    <Typography variant="h6" paragraph>
      How do I know how rare my AlpsHunks 1st Generation is ?
    </Typography>
    <Typography paragraph>
    The rarity of AlpsHunks is divided in 5 categories for the first generation :
    </Typography>
    <Typography paragraph>
      <Typography paragraph>
      Legendary
    </Typography>
    <Typography paragraph>
    Mythic
    </Typography>
      <Typography paragraph>
    Rare
    </Typography>
    <Typography paragraph>
    Uncommon
    </Typography>
    <Typography paragraph>
    Common
    </Typography>
      To recognize their rarity you only have to look at the position.

      Also, AlpsHunks with different backgrounds will have some surprises! Stay tuned!
    </Typography>
  </Fragment>
);



const content2 = (
  <Fragment>
    <Typography variant="h6" paragraph>  
      What will the second generation be based on ?
    </Typography>
    <Typography paragraph>

    The second generation of 9000 AlpsHunks will be composed of 150 different accessories but also different backgrounds and positions.

    </Typography>
    <Typography variant="h6" paragraph>
    When will the Airdrop be distributed ?
    </Typography>
    <Typography paragraph>
    It will be distributed to owners of 1st Generation Alpshunks that have a rarity higher than Rare.

    The entire Airdrop will be distributed once the 1st generation will be fully minted
    </Typography>
  </Fragment>
);

const content3 = (
  <Fragment>
    <Typography variant="h6" paragraph>  
    What is the date of the marketplace ?
    </Typography>
    <Typography paragraph>
    The marketplace will be launched once the 2 generations are sold out.
    </Typography>
    <Typography variant="h6" paragraph>
    Where will the marketplace be? 
    </Typography>
    <Typography paragraph>
    The marketplace will be here you can trade, sell, or buy your Alpshunks of all generations. 
    </Typography>
    <Typography variant="h6" paragraph>
    How will holders be rewarded? 
    </Typography>
    <Typography paragraph>
    Via a simple fee distribution system ! All AlpsHunks owners will receive a 4% fee on each transaction
    </Typography>
  </Fragment>
);

const content4= (
  <Fragment>
    <Typography variant="h6" paragraph>  
    How can I find out more about the rarity of my Alpshunks ? 
    </Typography>
    <Typography paragraph>
    For Alpshunks V2 the rarity will be done via a classic system of point a computer on discord will give you the necessary information. 
    For the V1 the rarity is defined like this:
    </Typography>
    <Typography variant="h6" paragraph>
    Do you have a Legendary AlpsHunks ?

    5%
    </Typography>
    <Typography paragraph>
    You are selected to have an Airdrop of the 2nd generation !

    You will recover the fees on each minting of the 2nd generation, 30% (2.22 $AVAX) to be shared between the holders.

    You will share between the holders the 4% of fees when people put their AlpsHunks for sale on the marketplace.
    </Typography>
    <Typography variant="h6" paragraph>
    Do you have a Rare AlpsHunks ?

20%
    </Typography>
    <Typography paragraph>
    Do you have a Rare AlpsHunks ?

20%

You are selected to have an Airdrop of the 2nd generation !

You will recover the fees on each minting of the 2nd generation, 30% (2.22 $AVAX) to be shared between the holders.

You will share between the holders the 4% of fees when people put their AlpsHunks for sale on the marketplace.
    </Typography>
    <Typography variant="h6" paragraph>
    Do you have a Uncommon AlpsHunks ?

30%
    </Typography>
    <Typography paragraph>


You will recover the fees on each minting of the 2nd generation, 30% (2.22 $AVAX) to be shared between the holders.

You will share between the holders the 4% of fees when people put their AlpsHunks for sale on the marketplace.
    </Typography>
    <Typography variant="h6" paragraph>
    Do you have a Common AlpsHunks ?

35%
    </Typography>
    <Typography paragraph>


You will recover the fees on each minting of the 2nd generation, 30% (2.22 $AVAX) to be shared between the holders.

You will share between the holders the 4% of fees when people put their AlpsHunks for sale on the marketplace.
    </Typography>
  </Fragment>
);

const content5 = (
  <Fragment>
    <Typography variant="h6" paragraph>  
    How can I find out more about the roadmap ?
    </Typography>
    <Typography paragraph>
    You can find more information about the roadmap at the bottom of our homepage and soon more about the roadmap of our V2 
    </Typography>
  </Fragment>
);

const content6 = (
  <Fragment>
    <Typography variant="h6" paragraph>  
    An Alpshunks = 0,5 $AVAX
    </Typography>
    <Typography paragraph>
    We have decided to lower the price of an AlpsHunks for 72 hours from tonight until Wednesday! To expand our community! But don't worry the first holders will be rewarded during the second generation !
    </Typography>
  </Fragment>
);


const posts = [
  {
    title: "AlpsHunks 1st generation",
    id: 1,
    date: 1576391600,
    src: `${process.env.PUBLIC_URL}/gif.gif`,
    snippet:
   " What is the interest to get AlpsHunks 1st generation ?",
    content: content1,
  },
  {
    title: "AlpsHunksV2",
    id: 2,
    date: 1576391600,
    src: `${process.env.PUBLIC_URL}/V2.png`,
    snippet:
    "More information about V2",
    content: content2,
  },
  {
    title: "Marketplace ",
    id: 3,
    date: 1577391600,
    src: `${process.env.PUBLIC_URL}/Marketplace.png`,
    snippet:
      "More information about Marketplace.",
    content: content3,
  },
  {
    title: "Rarity",
    id: 4,
    date: 1572281600,
    src: `${process.env.PUBLIC_URL}/gif.gif`,
    snippet:
      "How can I find out more about the rarity of my Alpshunks? ",
    content: content4,
  },
  {
    title: "RoadMap",
    id: 5,
    date: 1573281600,
    src: `${process.env.PUBLIC_URL}/Roadmap.png`,
    snippet:
      "How can I find out more about the roadmap ? ",
    content: content5,
  },
  {
    title: "AlpsHunks Sold ",
    id: 6,
    date: 1575281600,
    src: `${process.env.PUBLIC_URL}/Sold.png`,
    snippet:
      "To learn more about our sale period ! ",
    content: content6,
  },
];

export default posts;