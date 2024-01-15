import React from "react";

export default function Player(props) {
  return (
    <>
      <div
        className="playControls g-z-index-control-bar m-visible"
        style={{
          zIndex: 1001,
          position: "fixed",
          bottom: "0px",
          visibility: "hidden",
          width: "100%",
          perspectiveOrigin: "80% 100%",
        }}>
        <section
          className="playControls__inner"
          aria-label="miniplayer"
          role="contentinfo"
          style={{
            display: "block",
            transition: "transform 0.2s ease-out 0s",
            height: "48px",
            visibility: "visible",
            borderTop: "1px solid rgb(206, 206, 206)",
            backgroundColor: "rgb(242, 242, 242)",
            transform: "translateY(0px)",
          }}>
          <div
            className="playControls__wrapper l-container l-fullwidth"
            style={{
              margin: "0px auto",
              visibility: "visible",
              position: "relative",
              height: "100%",
              padding: "0px",
              width: "1240px",
              paddingBottom: "0px",
            }}>
            <div
              className="playControls__queue"
              style={{
                position: "absolute",
                width: "480px",
                transitionProperty: "transform, opacity",
                transitionDuration: "0.2s",
                transitionTimingFunction: "cubic-bezier(0.66, -0.41, 1, 1)",
                transform: "translateY(100px)",
                pointerEvents: "none",
                opacity: 0,
                bottom: "54px",
                right: "8px",
                height: "660px",
                maxHeight: "calc(100vh - 120px)",
              }}>
              <div
                className="queue"
                style={{
                  height: "100%",
                  position: "relative",
                  userSelect: "none",
                  boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 4px",
                  backgroundColor: "rgb(255, 255, 255)",
                }}>
                <div
                  className="queue__panel sc-p-2x sc-pb-1x"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    boxSizing: "border-box",
                    height: "64px",
                    padding: "9px 24px",
                    borderBottom: "1px solid rgb(229, 229, 229)",
                  }}>
                  <div
                    className="queue__title sc-font-light sc-type-medium sc-text-h2 sc-px-2x sc-py-1x"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 100,
                      fontSize: "16px",
                      cursor: "pointer",
                      flexGrow: 1,
                      lineHeight: "46px",
                    }}>
                    Next up
                  </div>
                  <button
                    className="queue__clear sc-button sc-button-medium sc-text-h4 sc-px-1.5x sc-py-0.75x sc-mr-1x"
                    type="button"
                    style={{
                      appearance: "button",
                      margin: "0px",
                      padding: "2px 11px 2px 10px",
                      border: "1px solid rgb(229, 229, 229)",
                      borderRadius: "3px",
                      whiteSpace: "nowrap",
                      display: "inline-block",
                      position: "relative",
                      height: "26px",
                      backgroundColor: "rgb(255, 255, 255)",
                      cursor: "pointer",
                      color: "rgb(51, 51, 51)",
                      fontSize: "14px",
                      lineHeight: "20px",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 100,
                      textAlign: "center",
                      verticalAlign: "initial",
                      userSelect: "none",
                      boxSizing: "border-box",
                      marginRight: "16px",
                    }}>
                    Clear
                  </button>
                  <button
                    className="queue__hide sc-button sc-button-nostyle sc-ir"
                    type="button"
                    style={{
                      appearance: "button",
                      margin: "0px",
                      padding: "2px 11px 2px 10px",
                      borderRadius: "3px",
                      whiteSpace: "nowrap",
                      display: "inline-block",
                      position: "relative",
                      cursor: "pointer",
                      textAlign: "center",
                      verticalAlign: "initial",
                      userSelect: "none",
                      boxSizing: "border-box",
                      background: "none",
                      transition: "none 0s ease 0s",
                      paddingTop: "3px",
                      paddingBottom: "3px",
                      border: "0px",
                      font: "0px / 0 a",
                      fontWeight: "normal",
                      fontSize: "0px",
                      lineHeight: 0,
                      fontFamily: "a",
                      textShadow: "none",
                      color: "transparent",
                      backgroundColor: "initial",
                      backgroundPosition: "50% center",
                      height: "46px",
                      backgroundImage:
                        'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPgogICAgPC9nPgo8L3N2Zz4K")',
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "24px 24px",
                    }}>
                    Hide queue
                  </button>
                </div>
                <div
                  className="queue__scrollable g-scrollable g-scrollable-v"
                  style={{
                    display: "inline-block",
                    boxSizing: "border-box",
                    left: "0px",
                    width: "100%",
                    bottom: "0px",
                    position: "absolute",
                    top: "64px",
                    overflow: "hidden",
                  }}>
                  <div
                    className="queue__scrollableInner g-scrollable-inner"
                    style={{
                      overflow: "hidden scroll",
                      height: "0px",
                      overflowX: "hidden",
                      width: "480px",
                      paddingRight: "30px",
                    }}>
                    <div
                      className="queue__itemsHeight sc-px-2x"
                      style={{
                        backgroundImage:
                          'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="), url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAAwCAYAAADJnakOAAAAAXNSR0IArs4c6QAAAkhJREFUeAHt3UGKAkEAA8BRvIr/f6b4AX3BnMQYUnv10OnKQBhQ9jj8ESBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECDwbwKXHwS6/+CMsyNeZx/6jAABAgQIJASuiUOdSYAAAQIE1gUM8PoT4P4ECBAgEBEwwBF2hxIgQIDAusBtHeBz/0e5wbM8v/gECBCYFPAGPFm7SxMgQIBAWsAApxtwPgECBAhMChjgydpdmgABAgTSAgY43YDzCRAgQGBSwABP1u7SBAgQIJAWMMDpBpxPgAABApMCBniydpcmQIAAgbSA3wEfh9/Rpp9C5xMgQGBQwBvwYOmuTIAAAQJ5AQOc70ACAgQIEBgUMMCDpbsyAQIECOQFDHC+AwkIECBAYFDAAA+W7soECBAgkBfwLej+/4aUf4q6E/gWfHd/0hOoFfAGXFud4AQIECDQLGCAm9uTnQABAgRqBQxwbXWCEyBAgECzgAFubk92AgQIEKgVMMC11QlOgAABAs0CBri5PdkJECBAoFbAANdWJzgBAgQINAv4HbD/htT8/MpOgACBWgFvwLXVCU6AAAECzQIGuLk92QkQIECgVsAA11YnOAECBAg0Cxjg5vZkJ0CAAIFaAQNcW53gBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEC3xR4A/y+BSraKNVzAAAAAElFTkSuQmCC")',
                        backgroundRepeat: "no-repeat, repeat-y",
                        backgroundSize: "100% 2016px, auto",
                      }}>
                      <div
                        className="queue__itemsContainer"
                        style={{ position: "relative" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="queue__dragCover"
                  style={{
                    left: "0px",
                    width: "100%",
                    bottom: "0px",
                    position: "absolute",
                    display: "none",
                    zIndex: 1,
                    top: "64px",
                  }}
                />
              </div>
            </div>
            <div
              className="playControls__bg"
              style={{
                position: "absolute",
                left: "0px",
                bottom: "0px",
                right: "0px",
                top: "-1px",
                borderTop: "1px solid rgb(206, 206, 206)",
                backgroundColor: "rgb(242, 242, 242)",
              }}
            />
            <div
              className="playControls__elements"
              style={{
                display: "flex",
                position: "relative",
                height: "100%",
                alignItems: "center",
              }}>
              <button
                className="skipControl sc-ir playControls__control playControls__prev skipControl__previous"
                style={{
                  margin: "0px",
                  appearance: "button",
                  cursor: "pointer",
                  border: "0px",
                  font: "0px / 0 a",
                  fontSize: "0px",
                  lineHeight: 0,
                  fontFamily: "a",
                  textShadow: "none",
                  color: "transparent",
                  backgroundColor: "initial",
                  width: "24px",
                  height: "100%",
                  marginLeft: "12px",
                  padding: "0px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "40% center",
                  backgroundImage:
                    'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTcgNmgydjEySDdWNnptMiA2bDggNlY2bC04IDZ6Ii8+PC9zdmc+Cg==")',
                }}>
                Skip to previous
              </button>
              <button
                className="playControl sc-ir playControls__control playControls__play"
                type="button"
                aria-label="Play current"
                title="Play current"
                style={{
                  margin: "0px",
                  appearance: "button",
                  cursor: "pointer",
                  border: "0px",
                  font: "0px / 0 a",
                  fontSize: "0px",
                  lineHeight: 0,
                  fontFamily: "a",
                  textShadow: "none",
                  color: "transparent",
                  padding: "0px",
                  width: "24px",
                  height: "100%",
                  background:
                    'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTggNXYxNGwxMS03eiIvPjwvc3ZnPgo=") 55% center no-repeat',
                  backgroundColor: "initial",
                  marginLeft: "12px",
                }}>
                Play current
              </button>
              <button
                className="skipControl sc-ir playControls__control playControls__next skipControl__next"
                style={{
                  margin: "0px",
                  appearance: "button",
                  cursor: "pointer",
                  border: "0px",
                  font: "0px / 0 a",
                  fontSize: "0px",
                  lineHeight: 0,
                  fontFamily: "a",
                  textShadow: "none",
                  color: "transparent",
                  backgroundColor: "initial",
                  width: "24px",
                  height: "100%",
                  padding: "0px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "60% center",
                  backgroundImage:
                    'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTcgMThsOC02LTgtNnYxMnptOC0xMnYxMmgyVjZoLTJ6Ii8+PC9zdmc+Cg==")',
                  marginLeft: "12px",
                }}>
                Skip to next
              </button>
              <div
                className="playControls__shuffle playControls__control"
                style={{ width: "24px", height: "100%", marginLeft: "12px" }}>
                <button
                  className="shuffleControl sc-ir"
                  title="Shuffle"
                  style={{
                    appearance: "button",
                    cursor: "pointer",
                    font: "0px / 0 a",
                    fontSize: "0px",
                    lineHeight: 0,
                    fontFamily: "a",
                    textShadow: "none",
                    color: "transparent",
                    border: "0px",
                    padding: "0px",
                    margin: "0px",
                    outline: "none",
                    background: "transparent",
                    position: "relative",
                    height: "100%",
                    width: "100%",
                    backgroundColor: "transparent",
                  }}>
                  Shuffle
                </button>
              </div>
              <div
                className="playControls__repeat playControls__control"
                style={{
                  width: "24px",
                  height: "100%",
                  marginRight: "20px",
                  marginLeft: "12px",
                }}>
                <button
                  className="repeatControl sc-ir m-none"
                  title="Repeat"
                  style={{
                    appearance: "button",
                    border: "0px",
                    font: "0px / 0 a",
                    fontSize: "0px",
                    lineHeight: 0,
                    fontFamily: "a",
                    textShadow: "none",
                    color: "transparent",
                    backgroundColor: "initial",
                    margin: "0px",
                    padding: "0px",
                    position: "relative",
                    height: "100%",
                    width: "100%",
                    backgroundPosition: "50% center",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                    backgroundImage:
                      'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTEyIDhIOWE0IDQgMCAxIDAgMCA4aDZhNCA0IDAgMCAwIDIuMTA0LTcuNDAzbDEuNzctMS4xOC4wMi4wMThBNiA2IDAgMCAxIDE1IDE4SDlBNiA2IDAgMSAxIDkgNmgzVjRsNCAzLTQgM1Y4eiIvPjwvc3ZnPgo=")',
                  }}>
                  Repeat track
                </button>
              </div>
              <div
                className="playControls__timeline sc-ml-3x"
                style={{ flexGrow: 1, marginRight: "12px" }}>
                <div
                  className="playbackTimeline is-scrubbable has-sound"
                  style={{
                    display: "flex",
                    fontSize: "12px",
                    visibility: "visible",
                  }}>
                  <div
                    className="playbackTimeline__timePassed sc-text-primary sc-text-h5"
                    style={{
                      lineHeight: "46px",
                      textAlign: "right",
                      color: "rgb(255, 85, 0)",
                      width: "50px",
                      height: "46px",
                    }}>
                    <span
                      className="sc-visuallyhidden"
                      style={{
                        border: "0px",
                        margin: "-1px",
                        overflow: "hidden",
                        padding: "0px",
                        clip: "rect(0px, 0px, 0px, 0px)",
                        height: "1px",
                        position: "absolute",
                        width: "1px",
                      }}>
                      Current time: 0 seconds
                    </span>
                    <span aria-hidden="true">0:00</span>
                  </div>
                  <div
                    className="playbackTimeline__progressWrapper sc-mx-1x"
                    aria-valuemax="326"
                    aria-valuenow="0"
                    aria-valuetext="0 seconds"
                    role="progressbar"
                    style={{
                      lineHeight: "46px",
                      position: "relative",
                      flexGrow: 1,
                      padding: "10px 0px",
                      margin: "13px 10px 0px",
                    }}>
                    <div
                      className="playbackTimeline__progressBackground"
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "1px",
                        backgroundColor: "rgb(204, 204, 204)",
                      }}
                    />
                    <div
                      className="playbackTimeline__progressBar"
                      style={{
                        position: "absolute",
                        height: "1px",
                        backgroundColor: "rgb(255, 85, 0)",
                        minWidth: "0px",
                        width: "0%",
                      }}
                    />
                    <div
                      className="playbackTimeline__progressHandle sc-ir"
                      style={{
                        font: "0px / 0 a",
                        textShadow: "none",
                        color: "transparent",
                        position: "absolute",
                        borderRadius: "100%",
                        transition: "opacity 0.15s ease 0s",
                        height: "8px",
                        width: "8px",
                        boxSizing: "border-box",
                        marginLeft: "-4px",
                        opacity: 0,
                        border: "1px solid rgb(255, 85, 0)",
                        backgroundColor: "rgb(255, 85, 0)",
                        marginTop: "-4px",
                        left: "0%",
                      }}
                    />
                  </div>
                  <div
                    className="playbackTimeline__duration sc-text-primary sc-text-h5"
                    style={{
                      lineHeight: "46px",
                      textAlign: "left",
                      cursor: "pointer",
                      color: "rgb(51, 51, 51)",
                      width: "50px",
                      height: "46px",
                    }}>
                    <span
                      className="sc-visuallyhidden"
                      style={{
                        border: "0px",
                        margin: "-1px",
                        overflow: "hidden",
                        padding: "0px",
                        clip: "rect(0px, 0px, 0px, 0px)",
                        height: "1px",
                        position: "absolute",
                        width: "1px",
                      }}>
                      Duration: 5 minutes 26 seconds
                    </span>
                    <span aria-hidden="true">5:26</span>
                  </div>
                </div>
              </div>
              <div
                className="playControls__castControl"
                style={{
                  display: "none",
                  alignSelf: "center",
                  marginRight: "8px",
                  width: "32px",
                  height: "24px",
                }}>
                <google-cast-launcher
                  id="castbutton"
                  style={{
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    lineHeight: 0,
                    cursor: "pointer",
                    padding: "0px 4px",
                    display: "none",
                  }}
                />
              </div>
              <div
                className="playControls__volume"
                style={{ marginRight: "12px" }}>
                <div className="volume" style={{ position: "relative" }}>
                  <div
                    className="sc-visuallyhidden"
                    style={{
                      border: "0px",
                      margin: "-1px",
                      overflow: "hidden",
                      padding: "0px",
                      clip: "rect(0px, 0px, 0px, 0px)",
                      height: "1px",
                      position: "absolute",
                      width: "1px",
                    }}>
                    Volume
                  </div>
                  <div
                    className="volume__iconWrapper"
                    style={{ position: "relative" }}>
                    <button
                      className="volume__button volume__speakerIcon sc-ir"
                      type="button"
                      style={{
                        margin: "0px",
                        appearance: "button",
                        cursor: "pointer",
                        font: "0px / 0 a",
                        fontSize: "0px",
                        lineHeight: 0,
                        fontFamily: "a",
                        textShadow: "none",
                        color: "transparent",
                        border: "0px",
                        background:
                          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTE4IDEwLjU4NGwtMi4yOTMtMi4yOTEtMS40MTQgMS40MTQgMi4yOTMgMi4yOTEtMi4yOTEgMi4yOTEgMS40MTQgMS40MTUgMi4yOTItMi4yOTIgMi4yOTQgMi4yOTIgMS40MTQtMS40MTUtMi4yOTMtMi4yOTEgMi4yOTEtMi4yOS0xLjQxNC0xLjQxNS0yLjI5MiAyLjI5MXpNNCA5aDQuMDAyTDEyIDV2MTRjLTIuNDQ2LTIuNjY3LTMuNzc4LTQtMy45OTgtNEg0Vjl6Ii8+PC9zdmc+Cg==") 0px center no-repeat',
                        outline: "0px",
                        display: "block",
                        backgroundColor: "initial",
                        width: "24px",
                        height: "46px",
                        backgroundImage:
                          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTQgOWg0LjAwMkwxMiA1djE0Yy0yLjQ0Ni0yLjY2Ny0zLjc3OC00LTMuOTk4LTRINFY5em0xMCA0YTEgMSAwIDAgMCAwLTJWOWEzIDMgMCAwIDEgMCA2di0yem0wIDRhNSA1IDAgMCAwIDAtMTBWNWE3IDcgMCAwIDEgMCAxNHYtMnoiLz48L3N2Zz4K")',
                      }}>
                      {"Toggle mute"}
                    </button>
                  </div>
                  <div
                    id="volume__sliderDescription"
                    className="sc-hidden"
                    style={{ visibility: "hidden", display: "none" }}>
                    Use shift and the arrow up and down keys to change the
                    volume.
                  </div>
                  <div
                    className="volume__sliderWrapper"
                    aria-label="Volume"
                    aria-valuemax="1"
                    aria-valuemin="0"
                    aria-valuenow="1"
                    role="slider"
                    style={{
                      transition: "height 0.1s ease 0s",
                      overflow: "hidden",
                      outline: "0px",
                      position: "absolute",
                      zIndex: 1,
                      height: "0px",
                      transform: "translateZ(0px)",
                      cursor: "pointer",
                      border: "1px solid transparent",
                      left: "-5px",
                      width: "30px",
                      bottom: "40px",
                      backgroundColor: "rgb(242, 242, 242)",
                    }}>
                    <div
                      className="volume__sliderBackground"
                      style={{
                        position: "absolute",
                        display: "block",
                        bottom: "13px",
                        left: "0px",
                        transition: "opacity 0.1s linear 0.1s",
                        opacity: 0,
                        border: "none",
                        borderRadius: "0px",
                        outline: "0px",
                        backgroundColor: "rgb(204, 204, 204)",
                        height: "92px",
                        width: "2px",
                        boxShadow: "none",
                        marginLeft: "14px",
                      }}
                    />
                    <div
                      className="volume__sliderProgress"
                      style={{
                        bottom: "13px",
                        position: "absolute",
                        transition: "opacity 0.1s linear 0.1s",
                        opacity: 0,
                        background: "rgb(255, 85, 0)",
                        width: "2px",
                        marginLeft: "14px",
                        height: "92px",
                      }}
                    />
                    <div
                      className="volume__sliderHandle"
                      style={{
                        borderRadius: "100%",
                        border: "1.5px solid var(--primary-color)",
                        position: "absolute",
                        display: "block",
                        transition: "opacity 0.1s linear 0.1s",
                        opacity: 0,
                        width: "8px",
                        height: "8px",
                        backgroundColor: "rgb(255, 85, 0)",
                        marginLeft: "11px",
                        top: "10px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="playControls__soundBadge sc-ml-3x"
                style={{
                  boxSizing: "border-box",
                  height: "48px",
                  zIndex: 1,
                  padding: "0px 8px",
                  width: "360px",
                }}>
                <div
                  className="playbackSoundBadge paused"
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  {" "}
                  <a
                    className="playbackSoundBadge__avatar sc-media-image sc-mr-2x"
                    href="https://soundcloud.com/teemid/love-at-first-sight-teemid"
                    tabIndex="-1"
                    style={{
                      textDecoration: "none",
                      color: "rgb(51, 136, 221)",
                      cssFloat: "left",
                      margin: "0px 10px 0px 0px",
                      marginRight: "10px",
                    }}>
                    <div
                      className="image image__lightOutline sc-artwork sc-artwork-placeholder-4 m-loaded"
                      style={{
                        backgroundPosition: "50% 50%",
                        backgroundSize: "cover",
                        textAlign: "center",
                        position: "relative",
                        backgroundRepeat: "no-repeat",
                        backgroundImage:
                          "linear-gradient(135deg, rgb(112, 146, 156), rgb(230, 132, 110))",
                        display: "block",
                        height: "30px",
                        width: "30px",
                      }}>
                      <span
                        className="sc-artwork sc-artwork-4x sc-artwork-placeholder-4 image__full g-opacity-transition"
                        aria-label="Love At First Sight (TEEMID & Julia Cover) - Kylie Minogue"
                        style={{
                          backgroundPosition: "50% 50%",
                          backgroundSize: "cover",
                          transition: "opacity 0.2s linear 0s",
                          textAlign: "center",
                          position: "relative",
                          backgroundRepeat: "no-repeat",
                          display: "block",
                          boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset",
                          backgroundImage:
                            'url("https://i1.sndcdn.com/artworks-RxsBasSmS4g5fu2R-eb88Xg-t120x120.jpg")',
                          width: "30px",
                          height: "30px",
                          opacity: 1,
                        }}
                      />
                    </div>
                  </a>
                  <div
                    className="playbackSoundBadge__titleContextContainer sc-mr-3x"
                    style={{
                      width: "0px",
                      flexGrow: 1,
                      lineHeight: "1.5em",
                    }}>
                    <a
                      className="playbackSoundBadge__lightLink sc-link-light sc-link-secondary sc-truncate sc-text-h5"
                      href="https://soundcloud.com/teemid"
                      title="TEEMID"
                      style={{
                        textDecoration: "none",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        wordBreak: "normal",
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        color: "rgb(153, 153, 153)",
                        height: "17px",
                        fontSize: "12px",
                        lineHeight: "16px",
                      }}>
                      TEEMID
                    </a>
                    <div
                      className="playbackSoundBadge__title"
                      style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        height: "17px",
                      }}>
                      <a
                        className="playbackSoundBadge__titleLink sc-truncate sc-text-h5 sc-link-primary"
                        href="https://soundcloud.com/teemid/love-at-first-sight-teemid"
                        title="Love At First Sight (TEEMID & Julia Cover) - Kylie Minogue"
                        style={{
                          textDecoration: "none",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          wordBreak: "normal",
                          fontSize: "12px",
                          color: "rgb(102, 102, 102)",
                        }}>
                        <span
                          className="sc-visuallyhidden"
                          style={{
                            border: "0px",
                            margin: "-1px",
                            overflow: "hidden",
                            padding: "0px",
                            clip: "rect(0px, 0px, 0px, 0px)",
                            height: "1px",
                            position: "absolute",
                            width: "1px",
                          }}>
                          Current track: Love At First Sight (TEEMID & Julia
                          Cover) - Kylie Minogue
                        </span>
                        <span aria-hidden="true">
                          Love At First Sight (TEEMID & Julia Cover) - Kylie
                          Minogue
                        </span>
                      </a>
                    </div>
                  </div>
                  <div
                    className="playbackSoundBadge__actions"
                    style={{ display: "flex", marginLeft: "7px" }}>
                    <button
                      className="sc-button-like playbackSoundBadge__like sc-button-secondary sc-mr-1x sc-button sc-button-small sc-button-icon sc-button-responsive"
                      type="button"
                      aria-describedby="tooltip-276"
                      aria-label="Like"
                      tabIndex="0"
                      title="Like"
                      style={{
                        appearance: "button",
                        margin: "0px",
                        borderRadius: "3px",
                        whiteSpace: "nowrap",
                        display: "inline-block",
                        position: "relative",
                        cursor: "pointer",
                        color: "rgb(51, 51, 51)",
                        fontWeight: 100,
                        verticalAlign: "initial",
                        userSelect: "none",
                        boxSizing: "border-box",
                        fontSize: "11px",
                        height: "22px",
                        lineHeight: "16px",
                        fontFamily: "Inter, sans-serif",
                        textAlign: "left",
                        textIndent: "-100000px",
                        minWidth: "25px",
                        padding: "12px",
                        border: "0px",
                        background: "transparent",
                        backgroundColor: "transparent",
                      }}>
                      Like
                    </button>
                    <button
                      className="sc-button-follow playbackSoundBadge__follow sc-mr-1x sc-button sc-button-small sc-button-icon sc-button-responsive sc-button-secondary m-boldIcon"
                      type="button"
                      aria-label="Follow"
                      tabIndex="0"
                      title="Follow"
                      style={{
                        appearance: "button",
                        margin: "0px",
                        borderRadius: "3px",
                        whiteSpace: "nowrap",
                        display: "inline-block",
                        position: "relative",
                        cursor: "pointer",
                        color: "rgb(51, 51, 51)",
                        fontWeight: 100,
                        verticalAlign: "initial",
                        userSelect: "none",
                        boxSizing: "border-box",
                        fontSize: "11px",
                        height: "22px",
                        lineHeight: "16px",
                        fontFamily: "Inter, sans-serif",
                        textAlign: "left",
                        textIndent: "-100000px",
                        minWidth: "25px",
                        padding: "12px",
                        border: "0px",
                        background: "transparent",
                        backgroundColor: "transparent",
                      }}>
                      Follow
                    </button>
                    <a
                      className="playbackSoundBadge__showQueue"
                      title="Next up"
                      style={{
                        textDecoration: "none",
                        color: "rgb(51, 136, 221)",
                        overflow: "hidden",
                        width: "24px",
                        height: "24px",
                        position: "relative",
                        display: "inline-block",
                        cursor: "pointer",
                      }}>
                      <svg
                        height="24"
                        width="24"
                        style={{ display: "block", overflow: "hidden" }}>
                        <path
                          className="playbackSoundBadge__queueIcon"
                          d="M6 11h12v2H6zM6 7h8v2H6zM6 15h12v2H6zM16 3v6l4-3z"
                          fill="#333"
                          style={{ fill: "rgb(51, 51, 51)" }}
                        />
                      </svg>
                      <div
                        className="playbackSoundBadge__queueCircle"
                        style={{
                          inset: "0px",
                          background: "rgb(0, 0, 0)",
                          borderRadius: "50%",
                          position: "absolute",
                          opacity: 0,
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="playControls__panel"
              style={{
                position: "absolute",
                right: "0px",
                top: "0px",
                zIndex: 0,
              }}>
              <div
                className="playControlsPanel sc-font-body sc-background-darkgrey"
                style={{
                  transition: "opacity 0.2s ease 0s",
                  cssFloat: "right",
                  boxSizing: "border-box",
                  transform: "translateY(-100%)",
                  zIndex: 350,
                  marginRight: "var(--spacing-2x)",
                  padding: "0px 30px",
                  background: "rgb(51, 51, 51)",
                  width: "360px",
                  fontSize: "12px",
                  backgroundColor: "rgb(51, 51, 51)",
                  display: "none",
                }}
              />
            </div>
          </div>
        </section>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html {
            font-family: sans-serif;
            text-size-adjust: 100%;
            }
            
            body {
            margin: 0px;
            padding: 0px;
            font: 12px / 1.4 Inter, sans-serif;
            color: rgb(51, 51, 51);
            overflow-y: scroll;
            padding-bottom: 75px;
            background: rgb(255, 255, 255);
            }
            `,
        }}
      />
    </>
  );
}
