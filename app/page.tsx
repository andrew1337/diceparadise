"use client";
import React from "react";
import { Stream } from "@/components/stream";
import Results from "@/components/results";

const MainPage = () => {
  return (
    <div className="main">
      <Results />
      <div className="right">
        <div className="bank">
          <div className="gold">GRAND TOURNAMENT</div>
          <div className="sum">
            <span className="gold">Prize pool</span> 300 000{" "}
            <span className="gold">Gel</span>
          </div>
        </div>
        <Stream />
      </div>
    </div>
  );
};

export default MainPage;
