import React, { useEffect, useState } from "react";
import { Typography, Table, Tabs, Accordion } from "components";
import { globe } from "assets";
import { columns, rows } from "../../data";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBets, setBetSlipToggle } from "../../redux/reducers/dashboard";

const SportsLandingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { bets } = useSelector((state) => state.dashboard);
  const [activeBet, setActiveBet] = useState([]);
  const [animatingLabel, setAnimatingLabel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [animationName, setAnimationName] = useState("");

  const [position, setPosition] = useState({ top: 0, left: 0 });
  // const [animate, setAnimate] = useState(false);
  const generateKeyframes = (startX, startY, targetPosition) => {
    const { top, left } = targetPosition;
  
    // Generate a unique animation name
    const animationName = `moveToTarget-${Date.now()}`;
  console.log('animationName',animationName);
  
    // Create keyframes CSS rule
    const keyframes = `
      @keyframes ${animationName} {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(${left - startX}px, ${top - startY}px);
        }
      }
    `;
  
    // Inject the keyframes into a new <style> element
    const styleElement = document.createElement("style");
    styleElement.innerHTML = keyframes;
    document.head.appendChild(styleElement);
  
    return animationName;
  };

  const handleClick = (_,e) => {
    // const { clientX, clientY } = e;
    dispatch(setBetSlipToggle(animatingLabel?.id ? false : true));
    const rect = e.target?.getBoundingClientRect(); // Get position of clicked label
    setAnimatingLabel({ position: rect });
    const targetDiv = document.getElementById("dra-456-bet-slip-space");
    const targetRect = targetDiv.getBoundingClientRect();

    console.log('targetRect',targetRect);
    

    // Calculate target position relative to the viewport
    let targetPosition = { top: targetRect.top , left: targetRect.left };
    const children = targetDiv?.children;
console.log('children',children);


    if(children && children.length > 0) {
      const childRect = children[children?.length-1].getBoundingClientRect();
      targetPosition = { top: childRect.bottom + 10 , left: childRect.left }
    }
    // Dynamically generate keyframes
    const animationName = generateKeyframes(rect?.left, rect?.top, targetPosition);

    // setStartPosition({ top: animatingLabel?.position?.top, left: animatingLabel?.label?.left });
    setAnimationName(animationName);
    setTimeout(() => {
      // dispatch(setActiveLabel(labelData));
      // dispatch(toggleDrawer(true));
      setAnimatingLabel(null);
    }, 1000);
    // setAnimatingLabel(false); // Reset animation
    // setPosition({ top: clientY, left: clientX }); // Set the starting position
    // setTimeout(() => setAnimatingLabel(true), 10); // Trigger animation after resetting
  };

  const tabs = [
    { id: "in-play", label: "In-play" },
    { id: "upcoming", label: "Upcoming" },
  ];

  const betData = {
    india: {
      match: "India vs England",
      country: "india",
      value: 1.32,
    },
    england: { match: "India vs England", country: "England", value: 4.32 },
  };

  const handleActiveBets = (data) => {
    setActiveBet((prevActiveBets) => {
      const isBetActive = prevActiveBets.some(
        (bet) => bet.country === data.country
      );

      if (isBetActive) {
        // Remove the bet if already selected
        return prevActiveBets.filter((bet) => bet.country !== data.country);
      } else {
        // Add the bet if not selected
        return [...prevActiveBets, data];
      }
    });
  };
  const getActiveBet = (label) => {
    const active = activeBet?.find((i) => i?.country === label);
    return active?.country;
  };

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setData(rows);
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time
  }, []);

  useEffect(() => {
    // if(!bets?.length){
    //   setActiveBet([])
    // }
    if(activeBet){
    dispatch(setBets(activeBet))
    }

  }, [activeBet, bets])
  
  return (
    <div>
      <Typography color={"white"} variant={"h1"} content={"Cricket"} />
      <div className="mt-5">
        <Tabs tabs={tabs}>
          <div className="mt-4 w-full" id="in-play">
            <Accordion
              title={"International"}
              isMain={true}
              badgeContent={"3"}
              labelIcon={globe}
            >
              <Accordion
                isSeperator={true}
                title={"Test Series Pakistan vs. England"}
              >
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2 relative">
                    <div className="w-1 h-[15px] bg-Amaranth absolute left-[-15px]"></div>
                    <div className="bg-Amaranth px-1 rounded-[5px] h-4 flex items-center">
                      <Typography
                        color={"white"}
                        variant={"size10SemiBold"}
                        content={"LIVE"}
                      />
                    </div>
                    <Typography
                      color={"vintageRibbon"}
                      variant={"size12Medium"}
                      content={"First innings"}
                    />
                  </div>

                  <div className="flex flex-col lg:flex-row justify-between items-center mt-4 gap-12">
                    <div className="flex justify-between items-center w-full">
                      <div
                        className="flex flex-col gap-1 cursor-pointer"
                        onClick={() => navigate("/cricket-details")}
                      >
                        <Typography
                          color={"white"}
                          variant={"size14Semibold"}
                          content={"Pakistan"}
                        />
                        <Typography
                          color={"white"}
                          variant={"size14Semibold"}
                          content={"England"}
                        />
                      </div>
                      <div className="flex flex-col gap-1 text-Amaranth font-semibold">
                        <Typography
                          color={"secondary"}
                          variant={"size14Semibold"}
                          content={"328/4 (86)"}
                        />
                        <Typography
                          color={"vintageRibbon"}
                          variant={"size14Semibold"}
                          content={"Yet to bat"}
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap lg:flex-nowrap gap-4 w-full">
                      <div className="flex items-center gap-4 w-full">
                        <div
                          onClick={(e) =>{ handleActiveBets(betData?.india);  handleClick({ id: 2, text: 'Label 2' }, e);}}
                          className={`text-center cursor-pointer w-full lg:w-[140px] h-[56px] rounded-lg flex flex-col justify-center items-start px-4 py-2.5 ${
                            getActiveBet(betData?.india?.country)
                              ? "bg-[#1475e1]"
                              : "bg-blackRussian"
                          } ${animatingLabel?.id ? 'animate' : ''}`}
                        >
                          <Typography
                            color={getActiveBet(betData?.india?.country) ? 'themeBlack' : "white"}
                            variant={"size12Normal"}
                            content={"India"}
                          />
                          <Typography
                            color={getActiveBet(betData?.india?.country) ? 'white' :"primary"}
                            variant={"size16Bold"}
                            content={"1.32"}
                          />
                        </div>
                        <div
                          onClick={(e) =>{ handleActiveBets(betData?.england); handleClick({ id: 2, text: 'Label 2' }, e);}}
                          className={`text-center  cursor-pointer w-full  lg:w-[140px] h-[56px] rounded-lg flex flex-col justify-center items-start px-4 py-2.5 ${
                            getActiveBet(betData?.england?.country)
                              ? "bg-[#1475e1]"
                              : "bg-blackRussian"
                          }`}
                        >
                          <Typography
                            color={getActiveBet(betData?.england?.country) ? 'themeBlack' : "white"}
                            variant={"size12Normal"}
                            content={"England"}
                          />
                          <Typography
                            color={getActiveBet(betData?.england?.country) ? 'white' :"primary"}
                            variant={"size16Bold"}
                            content={"4.32"}
                          />
                        </div>
                        <div
                          className={`text-center w-full lg:w-[140px] h-[56px] rounded-lg flex flex-col justify-center items-start px-4 py-2.5 bg-blackRussian rounded`}
                        >
                          <Typography
                            color={"white"}
                            variant={"size12Normal"}
                            content={"Draw"}
                          />
                          <Typography
                            color={"vintageRibbon"}
                            variant={"size16Bold"}
                            content={"NA"}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-center w-full lg:w-[60px] h-[36px] lg:h-[56px] bg-blackRussian px-3 rounded-lg">
                        <Typography
                          color={"white"}
                          variant={"size14Semibold"}
                          content={"+28"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion>
            </Accordion>
          </div>
        </Tabs>
      </div>
      {animatingLabel && (
        <div
          className="animated-div"
          style={{
            position: 'absolute',
            top: animatingLabel?.position?.top,
            left: animatingLabel?.position?.left,
            animationName
          }}
          // style={{ top: position.top, left: position.left }}
        >
          {animatingLabel?.text ?? 'test'}
        </div>
      )}
      <div className="mt-[36px] flex flex-col gap-1.5">
        <Typography color={"white"} variant={"h2"} content={"To Bets"} />
        <Table columns={columns} data={data} loading={loading} />
      </div>
    </div>
  );
};

export default SportsLandingPage;
