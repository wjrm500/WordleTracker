import DayAggPage from "./DayAggPage"
import WeekAggPage from "./WeekAggPage"
import React, { useContext, useEffect, useState } from "react"
import PageConstsContext from "../contexts/PageConstsContext";
import SpinningLoader from "./SpinningLoader";

import PageMenu from "./PageMenu";
import RecordPage from "./RecordPage";

const HomeContainer = ({loggedInUser, scores, getScores, addScore, getPlayers, dayIndex, setDayIndex}) => {
  /* Hooks */
  const {DAILY_PAGE, WEEKLY_PAGE, RECORD_PAGE} = useContext(PageConstsContext)
  const [pageType, setPageType] = useState(DAILY_PAGE)
  const [selectedRecordDate, setSelectedRecordDate] = useState(null);

  const onWeekRowClick = (index) => {
    setPageType(DAILY_PAGE)
    setDayIndex(index)
  }

  const onRecordClick = (streak) => {
    setSelectedRecordDate(streak.endDate)
    const weekIndex = scores.findIndex(week =>
      week.data.hasOwnProperty(streak.endDate)
    )
    setPageType(DAILY_PAGE)
    setDayIndex(weekIndex)
  }

  /* Get score data */
  useEffect(getScores, [])

  /* Get player data */
  useEffect(getPlayers, [])

  let page
  switch (pageType) {
    case DAILY_PAGE:
      page = <DayAggPage loggedInUser={loggedInUser} addScore={addScore} data={scores} dayIndex={dayIndex} setDayIndex={setDayIndex} selectedRecordDate={selectedRecordDate} />
      break
    case WEEKLY_PAGE:
      page = <WeekAggPage data={scores} onWeekRowClick={onWeekRowClick} />
      break
    case RECORD_PAGE:
      page = <RecordPage data={scores} onRecordClick={onRecordClick} />
      break
  }
  
  /* Render */
  return (
    <div id="homeContainer">
      <PageMenu pageType={pageType} setPageType={setPageType} />
      {
        scores.length > 0 ?
        page : (
          <div className="page">
            <SpinningLoader />
          </div>
        )
      }
    </div>
  )
}

export default HomeContainer