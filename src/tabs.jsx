import { useState, useRef } from 'react'

export function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [prevTab, setPrevTab] = useState(0);
  const lineRef = useRef(null);
  
  const handleTabClick = (event, index) => {
    if (activeTab === index) return;

    setPrevTab(activeTab);
    setActiveTab(index);
    lineRef.current.style.width = event.currentTarget.offsetWidth + "px";
    lineRef.current.style.left = event.currentTarget.offsetLeft + "px";
  }

  const tabClass = (index) => {
    let tabClassName = "tab";

    if (index === activeTab) {
      tabClassName += prevTab < activeTab ? " active slide-in-right" : " active slide-in-left";
    }
    else if (index > activeTab) {
      tabClassName += " slide-out-right" 
    } else if (index < activeTab) {
      tabClassName += " slide-out-left"
    }

    return tabClassName;
  }
  
  return <div className="left-section">
  <div id="tab" className="tab-box">
  <button className="tab-btn" onClick={(e) => handleTabClick(e, 0)}>BACKGROUND</button>
  <button className="tab-btn" onClick={(e) => handleTabClick(e, 1)}>CLASSES</button>
  <button className="tab-btn" onClick={(e) => handleTabClick(e, 2)}>ABILITIES</button>
  <button className="tab-btn" onClick={(e) => handleTabClick(e, 3)}>SPELLS</button>
  <button className="tab-btn" onClick={(e) => handleTabClick(e, 4)}>EQUIPMENT</button>
  <button className="tab-btn" onClick={(e) => handleTabClick(e, 5)}>ILLITHID</button>
  <div className="line" ref={lineRef}></div>
  </div>
  <div id="tabs" className="tab-content movintabs">
  <div className={tabClass(0)}>
      Eric
  </div>
  <div className={tabClass(1)} >
      Is
  </div>
  <div className={tabClass(2)}>
      A
  </div>
  <div className={tabClass(3)} >
      Fucking
  </div>
  <div className={tabClass(4)} >
      Jew
  </div>
  <div className={tabClass(5)}>
      gasafsadsadf
  </div>
  </div>
</div>
}