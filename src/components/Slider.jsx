import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Each from "./Each";
import Track from "./Track/Track";

const InittialState = {
  data: [],
  btn_nextSlide: <></>,
  btn_preSlide: <></>,
  colum: 1,
  gap: 0,
};

const Showcase = styled.div``;
const Item = styled.div``;
const Wrapper = styled.div`
  & {
    position: absolute;
    top: 0;
    animation: scroll 10s linear 1s infinite;
  }
  @keyframes scroll {
    100% {
      top: ${(props) => -(props.length * props.width)}px;
    }
  }
`;
const SliderContext = createContext();
function Slider(props) {
  console.log("re-render");
  const sliderRef = useRef(null);
  const [data, setData] = useState(props.data);

  const [size, setSize] = useState({ width: 0, height: 0 });
  const [itemAttr, setItemAttr] = useState({});

  const updateSize = (e) => {
    console.log("update size");
    const { width, height } = sliderRef.current.getBoundingClientRect();
    setSize({
      width,
      height,
    });
  };

  const handleMouseDown = React.useCallback((e) => {
    const { current: ele } = sliderRef;
    console.log("mousedown");

    if (!ele) {
      return;
    }
    ele.style.scrollSnapType = "none";
    ele.style.userSelect = "none";
    const startPos = {
      left: ele.scrollLeft,
      top: ele.scrollTop,
      x: e.clientX,
      y: e.clientY,
    };

    const handleMouseMove = (e) => {
      const dx = e.clientX - startPos.x;
      const dy = e.clientY - startPos.y;
      ele.scrollTop = startPos.top - dy;
      ele.scrollLeft = startPos.left - dx;
    };

    const handleMouseUp = () => {
      ele.style.scrollSnapType = "x var(--tw-scroll-snap-strictness)";
      ele.style.userSelect = "auto";

      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }, []);

  const handleScroll = React.useCallback((e) => {
    const { current: ele } = sliderRef;
    if (!ele) {
      return;
    }
    const offsetWidth = ele.scrollLeft - itemAttr.width;
    function getHorizontalScrollPercentage() {
      return (ele.scrollLeft / (ele.scrollWidth - ele.clientWidth)) * 100;
    }
    if (getHorizontalScrollPercentage() >= 100 - offsetWidth) {
      console.log("update data");
      ele.scrollLeft = ele.scrollLeft - offsetWidth;
      setData((pre) => {
        pre.push(pre.shift());
        return [...pre];
      });
    }
  }, []);
  useEffect(() => {
    console.log("resize");

    if (!sliderRef.current) return;
    const el = sliderRef.current;
    updateSize();
    el.addEventListener("resize", updateSize);
    return () => {
      el.removeEventListener("resize", updateSize);
    };
  }, []);

  useEffect(() => {
    console.log("setItemAttr");

    setItemAttr({
      width: size.width / props.colum - props.gap,
      height: 0,
    });
  }, [size, props.colum, props.gap]);

  return (
    <div className="relative">
      <Showcase
        style={{
          position: "relative",
          paddingTop: "172px",
          overflowY: "scroll",
          overflowX: "overlay",
          width: "100%",
          scrollBehavior: "smooth",
          scrollSnapType: "x var(--tw-scroll-snap-strictness)",
          "--tw-scroll-snap-strictness": "mandatory",
          touchAction: "pan-x",
        }}
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onScroll={handleScroll}
      >
        <SliderContext.Provider value={{ item: itemAttr }}>
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <div className="flex gap-0 flex-row flex-nowrap">
              <Each
                of={data}
                render={(item, index) => (
                  <div style={{ marginRight: `${props.gap}px` }}>
                    <SlideItem>
                      <Track
                        name={item.name}
                        thumbnail={item.thumb}
                        artist={item.poster}
                      />
                    </SlideItem>
                  </div>
                )}
              />
            </div>
          </div>
        </SliderContext.Provider>
      </Showcase>
    </div>
  );
}

function SlideItem(props) {
  const ct = useContext(SliderContext);
  return (
    <div className="snap-start">
      <div style={{ width: ct.item.width }}>{props.children}</div>
    </div>
  );
}
Slider.propTypes = {
  children: PropTypes.object,
  data: PropTypes.array,
  btn_nextSlide: PropTypes.element,
  btn_preSlide: PropTypes.element,
  colum: PropTypes.number,
  gap: PropTypes.number,
};
Slider.defaultProps = InittialState;
export default Slider;
