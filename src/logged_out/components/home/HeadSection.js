import React, { Fragment, Suspense, lazy,useEffect,useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../../redux/blockchain/blockchainActions";
import { fetchData } from "../../../redux/data/dataActions";
import gif2 from "../../../images/gif.gif";
import classNames from "classnames";

import {
  Grid,
  Typography,
  Card,
  Button,
  Hidden,
  Box,
  withStyles,
  withWidth,
  isWidthUp,
} from "@material-ui/core";
import WaveBorder from "../../../shared/components/WaveBorder";
import ZoomImage from "../../../shared/components/ZoomImage";

const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
});

function HeadSection(props) {
  const { classes, theme, width } = props;
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState("Maybe it's your lucky day.");
  const [claimingNft, setClaimingNft] = useState(false);

  const claimNFTs = (_amount) => {
    if (_amount <= 0) {
      return;
    }
    setFeedback("Minting your AlpsHunks...");
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(_amount)
      .send({
        gasLimit: "285000",
        to: "0xf1De1A5c5a0091F54b8d6c87CDab1503c10c259B",
        from: blockchain.account,
        value: blockchain.web3.utils.toWei(
          (1).toString(),
          "ether"
        ),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          "WOW, you now own a AlpsHunks. go visit NFTTRADE to view it."
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box justifyContent="space-between" className="row">
                  <Grid item xs={12} md={5}>
                  {Number(data.totalSupply) === 1000 ? (
                    <>
                    <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    height="100%"
                    >
                      <Box mb={4}>
                        <Typography
                          variant={isWidthUp("lg", width) ? "h3" : "h4"}
                        >
                          Sale is end 
                        </Typography>
                        </Box> 
                    </Box>
                    </>
                    ) : ( 
                      <>
                    {blockchain.account === "" ||
                      blockchain.smartContract === null ? (
                        
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      height="100%"
                    >
                      <Box mb={4}>
                        <Typography
                          variant={isWidthUp("lg", width) ? "h3" : "h4"}
                        >
                          1 $AVAX for an AlpsHunks 
                        </Typography>
                      </Box>
                      <Box>
                      <Typography
                          variant={isWidthUp("lg", width) ? "h3" : "h4"}
                        >
                          124/1000
                        </Typography>
                      </Box>
                    
                      <div>
                        <Box mb={2}>
                          <Typography
                            variant={isWidthUp("lg", width) ? "h6" : "body1"}
                            color="textSecondary"
                          >
                            We chose avalanche for its speed and low cost. Connect to mint an Alpshunks ! 
                          </Typography>
                        </Box>
                        <Button
                          variant="contained"
                          color="secondary"
                          fullWidth
                          className={classes.extraLargeButton}
                          classes={{ label: classes.extraLargeButtonLabel }}
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(connect());
                            getData();
                          }}
                        >
                          Connect
                        </Button>
                        
                      </div>
                      </Box>
                      ) : ( 
                        <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        height="100%"
                      >
                      <Box mb={4}>
                        <Typography
                          variant={isWidthUp("lg", width) ? "h3" : "h4"}
                        >
                          1 $AVAX for an AlpsHunks 
                        </Typography>
                      </Box>
                      <Box>
                      <Typography
                          variant={isWidthUp("lg", width) ? "h3" : "h4"}
                        >
                          124/1000
                        </Typography>
                      </Box>
                      
                        <div>
                          <Box mb={2}>
                            <Typography
                              variant={isWidthUp("lg", width) ? "h6" : "body1"}
                              color="textSecondary"
                            >
                             {claimingNft ? "BUSY" : ""}
                            </Typography>
                          </Box>
                          <Button
                            variant="contained"
                            color="secondary"
                            fullWidth
                            className={classes.extraLargeButton}
                            classes={{ label: classes.extraLargeButtonLabel }}
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              claimNFTs(1);
                              getData();
                            }}
                          >
                            Get an AlpsHunks
                          </Button>
                        </div>
                        </Box>
                      ) }
                      </>
                      )}
                  </Grid>
                  <Hidden smDown>
                    <Grid item md={6}>
                      <ZoomImage
                        src={gif2}
                        className={classes.image}
                        alt="AlpsHunksGif"
                      />
                    </Grid>
                  </Hidden>
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>
      <WaveBorder
        upperColor={theme.palette.secondary.main}
        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeadSection)
);
