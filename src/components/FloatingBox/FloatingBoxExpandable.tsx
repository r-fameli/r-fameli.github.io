import './FloatingBoxExpandable.scss';
import './FloatingBox.scss'

// type Props = {
//     title: string,
//     content: React.ReactNode,
//     video: string,
//     videoId: number,
//     repoLink?: string,
// }

function FloatingBoxExpandable() {
    return <div></div>;
    // const videoStringId = "demo-video-" + videoId;
    // const [sectionBoxClass, setSectionBoxClass] = useState("FloatingBoxExpandable");
    // const [popupClass, setPopupClass] = useState<string>("FloatingBoxPopup");
    // const [isExpanded, setIsExpanded] = useState(false);
    // const [suppressExpand, setSuppressExpand] = useState(false);

    // function handleMouseEnter() {
    //     if (!isExpanded) {
    //         setSectionBoxClass("FloatingBoxExpandable FloatingBoxExpandable-hovered")
    //         setPopupClass("FloatingBoxPopup FloatingBoxPopup-hovered")
    //     }
    // }

    // function handleMouseLeave() {
    //     if (!isExpanded) {
    //         setSectionBoxClass("FloatingBoxExpandable")
    //         setPopupClass("FloatingBoxPopup")
    //     }
    // }

    // function handleClick() {
    //     const clickedClass = "FloatingBoxExpandable-clicked"
    //     if (!suppressExpand) {
    //         if (sectionBoxClass.indexOf(clickedClass) === -1) {
    //             setIsExpanded(true)
    //             // Update classes
    //             setSectionBoxClass("FloatingBoxExpandable FloatingBoxExpandable-clicked")
    //             setPopupClass("FloatingBoxPopup FloatingBoxPopup-clicked")
    //             // Play the demo video
    //             (document.querySelector('#' + videoStringId) as HTMLMediaElement).play()
    //         } else {
    //             setIsExpanded(false)
    //             // Update classes
    //             setSectionBoxClass("FloatingBoxExpandable FloatingBoxExpandable-hovered")
    //             setPopupClass("FloatingBoxPopup FloatingBoxPopup-hovered")
    //             // Pause the demo video
    //             (document.querySelector('#' + videoStringId) as HTMLMediaElement).pause()
    //         }
    //     }
    // }

    // return (
    //     <div
    //         className={sectionBoxClass}
    //         onMouseEnter={handleMouseEnter}
    //         onMouseLeave={handleMouseLeave}
    //         onClick={handleClick}
    //     >
    //         <div className="FloatingBoxExpandable-text">
    //             <span className="FloatingBox-titling">
    //                 <h2>{title}</h2>
                    
    //             </span>

    //             {content}
    //             <div 
    //             className="FloatingBoxExpandable-links"
    //             onMouseEnter={() => setSuppressExpand(true)}
    //             onMouseLeave={() => setSuppressExpand(false)}
    //             >
    //                 {repoLink ? 
    //                 <a href={repoLink} target="_blank" rel="noreferrer">
    //                     <button className="FloatingBoxExpandable-link-btn">repo</button>
    //                 </a>
    //                 :
    //                 <div></div>
    //                 }
                    
    //             </div>
    //         </div>
    //         <div className={popupClass}>
    //             <div className="FloatingBoxExpandable-tab">
    //                 {isExpanded ? 'Click to hide demo' : "Click to show demo"}
    //             </div>
    //             <div className="FloatingBoxExpandable-frame">
    //                 <video
    //                     className="FloatingBoxExpandable-video"
    //                     id={videoStringId}
    //                     muted
    //                     loop
    //                 >
    //                     <source src={video} />
    //                     Sorry, your browser doesn't support embedded videos.
    //                 </video>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default FloatingBoxExpandable;